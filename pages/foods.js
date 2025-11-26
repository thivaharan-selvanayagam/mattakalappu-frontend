"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

<head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
      
    </head>
export default function FoodsProject() {
  return (
    
  <div>
    <Navbar />
    
    <div className="project-page">

      {/* HERO */}
      <section className="hero food-hero-bg"> {/* Custom CSS class for food BG */}
        <div className="hero-content">
          <h1>Flavours of Batticaloa – Documentary</h1>
          <p>
            Uncovering and recording Batticaloa’s disappearing traditional food culture,
            recipes, and oral histories before they are forgotten forever.
          </p>
        </div>
      </section>

      <div className="container">

        {/* Flavours of Batticaloa Project overview*/}
          <section className="section">
            <div className="project-card">
              <img src="/elders-cooking.webp" alt="Elder cooking traditional Batticaloa meal" />
              <div className="project-content">
                <h2>Project Overview: Culinary Heritage</h2>
                <p>
                  Batticaloa's food culture is a unique blend of coastal, 
                  lagoon, and agricultural traditions, passed down through 
                  generations. However, many of the oldest, most authentic 
                  recipes and cooking techniques are known only to a few 
                  elders and risk disappearing with them. This documentary 
                  project is an urgent effort to <b>preserve this intangible cultural heritage.</b>
                </p>
                <p><b>We are recording and documenting:</b></p>

              <ul>
                  <li>✔ Traditional recipes and ingredients known to elders</li>
                  <li>✔ Unique cooking methods and utensils </li>
                  <li>✔ Oral histories of food origins and cultural significance</li>
              </ul>
              </div>
            </div>
          </section>

        {/* AUDIENCE BENEFITS */}
        <section className="section">
          <h2 className="section-title"> Who Benefits from this Documentation?</h2>
          
          <div className="grid-2">
            <div className="benefit-card fade-up">
              <h3>A. Diaspora Families & Youth </h3>
              <p>For those who grew up away from Batticaloa or want to learn their grandparents' recipes.</p>

<h4>This project offers them:</h4>

    <ul>
        <li>Authentic, step-by-step video guides and written recipes</li>
        <li>A direct connection to ancestral flavours and traditions</li>
        <li>Preserved knowledge of traditional ingredients and their health benefits</li>
        <li>A meaningful way to teach the next generation</li>
        <li>The full, cultural story behind every dish</li>
    </ul>

    <p>This is more than a cookbook—it is a <b>culinary memory bank.</b></p>
            </div>

            <div className="benefit-card fade-up">
              <h3>B. Chefs & Food Researchers</h3>
    <ul>
        <li>Anthropologists studying South Asian culinary history</li>
        <li>Restaurateurs seeking authentic regional dishes</li>
        <li>Documentary filmmakers and cultural journalists</li>
        <li>Nutritionists studying ancient dietary practices</li>
    </ul>

    <h4>We provide:</h4>
    <ul>
        <li>&#10004; Detailed <b>ingredient lists and measurements</b></li>
        <li>&#10004; High-definition video recording of cooking processes</li>
        <li>&#10004; Contextual notes on festivals, rituals, and food pairings</li>
        <li>&#10004; Verified oral histories from the source</li>
    </ul>

    <p>Researchers gain immediate access to <b>primary, validated cultural data</b> for their work.</p>
            </div>

            <div className="benefit-card fade-up">
              <h3>C. Cultural Enthusiasts</h3>
              <p>Anyone who cherishes the diversity and history of food.</p>

    <h4>Enthusiasts enjoy:</h4>
    <ul>
        <li>High-quality, free-access short-form documentary videos</li>
        <li>Behind-the-scenes interviews with local culinary masters</li>
        <li>Insights into the history of staple ingredients (e.g., Samba Rice, Lagoon Fish)</li>
        <li>Discovering unique, regional-specific cooking styles</li>
    </ul>

    <p>Our documentation <b>turns recipes into history lessons</b>, adding depth and context.</p>
            </div>

            <div className="benefit-card fade-up">
              <h3>D. Local Community & Elders</h3>
              <h4>The project ensures the legacy of:</h4>
    <ul>
        <li>Traditional knowledge is respected and recorded accurately</li>
        <li>Elders are recognized as cultural masters</li>
        <li>A new generation is educated on their heritage</li>
        <li>Recipes remain accessible for future community use</li>
    </ul>

    <h4>Impact for Locals:</h4>
    <ul>
        <li>Authentic cultural preservation</li>
        <li>Increased pride in regional cuisine</li>
        <li>Opportunity for cultural tourism development</li>
    </ul>

    <p>We are creating a valuable community archive to secure their culinary identity.</p>
            </div>
          </div>
        </section>

        {/* 🛠 What We Actually Do */}
      <section className="section">
        <div className="project-card reverse">
         <img src="/recipe-interview.webp" alt="Elder being interviewed about a traditional recipe" />
          <div className="project-content">
            <h2>Our Documentation Process</h2>
            <p>
              Our team works closely with knowledgeable elders in various Batticaloa villages. The process involves respectful one-on-one video interviews, careful measurement of ingredients, and high-quality filming of the entire preparation, cooking, and serving process.
            </p>
            <ul>
              <li>✔ <b>Identify & Interview:</b> Locate elders who hold rare recipe knowledge.</li>
              <li>✔ <b>Detailed Documentation:</b> Record exact ingredients and preparation steps.</li>
              <li>✔ <b>Video Recording:</b> Film the cooking process with professional quality.</li>
              <li>✔ <b>Cultural Context:</b> Capture oral histories, proverbs, and rituals associated with the food.</li>
              <li>✔ <b>Post-Production:</b> Produce a free documentary and a paid detailed recipe book/guide.</li>
            </ul>
          </div>
        </div>
      </section>

        {/* HOW WE PUBLISH new*/}

        <section class="how-we-publish">
            <h2 class="publish-title">
                How We Publish the Knowledge
            </h2>
            <i class="fa-regular fa-bookmark"></i>
            
            <div class="publish-options-container">
                
                <div class="version-card free-version">
                    <h3 class="version-header">
                       <span class="header-icon-free">🔓</span> Free Version – Documentary Series
                    </h3>
                    
                    <p class="inclusions-label">Inclusions:</p>
                    <ul class="inclusions-list">
                        <li><span class="list-icon">✅</span> Short-form episodes of the documentary</li>
                        <li><span class="list-icon">✅</span> Featured interview excerpts with elders</li>
                        <li><span class="list-icon">✅</span> Highlights of cooking methods</li>
                        <li><span class="list-icon">✅</span> Cultural context and historical background</li>
                    </ul>
                    
                    <div class="tag-free">
                        <span class="tag-icon">🎁</span> Completely free on YouTube and public platforms.
                    </div>
                </div>
                
                <div class="version-card paid-version">
                    <h3 class="version-header">
                        <span class="header-icon-paid">🔒</span> Paid Version – Recipe & Research Guide
                    </h3>
                    
                    <p class="inclusions-label">Includes:</p>
                    <ul class="inclusions-list">
                        <li><span class="list-icon-paid">⭐</span> Full, verified, and measured recipes</li>
                        <li><span class="list-icon-paid">⭐</span> Detailed ingredient breakdown and sourcing</li>
                        <li><span class="list-icon-paid">⭐</span> Complete video footage of the cooking process</li>
                        <li><span class="list-icon-paid">⭐</span> Exclusive extended interviews and research commentary</li>
                        <li><span class="list-icon-paid">⭐</span> Downloadable PDF / eBook / High-Res Video</li>
                    </ul>
                    
                    <div class="tag-paid-audience">
                        Essential for serious cooks, food historians, and cultural institutions 
                        <span class="shield-icon">🎖️</span>
                    </div>
                </div>
                
            </div>
        </section>
        
      
        {/* 🌟 NEW: YOUR SUPPORT SECTION */}
          <section className="section">
            <div className="project-card">
              <img src="/money_handle.webp" alt="Heritage Preservation Funding" />
              <div className="project-content">
                <h2>How Paid Access Funds Preservation</h2>
                <p>
                  When you purchase the full Recipe & Research Guide, you are directly funding the **fieldwork and documentation costs** necessary to record this vanishing knowledge. The proceeds are allocated specifically to sustain and expand our cultural initiatives.
                </p>
                <h4> &#128142; Your purchase supports:</h4>
                
                <ul>
                  <li><b>Field Logistics</b> (transport, accommodation for fieldwork in remote villages)</li>
                  <li><b>Equipment</b> (cameras, audio recorders, lighting for high-quality documentation)</li>
                  <li><b>Remuneration for Elders</b> (a respectful payment for their time and invaluable knowledge)</li>
                  <li><b>Video Editing & Production</b> (turning raw footage into accessible content)</li>
                  <li><b>Long-term Archiving</b> (securing the digital files for future generations)</li>
                </ul>
                
              </div>
            </div>
          </section>
          {/* END NEW SECTION */}

        {/* SAMPLE CONTENT */}
        <section className="section">
          <h2 className="section-title"> Sample Recipe Breakdown: Prawn Puttu (இறால் புட்டு)</h2>
          <div className="grid-3">
                    <div className="translation-sample fade-in">
              <h4>Traditional Ingredient Focus</h4>
              <p><b>Main Ingredients:</b> Fresh Lagoon Prawns (Shrimp), Roasted Rice Flour, Coconut Milk, Kaffir Lime Leaves.</p>
            </div>

            <div className="translation-sample fade-in">
              <h4>Cultural Context Note</h4>
              <p>“Fish Puttu is a classic Batticaloa coastal dish, 
                traditionally prepared by women after the morning catch. 
                It showcases the region’s unique access to lagoon seafood 
                and is often served during special family gatherings.”</p>
            </div>

            <div className="translation-sample fade-in">
              <h4>Key Technique Highlight</h4>
              <p>“The proper method involves steaming the Puttu <b>before</b> incorporating 
              the prawn curry, ensuring the rice flour remains fluffy and absorbs 
              the gravy without becoming dense.”</p>
            </div>
          </div>
        </section>


        <section class="support-section">
              <div class="header-content">
                  <h2 class="section-title">
                      <span class="icon-leaf">🌿</span> Why Your Support Matters
                  </h2>
                  <p class="section-description">
                      Your generosity funds the critical fieldwork needed to record and archive the living heritage of Batticaloa’s food culture.
                  </p>
              </div>

              <div class="grid-container">
                  <div class="grid-item">
                      <i class="fas fa-video support-icon"></i>
                      <h3 class="item-title">Documentary Filming</h3>
                      <p class="item-caption">Capturing the complex cooking processes in high definition.</p>
                  </div>

                  <div class="grid-item">
                      <i class="fas fa-utensils support-icon"></i>
                      <h3 class="item-title">Recipe Documentation</h3>
                      <p class="item-caption">Precise measurement and verification of ingredients for accuracy.</p>
                  </div>

                  <div class="grid-item">
                      <i class="fas fa-map-marker-alt support-icon"></i>
                      <h3 class="item-title">Fieldwork Logistics</h3>
                      <p class="item-caption">Enabling our team to reach remote villages for interviews.</p>
                  </div>

                  <div class="grid-item">
                      <i class="fas fa-microphone support-icon"></i>
                      <h3 class="item-title">Elder Interviews</h3>
                      <p class="item-caption">Recording invaluable first-hand oral histories and food origins.</p>
                  </div>

                  <div class="grid-item">
                      <i class="fas fa-archive support-icon"></i>
                      <h3 class="item-title">Digital Archiving</h3>
                      <p class="item-caption">Securing the long-term preservation of all video and written records.</p>
                  </div>

                  <div class="grid-item">
                      <i class="fas fa-hands-helping support-icon"></i>
                      <h3 class="item-title">Community Support</h3>
                      <p class="item-caption">Providing respectful remuneration to the elders for their time and wisdom.</p>
                  </div>
              </div>
              <hr class="separator"></hr>
              <div class="closing-statement">
                  You are not buying a product — you are <b>saving a vanishing culture from extinction.</b>
              </div>
          </section> 

        <section className="cta-section fade-in">
          <h2>🌟 Taste the History. Preserve the Flavour.</h2>
          <p>Support our fieldwork, pre-order the guide, or follow the documentary series.</p>
          <button className="cta-button">Support the Project</button>
        </section>

      </div>
      {/* --- Footer --- */}
          <footer className="footer">
              <p>&copy; 2025 Batticaloa Heritage. All Rights Reserved. | Documenting Cultural Flavours for the Future.</p>
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
            url("/traditional-food-cover.webp") center/cover; /* Placeholder: Replace with /food-hero.jpg */
            text-align: center;
            color: var(--white);
            padding: 120px 20px;
        }

        /* Override Hero for Food Project with a specific image */
        .food-hero-bg {
          background: linear-gradient(
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.5)
          ),
          url("/traditional-food-cover.webp") center/cover; /* Assume you will use this image */
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