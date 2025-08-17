interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostPage = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;

  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post: Post = await postResponse.json();

  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
};

export default PostPage;
