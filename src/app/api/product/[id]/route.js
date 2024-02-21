// import prisma from "@/libs/prisma";
// import { NextResponse } from "next/server";

// export const ProductID = async (req, res) => {
//   const { id } = req.params;

//   const product = await prisma.Product.findUnique({
//     where: {
//       id: parseInt(id),
//     },
//   });
//   return NextResponse.json({ data: product });
//   // console.log(id);
// };

// export const GET = async (request, { params }) => {
//   const id = params.id;
//   const result = await fetch(`/api/product/${id}`, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const product = await result.json();
//   return NextResponse.json({ data: product });
// };

// import prisma from "@/libs/prisma";
// import { NextResponse } from "next/server";

// export const GET = async (req, res) => {
//   const product = await prisma.Product.findUnique({
//     where: {
//       id: 7,
//     },
//   });
//   return NextResponse.json({ data: product });
// };

// export const GET = async (req, res) => {
//   const { id } = req.params.id;
//   const product = await prisma.Product.findUnique(id);
//   return NextResponse.json({ data: product });
// };

// "use client";

import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";
// import { useRouter } from "next/router";
import { useNavigation } from "next/navigation";

// import { useSearchParams } from "next/navigation";

export const GET = async (req, res) => {
  // const result = req.query.id;
  const navigation = useNavigation();
  const { id } = navigation.query;
  // const searchParams = useSearchParams();
  // const id = searchParams.get("id");

  const product = await prisma.Product.findUnique({
    // id,
    where: {
      id: result,
    },
  });

  console.log(id);
  // console.log(req.nextUrl);
  // console.log(req.params);
  return NextResponse.json({ data: product });
};
