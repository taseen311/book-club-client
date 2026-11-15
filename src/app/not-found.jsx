
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-[#F7F8F2] px-4 py-16">

            {/* Decorative Background */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full border border-[#B7E4C7]/60" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full border border-[#B7E4C7]/60" />

            <div className="relative z-10 mx-auto max-w-xl text-center">

                {/* Book Icon */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#1B4332] text-4xl shadow-xl shadow-[#1B4332]/15">
                    📚
                </div>

                {/* Error Number */}
                <h1 className="mt-7 text-8xl font-black leading-none tracking-tighter text-[#1B4332] sm:text-9xl">
                    404
                </h1>

                <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#B7E4C7]" />

                {/* Message */}
                <h2 className="mt-7 text-2xl font-extrabold tracking-tight text-[#1B4332] sm:text-3xl">
                    Oops! Page Not Found
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-8 text-gray-500 sm:text-base">
                    Sorry, the page you are looking for does not exist.
                    It may have been moved or the link might be incorrect.
                </p>

                {/* Home Button */}
                <Link
                    href="/"
                    className="group mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#1B4332] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#1B4332]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#2D6A4F] hover:shadow-xl"
                >
                    <span className="transition-transform duration-300 group-hover:-translate-x-1">
                        ←
                    </span>
                    Back to Home
                </Link>

                <p className="mt-8 text-xs font-semibold tracking-[0.18em] text-[#2D6A4F]/60">
                    PSTUREADINGCLUB
                </p>

            </div>
        </main>
    );
}
