
import Link from "next/link";

export default function ReadingCommunity() {
    return (
        <section className="bg-[#F7F8F2] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
            <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-3xl bg-[#1B4332] px-7 py-16 text-center sm:px-12 lg:px-20 lg:py-24">

                {/* Decorative Elements */}
                <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

                <div className="relative z-10 mx-auto max-w-3xl">
                    <span className="inline-block rounded-full border border-[#B7E4C7]/30 bg-white/10 px-5 py-2 text-xs font-bold tracking-[0.2em] text-[#B7E4C7]">
                        YOUR READING JOURNEY STARTS HERE
                    </span>

                    <h2 className="mt-7 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                        Every Great Journey
                        <br />
                        Begins With a <span className="text-[#B7E4C7]">Book.</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/70 sm:text-base">
                        Join a world of curious minds and passionate readers.
                        Discover your next favorite story and make every
                        reading moment meaningful with BookNook.
                    </p>

                    <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            href="/books"
                            className="btn rounded-full border-0 bg-[#B7E4C7] px-8 text-sm font-bold text-[#1B4332] shadow-lg hover:bg-white"
                        >
                            Explore Our Collection →
                        </Link>

                        <Link
                            href="/register"
                            className="btn rounded-full border border-white/30 bg-transparent px-8 text-sm font-bold text-white hover:border-[#B7E4C7] hover:bg-white/10"
                        >
                            Join PSTUReadingCLUB
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
