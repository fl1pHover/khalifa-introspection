import EditUserForm from "@/component/user-edit.form";
import { prisma } from "@/lib/prisma";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await prisma.user.findUnique({
    where: { id: id },
  });

  return (
    <div>
      <EditUserForm user={user} />
    </div>
  );
}
