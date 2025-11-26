import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";



export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects – Batticaloa Heritage</title>
        
           {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Batticaloa Heritage – Projects" />
                <meta property="og:description" content="Discover Batticaloa's rich heritage through traditional food culture, oral histories, community stories, and preservation projects." />
                <meta property="og:image" content="https://hertiages.site/batticaloa-heritage-cover.webp" />
                <meta property="og:url" content="https://hertiages.site/projects" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Batticaloa Heritage –  Projects" />
                <meta name="twitter:description" content="Discover Batticaloa's rich heritage through traditional food culture, oral histories, community stories, and preservation projects." />
                <meta name="twitter:image" content="https://hertiages.site/batticaloa-heritage-cover.webp" />
       
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
            <span className="project-label">Future Project</span>
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
            <span className="project-label">Future Project</span>
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
            <Link href="/foods" className="btn">
              View More
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="project-card">
          <img src="/traditional-crafts.webp" alt="Traditional Sri Lankan Craftsmen working" />
          <div className="project-content">
            <h2>Multimedia Documentation of Traditional Trades and Crafts</h2>
            <p>
              Bringing the knowledge bases embedded in the traditional trades and crafts
              of Eastern, Northern, and Up-Country Sri Lanka to Wikimedia and
              community knowledge platforms. Many of these invaluable traditions—from 
              shipbuilding and weaving to pottery—are under threat of being lost due to 
              various risk factors, including modernization and lack of digital access.
            </p>
            <ul>
              <li>Documentation of Indigenous Sri Lankan knowledge bases and skill-sets</li>
              <li>Focus on <b>Eastern, Northern, and Up-Country</b> regions</li>
              <li>Preservation of traditions like pottery, metalworking, and weaving and more</li>
              <li>Creation of <b>Multimedia</b> content (photos, videos, articles)</li>
              <li>Publishing to <b>Wikimedia</b> and open-access knowledge platforms</li>
              <li>Project hosted by Noolaham foundation. collaborators are working as <b>volunteers</b></li>
            </ul>
            <Link href="/traditional-crafts" className="btn">
              See our contributions
            </Link>
          </div>
        </div>
      </section>

      {/* Ancient Hindu Temple Documentation Project */}
        <section className="section">
          <div className="project-card reverse">
            <img src="/ancient-temple-documentation.webp" alt="Ancient Hindu Temple in Batticaloa" />
            <div className="project-content">
              <h2>Ancient Hindu Temple Documentation</h2>
              <p>
                A collaborative effort to document the history and cultural significance
                of the oldest <b>Hindu Temples</b> situated in the <b>Batticaloa district</b>.
                The project focuses on capturing the intangible heritage before it is lost,
                including oral histories, traditional rituals, and architectural details.
              </p>
              <ul>
                <li>Collection of <b>history</b> and <b>oral histories</b> from temple elders</li>
                <li>Creation of <b>multimedia content</b> (videos, photos, interviews)</li>
                <li>Focus on the <b>oldest temples</b> in Batticaloa</li>
                <li>Content published on <b>noolaham.media (aavanaham)</b></li>
                <li>Project hosted by Noolaham foundation; our team served as <b>field workers</b> for documentation and video editing</li>
              </ul>
              <Link href="/temple-documentation" className="btn">
                See our works
              </Link>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          &copy; 2018 - 2025 Batticaloa Heritage. All Rights Reserved. | Designed for Discovery and Preservation.
        </p>
      </footer>
    </div>
  );
}
