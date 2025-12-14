import EditUserForm from "./user-edit.form";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function UserInformation() {
  const headersList = await headers();

  const session = await auth.api.getSession({
    headers: headersList,
  });

  if (!session) redirect("/sign-in");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      accounts: true,
    },
  });

  const account = await prisma.account.findMany({
    where: { userId: session.user.id },
  });

  const products = await prisma.product.findMany({});

  // console.log(account[0].password);

  console.log(products);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* Todo */}
      <div className="underline">{account[0].password}</div>
      <EditUserForm user={user} />
    </Suspense>
  );
}
