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

                                    <Link className="btn" href={`/posts/${post.id}`}>
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
                .hero {
                    padding: 80px 20px;
                    text-align: center;
                    background: #111;
                    color: white;
                }

                .section {
                    max-width: 1200px;
                    margin: auto;
                    padding: 60px 20px;
                }

                .section-title {
                    text-align: center;
                    font-size: 32px;
                    margin-bottom: 40px;
                }

                .grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 25px;
                }

                .card {
                    background: #fff;
                    border-radius: 12px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                    overflow: hidden;
                    transition: transform 0.3s ease;
                }

                .card:hover {
                    transform: translateY(-6px);
                }

                .card img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }

                .card-content {
                    padding: 20px;
                }

                .card h3 {
                    margin: 0 0 10px;
                    font-size: 20px;
                }

                .card p {
                    font-size: 14px;
                    color: #666;
                }

                .btn {
                    display: inline-block;
                    margin-top: 10px;
                    background: #007bff;
                    color: white;
                    padding: 8px 16px;
                    border-radius: 30px;
                    text-decoration: none;
                    font-size: 14px;
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
                    background: #007bff;
                    color: white;
                }
            `}</style>
        </div>
    );
}
