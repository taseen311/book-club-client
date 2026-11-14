
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "../../lib/auth-client";

export default function RegisterPage() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        setMessage("");

        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);

        if (password.length < 6 || !hasUppercase || !hasLowercase) {
            setMessage(
                "Password must have at least 6 characters, one uppercase and one lowercase letter."
            );
            return;
        }

        if (password !== confirmPassword) {
            setMessage("Passwords do not match!");
            return;
        }

        setLoading(true);

        try {
            const { error } = await authClient.signUp.email({
                name,
                email,
                password,
                image,
            });

            if (error) {
                setMessage(error.message);
                return;
            }

            setMessage("Account created successfully! Redirecting...");

            setTimeout(() => {
                router.push("/");
                router.refresh();
            }, 1500);

        } catch (error) {
            setMessage("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#F7F8F2] flex items-center justify-center p-4 md:p-8">

            <div className="w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2">

                {/* Left Visual Section */}
                <section
                    className="relative hidden md:flex flex-col justify-between p-12 text-white bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(13, 45, 32, 0.78), rgba(13, 45, 32, 0.9)), url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200')",
                    }}
                >
                    <div className="relative z-10">
                        <Link href="/" className="text-2xl font-bold tracking-tight">
                            PSTU<span className="text-[#B7E4C7]">Reading</span>CLUB.
                        </Link>
                    </div>

                    <div className="relative z-10 max-w-md">
                        <p className="text-[#B7E4C7] uppercase tracking-[0.3em] text-xs font-semibold mb-5">
                            Begin Your Journey
                        </p>

                        <h2 className="text-5xl font-serif leading-tight mb-6">
                            Your next favorite story is waiting.
                        </h2>

                        <p className="text-gray-200 leading-7">
                            Join a community of readers, discover timeless
                            stories, and make every page count.
                        </p>

                        <div className="mt-10 border-l-2 border-[#B7E4C7] pl-5">
                            <p className="italic text-gray-200">
                                There is no friend as loyal as a book.
                            </p>
                            <p className="text-sm text-[#B7E4C7] mt-2">
                                — Ernest Hemingway
                            </p>
                        </div>
                    </div>

                    <p className="relative z-10 text-sm text-gray-300">
                        © 2026 PSTUReadingCLUB. Read. Discover. Connect.
                    </p>
                </section>

                {/* Right Register Section */}
                <section className="flex items-center justify-center px-6 py-12 sm:px-12 lg:px-16">

                    <div className="w-full max-w-md">

                        <Link
                            href="/"
                            className="inline-block text-sm text-[#2D6A4F] hover:underline mb-8"
                        >
                            ← Back to Home
                        </Link>

                        <div className="mb-7">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2D6A4F] mb-3">
                                Join Our Community
                            </p>

                            <h1 className="text-4xl font-serif font-bold text-[#1B4332]">
                                Create your account
                            </h1>

                            <p className="text-gray-500 mt-3">
                                Start your reading journey with us today.
                            </p>
                        </div>

                        <form onSubmit={handleRegister} className="space-y-4">

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FAFBF8] text-gray-800 outline-none transition focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/10"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FAFBF8] text-gray-800 outline-none transition focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/10"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Profile Photo URL
                                </label>
                                <input
                                    type="url"
                                    placeholder="https://example.com/photo.jpg"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FAFBF8] text-gray-800 outline-none transition focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/10"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="At least 6 characters"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FAFBF8] text-gray-800 outline-none transition focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/10"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter your password again"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FAFBF8] text-gray-800 outline-none transition focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/10"
                                    required
                                />
                            </div>

                            {message && (
                                <p className="text-sm text-center text-red-600 bg-red-50 rounded-lg p-3">
                                    {message}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 rounded-xl bg-[#1B4332] text-white font-semibold hover:bg-[#2D6A4F] transition duration-300 shadow-lg shadow-[#1B4332]/15 disabled:opacity-60"
                            >
                                {loading ? "Creating Account..." : "Create My Account"}
                            </button>

                        </form>

                        <p className="text-center text-sm text-gray-500 mt-7">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="font-bold text-[#2D6A4F] hover:underline"
                            >
                                Sign In
                            </Link>
                        </p>

                    </div>
                </section>
            </div>
        </main>
    );
}

