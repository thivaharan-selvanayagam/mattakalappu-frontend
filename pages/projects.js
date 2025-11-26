import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";



export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects – Batticaloa Heritage</title>
        <meta
          name="description"
          content="Cultural preservation projects of Batticaloa"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <header className="hero">
        <h1>Our Cultural Preservation Projects</h1>
        <p>
          Documenting the heritage, manuscripts, and lost traditions of
          Batticaloa.
        </p>
      </header>

      {/* Palm Leaf Manuscripts Project */}
      <section className="section">
        <div className="project-card">
          <img src="/manuscript.jpg" alt="Palm Leaf Manuscripts" />
          <div className="project-content">
            <h2>Palm Leaf Manuscripts Translation</h2>
            <p>
              A long-term initiative to collect, digitize, translate, and
              publish ancient Batticaloa palm leaf manuscripts containing
              centuries-old knowledge on rituals, medicine, poetry, and local
              history.
            </p>
            <ul>
              <li>Palm Leaf Manuscripts Translation</li>
              <li>Ancient Tamil Script → Modern Tamil Translation</li>
              <li>Scholarly commentary</li>
              <li>Reconstructed replicas for education</li>
              <li>Digital Preservation & Tiered Access</li>
            </ul>
            <Link href="/manuscripts" className="btn">
              View More
            </Link>
          </div>
        </div>
      </section>

      {/* Flavours of Batticaloa Documentary */}
      <section className="section">
        <div className="project-card reverse">
         <img src="/food.jpg" alt="Batticaloa Food Documentary" />
          <div className="project-content">
            <h2>Flavours of Batticaloa – Documentary</h2>
            <p>
              A documentary uncovering Batticaloa’s disappearing traditional
              food culture, recording recipes, cooking methods, and oral
              histories known only to a few elders.
            </p>
            <ul>
              <li>Traditional recipe documentation</li>
              <li>Video interviews with knowledgeable elders</li>
              <li>Cooking process recordings</li>
              <li>Historical & cultural background</li>
            </ul>
            <Link href="#" className="btn">
              Watch Trailer
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          2025 Batticaloa Heritage. All Rights Reserved. | Designed for Discovery and Preservation.
        </p>
      </footer>
    </div>
  );
}
