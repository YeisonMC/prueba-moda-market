import Link from "next/link";
export default function NotFound() {
  return (
    <>
      <section className="mt-10">
        <h1>404</h1>
        <p className="mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores unde
          voluptate facere doloremque, excepturi fuga minima quis modi molestiae
          nobis, est a iusto ex dolore eos harum voluptatibus. Cupiditate, at!
        </p>
        <Link href="/" className="bg-red-600 text-white px-6 py-2 rounded-md ">
          Regresar
        </Link>
      </section>
    </>
  );
}
