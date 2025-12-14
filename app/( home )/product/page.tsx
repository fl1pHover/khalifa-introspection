import FilterCategory from "@/components/filter-category";
import ProductGrid from "@/components/product-grid";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ active_category?: number | undefined }>;
}) {
  // ATTENTION: Example: /products?active_category=1         Promise<{ active_category: '1' }>
  // ATTENTIONL Uurtuu oilgomjtoi bolgohgeed active_category gej nerlesen

  const categoryId = Number((await searchParams).active_category) ?? null;

  console.log((await searchParams).active_category);

  const categories = await prisma.category.findMany({
    select: {
      id: true,
      title: true,
    },
  });

  const products = await prisma.product.findMany({
    select: {
      id: true,
      title: true,
      Category: {
        select: {
          title: true,
        },
      },

      quantity: true,
      price: true,
    },
    where: categoryId ? { categoryId: categoryId } : {},
  });

  const formattedProducts = products.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    quantity: product.quantity,
    categoryTitle: product.Category?.title ?? null,
  }));

  return (
    <Suspense fallback={<div>Loading</div>}>
      <h1 className="font-bold">Categories</h1>

      <FilterCategory categories={categories} />

      <div className="w-full h-[1px] bg-gray-300 my-10"></div>

      <h1>Products</h1>

      <Suspense
        fallback={Array.from({ length: 4 }).map((_, i) => (
          <div
            className="animate-pulse rounded-md bg-gray-400 aspect-3/4 w-full"
            key={i}
          ></div>
        ))}
      >
        <ProductGrid products={formattedProducts} />
      </Suspense>

      <Button asChild>
        <Link href={"/product/new"}>Product add</Link>
      </Button>
    </Suspense>
  );
}
