"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    if (!session?.user) {
      router.push("/sign-in");
    }
  }, [session, router]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);
    const formData = new FormData(e.currentTarget);

    const res = await signIn.email({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    if (res.error) {
      setError(res.error.message || "Something went wrong.");
    } else {
      router.push("/profile");
    }
  }

  return (
    <main className="max-w-md h-screen flex items-center justify-center flex-col mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Нэвтрэх хэсэг</h1>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full rounded-md border border-neutral-700 px-3 py-2"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="w-full rounded-md border border-neutral-700 px-3 py-2"
        />
        <Button type="submit" disabled={pending}>
          Нэвтрэх
        </Button>
      </form>
      <Link href={"/sign-up"} className="text-right mr-auto">
        Бүртгэл үүсгэх?
      </Link>
    </main>
  );
}
