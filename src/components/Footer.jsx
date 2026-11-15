
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#102E23] px-4 pt-16 text-white sm:px-6 lg:px-10">

            {/* Decorative Background */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#B7E4C7]/10" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#B7E4C7]/10" />

            <div className="relative mx-auto max-w-[1440px]">

                <div className="grid grid-cols-1 gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-3"
                        >
                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B7E4C7] text-2xl shadow-lg transition duration-300 group-hover:-rotate-6">
                                📚
                            </span>

                            <span className="text-xl font-black tracking-tight text-white sm:text-2xl">
                                PSTU
                                <span className="text-[#B7E4C7]">Reading</span>
                                CLUB
                            </span>
                        </Link>

                        <p className="mt-6 max-w-xs text-sm leading-8 text-white/55">
                            A little world of books, stories and endless
                            possibilities. Discover your next favorite read
                            with BookNook.
                        </p>

                        <div className="mt-7 flex gap-3">
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-sm font-bold text-white/75 transition duration-300 hover:-translate-y-1 hover:border-[#B7E4C7] hover:bg-[#B7E4C7] hover:text-[#102E23]"
                            >
                                f
                            </a>

                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-sm font-bold text-white/75 transition duration-300 hover:-translate-y-1 hover:border-[#B7E4C7] hover:bg-[#B7E4C7] hover:text-[#102E23]"
                            >
                                ig
                            </a>

                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-sm font-bold text-white/75 transition duration-300 hover:-translate-y-1 hover:border-[#B7E4C7] hover:bg-[#B7E4C7] hover:text-[#102E23]"
                            >
                                in
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-base font-extrabold tracking-wide text-[#B7E4C7]">
                            Quick Links
                        </h3>

                        <ul className="space-y-4 text-sm text-white/55">
                            <li>
                                <Link href="/" className="inline-flex items-center gap-2 transition duration-300 hover:translate-x-1 hover:text-[#B7E4C7]">
                                    <span className="text-[#B7E4C7]/50">→</span>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/books" className="inline-flex items-center gap-2 transition duration-300 hover:translate-x-1 hover:text-[#B7E4C7]">
                                    <span className="text-[#B7E4C7]/50">→</span>
                                    All Books
                                </Link>
                            </li>
                            <li>
                                <Link href="/add-book" className="inline-flex items-center gap-2 transition duration-300 hover:translate-x-1 hover:text-[#B7E4C7]">
                                    <span className="text-[#B7E4C7]/50">→</span>
                                    Add Book
                                </Link>
                            </li>
                            <li>
                                <Link href="/my-books" className="inline-flex items-center gap-2 transition duration-300 hover:translate-x-1 hover:text-[#B7E4C7]">
                                    <span className="text-[#B7E4C7]/50">→</span>
                                    My Books
                                </Link>
                            </li>
                            <li>
                                <Link href="/my-borrows" className="inline-flex items-center gap-2 transition duration-300 hover:translate-x-1 hover:text-[#B7E4C7]">
                                    <span className="text-[#B7E4C7]/50">→</span>
                                    My Borrows
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Account */}
                    <div>
                        <h3 className="mb-6 text-base font-extrabold tracking-wide text-[#B7E4C7]">
                            Your Account
                        </h3>

                        <ul className="space-y-4 text-sm text-white/55">
                            <li>
                                <Link href="/login" className="inline-flex items-center gap-2 transition duration-300 hover:translate-x-1 hover:text-[#B7E4C7]">
                                    <span className="text-[#B7E4C7]/50">→</span>
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link href="/register" className="inline-flex items-center gap-2 transition duration-300 hover:translate-x-1 hover:text-[#B7E4C7]">
                                    <span className="text-[#B7E4C7]/50">→</span>
                                    Create Account
                                </Link>
                            </li>
                            <li>
                                <Link href="/books" className="inline-flex items-center gap-2 transition duration-300 hover:translate-x-1 hover:text-[#B7E4C7]">
                                    <span className="text-[#B7E4C7]/50">→</span>
                                    Explore Collection
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-6 text-base font-extrabold tracking-wide text-[#B7E4C7]">
                            Get in Touch
                        </h3>

                        <ul className="space-y-5 text-sm text-white/55">
                            <li className="flex items-start gap-3">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] text-base">
                                    ✉️
                                </span>
                                <span className="pt-2">
                                    support@booknook.com
                                </span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] text-base">
                                    📍
                                </span>
                                <span className="pt-2">
                                    Bangladesh
                                </span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] text-base">
                                    📖
                                </span>
                                <span className="pt-2">
                                    Read more. Discover more.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-7 text-center text-xs text-white/45 sm:flex-row sm:text-sm">
                    <p>
                        © 2026 PSTUReadingCLUB. All rights reserved.
                    </p>

                    <p>
                        Made with <span className="text-red-400">♥</span> for book lovers.
                    </p>
                </div>

            </div>
        </footer>
    );
}
