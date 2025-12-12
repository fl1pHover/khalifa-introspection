import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import Form from "next/form";
import { redirect } from "next/navigation";

export default function Page() {
  async function createProduct(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const quantity = formData.get("quantity");
    const price = formData.get("price") as string;

    await prisma.product.create({
      data: {
        title,
        description,
        quantity: Number(quantity),
        price: Number(price),
      },
    });

    revalidatePath("/category");
    redirect("/category");
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Form action={createProduct} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-lg mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter your post title"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        {/* description */}
        <div>
          <label htmlFor="title" className="block text-lg mb-2">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Enter your post title"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="title" className="block text-lg mb-2">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="Enter your post title"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="title" className="block text-lg mb-2">
            Category
          </label>
          <input
            type="text"
            id="url"
            name="url"
            placeholder="Enter your post title"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <button type="submit" className="w-full">
          Create Product
        </button>
      </Form>
    </div>
  );
}
