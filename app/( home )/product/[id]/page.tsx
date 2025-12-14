import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
  });

  if (!product) {
    notFound();
  }

  return (
    <div>
      <h1>Product name</h1>
      <h1>{product.title}</h1>
      {JSON.stringify(product)}
    </div>
  );
}
