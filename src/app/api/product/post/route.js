import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function handler(req, res) {
  if (req.method == "POST") {
    const {
      name,
      descripcion,
      marca,
      precio,
      promociones,
      talla,
      color,
      imagen,
      categoria,
    } = req.body;
    const newProduct = await prisma.Product.create({
      data: {
        name,
        descripcion,
        marca,
        precio,
        promociones,
        talla,
        color,
        imagen,
        categoria,
      },
    });
  }
}
