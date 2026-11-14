"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { authClient } from "../../../lib/auth-client";

export default function EditBookPage() {
    const { id } = useParams();
    const router = useRouter();

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        category: "",
        image: "",
        description: "",
        totalCopies: "",
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const { data, error } = await authClient.token();

                if (error || !data?.token) {
                    throw new Error("Please login first");
                }

                const res = await fetch(`http://localhost:8000/books/${id}`, {
                    headers: {
                        Authorization: `Bearer ${data.token}`,
                    },
                });

                if (!res.ok) throw new Error("Book not found");

                const book = await res.json();

                setFormData({
                    title: book.title || "",
                    author: book.author || "",
                    category: book.category || "",
                    image: book.image || "",
                    description: book.description || "",
                    totalCopies: book.totalCopies ?? "",
                });

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchBook();
    }, [id]);

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

            const res = await fetch(`http://localhost:8000/books/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${data.token}`,
                },
                body: JSON.stringify({
                    ...formData,
                    totalCopies: Number(formData.totalCopies),
                }),
            });

            if (!res.ok) throw new Error("Failed to update book");

            alert("Book updated successfully!");
            router.push("/my-books");

        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    if (loading) {
        return <p className="text-center py-20">Loading book...</p>;
    }

    return (
        <main className="max-w-2xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-[#1B4332] mb-8">
                Edit Book
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Book Title"
                    required
                    className="input input-bordered w-full"
                />

                <input
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="Author"
                    required
                    className="input input-bordered w-full"
                />

                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="select select-bordered w-full"
                >
                    <option value="">Select Category</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Science">Science</option>
                    <option value="History">History</option>
                    <option value="Kids">Kids</option>
                    <option value="Others">Others</option>
                </select>

                <input
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    required
                    className="input input-bordered w-full"
                />

                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                    className="textarea textarea-bordered w-full"
                />

                <input
                    type="number"
                    name="totalCopies"
                    value={formData.totalCopies}
                    onChange={handleChange}
                    placeholder="Total Copies"
                    min="0"
                    required
                    className="input input-bordered w-full"
                />

                <button
                    type="submit"
                    className="btn bg-[#1B4332] text-white w-full"
                >
                    Update Book
                </button>
            </form>
        </main>
    );
}