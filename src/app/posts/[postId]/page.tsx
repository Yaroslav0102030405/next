import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Виправлено: params тепер звичайний об'єкт, а не Promise
type Props = {
  params: Promise<{ postId: string }>;
};

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    if (res.status === 404) {
      notFound();
    }
    throw new Error(`Помилка відповіді сервера: ${res.status}`);
  }

  return await res.json();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { postId } = await params;
  const post = await getPost(postId);

  return {
    title: `Сторінка ${post.title} | My Blog`,
    description: post.body.slice(0, 160),
  };
}

const PostPage = async ({ params }: Props) => {
  const { postId } = await params;
  const post = await getPost(postId);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

export default PostPage;
