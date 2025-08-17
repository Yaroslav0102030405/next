import Link from "next/link";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = async () => {
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts`
  );
  const posts: Post[] = await postResponse.json();

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {" "}
              <h2>{post.title}</h2>
            </Link>

            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
