import { prisma } from "@/lib/prisma";
import { Suspense } from "react";

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

  const sortedProducts = [...products].sort((a, b) => a.id - b.id);

  console.log(products);

  return (
    <Suspense fallback={<div>Loading</div>}>
      <h1>Categories</h1>

      <div>
        {categories.map((c) => (
          <div key={c.id} className="flex gap-10">
            <span>id:{c.id}</span> <span>title: {c.title}</span>
          </div>
        ))}
      </div>
      <br />
      {sortedProducts.map((c) => (
        <div key={c.id} className="flex gap-10">
          <span>id:{c.id}</span> <span>title: {c.title}</span>
          <span>Category: {c.categoryId}</span>
        </div>
      ))}
    </Suspense>
  );
}
