
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#102E23] px-4 pt-14 text-white sm:px-6 lg:px-10">
            <div className="mx-auto max-w-[1440px]">

                <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="flex shrink-0 items-center gap-2 text-2xl font-extrabold tracking-tight text-blue-950"
                        >
                            <span className="text-3xl text-green-600">📚</span>
                            <span className="text-3xl text-green-600">
                                PSTU<span className="text-red-600">Reading<span className="text-green-600">CLUB</span></span>
                            </span>
                        </Link>

                        <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
                            A little world of books, stories and endless
                            possibilities. Discover your next favorite read
                            with BookNook.
                        </p>

                        <div className="mt-6 flex gap-3">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-bold transition hover:border-[#B7E4C7] hover:bg-[#B7E4C7] hover:text-[#102E23]">
                                f
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-bold transition hover:border-[#B7E4C7] hover:bg-[#B7E4C7] hover:text-[#102E23]">
                                ig
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-bold transition hover:border-[#B7E4C7] hover:bg-[#B7E4C7] hover:text-[#102E23]">
                                in
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-lg font-bold text-[#B7E4C7]">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm text-white/60">
                            <li><Link href="/" className="transition hover:text-[#B7E4C7]">Home</Link></li>
                            <li><Link href="/books" className="transition hover:text-[#B7E4C7]">All Books</Link></li>
                            <li><Link href="/add-book" className="transition hover:text-[#B7E4C7]">Add Book</Link></li>
                            <li><Link href="/my-books" className="transition hover:text-[#B7E4C7]">My Books</Link></li>
                            <li><Link href="/my-borrows" className="transition hover:text-[#B7E4C7]">My Borrows</Link></li>
                        </ul>
                    </div>

                    {/* Account */}
                    <div>
                        <h3 className="mb-5 text-lg font-bold text-[#B7E4C7]">
                            Your Account
                        </h3>

                        <ul className="space-y-3 text-sm text-white/60">
                            <li><Link href="/login" className="transition hover:text-[#B7E4C7]">Login</Link></li>
                            <li><Link href="/register" className="transition hover:text-[#B7E4C7]">Create Account</Link></li>
                            <li><Link href="/books" className="transition hover:text-[#B7E4C7]">Explore Collection</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-lg font-bold text-[#B7E4C7]">
                            Get in Touch
                        </h3>

                        <ul className="space-y-4 text-sm text-white/60">
                            <li className="flex items-start gap-3">
                                <span>✉️</span>
                                <span>support@booknook.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span>📍</span>
                                <span>Bangladesh</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span>📖</span>
                                <span>Read more. Discover more.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 py-6 text-center text-xs text-white/50 sm:flex sm:items-center sm:justify-between sm:text-sm">
                    <p>© 2026 PSTUReadingCLUB . All rights reserved.</p>
                    <p className="mt-2 sm:mt-0">
                        Made with ❤️ for book lovers.
                    </p>
                </div>

            </div>
        </footer>
    );
}
