
"use client";

import { authClient } from "../../lib/auth-client";
import { useState } from "react";
import toast from "react-hot-toast";

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
            const { data, error } = await authClient.token();

            if (error || !data?.token) {
                throw new Error("Please login first");
            }

            const res = await fetch("http://localhost:8000/books", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${data.token}`,
                },
                body: JSON.stringify({
                    ...formData,
                    totalCopies: Number(formData.totalCopies),
                }),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message || "Failed to add book");
            }

            toast.success("Book added successfully!");

            setFormData({
                title: "",
                author: "",
                category: "",
                image: "",
                description: "",
                totalCopies: "",
            });

        } catch (error) {
            toast.error(error.message || "Failed to add book");
        }
    };

    const inputClass =
        "w-full rounded-xl border border-[#D8E8DC] bg-[#FAFCF9] px-4 py-3.5 text-sm text-[#1B4332] outline-none transition placeholder:text-gray-400 hover:border-[#B7D9C1] focus:border-[#2D6A4F] focus:bg-white focus:ring-4 focus:ring-[#D8F3DC]/60";

    const labelClass =
        "mb-2.5 block text-sm font-bold text-[#1B4332]";

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#F7F8F2] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">

            {/* Decorative Background */}
            <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#D8F3DC]/50 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-32 h-96 w-96 rounded-full bg-[#B7E4C7]/20 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">

                {/* Heading */}
                <div className="mb-10 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#B7E4C7] bg-white px-5 py-2.5 text-[10px] font-extrabold tracking-[0.2em] text-[#2D6A4F] sm:text-xs">
                        <span className="h-2 w-2 rounded-full bg-[#2D6A4F]" />
                        SHARE YOUR FAVORITE READS
                    </span>

                    <h1 className="mt-7 text-3xl font-black tracking-tight text-[#1B4332] sm:text-4xl lg:text-5xl">
                        Add a New
                        <span className="text-[#2D6A4F]"> Book.</span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                        Every book has a story worth sharing. Add your
                        favorite read to the PSTU Reading Club collection.
                    </p>

                    <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-[#B7E4C7]" />
                </div>

                {/* Form Card */}
                <div className="overflow-hidden rounded-[28px] border border-[#D8F3DC] bg-white shadow-[0_15px_50px_rgba(27,67,50,0.07)]">

                    {/* Card Header */}
                    <div className="bg-[#1B4332] px-6 py-7 text-white sm:px-10">
                        <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-3xl">
                                📖
                            </div>

                            <div>
                                <h2 className="text-xl font-extrabold">
                                    Book Information
                                </h2>
                                <p className="mt-1 text-xs text-white/70 sm:text-sm">
                                    Fill in the details to add a new book.
                                </p>
                            </div>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 p-6 sm:p-10"
                    >
                        {/* Title */}
                        <div>
                            <label className={labelClass}>
                                Book Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Enter book title"
                                className={inputClass}
                                required
                            />
                        </div>

                        {/* Author */}
                        <div>
                            <label className={labelClass}>
                                Author Name
                            </label>
                            <input
                                type="text"
                                name="author"
                                value={formData.author}
                                onChange={handleChange}
                                placeholder="Enter author name"
                                className={inputClass}
                                required
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className={labelClass}>
                                Book Category
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className={`${inputClass} cursor-pointer`}
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

                        {/* Image URL */}
                        <div>
                            <label className={labelClass}>
                                Book Cover Image URL
                            </label>
                            <input
                                type="url"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                placeholder="https://example.com/book-cover.jpg"
                                className={inputClass}
                                required
                            />
                            <p className="mt-2 text-xs text-gray-400">
                                Add a publicly accessible image URL for the book cover.
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <label className={labelClass}>
                                Short Description
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Write a short description about the book..."
                                className={`${inputClass} min-h-36 resize-y`}
                                required
                            />
                        </div>

                        {/* Copies */}
                        <div>
                            <label className={labelClass}>
                                Total Copies
                            </label>
                            <input
                                type="number"
                                name="totalCopies"
                                value={formData.totalCopies}
                                onChange={handleChange}
                                placeholder="Enter number of copies"
                                min="1"
                                className={inputClass}
                                required
                            />
                        </div>

                        {/* Submit */}
                        <div className="border-t border-[#E8F1E9] pt-6">
                            <button
                                type="submit"
                                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#1B4332] px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-[#1B4332]/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2D6A4F] hover:shadow-xl"
                            >
                                <span>Add Book to Collection</span>
                                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </button>

                            <p className="mt-4 text-center text-xs text-gray-400">
                                ✦ Help our reading community discover great books.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

