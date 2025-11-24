import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
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
            <Link href="#" className="btn">
              Learn More
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
            margin-bottom: 15px;
        }

        .hero p {
            font-size: 20px;
            max-width: 700px;
            margin: 0 auto;
        }

        .section {
            padding: 80px 20px;
            max-width: 1200px;
            margin: auto;
        }

        .project-card {
            background: var(--white);
            box-shadow: var(--shadow-light);
            border-radius: 12px;
            display: flex;
            overflow: hidden;
            margin-bottom: 70px;
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
            font-size: 28px;
            margin-bottom: 15px;
        }

        .project-content p {
            color: var(--secondary-color);
            line-height: 1.6;
        }

        .project-content ul {
            margin-top: 20px;
            padding-left: 20px;
            color: var(--secondary-color);
            font-size: 15px;
        }

        .btn {
            display: inline-block;
            margin-top: 25px;
            padding: 12px 30px;
            background: var(--primary-color);
            color: var(--white);
            border-radius: 50px;
            text-decoration: none;
            transition: transform var(--transition-speed),
            background var(--transition-speed);
        }

        .btn:hover {
            background: #0056b3;
            transform: translateY(-2px);
        }

        .footer {
            background: var(--text-color);
            color: var(--white);
            padding: 40px;
            text-align: center;
            font-size: 14px;
        }

        @media (max-width: 900px) {
            .project-card {
            flex-direction: column;
            }

            .project-content {
            width: 100%;
            }

            .project-card :global(img) {
            width: 100%;
            }
        }
        `}
        </style>

    </div>
  );
}
