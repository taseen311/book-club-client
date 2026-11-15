
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LatestBooks() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8000/books")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch books");
                }
                return res.json();
            })
            .then((data) => {
                setBooks(data);
            })
            .catch((error) => {
                console.error("Error loading books:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <section className="relative overflow-hidden bg-[#F7F8F2] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
            {/* Decorative Background */}
            <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#D8F3DC]/50 blur-3xl" />
            <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#B7E4C7]/20 blur-3xl" />

            <div className="relative mx-auto max-w-[1440px]">

                {/* Section Heading */}
                <div className="mb-14 flex flex-col items-center text-center">
                    <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2D6A4F]/15 bg-white px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-[#2D6A4F] shadow-sm sm:text-xs">
                        <span className="h-2 w-2 rounded-full bg-[#52B788]" />
                        DISCOVER YOUR NEXT READ
                    </span>

                    <h2 className="text-4xl font-extrabold tracking-tight text-[#1B4332] sm:text-5xl lg:text-6xl">
                        Stories Worth
                        <span className="block mt-2 text-[#40916C]">
                            Discovering.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                        Explore our newest collection and discover remarkable
                        stories, fresh perspectives, and knowledge waiting
                        between the pages.
                    </p>

                    <div className="mt-7 h-1 w-16 rounded-full bg-[#74C69D]" />
                </div>

                {/* Loading */}
                {loading && (
                    <div className="flex justify-center py-20">
                        <span className="loading loading-spinner loading-lg text-[#2D6A4F]"></span>
                    </div>
                )}

                {/* Books Grid */}
                {!loading && books.length > 0 && (
                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                        {books.slice(0, 6).map((book) => (
                            <div
                                key={book._id}
                                className="group overflow-hidden rounded-[24px] border border-[#1B4332]/[0.08] bg-white shadow-[0_8px_35px_rgba(27,67,50,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(27,67,50,0.13)]"
                            >
                                {/* Book Image */}
                                <div className="relative h-[280px] overflow-hidden bg-[#D8F3DC] sm:h-[310px]">
                                    {book.image ? (
                                        <Image
                                            src={book.image}
                                            alt={book.title}
                                            fill
                                            unoptimized
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="flex h-full items-center justify-center text-6xl">
                                            📚
                                        </div>
                                    )}

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#163B2D]/45 via-transparent to-transparent opacity-70" />

                                    <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#1B4332] shadow-sm backdrop-blur-md">
                                        {book.category}
                                    </span>

                                    <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs font-medium text-white">
                                        <span className="h-2 w-2 rounded-full bg-[#B7E4C7]" />
                                        Available in our collection
                                    </div>
                                </div>

                                {/* Book Information */}
                                <div className="p-6 sm:p-7">
                                    <div className="mb-4 flex items-center justify-between">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#40916C]">
                                            FEATURED COLLECTION
                                        </span>

                                        <span className="text-xl text-[#74C69D]">
                                            ✦
                                        </span>
                                    </div>

                                    <h3 className="line-clamp-1 text-xl font-bold tracking-tight text-[#1B4332] transition-colors duration-300 group-hover:text-[#40916C] sm:text-2xl">
                                        {book.title}
                                    </h3>

                                    <p className="mt-3 text-sm text-gray-500">
                                        Written by{" "}
                                        <span className="font-semibold text-[#2D6A4F]">
                                            {book.author}
                                        </span>
                                    </p>

                                    <div className="my-6 h-px bg-[#1B4332]/10" />

                                    <Link
                                        href={`/books/${book._id}`}
                                        className="group/btn flex min-h-12 w-full items-center justify-between rounded-xl bg-[#1B4332] px-5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#2D6A4F]"
                                    >
                                        <span>Explore This Book</span>

                                        <span className="text-lg transition-transform duration-300 group-hover/btn:translate-x-1">
                                            →
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {!loading && books.length === 0 && (
                    <div className="rounded-3xl border border-dashed border-[#2D6A4F]/30 bg-white/70 px-5 py-16 text-center">
                        <div className="mb-4 text-5xl">📚</div>
                        <h3 className="text-xl font-bold text-[#1B4332]">
                            Your next favorite book is on its way!
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            No books available yet. Check back soon.
                        </p>
                    </div>
                )}

                {/* See All Books */}
                <div className="mt-14 flex justify-center">
                    <Link
                        href="/books"
                        className="group inline-flex min-h-14 items-center gap-4 rounded-full border-2 border-[#1B4332] px-8 text-sm font-bold text-[#1B4332] transition-all duration-300 hover:bg-[#1B4332] hover:text-white"
                    >
                        Explore All Books

                        <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </Link>
                </div>

            </div>
        </section>
    );
}
