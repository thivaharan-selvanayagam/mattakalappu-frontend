import { fetchPostBySlug } from "../../lib/api";

export async function getServerSideProps({ params }) {
  try {
    const post = await fetchPostBySlug(params.slug);

    if (!post) {
      return { notFound: true };
    }

    return {
      props: { post },
    };
  } catch (error) {
    console.error(error.message);
    return { notFound: true };
  }
}

export default function SinglePost({ post }) {
  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "40px 20px" }}>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}
