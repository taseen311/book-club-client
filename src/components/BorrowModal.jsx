
"use client";

import { useState } from "react";

export default function BorrowModal({ book, onClose }) {
    const [borrowDate, setBorrowDate] = useState("");
    const [returnDate, setReturnDate] = useState("");

    const handleBorrow = async (e) => {
        e.preventDefault();

        const borrowInfo = {
            bookId: book._id,
            userEmail: "",
            borrowDate,
            returnDate,
        };

        try {
            const res = await fetch("http://localhost:8000/borrows", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(borrowInfo),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                return;
            }

            alert("Book borrowed successfully!");
            onClose();

        } catch (error) {
            console.error("Borrow error:", error);
            alert("Something went wrong!");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl">

                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-2xl font-bold text-[#1B4332]">
                        Borrow This Book
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-gray-500 text-2xl"
                    >
                        ×
                    </button>
                </div>

                <p className="font-semibold text-gray-700 mb-4">
                    {book.title}
                </p>

                <form onSubmit={handleBorrow} className="space-y-4">

                    <div>
                        <label className="label font-medium">
                            Borrow Date
                        </label>
                        <input
                            type="date"
                            value={borrowDate}
                            onChange={(e) => setBorrowDate(e.target.value)}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="label font-medium">
                            Return Date
                        </label>
                        <input
                            type="date"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                            className="input input-bordered w-full"
                            min={borrowDate || undefined}
                            required
                        />
                    </div>

                    <div className="flex gap-3 pt-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="btn btn-outline flex-1"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="btn bg-[#1B4332] text-white hover:bg-[#2D6A4F] flex-1"
                        >
                            Confirm Borrow
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
