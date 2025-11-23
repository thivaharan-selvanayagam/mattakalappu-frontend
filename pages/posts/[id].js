import Head from 'next/head';
import { fetchPostById, fetchPosts } from '../../lib/api';


export async function getStaticPaths() {
  const posts = await fetchPosts();

  if (!Array.isArray(posts)) {
    console.error("fetchPosts() did NOT return an array:", posts);
    return { paths: [], fallback: 'blocking' };
  }

  const paths = posts.map(p => ({
    params: { id: String(p.id) }
  }));

  return { paths, fallback: 'blocking' };
}


export async function getStaticProps({ params }) {
const post = await fetchPostById(params.id);
return { props: { post }, revalidate: 60 };
}


export default function Post({ post }) {
return (
<div>
<Head>
<title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
</Head>
<article>
<h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
<div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
</article>
</div>
);
}