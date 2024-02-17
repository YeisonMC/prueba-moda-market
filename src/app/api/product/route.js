import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const Product = await prisma.Product.findMany();
  // const products = await prisma.$queryRaw`SELECT * FROM Product`;
  return NextResponse.json({ Product });
}
