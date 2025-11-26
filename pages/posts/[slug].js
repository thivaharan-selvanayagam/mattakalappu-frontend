// pages/posts/[slug].js

import Head from 'next/head';
import Navbar from '../../components/Navbar'; // Assuming your Navbar is here
// NOTE: Assuming you placed fetchPostSlugs and the UPDATED fetchPostBySlug
// in your lib/api.js as per the previous correction.
import { fetchPostSlugs, fetchPostBySlug } from '../../lib/api'; 
import { stripHtml } from '../../pages/stories'; // Assuming you can reuse this helper


// ================================
// DATA FETCHING (getStaticPaths and getStaticProps)
// (Keep this section exactly as we discussed for fetching data)
// ================================
export async function getStaticPaths() {
    const slugs = await fetchPostSlugs(); 
    const paths = slugs.map((slug) => ({
        params: { slug },
    }));
    return { 
        paths, 
        fallback: 'blocking'
    };
}

export async function getStaticProps({ params }) {
    const post = await fetchPostBySlug(params.slug);

    if (!post) {
        return {
            notFound: true,
            revalidate: 60,
        };
    }

    return {
        props: { post },
        revalidate: 60,
    };
}


// ================================
// POST PAGE COMPONENT
// ================================
export default function Post({ post }) {
    // Helper to get the featured image URL from the post object
    const getFeaturedImageUrl = (p) => {
        try {
            // Accesses the embedded media, which requires the _embed query parameter
            const media = p._embedded['wp:featuredmedia'][0];
            // Tries to get the full resolution URL
            return media.source_url;
        } catch (e) {
            return '/placeholder-hero.jpg'; // Fallback if no image is present
        }
    };
    
    // Fallback for loading state (though 'blocking' should handle this quickly)
    if (!post) return <div className="loading">Loading Post...</div>; 

    const imageUrl = getFeaturedImageUrl(post);
    
    return (
        <div>
            <Head>
                <title>{stripHtml(post.title.rendered)} | Batticaloa Heritage</title>
                <meta name="description" content={stripHtml(post.excerpt.rendered).substring(0, 150)} />
            </Head>
            
            <Navbar />

            {/* --- Hero Section for Post --- */}
            <header className="post-hero" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="overlay">
                    <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </div>
            </header>

            {/* --- Content Section --- */}
            <main className="post-section">
                <div 
                    className="post-content-body" 
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
                />
            </main>

            <footer className="footer">
                 <p>&copy; 2025 Batticaloa Heritage. All Rights Reserved. | Designed for Discovery and Preservation.</p>
            </footer>

            {/* --- Inline Component Styling --- */}
            <style jsx global>{`
                /* Reusing Global Styles from stories.js where applicable */
                
                /* --- Post Hero Section --- */
                .post-hero {
                    background-size: cover;
                    background-position: center;
                    min-height: 400px;
                    display: flex;
                    align-items: flex-end; /* Align title to the bottom */
                    padding: 40px 20px;
                    position: relative;
                }

                .post-hero::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    /* Dark gradient overlay for title readability */
                    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.0));
                    z-index: 1;
                }

                .post-hero h1 {
                    font-size: 40px;
                    color: white;
                    margin: 0;
                    max-width: 900px;
                    z-index: 2;
                }

                /* --- Post Content Section --- */
                .post-section {
                    max-width: 900px; /* Max width for readability */
                    margin: 0 auto;
                    padding: 60px 20px;
                }

                .post-content-body {
                    line-height: 1.8;
                    font-size: 17px;
                    color: var(--text-color-dark, #333); /* Use a dark text color */
                }

                /* Styling WordPress generated HTML within the content body */
                .post-content-body h2 {
                    font-size: 28px;
                    margin-top: 40px;
                    margin-bottom: 15px;
                    color: var(--primary-color);
                }
                
                .post-content-body p {
                    margin-bottom: 20px;
                }

                .post-content-body img {
                    max-width: 100%;
                    height: auto;
                    display: block;
                    margin: 30px 0;
                    border-radius: 8px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                }

                .post-content-body a {
                    color: var(--primary-color);
                    text-decoration: underline;
                    font-weight: 500;
                }

                .post-content-body ul, 
                .post-content-body ol {
                    margin-left: 25px;
                    margin-bottom: 20px;
                    padding-left: 0;
                }
                
                /* Responsive Adjustments */
                @media (max-width: 600px) {
                    .post-hero h1 {
                        font-size: 32px;
                    }
                    .post-section {
                        padding: 30px 15px;
                    }
                }
            `}</style>
        </div>
    );
}