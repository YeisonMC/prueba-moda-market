"use client";
import Link from "next/link";
import "@/assets/styles/navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="absolute top-0 left-0 w-full z-10 bg-white shadow-md">
      <div className="flex items-center justify-between mx-10 py-4 max-md:mx-4">
        <Link href="/">
          <h1 className="text-black text-xl">Moda Market</h1>
        </Link>

        <input type="checkbox" id="check" className="hidden" />
        <label htmlFor="check" className="icons">
          <div
            className={`menu_btn flex flex-col cursor-pointer gap-2 ${
              menuOpen ? "open" : ""
            }`}
            onClick={toggleMenu}
          >
            <span className="line top_line"></span>
            <span className="line middle_line"></span>
            <span className="line bottom_line"></span>
          </div>
        </label>

        <ul className="flex gap-10 max-md:absolute max-md:top-full max-md:left-0 max-md:w-full max-md:bg-white max-md:block">
          <li className="max-md:mx-4 max-md:my-2">
            <Link href="/" className="text-black">
              Inicio
            </Link>
          </li>
          <li className="max-md:mx-4 max-md:my-2">
            <Link href="/pages/home" className="text-black">
              Tienda
            </Link>
          </li>
          <li className="max-md:mx-4 max-md:my-2">
            <Link href="#" className="text-black">
              Ofertas
            </Link>
          </li>
          <li className="max-md:mx-4 max-md:my-2">
            <Link href="#" className="text-black">
              Novedades
            </Link>
          </li>
          <li className="max-md:mx-4 max-md:my-2">
            <Link href="#" className="text-black">
              Contacto
            </Link>
          </li>
          <li className="max-md:mx-4 max-md:my-2">
            <Link href="/api/product" className="text-black">
              API product
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
