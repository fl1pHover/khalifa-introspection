import Link from "next/link";

export default async function FilterCategory({
  categories,
}: {
  categories: { id: number; title: string }[];
}) {
  return (
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
  );
}
