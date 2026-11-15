
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { authClient } from "../../lib/auth-client";

export default function MyBooks() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMyBooks = async () => {
            try {
                const { data, error } = await authClient.token();

                if (error || !data?.token) {
                    throw new Error("Please login first");
                }

                const res = await fetch("http://localhost:8000/my-books", {
                    headers: {
                        Authorization: `Bearer ${data.token}`,
                    },
                });

                if (!res.ok) {
                    throw new Error("Failed to fetch books");
                }

                const result = await res.json();
                setBooks(result);

            } catch (error) {
                toast.error(error.message || "Failed to fetch your books");
            } finally {
                setLoading(false);
            }
        };

        fetchMyBooks();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this book?"
        );

        if (!confirmDelete) return;

        try {
            const { data, error } = await authClient.token();

            if (error || !data?.token) {
                throw new Error("Please login first");
            }

            const res = await fetch(`http://localhost:8000/books/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${data.token}`,
                },
            });

            if (!res.ok) {
                throw new Error("Failed to delete book");
            }

            setBooks((previousBooks) =>
                previousBooks.filter((book) => book._id !== id)
            );
            toast.success("Book deleted successfully!");

        } catch (error) {
            toast.error(error.message || "Failed to delete book");
        }
    };

    if (loading) {
        return <p className="text-center py-20">Loading your books...</p>;
    }

    return (
        <main className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-[#1B4332] mb-8">
                My Books
            </h1>

            {books.length === 0 ? (
                <p className="text-gray-500">You havent added any books yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {books.map((book) => (
                        <div key={book._id} className="border rounded-xl p-4 shadow-sm">
                            <Image
                                src={book.image}
                                alt={book.title}
                                width={400}
                                height={250}
                                unoptimized
                                className="w-full h-52 object-cover rounded-lg"
                            />

                            <h2 className="text-xl font-bold mt-4">
                                {book.title}
                            </h2>

                            <p className="text-gray-600">{book.author}</p>
                            <p className="text-sm text-gray-500 mt-2">
                                {book.category}
                            </p>
                            <div className="flex gap-3 mt-4">
                                <button
                                    onClick={() => handleDelete(book._id)}
                                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() => window.location.href = `/edit-book/${book._id}`}
                                    className="bg-[#1B4332] text-white px-4 py-2 rounded-lg hover:bg-[#2D6A4F]"
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}
