
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "All Books", href: "/books" },
        { name: "Add Book", href: "/add-book" },
        { name: "My Books", href: "/my-books" },
        { name: "My Borrows", href: "/my-borrows" },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
            <div className="mx-auto flex min-h-[72px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2 text-2xl font-extrabold tracking-tight text-blue-950"
                >
                    <span className="text-3xl">📚</span>
                    <span>
                        PSTU<span className="text-red-600">Reading<span className="text-green-600">CLUB</span></span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="whitespace-nowrap text-sm font-semibold text-gray-600 transition-colors duration-200 hover:text-green-600 xl:text-base"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Authentication */}
                <div className="hidden shrink-0 items-center gap-3 lg:flex">
                    <Link
                        href="/login"
                        className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-blue-950 transition hover:bg-gray-100"
                    >
                        Login
                    </Link>

                    <Link
                        href="/register"
                        className="rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
                    >
                        Register
                    </Link>
                </div>

                {/* Mobile & Tablet Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-gray-200 transition hover:bg-gray-100 lg:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <span
                        className={`h-0.5 w-5 rounded-full bg-blue-950 transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`h-0.5 w-5 rounded-full bg-blue-950 transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`h-0.5 w-5 rounded-full bg-blue-950 transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""
                            }`}
                    />
                </button>
            </div>

            {/* Mobile & Tablet Dropdown */}
            <div
                className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden ${menuOpen
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 border-transparent opacity-0"
                    }`}
            >
                <nav className="mx-auto flex max-w-[1440px] flex-col px-4 py-3 sm:px-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="border-b border-gray-100 py-3 text-sm font-semibold text-gray-700 transition hover:pl-2 hover:text-green-600"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="flex gap-3 py-4">
                        <Link
                            href="/login"
                            onClick={() => setMenuOpen(false)}
                            className="flex-1 rounded-lg border border-gray-300 py-2.5 text-center text-sm font-semibold text-blue-950 transition hover:bg-gray-100"
                        >
                            Login
                        </Link>

                        <Link
                            href="/register"
                            onClick={() => setMenuOpen(false)}
                            className="flex-1 rounded-lg bg-green-600 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-green-700"
                        >
                            Register
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
