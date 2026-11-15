
import Link from "next/link";

export default function ReadingCommunity() {
    return (
        <section className="relative overflow-hidden bg-[#F7F8F2] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
            <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[28px] bg-[#1B4332] px-6 py-16 shadow-[0_25px_70px_rgba(27,67,50,0.15)] sm:rounded-[36px] sm:px-12 sm:py-20 lg:px-20 lg:py-28">

                {/* Decorative Background */}
                <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-[#B7E4C7]/15" />
                <div className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full border border-[#B7E4C7]/10" />
                <div className="pointer-events-none absolute -bottom-36 -left-24 h-96 w-96 rounded-full border border-[#B7E4C7]/15" />

                <div className="pointer-events-none absolute right-[12%] top-[15%] hidden h-3 w-3 rounded-full bg-[#B7E4C7]/50 lg:block" />
                <div className="pointer-events-none absolute bottom-[20%] right-[22%] hidden h-2 w-2 rounded-full bg-[#B7E4C7]/40 lg:block" />

                {/* Content */}
                <div className="relative z-10 mx-auto max-w-3xl text-center">

                    <div className="inline-flex items-center gap-3 rounded-full border border-[#B7E4C7]/25 bg-white/[0.07] px-5 py-2.5 backdrop-blur-sm">
                        <span className="h-2 w-2 rounded-full bg-[#B7E4C7]" />
                        <span className="text-[10px] font-bold tracking-[0.2em] text-[#B7E4C7] sm:text-xs">
                            YOUR READING JOURNEY STARTS HERE
                        </span>
                    </div>

                    <h2 className="mt-8 text-3xl font-black leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-6xl">
                        Every Great Journey
                        <br />
                        Begins With a{" "}
                        <span className="relative inline-block text-[#B7E4C7]">
                            Book.
                            <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#B7E4C7]/40" />
                        </span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/70 sm:text-base">
                        Join a world of curious minds and passionate readers.
                        Discover your next favorite story and make every
                        reading moment meaningful with BookNook.
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            href="/books"
                            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#B7E4C7] px-8 py-4 text-sm font-extrabold text-[#1B4332] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                        >
                            Explore Our Collection
                            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </Link>

                        <Link
                            href="/register"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/[0.06] px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B7E4C7] hover:bg-white/10"
                        >
                            <span>✦</span>
                            Join PSTUReadingCLUB
                        </Link>
                    </div>

                    {/* Bottom Note */}
                    <div className="mt-12 flex items-center justify-center gap-3 text-xs font-medium tracking-wide text-white/45">
                        <span className="h-px w-8 bg-white/25" />
                        READ MORE. DISCOVER MORE. GROW MORE.
                        <span className="h-px w-8 bg-white/25" />
                    </div>
                </div>
            </div>
        </section>
    );
}

