import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const Product = await prisma.Product.findMany();
  return NextResponse.json({ Product });
}
