"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Head from 'next/head';

// --- Placeholder Data for the Temple Project ---
// NOTE: Replace these with your actual data
const templesDocumented = [
    { name: "Arasadichenai Pillayar kovil", photo: "/001-arasadichenai-pillayar-kovil.webp" },
    { name: "Puthukudiyiruppu Kannaki Amman Kovil", photo: "/002-puthukudiyiruppu-kanaki-amman-kovil.webp" },
    { name: "Puthukkudiyiruppu sri vikineswarar kovil", photo: "/003-puthukudiyiruppu-sri-vikineshwarar-kovil.webp" },
    { name: "Sirampiyadi pillayar kovil", photo: "/004-sirampiyadi-pillayar-kovil.webp" },
    { name: "Kirankulam kali kovil", photo: "/005-kirankulam-kali-kovil.webp" },
    { name: "Manmunai sri narasinga vairavar kovil", photo: "/006-manmunai-sir-narasing- vairavar-kovil.webp" },
    { name: "Manmunai kali kovil", photo: "/007-manmunai-kali-kovil.webp" },
    { name: "ulakanachchipuram manmunai pillayar kovil", photo: "/008-ulakanachchipuram-manmunai-pillayar-kovil.webp" },
    { name: "Valaiyiravu madaththu pillayar kovil", photo: "/009-valaiyiravu-madaththu-pillayar-kovil.svg" },
    { name: "Naavatkaadu sri siththivinayagar kovil", photo: "/010-naavatkaadu-sri-siththivinayagar-kovil.webp" },
    { name: "Echanthevu kannaki amman kovil", photo: "/011-echanthevu-kannaki-amman-kovil.webp" },
    { name: "Ollikulam veerapaththirar kovil", photo: "/012-ollikulam-veerapaththirar-kovil.webp" },
    { name: "Aanaipanthi pillayar kovil", photo: "/013 aanaipanthi pillayar kovil.webp" },
    { name: "Echanthevu sri siththivinayagar kovil", photo: "/014 echanthevu sri siththivinayagar kovil.webp" },
    { name: "Puliyadimadu padapaththirakali amman kovil", photo: "/015 puliyadimadu padapaththirakali amman kovil.webp" },
    { name: "Pillayaradi sithivinayagar kovil", photo: "/016 pillayaradi sithivinayagar kovil.webp" },
    { name: "Thalankuda thakayeswaran kovil", photo: "/017 thalankuda thakayeswaran kovil.webp" },
    { name: "Thalankuda veerapathirar kovil", photo: "/018 thalankuda veerapathirar kovil.webp" },
    { name: "Kurinjamunai padapaththirakaali amman kovil", photo: "/019 kurinjamunai padapaththirakaali amman kovil.webp" },
    { name: "Paruththichchenai meenatchi amman kovil", photo: "/020 paruththichchenai meenatchi amman kovil.webp" },
    { name: "Paruththichchenai mari amman kovil", photo: "/021 paruththichchenai mari amman kovil.webp" },
    { name: "Sinhalavadi veerapathirar swami kovil", photo: "/022 sinhalavadi veerapathirar swami kovil.webp" },
    { name: "Thiruchenthoor murukan kovil", photo: "/023 thiruchenthoor murukan kovil.webp" },
    { name: "Kallady mukaththuvaram mari amman kovil", photo: "/024 kallady mukaththuvaram mari amman kovil.webp" },
    { name: "Thiraimadu sivalinga siththivinayagar kovil", photo: "/025 thiraimadu sivalinga siththivinayagar kovil.webp" },
    { name: "Karavetti paththirakaali amman kovil", photo: "/026 karavetti paththirakaali amman kovil.webp" },
    // Add more documented temples here (up to 8 for the 2-line grid)
];

export default function TempleDocumentationProject() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Old Hindu Temple Documentation Project | Batticaloa Heritage</title>

        {/* Open Graph Meta Tags - UPDATED */}
        <meta property="og:title" content="Batticaloa Heritage – Old Hindu Temple Documentation" />
        <meta property="og:description" content="A comprehensive multimedia project preserving the historical, spiritual, and architectural heritage of ancient Hindu temples in Batticaloa." />
        <meta property="og:image" content="https://hertiages.site/temple-documentation-cover.webp" /> {/* UPDATED Image */}
        <meta property="og:url" content="https://hertiages.site/old-hindu-temples" /> {/* UPDATED URL */}
        <meta property="og:type" content="website" />

        {/* Twitter Card - UPDATED */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Batticaloa Heritage – Old Hindu Temple Documentation" />
        <meta name="twitter:description" content="A comprehensive multimedia project preserving the historical, spiritual, and architectural heritage of ancient Hindu temples in Batticaloa." />
        <meta name="twitter:image" content="https://hertiages.site/temple-documentation-cover.webp" /> {/* UPDATED Image */}

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
      </Head>

      <Navbar />

      <div className="project-page">

        {/* HERO */}
        <section className="hero temple-hero-bg" id="project-overview"> {/* Custom CSS class for temple BG */}
          <div className="hero-content">
            <h1>Ancient Hindu Temple Documentation Project</h1>
            <p>
              Preserving the <b>Historical, Spiritual, and Architectural</b> identity of old Hindu temples
              in the Batticaloa region through comprehensive multimedia archiving.
            </p>
            <Link href="#project-details" className="btn">
              Explore Project Details
            </Link>
          </div>
        </section>

        <div className="container">

          {/* 1. What is this project? */}
          <section className="section">
            <div className="project-card">
              <img src="/temple (5).webp" alt="Detailed carving of a temple gopuram" /> {/* UPDATED Image */}
              <div className="project-content">
                <h2>1. 🏛️ What is the Temple Documentation Project?</h2>
                <p>
                  This initiative is a comprehensive multimedia effort to create a <b>digital, archival-grade record</b>
                  of ancient and historically significant Hindu temples in the <b>Batticaloa District of Sri Lanka</b>, specifically the Batticaloa District.
                </p>
                <p>
                  We move beyond basic photography, focusing on a holistic documentation approach that includes:
                </p>
                <ul>
                  <li>✔ <b>Historical Records</b>: Patronage, inscription analysis, and foundation dates.</li>
                  <li>✔ <b>Spiritual Context</b>: Sthala Purāṇam (local legends), unique rituals, and iconography.</li>
                  <li>✔ <b>Architectural Blueprint</b>: Detailed Vāstu-based layouts, material analysis, and structural documentation.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. Why we are doing this project? */}
          <section className="section">
              <div className="project-card reverse">
                <img src="/temple (1).webp" alt="Researcher documenting an old temple inscription" /> {/* UPDATED Image */}
                <div className="project-content">
                  <h2>2. 🌟 Why is This Documentation Essential?</h2>
                  <p>
                    Old temples are facing rapid degradation due to <b>weathering, modernization, and undocumented restoration</b>,
                    leading to a catastrophic loss of irreplaceable heritage.
                  </p>
                  <p>
                    Our project directly addresses this urgency by:
                  </p>
                  <ul>
                    <li>✔ <b>Preserving Vanishing Knowledge</b>: Archiving unique local Pūjā (worship) traditions and oral histories before they disappear.</li>
                    <li>✔ <b>Securing Historical Proof</b>: Digitizing and transcribing inscriptions and literary records, which are the primary sources of temple history.</li>
                    <li>✔ <b>Informing Future Restoration</b>: Providing detailed architectural and material documentation to guide historically sensitive conservation efforts.</li>
                  </ul>
                  <p>
                    The goal is to secure this vital cultural capital for future generations of scholars, priests, and devotees.
                  </p>
                </div>
              </div>
            </section>

          {/* 3. Who is the sponsors and incharge? */}
          <section className="section">
            <div className="project-card">
              <img src="/temple (8).webp" alt="Project team meeting with sponsors" /> {/* UPDATED Image */}
              <div className="project-content">
                <h2>3. 🤝 Project Management and Sponsorship</h2>
                <p>
                  This vital heritage preservation project is a collaborative effort, bringing together committed community sponsors, a leading archival organization, and dedicated field documentation work.
                </p>
                
                <p>
                  <b>Project Structure and Roles</b>:
                </p>
                <ul>
                  <li><b>Project Leading Organization</b>: Noolaham Foundation</li>
                  <li><b>Field Documentation</b>: S. Thivaharan, T. Mithurshan and P. Nelaxshan</li>
                  <li><b>Project Guide/Mentor (Noolaham Foundation)</b>: Thillainathan Kopinath</li>
                </ul>
                
                <p>
                  <b>Sponsors and Key Partners</b>:
                </p>
                <ul>
                  <li><b>Primary Sponsor</b>: Aram - Saiva Maanavar Sabai</li>
                  <li><b>Lead Archival Partner</b>: Noolaham Foundation</li>
                </ul>

                {/* <div className="sponsor-logos">
                  <Image src="/aram.jpg" alt="Aram - Saiva Maanavar Sabai Logo" width={100} height={50} />
                  <Image src="/noolaham-foundation.png" alt="Noolaham Foundation Logo" width={100} height={50} />
                  <Image src="/mattakalappu-logo.webp" alt="Batticaloa Heritage Logo" width={100} height={50} />
                </div> */}
                
                <p>
                  <b>We actively seek additional sponsorship to ensure the completeness of documentation across all identified temples.</b>
                </p>
              </div>
            </div>
          </section>

          <hr className="separator-line" />

          {/* 4. Outputs: Video and Photos */}
          <section className="section" id="project-details">
            <h2>4. 🖼️ Key Outputs and Digital Archive</h2>
            <p className="sub-heading">The core of the project is the creation of a comprehensive, open-access digital archive.</p>

            {/* Video Output */}
            <div className="project-card reverse">
              <div className="video-placeholder-container">
                <iframe
                  src="https://www.youtube.com/embed/FGgyoYx-Q6E?si=OjfkGoEepz8umkSc" // REPLACE with actual video embed URL for Kurinjamunai Kali Kovil
                  title="Kurinjamunai Kali Kovil Documentary"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="project-content">
                <h3>Sample Output: Kurinjamunai Kali Kovil Documentation</h3>
                <p>
                  This feature documents the <b>Kurinjamunai Kāli Kovil</b>, providing <b>full video coverage of the in and out structure</b>. This is vital for architectural preservation and understanding the spatial arrangement according to local Vāstu traditions.
                </p>
                <p>
                  The video includes a key <b>interview with the Temple In-charge Kurukal</b> (priest), capturing the temple's <b>oral history</b>, the local <b>Sthala Purāṇam</b> (legend), and the unique ritual practices associated with the deity Kāli. This preserves knowledge otherwise lost to text.
                </p>
                <Link href="https://www.youtube.com/embed/FGgyoYx-Q6E?si=OjfkGoEepz8umkSc" className="btn">
                  View Kurinjamunai Kali Kovil Video
                </Link>
              </div>
            </div>

           
          </section>

          {/* 5. List of temples we documented */}
          <section className="section">
            <h2>5. 📜 Temples Documented in Phase I</h2>
            <p>
              The first phase focused on recording four critically important temples known for their unique <b>Sthala Purāṇams</b> and architectural styles.
            </p>
            
            <div className="temple-list-grid">
                {templesDocumented.map((temple, index) => (
                    <div key={index} className="temple-item">
                        <img src={temple.photo} alt={temple.name} />
                        <h4>{temple.name}</h4>
                        <p>Phase I Completed</p>
                    </div>
                ))}
                {/* Placeholder for next phase */}
                <div className="temple-item next-phase">
                    <i className="fas fa-plus-circle"></i>
                    <h4>...And More in Phase II</h4>
                    <p>Seeking funding for additional sites.</p>
                </div>
            </div>

          </section>

          {/* 6. Who will be the benefactors */}
          <section className="section">
            <h2>6. 🌍 Who Benefits from This Archive?</h2>
            <p>
              The open-access nature of the documentation ensures maximum impact and reach across multiple sectors:
            </p>
            <div className="beneficiary-grid">
              <div className="beneficiary-item">
                <i className="fas fa-university support-icon"></i>
                <h3>Academics & Historians</h3>
                <p>Access to primary source material: inscriptions, Sthala Purāṇams, and validated historical timelines.</p>
              </div>
              <div className="beneficiary-item">
                <i className="fas fa-people-carry support-icon"></i>
                <h3>Local Community & Priests</h3>
                <p>A structured, digital record of their unique ritual practices and local temple lore for future generations.</p>
              </div>
              <div className="beneficiary-item">
                <i className="fas fa-gavel support-icon"></i>
                <h3>Archaeology & Conservation</h3>
                <p>Detailed architectural plans and material analyses to inform scientific and historically accurate restoration efforts.</p>
              </div>
              <div className="beneficiary-item">
                <i className="fas fa-globe-asia support-icon"></i>
                <h3>Global Diaspora</h3>
                <p>A digital connection for the global Tamil Hindu community to their ancestral temples and cultural heritage.</p>
              </div>
            </div>
          </section>

          <hr className="separator-line" />

          {/* 7. Conclusion */}
          <section className="cta-section fade-in">
            <h2>7. 🙏 Conclusion: Secure Our Shared Heritage</h2>
            <p>
              The completion of Phase I proves our methodology for rigorously documenting Sri Lanka's cultural treasures.
              The heritage of these ancient temples is not static; it is a living tradition under threat.
              By supporting this project, you ensure the spiritual and historical narrative of Batticaloa is never lost.
            </p>
            <Link href="https://wa.me/94766656007?text=I%27m%20interested%20in%20sponsoring%20your%20documentation%20project." className="btn">
              Support Phase II Documentation
            </Link>
          </section>

        </div>
        {/* --- Footer --- */}
        <footer className="footer">
          <p>&copy; 2018 - 2025 Batticaloa Heritage. All Rights Reserved. | Designed for Discovery and Preservation.</p>
        </footer>
        <style jsx global>{`

         
          .separator-line {
              border: 0;
              height: 1px;
              background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(139, 0, 0, 0.75), rgba(0, 0, 0, 0));
              margin: 40px 0;
          }

          /* ------------------- HERO ------------------- */
          .hero {
              background: linear-gradient(
                  rgba(0, 0, 0, 0.6),
                  rgba(0, 0, 0, 0.5)
              ),
              url("/ancient-temple-documentation.webp") center/cover; /* Original Placeholder */
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
            url("/ancient-temple-documentation.webp") center/cover; /* UPDATED Image Path */
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
          
          /* ------------------- SPONSOR LOGOS ------------------- */
          .sponsor-logos {
              display: flex;
              gap: 20px;
              align-items: center;
              margin: 20px 0;
              padding: 15px 0;
              border-top: 1px dashed #ccc;
              border-bottom: 1px dashed #ccc;
          }
          .sponsor-logos img {
              height: 50px;
              width: auto;
              object-fit: contain;
              opacity: 0.8;
              transition: opacity 0.3s;
          }
          .sponsor-logos img:hover {
              opacity: 1;
          }

          /* ------------------- OUTPUTS: VIDEO ------------------- */
          .video-placeholder-container {
              position: relative;
              width: 50%;
              padding-top: 40%; /* 16:9 Aspect Ratio (50% of the container width / 16 * 9) - Adjusted for flex layout */
              height: 0;
              overflow: hidden;
              margin-left: 20px; /* Adjust spacing in the flex layout */
          }

          .video-placeholder-container iframe {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border-radius: 8px;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }
          
          /* ------------------- OUTPUTS: PHOTO GALLERY ------------------- */
          .photo-gallery {
            text-align: center;
            margin-top: 60px;
          }

          .photo-gallery h3 {
            margin-bottom: 30px;
            color: var(--primary-color);
          }

          .photo-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr); /* 4 columns for 8 photos in 2 lines */
            gap: 15px;
          }

          .photo-item {
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s;
          }

          .photo-item:hover {
            transform: translateY(-5px);
          }

          .photo-item img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            display: block;
          }

          /* ------------------- TEMPLE LIST ------------------- */
          .temple-list-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
            margin-top: 40px;
            text-align: center;
          }

          .temple-item {
            background: #fff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
            border-top: 5px solid #ffcc00;
          }

          .temple-item img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 5px;
            margin-bottom: 15px;
          }
          
          .temple-item h4 {
            color: var(--primary-color);
            margin-bottom: 5px;
            font-size: 18px;
          }
          
          .temple-item p {
            font-size: 14px;
            color: #555;
            margin-bottom: 0;
          }
          
          .temple-item.next-phase {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 2px dashed #ccc;
            border-top: 5px solid #ccc;
            color: #777;
          }

          .temple-item.next-phase i {
            font-size: 30px;
            margin-bottom: 10px;
          }

          /* ------------------- BENEFICIARY GRID ------------------- */
          .beneficiary-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-top: 30px;
            text-align: center;
          }

          .beneficiary-item {
            background: #fff;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
          }

          .beneficiary-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }

          .beneficiary-item i {
            font-size: 40px;
            color: #ffcc00; /* Gold */
            margin-bottom: 15px;
          }

          .beneficiary-item h3 {
            color: var(--primary-color);
            margin-bottom: 10px;
          }

          .beneficiary-item p {
            font-size: 14px;
            color: #555;
            margin-bottom: 0;
          }

          /* ------------------- CTA SECTION ------------------- */
          .cta-section {
            background-color: #f0f0f0;
            padding: 50px;
            text-align: center;
            margin: 60px 0;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
          }

          .cta-section h2 {
            font-size: 36px;
            color: var(--primary-color);
            margin-bottom: 10px;
            border-bottom: none;
          }

          .cta-section p {
            font-size: 18px;
            margin-bottom: 30px;
          }

         
          /* ------------------- MEDIA QUERIES (Responsiveness) ------------------- */
          @media (max-width: 992px) {
            .project-card {
              flex-direction: column;
            }
            .project-card img,
            .project-card .project-content,
            .video-placeholder-container {
              width: 100%;
              height: auto;
              margin-left: 0;
            }
            .project-card.reverse {
                flex-direction: column;
            }
            .project-card.reverse img {
                order: initial;
            }
            .project-card.reverse .project-content {
                order: initial;
            }
            .video-placeholder-container {
                padding-top: 56.25%; /* Standard 16:9 */
                margin-bottom: 20px;
            }
            .photo-grid {
              grid-template-columns: repeat(2, 1fr); /* 2 columns on tablet/mobile */
            }
            .beneficiary-grid, .temple-list-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 576px) {
            .hero h1 {
              font-size: 36px;
            }
            .hero p {
              font-size: 16px;
            }
            h2 {
              font-size: 24px;
            }
            .photo-grid {
              grid-template-columns: 1fr; /* 1 column on small phone */
            }
            .beneficiary-grid, .temple-list-grid {
              grid-template-columns: 1fr;
            }
          }


        `}</style>
      </div>
    </div>
  );
}

// NOTE on Image Placeholders:
// I have used generic placeholders like /temple-gopuram-hero.webp, /temple-carving-detail.webp,
// /photo-1.webp, etc. You must replace these with your actual image file paths.