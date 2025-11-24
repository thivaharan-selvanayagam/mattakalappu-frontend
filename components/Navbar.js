"use client";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import "./components/Navbar.js";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <Link href="/" className="logo">Batticaloa Heritage</Link>

            {/* --- Hamburger Menu Button (Mobile) --- */}
            <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            {/* --- Navigation Links --- */}
            <div className={`nav-links ${menuOpen ? "show" : ""}`}>
                <Link href="/projects">Projects</Link>
                <Link href="/explore">Explore</Link>
                <Link href="/stories">Stories</Link>
                <Link href="/villages">Villages</Link>
                <Link href="/shop">Shop</Link>
            </div>
        </nav>
    );
}
