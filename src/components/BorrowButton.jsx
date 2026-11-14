
"use client";

import { useState } from "react";
import BorrowModal from "./BorrowModal";

export default function BorrowButton({ book }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                disabled={book.totalCopies <= 0}
                className="btn bg-[#1B4332] text-white hover:bg-[#2D6A4F] mt-6 disabled:bg-gray-400"
            >
                {book.totalCopies > 0 ? "Borrow This Book" : "Not Available"}
            </button>

            {isModalOpen && (
                <BorrowModal
                    book={book}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    );
}
