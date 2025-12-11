import { prisma } from "@/lib/prisma";

export default async function Home() {
  const category = null;

  const categories = await prisma.category.findMany({
    select: {
      id: true,
      Product: true,
      title: true,
    },
    where: category ? { id: category } : {},
  });

  // const products = await prisma.product.findMany({
  //   include: {
  //     Category: true,
  //   },
  // });

  const products = categories.flatMap((category) => category.Product);

  console.log(products);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
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
      </main>
    </div>
  );
}
