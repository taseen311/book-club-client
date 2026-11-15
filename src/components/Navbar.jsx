
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
                className="group flex items-center gap-2.5 rounded-full border border-[#D8F3DC] bg-[#F7F8F2] p-1.5 pr-3 transition-all duration-300 hover:border-[#B7E4C7] hover:bg-[#D8F3DC]"
            >
                {user.image ? (
                    <Image
                        src={user.image}
                        alt={user.name || "User"}
                        width={38}
                        height={38}
                        unoptimized
                        className="h-9 w-9 rounded-full object-cover ring-2 ring-white"
                    />
                ) : (
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1B4332] text-sm font-bold text-white">
                        {initials}
                    </span>
                )}

                <span className="max-w-[110px] truncate text-sm font-bold text-[#1B4332]">
                    {user.name}
                </span>

                <span className="text-[10px] text-[#2D6A4F]">
                    {dropdownOpen ? "▲" : "▼"}
                </span>
            </button>

            {dropdownOpen && (
                <div className="absolute right-0 top-full z-[60] mt-3 w-64 overflow-hidden rounded-2xl border border-[#D8F3DC] bg-white shadow-[0_15px_45px_rgba(27,67,50,0.15)]">
                    <div className="bg-[#F7F8F2] px-5 py-4">
                        <p className="truncate text-sm font-bold text-[#1B4332]">
                            {user.name}
                        </p>
                        <p className="mt-1 truncate text-xs text-gray-500">
                            {user.email}
                        </p>
                    </div>

                    <div className="p-2">
                        <Link
                            href="/profile"
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-[#F7F8F2] hover:text-[#1B4332]"
                        >
                            <span className="text-lg">👤</span>
                            My Profile
                        </Link>

                        <button
                            onClick={onLogout}
                            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold text-red-600 transition hover:bg-red-50"
                        >
                            <span className="text-lg">↪</span>
                            Logout
                        </button>
                    </div>
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
        <header className="sticky top-0 z-50 border-b border-[#D8F3DC]/80 bg-white/95 shadow-[0_4px_20px_rgba(27,67,50,0.05)] backdrop-blur-xl">

            <div className="mx-auto flex min-h-[78px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">

                {/* Logo */}
                <Link
                    href="/"
                    className="group flex shrink-0 items-center gap-2.5"
                >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1B4332] text-2xl shadow-md transition duration-300 group-hover:-rotate-6 group-hover:bg-[#2D6A4F]">
                        📚
                    </span>

                    <span className="text-lg font-black tracking-tight text-[#1B4332] sm:text-xl">
                        PSTU
                        <span className="text-[#2D6A4F]">Reading</span>
                        <span className="text-[#1B4332]">CLUB</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-1 rounded-full border border-[#D8F3DC]/70 bg-[#F7F8F2] p-1.5 lg:flex xl:gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="whitespace-nowrap rounded-full px-4 py-2.5 text-[13px] font-bold text-gray-600 transition-all duration-300 hover:bg-[#1B4332] hover:text-white xl:px-5 xl:text-sm"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Authentication */}
                <div className="hidden shrink-0 items-center gap-3 lg:flex">
                    {isPending ? (
                        <span className="text-sm font-medium text-gray-400">
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
                                className="rounded-full px-5 py-2.5 text-sm font-bold text-[#1B4332] transition hover:bg-[#F7F8F2]"
                            >
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="rounded-full bg-[#1B4332] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[#1B4332]/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#2D6A4F] hover:shadow-lg"
                            >
                                Join Now <span className="ml-1">→</span>
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-[#D8F3DC] bg-[#F7F8F2] transition hover:bg-[#D8F3DC] lg:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <span
                        className={`h-0.5 w-5 rounded-full bg-[#1B4332] transition-all duration-300 ${menuOpen
                                ? "translate-y-2 rotate-45"
                                : ""
                            }`}
                    />
                    <span
                        className={`h-0.5 w-5 rounded-full bg-[#1B4332] transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`h-0.5 w-5 rounded-full bg-[#1B4332] transition-all duration-300 ${menuOpen
                                ? "-translate-y-2 -rotate-45"
                                : ""
                            }`}
                    />
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`overflow-visible border-t border-[#D8F3DC]/70 bg-white transition-all duration-300 lg:hidden ${menuOpen
                        ? "max-h-[600px] opacity-100"
                        : "max-h-0 overflow-hidden border-transparent opacity-0"
                    }`}
            >
                <nav className="mx-auto flex max-w-[1440px] flex-col px-4 py-4 sm:px-6">

                    {navLinks.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold text-gray-700 transition hover:bg-[#F7F8F2] hover:text-[#1B4332] ${index !== 0 ? "mt-1" : ""
                                }`}
                        >
                            {link.name}
                            <span className="text-[#2D6A4F]">→</span>
                        </Link>
                    ))}

                    <div className="mt-3 border-t border-[#D8F3DC] pt-4">
                        {isPending ? (
                            <p className="px-2 text-sm text-gray-400">
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
                                    className="flex-1 rounded-full border border-[#1B4332] py-3 text-center text-sm font-bold text-[#1B4332] transition hover:bg-[#F7F8F2]"
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/register"
                                    onClick={() => setMenuOpen(false)}
                                    className="flex-1 rounded-full bg-[#1B4332] py-3 text-center text-sm font-bold text-white transition hover:bg-[#2D6A4F]"
                                >
                                    Join Now →
                                </Link>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
}


