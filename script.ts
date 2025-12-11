import "dotenv/config";
import { prisma } from "./lib/prisma";

async function main() {
  // Example: Fetch all records from a table
  const allCategory = await prisma.category.findMany();
  console.log("All category:", JSON.stringify(allCategory, null, 2));
  console.log(process.env.DATABASE_URL);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
