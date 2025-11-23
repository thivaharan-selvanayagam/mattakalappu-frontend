// pages/index.js (Updated)

import Head from 'next/head';
import Link from 'next/link';
// Make sure this path is correct:
import { fetchPosts } from '../lib/api'; 


export async function getStaticProps() {
  try {
    const posts = await fetchPosts();

    // 🎯 FIX: Check if 'posts' is an array. If not, default to an empty array ([]).
    const safePosts = Array.isArray(posts) ? posts : []; 

    return { 
      props: { posts: safePosts }, 
      revalidate: 60 
    };
  } catch (error) {
    // 💡 Add error logging for better debugging in the build logs
    console.error("Error in getStaticProps for home page:", error);

    // If fetchPosts fails for any reason (like an API error), 
    // return an empty array to prevent the build from crashing.
    return { 
      props: { posts: [] }, 
      revalidate: 60 
    };
  }
}


export default function Home({ posts }) {
  // 🎯 Secondary safety check: ensure posts is an array before mapping
  const postsToRender = Array.isArray(posts) ? posts : [];
  
  return (
    <div>
      <Head>
        <title>Mattakalappu</title>
      </Head>
      <h1>Mattakalappu Blog</h1>
      <ul>
        {/* Use the safely checked array for .map() */}
        {postsToRender.map(p => (
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
