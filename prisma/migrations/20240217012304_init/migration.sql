-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "promociones" DOUBLE PRECISION NOT NULL,
    "talla" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
