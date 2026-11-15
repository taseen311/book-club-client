
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
    {
        tag: "YOUR NEXT CHAPTER STARTS HERE",
        title: "Discover Stories That Stay With You.",
        description:
            "Explore a world of imagination, knowledge, and inspiration. Find your next favorite book at PSTUReadingClub.",
        button: "Explore Books",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=85&w=1200&auto=format&fit=crop",
    },
    {
        tag: "A WORLD BEYOND PAGES",
        title: "Escape Into A World Of Endless Stories.",
        description:
            "From timeless classics to modern masterpieces, discover books that take you somewhere extraordinary.",
        button: "Browse Collection",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=85&w=1200&auto=format&fit=crop",
    },
    {
        tag: "READ. LEARN. GROW.",
        title: "Knowledge Begins With One Page.",
        description:
            "Feed your curiosity, expand your perspective, and make every reading moment count.",
        button: "Start Reading",
        image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=85&w=1200&auto=format&fit=crop",
    },
];

export default function HeroSliderContent() {
    const [swiper, setSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-[#F7F8F2] px-3 py-5 sm:px-6 sm:py-8 lg:px-10 lg:py-12">
            <div className="mx-auto max-w-[1440px]">

                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    loop
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    onSwiper={setSwiper}
                    onSlideChange={(instance) =>
                        setActiveIndex(instance.realIndex)
                    }
                    className="overflow-hidden rounded-[24px] shadow-[0_25px_70px_rgba(27,67,50,0.14)] sm:rounded-[32px]"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative grid min-h-[650px] overflow-hidden bg-[#163B2D] lg:min-h-[590px] lg:grid-cols-[1.02fr_0.98fr]">

                                {/* Decorative Background */}
                                <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/[0.07]" />
                                <div className="pointer-events-none absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full border border-white/[0.07]" />

                                <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#B7E4C7]/[0.05] blur-3xl" />

                                {/* Hero Content */}
                                <div className="relative z-10 flex flex-col justify-center px-7 pb-10 pt-16 text-white sm:px-12 sm:py-16 lg:px-14 xl:px-20">

                                    <div className="mb-7 flex items-center gap-3">
                                        <span className="h-[2px] w-10 bg-[#B7E4C7]" />

                                        <span className="text-[10px] font-bold tracking-[0.2em] text-[#B7E4C7] sm:text-xs">
                                            {slide.tag}
                                        </span>
                                    </div>

                                    <h1 className="max-w-xl text-[38px] font-bold leading-[1.12] tracking-[-0.04em] sm:text-5xl lg:text-[52px] xl:text-[62px]">
                                        {slide.title}
                                    </h1>

                                    <p className="mt-6 max-w-lg text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                                        {slide.description}
                                    </p>

                                    <div className="mt-9">
                                        <Link
                                            href="/books"
                                            className="group inline-flex min-h-13 items-center gap-4 rounded-full bg-[#B7E4C7] px-7 py-3 text-sm font-bold text-[#163B2D] shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                                        >
                                            {slide.button}

                                            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                                                →
                                            </span>
                                        </Link>
                                    </div>

                                    <div className="mt-12 flex items-center gap-3 border-t border-white/10 pt-6">
                                        <div className="flex -space-x-2">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#163B2D] bg-[#B7E4C7] text-xs font-bold text-[#163B2D]">
                                                R
                                            </div>
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#163B2D] bg-[#D8F3DC] text-xs font-bold text-[#163B2D]">
                                                B
                                            </div>
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#163B2D] bg-[#95D5B2] text-xs font-bold text-[#163B2D]">
                                                C
                                            </div>
                                        </div>

                                        <p className="text-xs text-white/60">
                                            A community built around books and ideas
                                        </p>
                                    </div>
                                </div>

                                {/* Hero Image */}
                                <div className="relative min-h-[290px] overflow-hidden sm:min-h-[380px] lg:min-h-full">

                                    <Image
                                        src={slide.image}
                                        alt="PSTUReadingClub library collection"
                                        fill
                                        priority={index === 0}
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-1000"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#163B2D]/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#163B2D]/50 lg:via-[#163B2D]/10 lg:to-transparent" />

                                    <div className="absolute inset-0 border-l border-white/10" />

                                    {/* Floating Info Card */}
                                    <div className="absolute bottom-6 left-5 right-5 rounded-2xl border border-white/20 bg-[#163B2D]/45 p-5 text-white shadow-2xl backdrop-blur-xl sm:bottom-10 sm:left-auto sm:right-8 sm:w-[260px]">

                                        <div className="mb-3 flex items-center justify-between">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B7E4C7]">
                                                Our Philosophy
                                            </span>

                                            <span className="text-xl text-[#B7E4C7]">
                                                ✦
                                            </span>
                                        </div>

                                        <p className="text-lg font-semibold leading-snug">
                                            A little world of books, a lifetime of possibilities.
                                        </p>

                                        <p className="mt-3 text-[10px] font-medium tracking-widest text-white/60">
                                            PSTU READING CLUB
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Slider Controls */}
                <div className="mt-6 flex items-center justify-between px-1 sm:mt-7 sm:px-2">

                    <div className="flex items-center gap-2">
                        {slides.map((slide, index) => (
                            <button
                                key={index}
                                onClick={() => swiper?.slideToLoop(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
                                        ? "w-10 bg-[#1B4332]"
                                        : "w-2 bg-[#1B4332]/25 hover:bg-[#1B4332]/60"
                                    }`}
                            />
                        ))}
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={() => swiper?.slidePrev()}
                            aria-label="Previous slide"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1B4332]/20 text-xl text-[#1B4332] transition-all duration-300 hover:border-[#1B4332] hover:bg-[#1B4332] hover:text-white sm:h-12 sm:w-12"
                        >
                            ←
                        </button>

                        <button
                            onClick={() => swiper?.slideNext()}
                            aria-label="Next slide"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1B4332]/20 text-xl text-[#1B4332] transition-all duration-300 hover:border-[#1B4332] hover:bg-[#1B4332] hover:text-white sm:h-12 sm:w-12"
                        >
                            →
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}

