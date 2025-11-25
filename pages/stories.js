import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { fetchMorePosts } from '../lib/api';
import Navbar from "../components/Navbar";


// ================================
// DATA FETCHING - Get 50 Posts
// ================================
export async function getStaticProps() {
    try {
        const posts = await fetchMorePosts();

        return {
            props: { posts },
            revalidate: 60
        };
    } catch (error) {
        console.error("Error loading stories:", error);
        return {
            props: { posts: [] },
            revalidate: 60
        };
    }
}

// ================================
// HELPERS
// ================================
const getFeaturedImageUrl = (post) => {
    try {
        const media = post._embedded['wp:featuredmedia'][0];
        return media.media_details.sizes.medium.source_url || media.source_url;
    } catch (e) {
        return 'https://placehold.co/400x200/cccccc/333333?text=Batti+Heritage';
    }
};

const stripHtml = (html) => {
    if (!html) return 'No excerpt available.';
    return html.replace(/&nbsp;/g, ' ').replace(/<[^>]*>?/gm, '');
};

// ================================
// STORIES PAGE WITH PAGINATION
// ================================
export default function Stories({ posts }) {
    const postsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(posts.length / postsPerPage);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const changePage = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <Head>
                <title>Stories | Batticaloa Heritage</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Navbar />

            {/* --- Hero Section --- */}
            <header className="hero">
                <h1>Stories of Batticaloa</h1>
                <p>Discover history, culture and heritage through real stories.</p>
            </header>


            <section className="section">
                <h2 className="section-title">All Stories</h2>

                <div className="grid">
                    {currentPosts.length > 0 ? (
                        currentPosts.map(post => (
                            <div className="card" key={post.id}>
                                <img 
                                    src={getFeaturedImageUrl(post)}
                                    alt={stripHtml(post.title.rendered)}
                                />

                                <div className="card-content">
                                    <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

                                    <p>
                                        {stripHtml(post.excerpt.rendered).substring(0, 120)}...
                                    </p>

                                    <Link className="btn" href={`/posts/${post.slug}`}>
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p style={{textAlign: 'center'}}>No stories found.</p>
                    )}
                </div>

                {/* Pagination */}
                <div className="pagination">
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                            onClick={() => changePage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </section>

            <footer className="footer">
                <p>&copy; 2025 Batticaloa Heritage. All Rights Reserved.</p>
            </footer>

            <style jsx global>{`
                /* --- Hero Section --- */
                .hero {
                        background: linear-gradient(
                            rgba(0, 0, 0, 0.6),
                            rgba(0, 0, 0, 0.5)
                        ),
                        url("/hero.jpg") center/cover;
                        text-align: center;
                        color: var(--white);
                        padding: 120px 20px;
                    }

                    .hero h1 {
                        font-size: 48px;
                        margin-bottom: 15px;
                    }

                    .hero p {
                        font-size: 20px;
                        max-width: 700px;
                        margin: 0 auto;
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
                    color: var(--primary-color);
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

                /* --- Buttons --- */
                .btn {
                    padding: 12px 25px;
                    background: var(--button-clr);
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
                    background: var(--hover-clr);
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

                .pagination {
                    margin-top: 40px;
                    text-align: center;
                }

                .page-btn {
                    margin: 5px;
                    padding: 8px 14px;
                    border: none;
                    background: #eee;
                    cursor: pointer;
                    border-radius: 6px;
                    font-weight: 600;
                }

                .page-btn.active {
                    background: var(--primary-color);
                    color: white;
                }

                body {
                    margin: 0;
                    font-family: 'Poppins', sans-serif;
                    color: var(--text-color);
                    background: var(--background-light);
                    line-height: 1.6;
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
