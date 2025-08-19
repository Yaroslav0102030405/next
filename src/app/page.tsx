"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";

export default function Home() {
  const pathname = usePathname();
  return (
    <>
      <h1>Сторінка Home</h1>

      <nav>
        <ul>
          <li>
            <Link className={pathname === "/" ? "text-red-600" : ""} href="/">
              Головна сторінка
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/about" ? "text-red-600" : ""}
              href="/about"
            >
              Про нас
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/blog" ? "text-red-600" : ""}
              href="/blog"
            >
              Сторінка блог
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/posts" ? "text-red-600" : ""}
              href="/posts"
            >
              Сторінка всіх постів
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/login" ? "text-red-600" : ""}
              href="/login"
            >
              Сторінка Login
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/password" ? "text-red-600" : ""}
              href="/password"
            >
              Сторінка Password
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/register" ? "text-red-600" : ""}
              href="/register"
            >
              Сторінка Register
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
