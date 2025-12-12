"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  return (
    <div className="flex gap-4 p-4 px-20 border-b justify-between w-full">
      <div className="flex  items-center gap-10">
        <Link href={"/"}>Home</Link>
        <Link href={"/category"}>Category</Link>
        <Link href={"/product"}>Product</Link>
      </div>
      <Sign />
    </div>
  );
}

function Sign() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session?.user)
    return <Button onClick={() => router.push("/sign-in")}>Нэвтрэх</Button>;

  return (
    <div className="flex items-center gap-2">
      <Button variant={"outline"} asChild>
        <Link href={"/profile"}>Profile</Link>
      </Button>
      <Button
        variant={"destructive"}
        onClick={() => {
          signOut();
          router.push("/");
        }}
      >
        Гарах
      </Button>
    </div>
  );
}
