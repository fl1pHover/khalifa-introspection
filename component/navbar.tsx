"use client";
import { signOut, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  return (
    <div className="flex gap-4 p-4 px-20 border-b justify-between w-full">
      <div className="flex  items-center gap-10">
        <h1>item</h1>
        <h1>item</h1>
        <h1>item</h1>
        <h1>item</h1>
      </div>
      <Sign />
    </div>
  );
}

function Sign() {
  const { data: session } = useSession();
  const router = useRouter();

  console.log(session);
  if (!session?.user)
    return (
      <button
        onClick={() => router.push("/sign-up")}
        className="bg-white text-black font-medium px-6 py-2 rounded-md hover:bg-gray-200"
      >
        Нэвтрэх
      </button>
    );
  else if (session.user)
    return (
      <button
        onClick={() => signOut()}
        className="bg-white text-red-500 font-medium px-6 py-2 rounded-md hover:bg-gray-200"
      >
        Гарах
      </button>
    );
}
