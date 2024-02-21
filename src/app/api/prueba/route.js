import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const product = await prisma.Product.findUnique({
    where: {
      id: 3,
    },
  });
  return NextResponse.json({ data: product });
};

// export const GET = async (req, res) => {
//   const { id } = req.params;
//   const product = await prisma.Product.findUnique({
//     where: {
//       id: 5,
//     },
//   });
//   return NextResponse.json({ data: product });
// };
