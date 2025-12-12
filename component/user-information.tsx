import EditUserForm from "@/component/user-edit.form";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function UserInformation() {
  const headersList = await headers();

  const session = await auth.api.getSession({
    headers: headersList,
  });

  if (!session) redirect("/sign-in");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  console.log(user);
  return (
    <div>
      <EditUserForm user={user} />
    </div>
  );
}
