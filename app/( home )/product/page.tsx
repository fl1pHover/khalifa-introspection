import { prisma } from "@/lib/prisma";
import { Suspense } from "react";

export default async function Page() {
  const category = null;

  const products = await prisma.product.findMany({});

  console.log(products);

  return (
    <Suspense fallback={<div>Loading</div>}>
      <h1>Products</h1>

      <div>
        {products.map((c) => (
          <div key={c.id} className="flex gap-10">
            <span>id:{c.id}</span> <span>title: {c.title}</span>
          </div>
        ))}
      </div>
      <br />
    </Suspense>
  );
}
