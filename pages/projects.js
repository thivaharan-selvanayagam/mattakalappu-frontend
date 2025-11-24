import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar"; // ✅ Correct import

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
            <Link href="#" className="btn">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Flavours of Batticaloa Documentary */}
      <section className="section">
        <div className="project-card reverse">
          <Image
            src="/food.jpg"
            alt="Traditional Food"
            width={600}
            height={400}
            className="rounded-lg shadow"
          />
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
          © 2025 Batticaloa Heritage – Preserving the Culture of the Eastern
          Jewel.
        </p>
      </footer>

      {/* Component-level styles */}
      <style jsx>{`
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
          margin-bottom: 10px;
        }

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
          margin-bottom: 60px;
        }

        .project-card.reverse {
          flex-direction: row-reverse;
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
          transition: 0.3s;
        }

        .btn:hover {
          background: #0056b3;
        }

        .footer {
          background: var(--text-color);
          color: var(--white);
          padding: 40px;
          text-align: center;
        }

        @media (max-width: 900px) {
          .project-card {
            flex-direction: column;
          }

          .project-content,
          .project-card :global(img) {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
