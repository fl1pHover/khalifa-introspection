import ProductGrid from "@/components/product-grid";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const categoryId = (await searchParams).category ?? null;
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      title: true,
      Product: true,
    },
    // where: categoryId ? { id: Number(categoryId) } : {},
  });
  const products = categoryId
    ? categories.find((c) => c.id === Number(categoryId))?.Product ?? []
    : categories.flatMap((c) => c.Product);

  console.log(products);
  return (
    <Suspense fallback={<div>Loading</div>}>
      <h1 className="font-bold">Categories</h1>

      <div className="flex gap-2 flex-wrap">
        <Link href={`/product`} className="flex gap-10 bg-slate-200 p-2">
          <span>All spirit</span>
        </Link>
        {categories.map((c) => (
          <Link
            key={c.id}
            href={`/product?category=${c.id}`}
            className="flex gap-2 bg-slate-200 p-2"
          >
            <span className="text-red-500">{c.id}</span>
            <span>{c.title}</span>
          </Link>
        ))}
      </div>

      <br />

      <h1>Products</h1>

      <Suspense
        fallback={Array.from({ length: 4 }).map((_, i) => (
          <div
            className="animate-pulse rounded-md bg-gray-400 aspect-3/4 w-full"
            key={i}
          ></div>
        ))}
      >
        {/*PRoduct Grid*/}
        <ProductGrid products={products} />
      </Suspense>

      {/* <Suspense fallback={<div>Loading products...</div>}>
        <ProductGrid products={products} />
      </Suspense> */}
      <Button asChild>
        <Link href={"/product/new"}>Product add</Link>
      </Button>
    </Suspense>
  );
}

// import { Button } from "@/components/ui/button";
// import { prisma } from "@/lib/prisma";
// import Link from "next/link";

// export default async function Page({
//   searchParams,
// }: {
//   searchParams: { category?: string };
// }) {
//   const categoryId = searchParams.category
//     ? Number(searchParams.category)
//     : null;

//   console.log(searchParams.category);

//   // 1) Categories авах
//   const categories = await prisma.category.findMany({
//     select: {
//       id: true,
//       title: true,
//     },
//   });

//   // 2) Products авах (category сонгогдсон бол filter-лэнэ)
//   const products = await prisma.product.findMany({
//     where: categoryId ? { categoryId } : {},
//     select: {
//       id: true,
//       title: true,
//     },
//   });

//   return (
//     <div>
//       <h1 className="font-bold text-xl">Categories</h1>

//       <div className="space-y-2">
//         {categories.map((c) => (
//           <Link
//             key={c.id}
//             href={`/?category=${c.id}`}
//             className={`flex gap-4 p-2 rounded
//               ${categoryId === c.id ? "bg-blue-200" : "bg-gray-100"}`}
//           >
//             <span>id: {c.id}</span>
//             <span>title: {c.title}</span>
//           </Link>
//         ))}
//       </div>

//       <br />

//       <h1 className="font-bold text-xl">Products</h1>

//       {products.length === 0 && (
//         <p className="text-gray-500 text-sm">No products in this category</p>
//       )}

//       <div className="space-y-2">
//         {products.map((p) => (
//           <div key={p.id} className="flex gap-10 bg-gray-100 p-2 rounded">
//             <span>id: {p.id}</span> <span>title: {p.title}</span>
//           </div>
//         ))}
//       </div>

//       <br />

//       <Button asChild>
//         <Link href="/product/new">Product add</Link>
//       </Button>
//     </div>
//   );
// }
