// pages/projects.js
// Next.js Project Landing Page for:
// 1. Palm Leaf Manuscripts Translation Project
// 2. Flavours of Batticaloa Documentary Project
// Uses the same color palette and design style from your homepage

import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects – Batticaloa Heritage</title>
        <meta name="description" content="Cultural preservation projects of Batticaloa" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Navbar */}
      <nav className="navbar">
        <Link href="/" className="logo">Batticaloa Heritage</Link>
        <div className="nav-links">
          <Link href="/projects">Projects</Link>
          <Link href="/posts">Stories</Link>
          <Link href="#">Villages</Link>
          <Link href="#">Shop</Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero">
        <h1>Our Cultural Preservation Projects</h1>
        <p>Documenting the heritage, manuscripts, and lost traditions of Batticaloa.</p>
      </header>

      {/* Palm Leaf Manuscripts Project */}
      <section className="section">
        <div className="project-card">
          <Image
                src="/manuscript.jpg"
                alt="Palm Leaf Manuscripts"
                width={600}
                height={400}
                className="rounded-lg shadow"
            />
          <div className="project-content">
            <h2>Palm Leaf Manuscripts Translation</h2>
            <p>
              A long-term initiative to collect, digitize, translate, and publish ancient Batticaloa palm leaf manuscripts.
              These documents contain centuries-old wisdom, rituals, astrology, medicine, poetry, and local history.
            </p>
            <ul>
              <li>Palm Leaf Manuscripts Translation</li>
              <li>Ancient Tamil Script/Text → Modern Tamil Translation</li>
              <li>Scholarly commentary</li>
              <li>Reconstructed replicas for cultural education</li>
              <li>Tiered Digital Access and Preservation</li>
            </ul>
            <Link href="#" className="btn">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Flavours of Batticaloa Documentary */}
      <section className="section">
        <div className="project-card reverse">
          <Image
                src="/food.jpg"
                alt="traditional food"
                width={600}
                height={400}
                className="rounded-lg shadow"
            />
          <div className="project-content">
            <h2>Flavours of Batticaloa – Documentary</h2>
            <p>
              An exclusive documentary project uncovering Batticaloa’s forgotten and disappearing traditional food culture.
              From the iconic <b>Sothi</b> to seasonal dishes, this project preserves cooking methods known only to a few elders.
            </p>
            <ul>
              <li>Traditional recipe documentation</li>
              <li>Video interviews with local experts</li>
              <li>Step-by-step cooking visuals</li>
              <li>Historical & cultural background</li>
            </ul>
            <Link href="#" className="btn">Watch Trailer</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Batticaloa Heritage – Preserving the Culture of the Eastern Jewel.</p>
      </footer>

      {/* Styles */}
      <style jsx>{`
        :root {
          --primary-color: #007bff;
          --secondary-color: #6c757d;
          --text-color: #212529;
          --background-light: #f8f9fa;
          --white: #ffffff;
          --shadow-light: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background: var(--background-light);
        }

        .navbar {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: var(--shadow-light);
          padding: 15px 40px;
          display: flex;
          justify-content: space-between;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          color: var(--primary-color);
        }

        .nav-links a {
          margin-left: 20px;
          text-decoration: none;
          color: var(--text-color);
        }

        .hero {
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('/hero.jpg') center/cover;
          text-align: center;
          color: var(--white);
          padding: 120px 20px;
        }

        .hero h1 { font-size: 48px; }

        .section {
          padding: 80px 20px;
          max-width: 1200px;
          margin: auto;
        }

        .project-card {
          background: var(--white);
          box-shadow: var(--shadow-light);
          border-radius: 10px;
          display: flex;
          overflow: hidden;
        }

        .project-card.reverse {
          flex-direction: row-reverse;
        }

        .project-card img {
          width: 50%;
          object-fit: cover;
        }

        .project-content {
          padding: 40px;
          width: 50%;
        }

        .project-content h2 {
          color: var(--primary-color);
          margin-bottom: 15px;
        }

        .project-content ul {
          margin-top: 20px;
          padding-left: 20px;
        }

        .btn {
          display: inline-block;
          margin-top: 25px;
          padding: 12px 25px;
          background: var(--primary-color);
          color: var(--white);
          border-radius: 50px;
          text-decoration: none;
        }

        .footer {
          background: var(--text-color);
          color: var(--white);
          padding: 40px;
          text-align: center;
        }

        @media(max-width: 900px) {
          .project-card {
            flex-direction: column;
          }

          .project-card img,
          .project-content {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}