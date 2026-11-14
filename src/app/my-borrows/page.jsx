
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { authClient } from "../../lib/auth-client";

export default function MyBorrows() {
    const [borrows, setBorrows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBorrows = async () => {
            try {
                const { data, error } = await authClient.token();

                if (error || !data?.token) {
                    throw new Error("Please login first");
                }

                const res = await fetch("http://localhost:8000/borrows", {
                    headers: {
                        Authorization: `Bearer ${data.token}`,
                    },
                });

                if (!res.ok) {
                    throw new Error("Failed to fetch borrows");
                }

                const result = await res.json();
                setBorrows(result);

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchBorrows();
    }, []);

    const handleReturn = async (id) => {
        try {
            const { data, error } = await authClient.token();

            if (error || !data?.token) {
                throw new Error("Please login first");
            }

            const res = await fetch(`http://localhost:8000/borrows/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${data.token}`,
                },
            });

            if (!res.ok) {
                throw new Error("Failed to return book");
            }

            setBorrows((previousBorrows) =>
                previousBorrows.filter((borrow) => borrow._id !== id)
            );

        } catch (error) {
            console.error(error);
        }
    };

    if (loading) {
        return <p className="text-center py-20">Loading your borrows...</p>;
    }

    return (
        <main className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-[#1B4332] mb-8">
                My Borrows
            </h1>

            {borrows.length === 0 ? (
                <p className="text-gray-500">
                    You havent borrowed any books yet.
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {borrows.map((borrow) => (
                        <div
                            key={borrow._id}
                            className="border rounded-xl p-4 shadow-sm"
                        >
                            <Image
                                src={borrow.bookImage?.trim()}
                                alt={borrow.bookTitle}
                                width={400}
                                height={250}
                                unoptimized
                                className="w-full h-52 object-cover rounded-lg"
                            />

                            <h2 className="text-xl font-bold mt-4">
                                {borrow.bookTitle}
                            </h2>

                            <p className="text-gray-600 mt-2">
                                Borrow Date: {borrow.borrowDate}
                            </p>

                            <p className="text-gray-600 mt-1">
                                Return Date: {borrow.returnDate}
                            </p>
                            <button
                                onClick={() => handleReturn(borrow._id)}
                                className="bg-[#1B4332] text-white px-4 py-2 rounded-lg hover:bg-[#2D6A4F] mt-4 w-full"
                            >
                                Return Book
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}
