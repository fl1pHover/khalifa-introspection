"use client";

import { useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/sign-in");
    }
  }, [isPending, session, router]);

  if (isPending)
    return <p className="text-center mt-8 text-white">Loading...</p>;
  if (!session?.user)
    return <p className="text-center mt-8 text-white">Redirecting...</p>;

  const { user } = session;

  return (
    <main className="max-w-md h-screen flex items-center justify-center flex-col mx-auto p-6 space-y-4 text-white">
      <h1 className="text-2xl font-bold">{user.name || "User"}</h1>
      <p>{user.email}</p>

      {/* {isPending ? (
        <p className="text-center">Loading...</p>
      ) : !session?.user ? (
        <p className="text-center">Redirecting...</p>
      ) : (
        <>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-zinc-300">{user.email}</p>
        </>
      )} */}
    </main>
  );
}
