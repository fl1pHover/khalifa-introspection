// import { prisma } from "@/lib/prisma";

import { prisma } from "@/lib/prisma";

// export default async function UserInformation({ id }: { id: string }) {
//   const user = await prisma.user.findUnique({
//     where: { id: id },
//   });
//   return (
//     <div className="flex flex-col gap-2">
//       <h1>{user?.name}</h1>
//       <h1>{user?.email}</h1>
//       <h1>{user?.phone}</h1>asd
//       <h1>{user?.address}</h1>
//     </div>
//   );
// }

export default async function UserInformation({ id }: { id }) {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  return (
    <main className="max-w-md h-screen flex items-center justify-center flex-col mx-auto p-6 space-y-4 text-white">
      <h1 className="text-2xl font-bold">{user?.name || "Use?r"}</h1>
      <p>{user?.email}</p>
      {/* <Link href={`/profile/edit/${user.id}`}>Edit</Link> */}
      {/* <button
        onClick={() => router.push(`/profile/edit/${user.id}`)}
        className="bg-white text-black p-3"
      >
        Edit
      </button> */}
    </main>
  );
}
