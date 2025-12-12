"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  return (
    <div className="flex gap-4 p-4 px-20 border-b justify-between w-full">
      <div className="flex  items-center gap-10">
        <Link href={"/"}>Home</Link>
        <Link href={"/category"}>Category</Link>
      </div>
      <Sign />
    </div>
  );
}

function Sign() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session?.user)
    return (
      <button
        onClick={() => router.push("/sign-in")}
        className="bg-white text-black font-medium px-6 py-2 rounded-md hover:bg-gray-200"
      >
        Нэвтрэх
      </button>
    );

  return (
    <div className="flex items-center gap-2">
      <Link href={"/profile"}>Profile</Link>
      {/* <Link href={`profile/edit/${session.user.id}`}>profile</Link> */}

      <button
        onClick={() => signOut()}
        className="bg-white text-red-500 font-medium px-6 py-2 rounded-md hover:bg-gray-200"
      >
        Гарах
      </button>
    </div>
  );
}
