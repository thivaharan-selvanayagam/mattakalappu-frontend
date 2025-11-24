import Head from 'next/head';
import { fetchPostById, fetchPosts } from '../../lib/api';


// export async function getStaticPaths() {
//     try {
//         const posts = await fetchPosts(); // This call is likely failing intermittently
//         const paths = posts.map(post => ({
//             params: { id: post.id.toString() },
//         }));

//         return {
//             paths,
//             fallback: 'blocking', // Prevents 404s and handles failed paths on demand
//         };
//     } catch (e) {
//         console.error("Error fetching paths, proceeding with empty paths:", e);
//         // If path fetching fails, we return an empty array and rely on fallback
//         return {
//             paths: [],
//             fallback: 'blocking', 
//         };
//     }
// }


export async function getServerSideProps({ params }) {

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