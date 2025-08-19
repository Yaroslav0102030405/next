import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Сторінка Home</h1>

      <nav>
        <ul>
          <li>
            <Link href="/">Головна сторінка</Link>
          </li>
          <li>
            <Link href="/about">Про нас</Link>
          </li>
          <li>
            <Link href="/blog">Сторінка блог</Link>
          </li>
          <li>
            <Link href="/posts">Сторінка всіх постів</Link>
          </li>
          <li>
            <Link href="/login">Сторінка Login</Link>
          </li>
          <li>
            <Link href="/password">Сторінка Password</Link>
          </li>
          <li>
            <Link href="/register">Сторінка Register</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
