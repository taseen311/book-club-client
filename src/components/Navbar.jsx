
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "../lib/auth-client";

function UserMenu({ user, onLogout }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const initials = user.name
        ? user.name.charAt(0).toUpperCase()
        : "U";

    return (
        <div className="relative">
            <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-3 rounded-full border border-[#D8F3DC] bg-[#F7F8F2] p-1.5 pr-3 transition hover:bg-[#D8F3DC]"
            >
                {user.image ? (
                    <Image
                        src={user.image}
                        alt={user.name || "User"}
                        width={38}
                        height={38}
                        unoptimized
                        className="h-9 w-9 rounded-full object-cover"
                    />
                ) : (
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1B4332] font-bold text-white">
                        {initials}
                    </span>
                )}

                <span className="max-w-[110px] truncate text-sm font-semibold text-[#1B4332]">
                    {user.name}
                </span>

                <span className="text-xs text-[#2D6A4F]">
                    {dropdownOpen ? "▲" : "▼"}
                </span>
            </button>

            {dropdownOpen && (
                <div className="absolute right-0 top-full z-50 mt-3 w-52 overflow-hidden rounded-xl border border-gray-100 bg-white py-2 shadow-xl">
                    <div className="border-b border-gray-100 px-4 py-3">
                        <p className="truncate font-semibold text-[#1B4332]">
                            {user.name}
                        </p>
                        <p className="truncate text-xs text-gray-500">
                            {user.email}
                        </p>
                    </div>

                    <Link
                        href="/profile"
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-3 text-sm text-gray-700 transition hover:bg-[#F7F8F2] hover:text-[#2D6A4F]"
                    >
                        My Profile
                    </Link>

                    <button
                        onClick={onLogout}
                        className="w-full px-4 py-3 text-left text-sm font-semibold text-red-600 transition hover:bg-red-50"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}

export default function Navbar() {
    const router = useRouter();

    const [menuOpen, setMenuOpen] = useState(false);

    const [loggingOut, setLoggingOut] = useState(false);

    const { data: session, isPending } = authClient.useSession();

    const user = session?.user;

    const publicLinks = [
        { name: "Home", href: "/" },
        { name: "All Books", href: "/books" },
    ];

    const privateLinks = [
        { name: "Add Book", href: "/add-book" },
        { name: "My Books", href: "/my-books" },
        { name: "My Borrows", href: "/my-borrows" },
    ];

    const navLinks = user
        ? [...publicLinks, ...privateLinks]
        : publicLinks;

    const handleLogout = async () => {
        setLoggingOut(true);

        try {
            await authClient.signOut();
            setMenuOpen(false);
            router.push("/");
            router.refresh();
        } catch (error) {
            console.error("Logout error:", error);
        } finally {
            setLoggingOut(false);
        }
    };

    return (
        <header className="sticky top-0 z-50 border-b border-[#D8F3DC] bg-white/95 shadow-sm backdrop-blur-md">

            <div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2 text-xl font-extrabold tracking-tight text-[#1B4332] sm:text-2xl"
                >
                    <span className="text-3xl">📚</span>
                    <span>
                        PSTU<span className="text-[#2D6A4F]">Reading</span>
                        <span className="text-[#1B4332]">CLUB</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="whitespace-nowrap text-sm font-semibold text-gray-600 transition hover:text-[#2D6A4F] xl:text-base"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Authentication */}
                <div className="hidden shrink-0 items-center gap-3 lg:flex">

                    {isPending ? (
                        <span className="text-sm text-gray-400">
                            Loading...
                        </span>
                    ) : user ? (
                        <UserMenu
                            user={user}
                            onLogout={handleLogout}
                        />
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="rounded-xl border border-[#1B4332] px-5 py-2.5 text-sm font-semibold text-[#1B4332] transition hover:bg-[#F7F8F2]"
                            >
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="rounded-xl bg-[#1B4332] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#2D6A4F]"
                            >
                                Join Now
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-[#D8F3DC] transition hover:bg-[#F7F8F2] lg:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <span
                        className={`h-0.5 w-5 rounded-full bg-[#1B4332] transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`h-0.5 w-5 rounded-full bg-[#1B4332] transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`h-0.5 w-5 rounded-full bg-[#1B4332] transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""
                            }`}
                    />
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`overflow-visible border-t border-[#D8F3DC] bg-white transition-all duration-300 lg:hidden ${menuOpen
                    ? "max-h-[600px] opacity-100"
                    : "max-h-0 overflow-hidden border-transparent opacity-0"
                    }`}
            >
                <nav className="mx-auto flex max-w-[1440px] flex-col px-4 py-3 sm:px-6">

                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="border-b border-gray-100 py-3 text-sm font-semibold text-gray-700 transition hover:pl-2 hover:text-[#2D6A4F]"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="py-4">
                        {isPending ? (
                            <p className="text-sm text-gray-400">
                                Loading account...
                            </p>
                        ) : user ? (
                            <div className="flex flex-col gap-3">
                                <UserMenu
                                    user={user}
                                    onLogout={handleLogout}
                                />

                                {loggingOut && (
                                    <p className="text-xs text-gray-500">
                                        Logging out...
                                    </p>
                                )}
                            </div>
                        ) : (
                            <div className="flex gap-3">
                                <Link
                                    href="/login"
                                    onClick={() => setMenuOpen(false)}
                                    className="flex-1 rounded-xl border border-[#1B4332] py-2.5 text-center text-sm font-semibold text-[#1B4332] transition hover:bg-[#F7F8F2]"
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/register"
                                    onClick={() => setMenuOpen(false)}
                                    className="flex-1 rounded-xl bg-[#1B4332] py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#2D6A4F]"
                                >
                                    Join Now
                                </Link>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
}

