// New Next.js Page Component: manus1.js (no Express)
// Uses heritage gold (#B8913F) + deep green (#0F5F3D)
// Modern layout matching your previous structure but redesigned based on the new design you provided.

"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function ManuscriptPage() {
  return (
    <div className="manus-page">
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Palm Leaf Manuscript Translation</h1>
          <p>Reviving Batticaloa’s ancient wisdom by translating centuries-old manuscripts into Modern Tamil and English.</p>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
        {/* PROJECT OVERVIEW — 2 COLUMN RESPONSIVE */}
          <section className="section fade-in rounded-2xl bg-white shadow-lg px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* LEFT COLUMN */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#0F5F3D] flex items-center gap-2">
                  <span>📘</span> Project Overview
                </h2>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  For centuries, Batticaloa’s palm-leaf manuscripts safeguarded the deep wisdom of our ancestors—covering traditional medicine, astrology, pooja rituals, poetry, philosophy, and more.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Although many manuscripts have been digitized today, most remain inaccessible because their ancient script is difficult for modern readers to understand.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Our project brings this hidden knowledge back to life by translating these rare palm-leaf texts.
                </p>
              </div>

              {/* RIGHT COLUMN — HIGHLIGHT CARD */}
              <div className="bg-[#0F5F3D] text-white rounded-2xl p-10 shadow-md">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  ✨ This is where our project begins.
                </h3>

                <p className="mb-4 text-[17px]">
                  We are translating Batticaloa’s ancient manuscripts into:
                </p>

                <ul className="space-y-4 text-[17px]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#B8913F] text-xl">✔</span>
                    Modern Tamil (everyday, easy-to-read)
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-[#B8913F] text-xl">✔</span>
                    English (for global readers)
                  </li>
                </ul>

                <p className="mt-8 font-semibold text-lg border-t border-white/30 pt-4">
                  Our mission is to unlock centuries of wisdom and make Batticaloa’s heritage accessible to the world.
                </p>
              </div>

            </div>
          </section>


    </div>
  );
}