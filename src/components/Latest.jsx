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
        <section className="bg-[#F7F8F2] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-[1440px]">

                {/* Section Heading */}
                <div className="mb-10 text-center">
                    <p className="mb-3 text-sm font-bold tracking-[0.2em] text-[#2D6A4F]">
                        DISCOVER YOUR NEXT READ
                    </p>

                    <h2 className="text-3xl font-extrabold text-[#1B4332] sm:text-4xl">
                        Latest <span className="text-[#2D6A4F]">Books</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                        Explore our newest collection and discover stories
                        waiting to be read.
                    </p>
                </div>

                {/* Loading */}
                {loading && (
                    <div className="flex justify-center py-16">
                        <span className="loading loading-spinner loading-lg text-[#2D6A4F]"></span>
                    </div>
                )}

                {/* Books Grid */}
                {!loading && books.length > 0 && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                        {books.map((book) => (
                            <div
                                key={book._id}
                                className="group overflow-hidden rounded-2xl border border-[#1B4332]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                {/* Book Image */}
                                <div className="relative h-64 overflow-hidden bg-[#D8F3DC]">
                                    {book.image ? (
                                        <Image
                                            src={book.image}
                                            alt={book.title}
                                            fill
                                            unoptimized
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="flex h-full items-center justify-center text-5xl">
                                            📚
                                        </div>
                                    )}
                                </div>

                                {/* Book Information */}
                                <div className="p-6">
                                    <span className="rounded-full bg-[#D8F3DC] px-3 py-1 text-xs font-semibold text-[#1B4332]">
                                        {book.category}
                                    </span>

                                    <h3 className="mt-4 line-clamp-1 text-xl font-bold text-[#1B4332]">
                                        {book.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-gray-500">
                                        By {book.author}
                                    </p>

                                    <Link
                                        href={`/books/${book._id}`}
                                        className="btn mt-6 w-full rounded-xl border-0 bg-[#1B4332] text-white hover:bg-[#2D6A4F]"
                                    >
                                        View Details →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {!loading && books.length === 0 && (
                    <p className="py-12 text-center text-gray-500">
                        No books available yet.
                    </p>
                )}

                {/* See All Books */}
                <div className="mt-12 text-center">
                    <Link
                        href="/books"
                        className="btn rounded-full border-2 border-[#1B4332] bg-transparent px-8 text-[#1B4332] hover:bg-[#1B4332] hover:text-white"
                    >
                        Explore All Books →
                    </Link>
                </div>

            </div>
        </section>
    );
}