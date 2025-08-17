import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <h1>Сторінка 404</h1>
      <Link href="/">Повернутися на головну</Link>
    </>
  );
};

export default NotFound;
