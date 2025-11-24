import Head from 'next/head';
import Link from 'next/link';
// Ensure the path to your API file is correct:
import { fetchPosts } from '../lib/api'; 
import Navbar from "../components/Navbar";

// --- 1. Data Fetching (getStaticProps) ---
// This runs once at build time on the Vercel server.
export async function getStaticProps() {
    try {
        const posts = await fetchPosts();
        // Defensive check: Ensure posts is an array
        const safePosts = Array.isArray(posts) ? posts : []; 

        return { 
            props: { posts: safePosts }, 
            // Incremental Static Regeneration (ISR): Refreshes data every 60 seconds
            revalidate: 60 
        };
    } catch (error) {
        console.error("Error in getStaticProps for home page:", error);
        return { 
            props: { posts: [] }, 
            revalidate: 60 
        };
    }
}

// --- Helper Function 1: Get Featured Image URL ---
const getFeaturedImageUrl = (post) => {
    try {
        // We rely on fetchPosts using the `?_embed` parameter for this path to exist.
        const featuredMedia = post._embedded['wp:featuredmedia'][0];
        
        // Try to get the medium size for performance, fall back to full size
        const imageUrl = featuredMedia.media_details.sizes.medium.source_url 
                         || featuredMedia.media_details.sizes.full.source_url;
                         
        return imageUrl;
    } catch (e) {
        // Fallback image if no featured media is available on the post
        return 'https://placehold.co/400x200/cccccc/333333?text=Batti+Heritage';
    }
};

// --- Helper Function 2: Clean HTML from Excerpts ---
const stripHtml = (html) => {
    if (!html) return 'No excerpt available.';
    
    // 🎯 FIX: Remove the &nbsp; entity and then strip HTML tags
    const cleanNBSP = html.replace(/&nbsp;/g, ' '); 
    
    // Basic regex to remove HTML tags
    return cleanNBSP.replace(/<[^>]*>?/gm, '');
};

// --- 3. The Landing Page Component (Home) ---
export default function Home({ posts }) {
    const postsToRender = Array.isArray(posts) ? posts : [];
    
    return (
        <div>
            {/* 1. Head component for external assets and metadata */}
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Batticaloa Heritage – Homepage</title>
                {/* Font link */}
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
            </Head>
            <Navbar />


            {/* --- Hero Section --- */}
            <header className="hero">
                <h1>Unveiling the Heritage of Batticaloa</h1>
                <p>Explore the stories, villages, culture, and history of the Eastern Jewel of Sri Lanka.</p>
                <div>
                    <Link className="btn" href="/posts">Explore Stories</Link>
                    <Link className="btn btn-outline" href="#">Watch Documentaries</Link>
                </div>
            </header>
            
            {/* --- SECTION 1: DYNAMIC POSTS (Replaced static cards) --- */}
            <section className="section">
                <h2 className="section-title">Latest Discoveries & Stories</h2>

                <div className="grid">
                    {postsToRender.length > 0 ? (
                        // Map over the posts array fetched from WordPress
                        postsToRender.map(post => (
                            <div className="card" key={post.id}>
                                {/* 🎯 Featured Image Rendering */}
                                <img 
                                    src={getFeaturedImageUrl(post)} 
                                    alt={`Featured image for ${stripHtml(post.title.rendered)}`}
                                />
                                <div className="card-content">
                                    {/* Post Title */}
                                    <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                    
                                    {/* Post Excerpt (HTML stripped for clean text display) */}
                                    <p>{stripHtml(post.excerpt.rendered).substring(0, 100)}...</p>
                                    
                                    {/* Link to the individual post page */}
                                    <Link className="btn" href={`/posts/${post.id}`}>
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Fallback message if no posts are found
                        <div style={{gridColumn: '1 / -1', textAlign: 'center', padding: '50px'}}>
                            <p style={{fontSize: '1.2em', color: 'var(--secondary-color)'}}>No stories found. Please ensure your WordPress API is working and posts are published.</p>
                        </div>
                    )}
                </div>
            </section>
            
            <hr />

            {/* --- SECTION 2: Featured Documentary (Static) --- */}
            <section className="section">
                <h2 className="section-title">Featured Documentary</h2>
                <div className="card featured-doc-card">
                    <h3>Batticaloa Sothi – A Cultural Journey</h3>
                    <p>A beautifully captured story that explores the roots and enduring traditions of Batticaloa's people and culture.</p>
                    <a className="btn btn-outline" href="#">Watch Now</a>
                </div>
            </section>
            
            <hr />

            {/* --- SECTION 3: SHOP (Static) --- */}
            <section className="section" id="shop">
                <h2 className="section-title">Shop Cultural Products & Art</h2>
                <div className="grid">
                    <div className="card">
                        <div className="card-content">
                            <h3>Palm Leaf Manuscripts</h3>
                            <p>Ancient-style reproductions and educational prints of historic scripts.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <h3>Photography Prints</h3>
                            <p>High-quality photographic prints and illustrations of Batticaloa's landscapes.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <h3>Translation Books</h3>
                            <p>Translated local history documents and scholarly works for wider accessibility.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <h3>Handmade Crafts</h3>
                            <p>Authentic local artisan work supporting the community's traditional skills.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Footer --- */}
            <footer className="footer">
                <p>&copy; 2025 Batticaloa Heritage. All Rights Reserved. | Designed for Discovery and Preservation.</p>
            </footer>

            {/* 4. The Critical CSS Block (styled-jsx global) */}
            <style jsx global>{`
                /* Modern Reset and Variables */
                :root {
                    --primary-color: #007bff; /* A vibrant blue */
                    --secondary-color: #6c757d;
                    --text-color: #212529;
                    --background-light: #f8f9fa;
                    --white: #ffffff;
                    --shadow-light: 0 4px 12px rgba(0, 0, 0, 0.08);
                    --transition-speed: 0.3s;
                }

                * {
                    box-sizing: border-box;
                }

                body {
                    margin: 0;
                    font-family: 'Poppins', sans-serif;
                    color: var(--text-color);
                    background: var(--background-light);
                    line-height: 1.6;
                }

                /* --- Navigation Bar --- */
                .navbar {
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    background: rgba(255, 255, 255, 0.95); /* Semi-transparent white */
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    padding: 15px 40px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo {
                    font-size: 24px;
                    font-weight: 700;
                    color: var(--primary-color);
                    text-decoration: none;
                }

                .nav-links a {
                    color: var(--text-color);
                    text-decoration: none;
                    margin-left: 25px;
                    font-weight: 500;
                    transition: color var(--transition-speed);
                }

                .nav-links a:hover {
                    color: var(--primary-color);
                }

                /* --- Hero Section --- */
                .hero {
                    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('/hero.jpg') center/cover no-repeat; /* Real image of Batticaloa lagoon */
                    padding: 150px 20px; /* Increased padding */
                    text-align: center;
                    color: var(--white);
                    min-height: 60vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .hero h1 {
                    font-size: 64px; /* Larger heading */
                    margin: 0 0 15px;
                    font-weight: 700;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                }

                .hero p {
                    font-size: 22px;
                    margin-bottom: 40px;
                    max-width: 700px;
                }

                /* --- Buttons --- */
                .btn {
                    padding: 12px 25px;
                    background: var(--primary-color);
                    color: var(--white);
                    text-decoration: none;
                    border-radius: 50px; /* Pill-shaped buttons */
                    font-weight: 600;
                    margin: 8px;
                    transition: background-color var(--transition-speed), transform var(--transition-speed);
                    display: inline-block;
                    border: none;
                    cursor: pointer;
                }

                .btn:hover {
                    background: #0056b3; /* Darker blue on hover */
                    transform: translateY(-2px);
                }

                .btn-outline {
                    background: transparent;
                    color: var(--white);
                    border: 2px solid var(--white);
                }

                .btn-outline:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: var(--white);
                }

                /* --- Content Sections --- */
                .section {
                    padding: 80px 20px; /* Increased vertical padding */
                    max-width: 1200px;
                    margin: auto;
                }

                .section-title {
                    text-align: center;
                    margin-bottom: 50px;
                    font-size: 36px;
                    font-weight: 600;
                    color: var(--text-color);
                    position: relative;
                }

                .section-title::after {
                    content: '';
                    display: block;
                    width: 50px;
                    height: 3px;
                    background: var(--primary-color);
                    margin: 10px auto 0;
                    border-radius: 2px;
                }

                .grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Larger minimum size */
                    gap: 30px;
                }

                /* --- Card Styles (Core Feature) --- */
                .card {
                    background: var(--white);
                    padding: 0;
                    border-radius: 10px;
                    box-shadow: var(--shadow-light);
                    overflow: hidden;
                    text-align: left;
                    transition: transform var(--transition-speed), box-shadow var(--transition-speed);
                }

                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
                }

                .card img {
                    width: 100%;
                    height: 200px; /* Fixed height for image consistency */
                    object-fit: cover;
                    display: block;
                }

                .card-content {
                    padding: 20px;
                }

                .card h3 {
                    margin-top: 0;
                    margin-bottom: 10px;
                    font-size: 20px;
                    font-weight: 600;
                    color: var(--primary-color);
                }

                .card p {
                    font-size: 14px;
                    color: var(--secondary-color);
                    margin-bottom: 20px;
                }

                .card .btn {
                    margin: 0;
                    padding: 8px 15px;
                    font-size: 14px;
                }

                /* Featured Documentary Card - Unique Style */
                .featured-doc-card {
                    max-width: 800px;
                    margin: 0 auto;
                    text-align: center;
                    padding: 40px;
                    background: var(--primary-color);
                    color: var(--white);
                }

                .featured-doc-card h3 {
                    color: var(--white);
                    font-size: 30px;
                }

                .featured-doc-card p {
                    color: rgba(255, 255, 255, 0.9);
                    margin-bottom: 30px;
                }
                
                /* Shop Section Cards - Cleaner Look */
                #shop .card {
                    text-align: center;
                    padding: 30px;
                }
                
                #shop .card h3 {
                    font-size: 22px;
                }

                /* --- Footer --- */
                .footer {
                    background: var(--text-color);
                    color: var(--background-light);
                    text-align: center;
                    padding: 40px 20px;
                    font-size: 14px;
                }

                /* Media Queries for responsiveness */
                @media (max-width: 768px) {
                    .navbar {
                        padding: 15px 20px;
                    }
                    .nav-links {
                        display: none; /* Hide nav links on small screens for simplicity */
                    }
                    .hero h1 {
                        font-size: 48px;
                    }
                    .hero p {
                        font-size: 18px;
                    }
                    .section-title {
                        font-size: 30px;
                    }
                }
            `}</style>
        </div>
    );
}