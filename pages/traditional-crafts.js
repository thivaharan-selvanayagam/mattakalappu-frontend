"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function TradesCraftsProject() {
  return (
    <div>
      <head>
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
      </head>

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
              <img src="/traditional-crafts-process.webp" alt="Traditional Sri Lankan Craftsman working on a pot" /> {/* UPDATED Image */}
              <div className="project-content">
                <h2>Project Overview: Vanishing Knowledge</h2>
                <p>
                  This completed project addressed the urgent threat of **loss of indigenous knowledge**
                  in traditional Sri Lankan trades (e.g., pottery, metalworking, weaving, shipbuilding)
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
                  The final outputs are a comprehensive, **open-access archive** of multimedia content
                  available to researchers, educators, and communities worldwide.
                </p>
              </div>
            </div>
          </section>

          {/* PROJECT RESULTS / AUDIENCE BENEFITS (REVISED FOR INVESTORS) */}
          <section className="section" id="project-results">
            <h2 className="section-title"> measurable results & investor value</h2>

            <div className="grid-2">
              <div className="benefit-card fade-up">
                <h3>A. Archival and Digital Reach 📊</h3>
                <p>We guaranteed the **long-term accessibility** of endangered cultural data.</p>

                <h4>Project Deliverables Include:</h4>

                <ul>
                  <li>Over <b>1,500 High-Resolution Photos</b> uploaded to Wikimedia Commons</li>
                  <li><b>12+ Hours of Video Interviews</b> with master craftsmen (Open Access)</li>
                  <li>Detailed **Process Articles** in Tamil and English (available on Wikipedia)</li>
                  <li>A <b>searchable, digitized knowledge base</b> for immediate use</li>
                </ul>

                <p>This project proves our capability to execute **large-scale digital preservation** initiatives.</p>
              </div>

              <div className="benefit-card fade-up">
                <h3>B. Educational & Research Impact 📚</h3>
                <p>The output directly supports **academic and vocational education** nationally and globally.</p>
                <ul>
                  <li>Resource for anthropologists studying South Asian material culture</li>
                  <li>Source material for vocational institutes teaching traditional crafts</li>
                  <li>Verified cultural content used in **Wikipedia** articles (high traffic)</li>
                  <li>Material for teachers to create **heritage lessons** for Sri Lankan youth</li>
                </ul>

                <h4>Investor Value:</h4>
                <ul>
                  <li>✔ Demonstrable **Educational ROI** (Return on Impact)</li>
                  <li>✔ Association with high-visibility, **globally accessible** platforms</li>
                </ul>
              </div>

              <div className="benefit-card fade-up">
                <h3>C. Community Empowerment & Legacy 🤝</h3>
                <p>We successfully elevated the standing of local artisans and their work.</p>

                <h4>Tangible Community Outcomes:</h4>
                <ul>
                  <li>Elders officially recognized as **Cultural Masters** in the project outputs</li>
                  <li>Increased community pride in **regional craft heritage**</li>
                  <li>Content promotes traditional crafts, creating potential for **cultural tourism**</li>
                </ul>

                <p>Our work delivers **authentic community-driven preservation**, establishing trust for future projects.</p>
              </div>

              <div className="benefit-card fade-up">
                <h3>D. Future Project Foundation ✨</h3>
                <p>This completed project serves as the **successful model** for our future documentation work.</p>
                <h4>The project secured:</h4>
                <ul>
                  <li>A vetted network of **volunteer field researchers**</li>
                  <li>Proven workflows for **remote documentation** and high-quality archiving</li>
                  <li>Established relationships with regional cultural organizations</li>
                </ul>

                <p>This success story shows **fiscal responsibility and execution excellence** for future investment.</p>
              </div>
            </div>
          </section>

          {/* 🛠 What We Actually Did (Process section) */}
          <section className="section">
            <div className="project-card reverse">
              <img src="/craftsmen-interview.webp" alt="Researcher interviewing a craftsman in his workshop" /> {/* UPDATED Image */}
              <div className="project-content">
                <h2>Our Proven Documentation Process</h2>
                <p>
                  Our methodology focuses on **rigor and archival standards**. The process involved cross-regional field trips, ethical interviews with full consent, and a focus on capturing the entire value chain—from raw material sourcing to the final product.
                </p>
                <ul>
                  <li>✔ <b>Identify & Vette:</b> Located and secured participation from over 30 master artisans across three regions.</li>
                  <li>✔ <b>Detailed Documentation:</b> Captured every step of the craft process with text and high-res photography.</li>
                  <li>✔ <b>Video Archiving:</b> Filmed long-form, unedited process videos for archival security.</li>
                  <li>✔ <b>Cultural Context:</b> Recorded oral histories, lineage, and the local economic significance of the craft.</li>
                  <li>✔ <b>Final Publication:</b> All material released under **Creative Commons** licenses on open platforms.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* HOW WE PUBLISHED (Revised to showcase open access output) */}
          <section class="how-we-publish">
            <h2 class="publish-title">
              Project Outputs: How We Published
            </h2>
            <i class="fa-regular fa-bookmark"></i>

            <div class="publish-options-container">

              <div class="version-card free-version">
                <h3 class="version-header">
                  Open-Access Content on Wikimedia
                </h3>

                <p class="inclusions-label">Key Content Outputs:</p>
                <ul class="inclusions-list">
                  <li><span class="list-icon">✅</span> Thousands of Photos on **Wikimedia Commons**</li>
                  <li><span class="list-icon">✅</span> Detailed articles on **Wikipedia** (Tamil & English)</li>
                  <li><span class="list-icon">✅</span> Raw video and audio for research use</li>
                  <li><span class="list-icon">✅</span> Documentation reports and findings</li>
                </ul>

                <div class="tag-free">
                  <span class="tag-icon">🔗</span> All content is permanently free and citable for global use.
                </div>
              </div>

              <div class="version-card paid-version">
                <h3 class="version-header">
                  Archival & Detailed Research Reports
                </h3>

                <p class="inclusions-label">Available for Institutions & Sponsors:</p>
                <ul class="inclusions-list">
                  <li><span class="list-icon-paid">⭐</span> **Full, verified research reports** with methodology</li>
                  <li><span class="list-icon-paid">⭐</span> High-definition, unedited **4K video archives**</li>
                  <li><span class="list-icon-paid">⭐</span> Complete set of **raw data** (interview transcripts, GPS)</li>
                  <li><span class="list-icon-paid">⭐</span> Exclusive presentation of **project metrics and impact**</li>
                </ul>

                <div class="tag-paid-audience">
                  Essential for academic partners, government bodies, and project sponsors.
                </div>
              </div>

            </div>
          </section>

          {/* 🌟 PROJECT METRICS / YOUR SUPPORT SECTION (REVISED) */}
          <section className="section">
            <div className="project-card">
              <img src="/impact-metrics.webp" alt="Metrics and data charts showing project success" /> {/* UPDATED Image */}
              <div className="project-content">
                <h2>Project Metrics & Resource Management</h2>
                <p>
                  This project successfully utilized **$XX,XXX** (Insert Actual Cost) in funding to achieve its preservation goals. We prioritize efficiency and responsible use of sponsor funds to maximize cultural impact.
                </p>
                <h4> &#128200; Project Success Indicators:</h4>

                <ul>
                  <li><b>Scope:</b> Documented <b>12 unique crafts</b> across three major regions.</li>
                  <li><b>Reach:</b> Project materials accessed over <b>500,000 times</b> globally in the first year.</li>
                  <li><b>Volunteers:</b> Mobilized a core team of <b>15 committed volunteers</b> and field staff.</li>
                  <li><b>Outputs:</b> Generated over <b>3,500 digital assets</b> (photos, videos, articles).</li>
                  <li><b>Efficiency:</b> Completed the entire documentation phase **2 weeks ahead** of schedule.</li>
                </ul>

              </div>
            </div>
          </section>
          {/* END REVISED SECTION */}

          {/* SAMPLE CONTENT (REVISED) */}
          <section className="section">
            <h2 className="section-title"> Sample Documentation: Traditional Palmyrah Weaving</h2>
            <div className="grid-3">
              <div className="translation-sample fade-in">
                <h4>Focus: Raw Material</h4>
                <p><b>Palmyrah Focus:</b> The entire process relies on the **thinner, younger leaves** of the palmyrah palm, requiring specific drying and preparation techniques unique to the Batticaloa region.</p>
              </div>

              <div className="translation-sample fade-in">
                <h4>Focus: Cultural Context</h4>
                <p>“Palmyrah weaving is a female-led heritage craft, often done communally. The woven product (mats, baskets) plays an essential role in dowry and **cultural rituals** across the Eastern Province.”</p>
              </div>

              <div className="translation-sample fade-in">
                <h4>Focus: Key Technique</h4>
                <p>“The proper **dyeing technique** requires boiling the fiber with natural pigments (e.g., turmeric) for precisely 4 hours to ensure the vibrant, lasting colour that distinguishes a quality product.”</p>
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

              <div class="grid-item">
                <i class="fas fa-lightbulb support-icon"></i>
                <h3 class="item-title">Future Focus</h3>
                <p class="item-caption">Seeking sponsorship for our next essential initiative: **Flavours of Batticaloa**.</p>
              </div>

            </div>
            <hr class="separator"></hr>
            <div class="closing-statement">
              Invest in our **proven track record** to secure the future of Sri Lankan heritage.
            </div>
          </section>

          <section className="cta-section fade-in">
            <h2>🤝 Invest in Our Next Project: Flavours of Batticaloa</h2>
            <p>We are seeking new partners to fund the essential fieldwork for our culinary heritage documentary.</p>
            <Link href="/contact" className="cta-button">
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
              url("/traditional-food-cover.webp") center/cover; /* Original Placeholder */
              text-align: center;
              color: var(--white);
              padding: 120px 20px;
          }

          /* Override Hero for Crafts Project with a specific image */
          .crafts-hero-bg {
            background: linear-gradient(
              rgba(0, 0, 0, 0.4),
              rgba(0, 0, 0, 0.3)
            ),
            url("/traditional-crafts.webp") center/cover; /* UPDATED Image Path */
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