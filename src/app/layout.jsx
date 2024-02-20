import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Moda Market",
  description: "Mi primera pagina completa",
  keywords: "Tienda de prueba NETXJS",
};

// TODO: SE INSTALO ESTAS 2 PARTES DE PRIMA: npm i prisma -D  Y  npm i @prisma/client
// TODO: COMO SEGUNDO PASO INICIALIZAMOS PRIMA npx prisma init --datasource-provider postgresql
// TODO: npx prisma migrate init --name init
//TODO: PARA INICIARLIZAR LAS TABLAS npx prisma db push

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
