"use client";

import Link from "next/link";
import ThemeToggle from "./ui/ThemeToggle";

export default function Header() {
    return (
        <header
            className="sticky top-0 z-50 backdrop-blur border-b"
            style={{
                background: "var(--header-bg)",
                borderColor: "var(--border)",
            }}
        >
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

                <Link href="/" className="text-xl font-semibold tracking-tight">
                    CCARRE
                </Link>

                <nav className="hidden md:flex gap-8 text-sm">
                    <Link href="/realisations" className="link-animated">
                        Réalisations
                    </Link>
                    <Link href="/blog" className="link-animated">
                        Blog
                    </Link>
                    <Link href="/contact" className="link-animated">
                        Contact
                    </Link>
                </nav>

                <ThemeToggle />

            </div>
        </header>
    );
}
