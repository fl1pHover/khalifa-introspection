export default async function ProductGrid({
  products,
}: {
  products: Array<{ id: number; title: string; categoryId: number | null }>;
}) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.length !== 0 ? (
        products.map((p) => {
          return (
            <div key={p.id} className="flex gap-10 p-4 bg-slate-200">
              <span>title: {p.title}</span>
              <span className="text-red-500 font-bold">{p.categoryId}</span>
            </div>
          );
        })
      ) : (
        <div className="h-40 text-red-500">No products found.</div>
      )}
    </div>
  );
}
