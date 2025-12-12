import { Prisma, PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const productData: Prisma.ProductCreateInput[] = [
  {
    title: "Signature Candle",
    // ATTENTION: { connect }

    description: "",
    quantity: 2,
    price: 55000,
    // images: ["/wine/wine-2.png"],
    url: "/test",
  },
  {
    title: "Glen Talloch Blended Whisky Rare & Old",
    // Category: { connect: { id: 5 } },
    description: "",
    quantity: 0,
    price: 95000,
    // images: ["/wine/wine-2.png"],
    url: "/test",
  },
  {
    title: "Sierra Silver",
    // Category: { connect: { id: 7 } },
    description: "",
    quantity: 0,
    price: 82000,
    // images: ["/wine/wine-2.png"],
    url: "/test",
  },
  {
    title: "Grand Marnier Gordon Rouge",
    // Category: { connect: { id: 7 } },
    description: "",
    quantity: 2,
    price: 138000,
    // images: ["/wine/wine-2.png"],
    url: "/test",
  },
];

export async function main() {
  for (const p of productData) {
    await prisma.product.create({ data: p });
  }
}

main();
