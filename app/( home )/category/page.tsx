import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
  const categories = await prisma.category.findMany({});

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

      <div className="flex gap-2">
        <Button asChild>
          <Link href={"/category/new"}>category add</Link>
        </Button>
      </div>
    </Suspense>
  );
}
