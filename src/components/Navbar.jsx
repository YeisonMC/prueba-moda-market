import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black flex justify-between items-center px-8 py-4">
      <Link href="/">
        <h1 className="text-white text-2xl">NextJS</h1>
      </Link>

      <ul className="flex gap-8">
        <li>
          <Link href="/" className="text-white">
            Home
          </Link>
        </li>
        <li>
          <Link href="/pages/home" className="text-white">
            Tienda
          </Link>
        </li>
        <li>
          <Link href="/api/product" className="text-white">
            API product
          </Link>
        </li>
      </ul>
    </nav>
  );
}
