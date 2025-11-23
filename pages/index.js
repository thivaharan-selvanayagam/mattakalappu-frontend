import Head from 'next/head';
import Link from 'next/link';
import { fetchPosts } from '../lib/api';


export async function getStaticProps() {
const posts = await fetchPosts();
return { props: { posts }, revalidate: 60 };
}


export default function Home({ posts }) {
return (
<div>
<Head>
<title>Mattakalappu</title>
</Head>
<h1>Mattakalappu Blog</h1>
<ul>
  {posts.map(p => (
    <li key={p.id}>
      <Link href={`/posts/${p.id}`}>
        <span dangerouslySetInnerHTML={{ __html: p.title.rendered }} />
      </Link>
    </li>
  ))}
</ul>

</div>
);
}