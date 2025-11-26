"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

<head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
      
    </head>
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
          <h2 className="section-title"> Who Benefits?</h2>
          
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

        {/* HOW WE PUBLISH new*/}

        <section class="how-we-publish">
            <h2 class="publish-title">
                How We Publish
            </h2>
            <i class="fa-regular fa-bookmark"></i>
            
            <div class="publish-options-container">
                
                <div class="version-card free-version">
                    <h3 class="version-header">
                       <span class="header-icon-free">🔓</span> Free Version – Summary
                    </h3>
                    
                    <p class="inclusions-label">Inclusions:</p>
                    <ul class="inclusions-list">
                        <li><span class="list-icon">✅</span> Brief summary of each manuscript</li>
                        <li><span class="list-icon">✅</span> Key knowledge</li>
                        <li><span class="list-icon">✅</span> Cultural explanations</li>
                        <li><span class="list-icon">✅</span> Cultural explanations</li>
                        <li><span class="list-icon">✅</span> Historical notes</li>
                    </ul>
                    
                    <div class="tag-free">
                        <span class="tag-icon">🎁</span> Completely free & open to the community.
                    </div>
                </div>
                
                <div class="version-card paid-version">
                    <h3 class="version-header">
                        <span class="header-icon-paid">🔒</span> Paid Version – Full Translation
                    </h3>
                    
                    <p class="inclusions-label">Includes:</p>
                    <ul class="inclusions-list">
                        <li><span class="list-icon-paid">⭐</span> Full line-by-line translation</li>
                        <li><span class="list-icon-paid">⭐</span> Word meaning breakdown</li>
                        <li><span class="list-icon-paid">⭐</span> Old Tamil → Modern Tamil → English</li>
                        <li><span class="list-icon-paid">⭐</span> Notes, commentary, script comparison</li>
                        <li><span class="list-icon-paid">⭐</span> Downloadable PDF / eBook</li>
                    </ul>
                    
                    <div class="tag-paid-audience">
                        Suitable for researchers, collectors, and universities 
                        <span class="shield-icon">🎖️</span>
                    </div>
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
                <h4> &#128142; Your purchase supports:</h4>
                
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
            <p>“𑿅𑿇𑿗𑿘𑿙𑿚𑿛 𑿤𑿥𑿦𑿧𑿨 𑿐𑿑𑿒𑿓𑿔 𑿁𑿂𑿃𑿄…”</p>
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


        <section class="support-section">
              <div class="header-content">
                  <h2 class="section-title">
                      <span class="icon-leaf">🌿</span> Why Your Support Matters
                  </h2>
                  <p class="section-description">
                      Your generosity funds critical research and long-term preservation efforts for our ancestral heritage.
                  </p>
              </div>

              <div class="grid-container">
                  <div class="grid-item">
                      <i class="fas fa-camera support-icon"></i>
                      <h3 class="item-title">Field Documentaries</h3>
                      <p class="item-caption">Capturing the living traditions of our communities.</p>
                  </div>

                  <div class="grid-item">
                      <i class="fas fa-map-marked-alt support-icon"></i>
                      <h3 class="item-title">Temple History Research</h3>
                      <p class="item-caption">Uncovering the architectural and spiritual evolution of sacred sites.</p>
                  </div>

                  <div class="grid-item">
                      <i class="fas fa-home support-icon"></i>
                      <h3 class="item-title">Village Cultural Documentation</h3>
                      <p class="item-caption">Preserving the stories and customs of daily village life.</p>
                  </div>

                  <div class="grid-item">
                      <i class="fas fa-microphone-alt support-icon"></i>
                      <h3 class="item-title">Elder Interviews</h3>
                      <p class="item-caption">Recording invaluable first-hand histories and knowledge.</p>
                  </div>

                  <div class="grid-item">
                      <i class="fas fa-utensils support-icon"></i>
                      <h3 class="item-title">Batticaloa Food Culture</h3>
                      <p class="item-caption">Documenting unique regional culinary practices.</p>
                  </div>

                  <div class="grid-item">
                      <i class="fas fa-lock support-icon"></i>
                      <h3 class="item-title">Long-Term Preservation</h3>
                      <p class="item-caption">Securing the future of our digital and physical archives.</p>
                  </div>
              </div>
              <hr class="separator"></hr>
              <div class="closing-statement">
                  You are not buying a product — you are <b>saving the memory of our ancestors.</b>
              </div>
          </section> 

        <section className="cta-section fade-in">
          <h2>🌟 Be Part of Preserving History</h2>
          <p>Support, sponsor, collaborate or follow our journey.</p>
          <button className="cta-button">Support the Project</button>
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



      `}</style>
    </div>
    </div>
  );
}
