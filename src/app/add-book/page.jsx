
"use client";

import { useState } from "react";

export default function AddBookPage() {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        category: "",
        image: "",
        description: "",
        totalCopies: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:8000/books", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    totalCopies: Number(formData.totalCopies),
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Failed to add book");
            }

            console.log("Book added successfully:", data);

            setFormData({
                title: "",
                author: "",
                category: "",
                image: "",
                description: "",
                totalCopies: "",
            });

        } catch (error) {
            console.error("Error adding book:", error);
        }
    };


    return (
        <main className="min-h-screen bg-[#F7F8F2] px-4 py-16 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-3xl">
                <div className="mb-10 text-center">
                    <p className="mb-3 text-sm font-bold tracking-[0.25em] text-[#2D6A4F]">
                        SHARE YOUR FAVORITE READS
                    </p>

                    <h1 className="text-3xl font-bold text-[#1B4332] sm:text-4xl">
                        Add a New Book
                    </h1>

                    <p className="mt-3 text-gray-600">
                        Add a book to the PSTU Reading Club collection.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 rounded-2xl bg-white p-6 shadow-sm sm:p-10"
                >
                    <div>
                        <label className="mb-2 block font-semibold text-[#1B4332]">
                            Book Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter book title"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-semibold text-[#1B4332]">
                            Author Name
                        </label>
                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            placeholder="Enter author name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-semibold text-[#1B4332]">
                            Category
                        </label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="" disabled>
                                Select a category
                            </option>
                            <option value="Fiction">Fiction</option>
                            <option value="Science">Science</option>
                            <option value="History">History</option>
                            <option value="Kids">Kids</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block font-semibold text-[#1B4332]">
                            Book Image URL
                        </label>
                        <input
                            type="url"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="Paste book image URL"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-semibold text-[#1B4332]">
                            Short Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Write a short description about the book"
                            className="textarea textarea-bordered min-h-32 w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-semibold text-[#1B4332]">
                            Total Copies
                        </label>
                        <input
                            type="number"
                            name="totalCopies"
                            value={formData.totalCopies}
                            onChange={handleChange}
                            placeholder="Enter number of copies"
                            min="1"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn w-full border-0 bg-[#1B4332] text-white hover:bg-[#2D6A4F]"
                    >
                        Add Book
                    </button>
                </form>
            </div>
        </main>
    );
}
