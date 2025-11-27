"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Head from 'next/head';

export default function TradesCraftsProject() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Traditional Trades & Crafts Documentation | Batticaloa Heritage</title>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Batticaloa Heritage – Traditional Trades & Crafts" />
        <meta property="og:description" content="A completed multimedia documentation project preserving the traditional knowledge and skills of Eastern, Northern, and Up-Country Sri Lanka." />
        <meta property="og:image" content="https://hertiages.site/batticaloa-heritage-cover.webp" /> {/* UPDATED Image */}
        <meta property="og:url" content="https://hertiages.site/traditional-crafts" /> {/* UPDATED URL */}
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Batticaloa Heritage – Traditional Trades & Crafts" />
        <meta name="twitter:description" content="A completed multimedia documentation project preserving the traditional knowledge and skills of Eastern, Northern, and Up-Country Sri Lanka." />
        <meta name="twitter:image" content="https://hertiages.site/batticaloa-heritage-cover.webp" /> {/* UPDATED Image */}

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
      </Head>

      <Navbar />

      <div className="project-page">

        {/* HERO */}
        <section className="hero crafts-hero-bg"> {/* Custom CSS class for crafts BG */}
          <div className="hero-content">
            <h1>Traditional Trades & Crafts</h1>
            <p>
              Multimedia documentation successfully preserved the endangered traditional skills,
              knowledge, and processes of craftsmen in Eastern, Northern, and Up-Country Sri Lanka.
            </p>
            <Link href="#project-results" className="btn">
              View Project Results & Impact
            </Link>
          </div>
        </section>

        <div className="container">

          {/* Project Overview (Now focused on COMPLETION and NEED) */}
          <section className="section">
            <div className="project-card">
              <img src="/crafts-college.webp" alt="Traditional Sri Lankan Craftsman working on a pot" /> {/* UPDATED Image */}
              <div className="project-content">
                <h2>Project Overview: Vanishing Knowledge</h2>
                <p>
                  This completed project addressed the urgent threat of <b>loss of indigenous knowledge</b>
                  in traditional Sri Lankan trades (e.g., pottery, lime, weaving, wood carving)
                  due to modernization and lack of digital preservation. We successfully conducted
                  extensive fieldwork to document these practices.
                </p>
                <p><b>Key Project Areas Documented:</b></p>

                <ul>
                  <li>✔ Craft processes and specialized skill-sets</li>
                  <li>✔ Oral histories of craftsmen and their lineage</li>
                  <li>✔ Unique regional raw materials and tools </li>
                </ul>
                <p>
                  The final outputs are a comprehensive, <b>open-access archive</b> of multimedia content
                  available to researchers, educators, and communities worldwide.
                </p>
              </div>
            </div>
          </section>

          

          {/* 🛠 What We Actually Did (Process section) */}
          <section className="section">
            <div className="project-card reverse">
              <img src="/crafts-process-college.webp" alt="Researcher interviewing a craftsman in his workshop" /> {/* UPDATED Image */}
              <div className="project-content">
                <h2>Our Proven Documentation Process</h2>
                <p>
                  Our methodology focuses on <b>rigor and archival standards</b>. The process involved cross-regional field trips, ethical interviews with full consent, and a focus on capturing the entire value chain—from raw material sourcing to the final product.
                </p>
                <ul>
                  <li>✔ <b>Identify & Vette:</b> Located and secured participation from over 30 master artisans across three regions.</li>
                  <li>✔ <b>Detailed Documentation:</b> Captured every step of the craft process with text and high-res photography.</li>
                  <li>✔ <b>Video Archiving:</b> Filmed long-form, unedited process videos for archival security.</li>
                  <li>✔ <b>Cultural Context:</b> Recorded oral histories, lineage, and the local economic significance of the craft.</li>
                  <li>✔ <b>Final Publication:</b> All material released under <b>Creative Commons</b> licenses on open platforms.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* HOW WE PUBLISHED (Revised to showcase open access output) */}
          <section id="project-results" class="how-we-publish">
            <h2 class="publish-title">
              Project Outputs
            </h2>

            <div class="publish-options-container">

              <div class="version-card free-version">
                <h3 class="version-header">
                  Open-Access Content on Wikimedia
                </h3>

                <p class="inclusions-label">Key Content Outputs:</p>
                <ul class="inclusions-list">
                  <li><span class="list-icon">✅</span> 1022 Photos on Wikimedia Commons</li>
                  <li><span class="list-icon">✅</span> Detailed articles on Wikipedia</li>
                  <li><span class="list-icon">✅</span> Raw video and audio for research use</li>
                  <li><span class="list-icon">✅</span> Documentation reports and findings</li>
                </ul>

                <div class="tag-free">
                  All content is permanently free and citable for global use.
                </div>
              </div>

              <div class="version-card paid-version1">
                <h3 class="version-header">
                 Project Detail Links
                </h3>

                 {/* <ul class="inclusions-list1"> */}
                   
                   <Link href="https://ta.wikipedia.org/s/5wx5" className="btn">
                    Trades and Craft Project Proposal in Wikipedia
                    </Link>
                    <Link href="https://meta.wikimedia.org/wiki/Grants:Project/Tamil_Wikimedia-Noolaham_Foundation/Multimedia_Documentation_of_Traditional_Trades_and_Crafts_of_Eastern,_Northern_and_Up-Country_Sri_Lanka" className="btn">
                    Grants released for Noolaham Foundation
                    </Link>
                    <Link href="https://commons.wikimedia.org/w/index.php?title=Category:Crafts_and_Trades_of_East-North-Upcountry_Sri_Lanka&fileuntil=%E0%AE%95%E0%AE%B2%E0%AF%8D+%E0%AE%85%E0%AE%B1%E0%AF%81%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AF%81%E0%AE%AE%E0%AF%8D+%E0%AE%95%E0%AE%B0%E0%AF%81%E0%AE%B5%E0%AE%BF%E0%AE%95%E0%AE%B3%E0%AF%8D.webm#mw-category-media" className="btn">
                    Project Outputs in Wikimedia Commons
                    </Link>
                    
                    
                {/* </ul> */}

              
              </div>

            </div>
          </section>

          {/* Craft Cane Documentation Project */}
            <section className="section">
                <div className="project-card">
                <img src="/cane.webp" alt="Traditional Cane Crafts" />
                <div className="project-content">
                    <h2>Cane Craft Documentation & Preservation</h2>
                    <p>
                    A comprehensive project to document the traditional methods, designs,
                    and cultural significance of cane crafts practiced
                    by artisans in Batticaloa regions. This initiative aims to preserve
                    this valuable heritage for future generations.
                    </p>
                    <ul>
                    <li>Detailed documentation of traditional weaving techniques</li>
                    <li>Cataloging of historical and contemporary cane craft designs</li>
                    <li>Video and photo documentation of the crafting process</li>
                    <li>Interviews with master cane artisans</li>
                    <li>Creation of educational resources for skill transfer</li>
                    </ul>
                    <Link href="https://commons.wikimedia.org/w/index.php?title=Category:Crafts_and_Trades_of_East-North-Upcountry_Sri_Lanka&fileuntil=%E0%AE%95%E0%AE%B2%E0%AF%8D+%E0%AE%85%E0%AE%B1%E0%AF%81%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AF%81%E0%AE%AE%E0%AF%8D+%E0%AE%95%E0%AE%B0%E0%AF%81%E0%AE%B5%E0%AE%BF%E0%AE%95%E0%AE%B3%E0%AF%8D.webm#mw-category-media" className="btn">
                    View field work photos
                    </Link>
                </div>
                </div>
            </section>

            {/* Pottery Craft Documentation Project */}
      <section className="section">
        <div className="project-card reverse">
          <img src="/pottery.webp" alt="Traditional Pottery Crafts" />
          <div className="project-content">
            <h2>Traditional Pottery Documentation & Cultural Mapping</h2>
            <p>
              A focused initiative to document the ancient and modern techniques
              of <b>pottery</b> as practiced by hereditary artisan
              communities. The project captures the unique firing methods,
              design evolution, and social context of clay work in the region.
            </p>
            <ul>
              <li>Recording of clay preparation and wheel-throwing techniques</li>
              <li>Cataloging of traditional pottery forms (e.g., cooking, storage, ritual)</li>
              <li>Documentation of natural pigments and firing processes </li>
              <li>Oral history collection from master potters</li>
              <li>Digital archive of finished documentation and 3D models of artifacts</li>
            </ul>
            <Link href="https://youtu.be/Tap5tkAEhfE?si=HQ_-_4LbKVUstEwR" className="btn">
              View Documentery video
            </Link>
          </div>
        </div>
      </section>

          <section class="support-section">
            <div class="header-content">
              <h2 class="section-title">
                <span class="icon-leaf">🌿</span> Our Model: Success Leads to New Initiatives
              </h2>
              <p class="section-description">
                This completed project demonstrates our proven capability to preserve and archive vanishing cultural heritage.
              </p>
            </div>

            <div class="grid-container">
              <div class="grid-item">
                <i class="fas fa-chart-line support-icon"></i>
                <h3 class="item-title">Proven Impact</h3>
                <p class="item-caption">Successfully delivered on all project metrics and archival goals.</p>
              </div>

              <div class="grid-item">
                <i class="fas fa-handshake support-icon"></i>
                <h3 class="item-title">Investor Trust</h3>
                <p class="item-caption">Showcasing responsible use of funds and high-quality outputs.</p>
              </div>

              <div class="grid-item">
                <i class="fas fa-tools support-icon"></i>
                <h3 class="item-title">Scalable Methods</h3>
                <p class="item-caption">Utilizing established workflows for future, larger documentation projects.</p>
              </div>

            </div>
            <hr class="separator"></hr>
            <div class="closing-statement">
              Invest in our <b>proven track record</b> to secure the future of Sri Lankan heritage.
            </div>
          </section>

          <section className="cta-section fade-in">
            <h2>🤝 Invest in Our Next Project: Flavours of Batticaloa</h2>
            <p>We are seeking new partners to fund the essential fieldwork for our culinary heritage documentary.</p>
            <Link href="https://wa.me/94766656007?text=I%27m%20interested%20in%20sponsoring%20your%20documentation%20project." className="btn">
              Become a Sponsor
            </Link>
          </section>

        </div>
        {/* --- Footer --- */}
        <footer className="footer">
          <p>&copy; 2018 - 2025 Batticaloa Heritage. All Rights Reserved. | Designed for Discovery and Preservation.</p>
        </footer>
        <style jsx global>{`

          /* ------------------- GLOBAL PAGE STYLE ------------------- */
          .project-page {
            background: #f7f8fa;
            color: #222;
            font-family: "Inter", sans-serif;
          }
          
        //   .project-cta {
        //       display: inline-block;
        //       padding: 10px 25px;
        //       background-color: var(--color-primary);
        //       color: white;
        //       border-radius: 5px;
        //       text-decoration: none;
        //       font-weight: 600;
        //       margin-top: 20px;
        //       transition: background-color 0.3s;
        //   }

          /* ------------------- HERO ------------------- */
          .hero {
              background: linear-gradient(
                  rgba(0, 0, 0, 0.6),
                  rgba(0, 0, 0, 0.5)
              ),
              url("/hero.jpg") center/cover; /* Original Placeholder */
              text-align: center;
              color: var(--white);
              padding: 120px 20px;
          }

          /* Override Hero for Crafts Project with a specific image */
          .crafts-hero-bg {
            background: linear-gradient(
              rgba(0, 0, 0, 0.6),
              rgba(0, 0, 0, 0.5)
            ),
            url("/wood-craving.webp") center/cover; /* UPDATED Image Path */
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

          /* Add other styles from the original file here */

        `}</style>
      </div>
    </div>
  );
}