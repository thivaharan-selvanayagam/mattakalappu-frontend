"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function ManuscriptProject() {
  return (
  <div>
    <Navbar />
    <div className="project-page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Palm Leaf Manuscript Translation</h1>
          <p>
            Reviving Batticaloa’s ancient wisdom by translating centuries-old 
            manuscripts into Modern Tamil and English.
          </p>
        </div>
      </section>

      <div className="container">

        {/* Palm Leaf Manuscripts Project overview*/}
          <section className="section">
            <div className="project-card">
              <img src="/scoller.webp" alt="Palm Leaf Manuscripts" />
              <div className="project-content">
                <h2>Project Overview</h2>
                <p>
                  For centuries, Batticaloa’s palm-leaf manuscripts preserved the intimate wisdom 
                  of our ancestors knowledge of traditional medicine, astrology, pooja rituals, 
                  poetry, philosophy, and more. Today, many manuscripts are digitized, 
                  but their content remains inaccessible to most people because the 
                  old script is difficult to read. Our project unlocks this knowledge by 
                  translating these rare palm-leaf texts.
                </p>
                <p><b>We are translating ancient palm-leaf manuscripts into:</b></p>

              <ul>
                  <li>✔ Modern Tamil (easy-to-read) </li>
                  <li>✔ English (for global access) </li>
              </ul>
              </div>
            </div>
          </section>

        {/* AUDIENCE BENEFITS */}
        <section className="section">
          <h2> Who Benefits?</h2>
          
          <div className="grid-2">
            <div className="benefit-card fade-up">
              <h3>A. Worldwide Tamil Comunity </h3>
              <p>Many living abroad feel a deep longing to reconnect with their roots.</p>

<h4>This project offers them:</h4>

    <ul>
        <li>Genuine access to authentic Batticaloa heritage</li>
        <li>Translations of manuscripts on astrology, medicine, rituals, literature</li>
        <li>A meaningful way to support cultural preservation</li>
        <li>Emotional connection to ancestral memory</li>
        <li>A personal treasure owning ancient wisdom in a readable format</li>
    </ul>

    <p>For Diaspora Tamils, this is not just a book.</p>

    <p>It is heritage they can finally hold in their hands.</p>
            </div>

            <div className="benefit-card fade-up">
              <h3>B. Researchers & Universities</h3>
    <ul>
        <li>Tamil Studies Departments</li>
        <li>Anthropology & Linguistics research</li>
        <li>History and Cultural Studies</li>
        <li>Religions & Ritual Practice courses</li>
    </ul>

    <h4>We provide:</h4>
    <ul>
        <li>&#10004; Accurate <b>word-by-word translations</b></li>
        <li>&#10004; Script comparison (Old Tamil &rarr; Modern Tamil &rarr; English)</li>
        <li>&#10004; Cultural and historical commentary</li>
        <li>&#10004; Verified references to Noolaham sources</li>
    </ul>

    <p>Researchers can immediately use these for <b>citations, teaching, academic papers, and cultural analysis.</b></p>
            </div>

            <div className="benefit-card fade-up">
              <h3>C. Collectors</h3>
              <p>Palm-leaf manuscripts are high-value cultural collectibles.</p>

    <h4>Collectors seek:</h4>
    <ul>
        <li>Authentic translations</li>
        <li>Historical commentary</li>
        <li>Cultural explanation</li>
        <li>Verified manuscript sources</li>
    </ul>

    <p>Our translations <b>increase the value</b> of manuscript collections, adding:</p>
    <ul>
        <li>&#10004; Meaning</li>
        <li>&#10004; Interpretation</li>
        <li>&#10004; Scholarly clarity</li>
    </ul>
            </div>

            <div className="benefit-card fade-up">
              <h3>D. Hindu Devotees</h3>
              <h4>Many manuscripts contain:</h4>
    <ul>
        <li>Murugan worship rituals</li>
        <li>Shiva temple histories</li>
        <li>Astrological rules</li>
        <li>Pooja procedures</li>
        <li>Traditional healing methods</li>
    </ul>

    <h4>Devotees value:</h4>
    <ul>
        <li>Authentic sacred texts</li>
        <li>Accurate modern translations</li>
        <li>Clear spiritual interpretation</li>
    </ul>

    <p>This project opens the door for them to learn forgotten spiritual knowledge with purity and accuracy.</p>
            </div>
          </div>
        </section>

        {/* 🛠 What We Actually Do */}
      <section className="section">
        <div className="project-card reverse">
         <img src="/manuscript_digital_translation_discussion.webp" alt="Batticaloa Food Documentary" />
          <div className="project-content">
            <h2>What We Actually Do</h2>
            <p>
              We take digitized Tamil manuscripts and translate them 
              into Modern Tamil and English. We add word-by-word meanings, 
              cultural notes, and expert research to make these old 
              texts fully understandable.
            </p>
            <ul>
              <li>✔ Manuscripts already digitized by Noolaham Foundation </li>
              <li>✔ Old Tamil → Modern Tamil translation</li>
              <li>✔ Modern Tamil → English translation</li>
              <li>✔ Word-by-word meaning + cultural and ritual context</li>
              <li>✔ Script comparison & research commentary</li>
            </ul>
          </div>
        </div>
      </section>

        
        {/* HOW WE PUBLISH */}
        <section className="section">
          <h2 className="section-title"> How We Publish</h2>
          
          <div className="grid-2">
            <div className="publish-card">
              <h3>1️⃣ Free Version – Summary</h3>
              <h4>Inclusions:</h4>
                <ul>
                    <li>Brief summary of each manuscript</li>
                    <li>Key knowledge</li>
                    <li>Cultural explanations</li>
                    <li>Historical notes</li>
                </ul>

                <p>&#128142; Completely free &amp; open to the community.</p>
            </div>

            <div className="publish-card">
              <h3>2️⃣ Paid Version – Full Translation</h3>
              <h4>Includes:</h4>
                <ul>
                    <li>Full line-by-line translation</li>
                    <li>Word meaning breakdown</li>
                    <li>Old Tamil &rarr; Modern Tamil &rarr; English</li>
                    <li>Notes, commentary, script comparison</li>
                    <li>Downloadable PDF / eBook</li>
                    <li>Suitable for researchers, collectors, and universities</li>
                </ul>
            </div>
            
          </div>
        </section>

        {/* 🌟 NEW: YOUR SUPPORT SECTION */}
          <section className="section">
            <div className="project-card">
              <img  src="/money_handle.webp" alt="Heritage Preservation" />
              <div className="project-content">
                <h2>How Paid Access Funds Preservation</h2>
                <p>
                  When you purchase the full translation, you are contributing directly to the 
                  long-term preservation of Batticaloa’s heritage. The proceeds from the paid version 
                  are allocated specifically to sustain and expand our cultural initiatives.
                </p>
                
                <h4>&#128142; Your purchase supports:</h4>
                <ul>
                  <li><b>Website maintenance</b> (ensuring the free version and resources remain accessible)</li>
                  <li><b>Field documentation</b> (interviewing elders, recording oral histories)</li>
                  <li><b>Cultural video documentaries</b> (producing high-quality, free educational content)</li>
                  <li><b>Heritage preservation</b> (funding long-term safeguarding of cultural artifacts and sites)</li>
                </ul>
                
              </div>
            </div>
          </section>
          {/* END NEW SECTION */}

        {/* SAMPLE TRANSLATION */}
        <section className="section">
          <h2 className="section-title"> Sample Translation</h2>
          <div className="grid-3">
                    <div className="translation-sample fade-in">
            <h4>Old Tamil Script</h4>
            <p>“நக்ஷத்திர அடிப்படையில் உடல் நோய்களின் காரண விளக்கம்…”</p>
          </div>

          <div className="translation-sample fade-in">
            <h4>Modern Tamil</h4>
            <p>“சில நக்ஷத்திரங்களில் பிறந்தவர்களுக்கு ஏற்படும் உடல் குறைபாடுகள் மற்றும்
சிகிச்சை முறைகள் பற்றிய விளக்கம்…”</p>
          </div>

          <div className="translation-sample fade-in">
            <h4>English</h4>
            <p>“An explanation of health conditions and traditional healing methods associated
with various birth stars…”</p>
          </div>
          </div>
        </section>

      
        {/* <section className="section card fade-in">
          <h2>🌱 Why Support This?</h2>
          <h4>Your support directly funds:</h4>
    <ul>
        <li>Field documentaries</li>
        <li>Elder interviews</li>
        <li>Batticaloa food culture studies</li>
        <li>Village cultural documentation</li>
        <li>Temple history research</li>
        <li>Website hosting &amp; maintenance</li>
        <li>Long-term heritage preservation efforts</li>
    </ul>

    <p>You are not buying a product &mdash;</p>
    <p><strong>you are saving the memory of our ancestors.</strong></p>
        </section>

       
        <section className="cta-section fade-in">
          <h2>🌟 Be Part of Preserving History</h2>
          <p>Support, sponsor, collaborate or follow our journey.</p>
          <button className="cta-button">Support the Project</button>
        </section> */}

      </div>
      {/* --- Footer --- */}
            <footer className="footer">
                <p>&copy; 2025 Batticaloa Heritage. All Rights Reserved. | Designed for Discovery and Preservation.</p>
            </footer>
      <style jsx global>{`

        /* ------------------- GLOBAL PAGE STYLE ------------------- */
.project-page {
  background: #f7f8fa;
  color: #222;
  font-family: "Inter", sans-serif;
}

/* ------------------- HERO ------------------- */
.hero {
    background: linear-gradient(
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.5)
    ),
    url("/manuscript.jpg") center/cover;
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

/* ------------------- LAYOUT ------------------- */
.container {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 50px 20px;
}

.section {
//   margin-bottom: 70px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 25px;
}

/* ------------------- CARDS ------------------- */
.card {
  background: #fff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  border: 1px solid #eee;
}

/* ------------------- GRID ------------------- */
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

@media (max-width: 768px) {
  .grid-2 {
    grid-template-columns: 1fr;
  }
}
.grid-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
}

@media (max-width: 768px) {
  .grid-3 {
    grid-template-columns: 1fr;
  }
  .grid-2,
  .grid-3 {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  
}
/* ------------------- BENEFIT CARDS ------------------- */
.benefit-card {
  background: #fff;
  padding: 25px;
  border-radius: 14px;
  border: 1px solid #ececec;
  transition: 0.3s;
}

.benefit-card h2{
  color: var(--primary-color);
}

.benefit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.08);
}

/* ------------------- PUBLISH CARDS ------------------- */
.publish-card {
  background: linear-gradient(135deg, #ffffff, #f4f5ff);
  padding: 30px;
  border-radius: 16px;
  border: 1px solid #e7e7e7;
  box-shadow: 0 6px 20px rgba(0,0,0,0.04);
}

/* ------------------- SAMPLE ------------------- */
.translation-sample {
  background: #fff;
  padding: 20px 25px;
  border-radius: 12px;
  margin-bottom: 15px;
  border-left: 4px solid #5b76ff;
}

/* ------------------- CTA ------------------- */
.cta-section {
  text-align: center;
  padding: 50px 20px;
  background: linear-gradient(135deg, #ffe9d8, #fff);
  border-radius: 20px;
  margin-top:70px;
}

.cta-button {
  margin-top: 20px;
  padding: 14px 35px;
  background: #111;
  color: #fff;
  border-radius: 50px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
}

.cta-button:hover {
  background: #000;
}

/* ------------------- FADE ANIMATIONS ------------------- */
.fade-in {
  animation: fadeIn 1.2s ease both;
}

.fade-up {
  animation: fadeUp 1.2s ease both;
}

@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ------------------- HIGHLIGHT TEXT ------------------- */
.highlight-text {
  font-weight: 600;
  margin-top: 15px;
  color: #111;
}


/* --- Footer --- */
                .footer {
                    background: var(--text-color);
                    color: var(--background-light);
                    text-align: center;
                    padding: 40px 20px;
                    font-size: 14px;
                }

      
      `}</style>
    </div>
    </div>
  );
}
