import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function EditUserForm({ user }: { user }) {
  async function updateUser(formData: FormData) {
    "use server";

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;

    await prisma.user.update({
      where: { id: user.id },
      data: {
        name,
        email,
        phone,
        address,
      },
    });

    revalidatePath("/profile");
    redirect("/profile");
  }
  console.log(user);

  return (
    <form action={updateUser} className="max-w-xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Edit User</h1>

      <div>
        <label htmlFor="name" className="block mb-1 font-semibold">
          Name
        </label>
        <input
          type="text"
          name="name"
          defaultValue={user.name ?? ""}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-1 font-semibold">
          Email
        </label>
        <input
          type="email"
          name="email"
          defaultValue={user.email}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block mb-1 font-semibold">
          Phone
        </label>
        <input
          type="text"
          name="phone"
          defaultValue={user.phone ?? ""}
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block mb-1 font-semibold">
          Address
        </label>
        <input
          type="text"
          name="address"
          defaultValue={user.address ?? ""}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <button type="submit">Save Changes</button>
    </form>
  );
}
