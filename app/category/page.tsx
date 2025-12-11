import { prisma } from "@/lib/prisma";
import React from "react";

export default async function Page() {
  const category = null;

  const categories = await prisma.category.findMany({
    select: {
      id: true,
      Product: true,
      title: true,
    },
    where: category ? { id: category } : {},
  });

  const products = categories.flatMap((category) => category.Product);

  console.log(products);

  return (
    <div>
      <h1>Categories</h1>

      {categories.map((c) => (
        <div key={c.id} className="flex gap-10">
          <span>id:{c.id}</span> <span>title: {c.title}</span>
        </div>
      ))}
      <br />
      {products.map((c) => (
        <div key={c.id} className="flex gap-10">
          <span>id:{c.id}</span> <span>title: {c.title}</span>
          <span>Category: {c.categoryId}</span>
        </div>
      ))}
    </div>
  );
}
