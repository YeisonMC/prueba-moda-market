import Link from "next/link";
export default function NotFound() {
  return (
    <>
      <section>
        <h1>404</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores unde
          voluptate facere doloremque, excepturi fuga minima quis modi molestiae
          nobis, est a iusto ex dolore eos harum voluptatibus. Cupiditate, at!
        </p>
        <Link href="/">Regresar</Link>
      </section>
    </>
  );
}
