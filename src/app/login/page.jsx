
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "../../lib/auth-client";

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);

        try {
            const { error } = await authClient.signIn.email({
                email,
                password,
            });

            if (error) {
                setMessage(error.message);
                return;
            }

            router.push("/");
            router.refresh();
        } catch (error) {
            setMessage("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    return (
        <main className="min-h-screen bg-[#F7F8F2] flex items-center justify-center p-4 md:p-8">

            <div className="w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2 min-h-[650px]">

                {/* Left Visual Section */}
                <section
                    className="relative hidden md:flex flex-col justify-between p-12 text-white bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(13, 45, 32, 0.78), rgba(13, 45, 32, 0.88)), url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200')",
                    }}
                >
                    <div className="relative z-10">
                        <Link href="/" className="text-2xl font-bold tracking-tight">
                            PSTU<span className="text-[#B7E4C7]">Reading</span>CLUB.
                        </Link>
                    </div>

                    <div className="relative z-10 max-w-md">
                        <p className="text-[#B7E4C7] uppercase tracking-[0.3em] text-xs font-semibold mb-5">
                            A World Beyond Pages
                        </p>

                        <h2 className="text-5xl font-serif leading-tight mb-6">
                            Every book opens a new chapter.
                        </h2>

                        <p className="text-gray-200 leading-7">
                            Discover meaningful stories, explore new ideas,
                            and find your next favorite book with our reading community.
                        </p>

                        <div className="mt-10 border-l-2 border-[#B7E4C7] pl-5">
                            <p className="italic text-gray-200">
                                A reader lives a thousand lives before he dies
                            </p>
                            <p className="text-sm text-[#B7E4C7] mt-2">
                                — George R. R. Martin
                            </p>
                        </div>
                    </div>

                    <p className="relative z-10 text-sm text-gray-300">
                        © 2026 PSTUReadingCLUB. Read. Discover. Connect.
                    </p>
                </section>

                {/* Right Login Section */}
                <section className="flex items-center justify-center px-6 py-12 sm:px-12 lg:px-16">

                    <div className="w-full max-w-md">

                        <Link
                            href="/"
                            className="inline-block text-sm text-[#2D6A4F] hover:underline mb-10"
                        >
                            ← Back to Home
                        </Link>

                        <div className="mb-9">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2D6A4F] mb-3">
                                Welcome Back
                            </p>

                            <h1 className="text-4xl font-serif font-bold text-[#1B4332]">
                                Sign in to your account
                            </h1>

                            <p className="text-gray-500 mt-3">
                                Continue your reading journey with us.
                            </p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-5">

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#FAFBF8] text-gray-800 outline-none transition focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/10"
                                    required
                                />
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-sm font-semibold text-gray-700">
                                        Password
                                    </label>

                                    <span className="text-xs text-[#2D6A4F]">
                                        Forgot Password?
                                    </span>
                                </div>

                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#FAFBF8] text-gray-800 outline-none transition focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/10"
                                    required
                                />
                            </div>

                            {message && (
                                <p className="text-sm text-red-600 bg-red-50 rounded-lg p-3">
                                    {message}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 rounded-xl bg-[#1B4332] text-white font-semibold hover:bg-[#2D6A4F] transition duration-300 shadow-lg shadow-[#1B4332]/15 disabled:opacity-60"
                            >
                                {loading ? "Signing In..." : "Sign In to Your Account"}
                            </button>

                        </form>

                        <div className="flex items-center gap-4 my-7">
                            <div className="h-px bg-gray-200 flex-1" />
                            <span className="text-xs text-gray-400 uppercase tracking-widest">
                                Or continue with
                            </span>
                            <div className="h-px bg-gray-200 flex-1" />
                        </div>

                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className="w-full py-3.5 rounded-xl border border-gray-200 flex items-center justify-center gap-3 text-gray-700 font-medium hover:bg-gray-50 transition"
                        >
                            <svg viewBox="0 0 48 48" className="w-5 h-5">
                                <path fill="#4285F4" d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11c-.5 2.5-1.9 4.6-4 6v5.1h6.5c3.8-3.5 6.1-8.6 6.1-14.8z" />
                                <path fill="#34A853" d="M24 44c5.5 0 10.1-1.8 13.5-4.8L31 34.1c-1.8 1.2-4.1 1.9-7 1.9-5.3 0-9.8-3.6-11.4-8.4H6v5.3C9.4 39.5 16.2 44 24 44z" />
                                <path fill="#FBBC05" d="M12.6 27.6c-.4-1.2-.7-2.4-.7-3.6s.2-2.5.7-3.6v-5.3H6C4.7 17.6 4 20.7 4 24s.7 6.4 2 8.9l6.6-5.3z" />
                                <path fill="#EA4335" d="M24 12c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6.1 29.5 4 24 4 16.2 4 9.4 8.5 6 15.1l6.6 5.3C14.2 15.6 18.7 12 24 12z" />
                            </svg>
                            Continue with Google
                        </button>

                        <p className="text-center text-sm text-gray-500 mt-9">
                            New to PSTUReadingCLUB?{" "}
                            <Link
                                href="/register"
                                className="font-bold text-[#2D6A4F] hover:underline"
                            >
                                Create an account
                            </Link>
                        </p>

                    </div>
                </section>
            </div>
        </main>
    );
}

