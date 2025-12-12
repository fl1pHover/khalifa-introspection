import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import Form from "next/form";
import { redirect } from "next/navigation";

export default function Page() {
  async function createCategory(formData: FormData) {
    "use server";

    const title = formData.get("category-title") as string;
    await prisma.category.create({
      data: {
        title,
      },
    });

    revalidatePath("/category");
    redirect("/category");
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Form action={createCategory} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-lg mb-2">
            Title
          </label>
          <input
            type="text"
            id="category-title"
            name="category-title"
            placeholder="Enter your post title"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <button type="submit" className="w-full">
          Create Category
        </button>
      </Form>
    </div>
  );
}
