
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
            "Explore a world of imagination, knowledge, and inspiration. Find your next favorite book at BookNook.",
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

export default function HeroSlider() {
    const [swiper, setSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-[#F7F8F2] px-4 py-6 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
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
                    className="overflow-hidden rounded-2xl sm:rounded-3xl"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative grid min-h-[650px] overflow-hidden bg-[#1B4332] lg:min-h-[580px] lg:grid-cols-2">

                                {/* Decorative circles */}
                                <div className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full border border-white/10" />

                                <div className="relative z-10 flex flex-col justify-center px-7 pb-12 pt-14 text-white sm:px-12 lg:px-16 xl:px-20">

                                    <div className="mb-6 flex items-center gap-3">
                                        <span className="h-[2px] w-9 bg-[#B7E4C7]" />

                                        <span className="text-[10px] font-bold tracking-[0.22em] text-[#B7E4C7] sm:text-xs">
                                            {slide.tag}
                                        </span>
                                    </div>

                                    <h1 className="max-w-xl text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl xl:text-6xl">
                                        {slide.title}
                                    </h1>

                                    <p className="mt-6 max-w-lg text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                                        {slide.description}
                                    </p>

                                    <div className="mt-9">
                                        <Link
                                            href="/books"
                                            className="btn p-3 rounded-full font-bold border-0 bg-[#B7E4C7] px-7 text-sm font-bold text-[#1B4332] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white"
                                        >
                                            {slide.button}
                                            <span className="text-lg">→</span>
                                        </Link>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="relative min-h-[280px] lg:min-h-full">
                                    <Image
                                        src={slide.image}
                                        alt="BookNook library collection"
                                        fill
                                        priority={index === 0}
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#1B4332]/40 lg:via-transparent" />

                                    <div className="absolute bottom-6 right-6 rounded-xl border border-white/30 bg-black/20 px-5 py-3 text-white backdrop-blur-md sm:bottom-10 sm:right-10">
                                        <p className="text-xs font-semibold tracking-widest">
                                            PSTUReadingClub
                                        </p>
                                        <p className="mt-1 text-[10px] text-white/70">
                                            A little world of books
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Tailwind Controls */}
                <div className="mt-5 flex items-center justify-between">

                    {/* Pagination */}
                    <div className="flex items-center gap-2">
                        {slides.map((slide, index) => (
                            <button
                                key={index}
                                onClick={() => swiper?.slideToLoop(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index
                                    ? "w-9 bg-[#1B4332]"
                                    : "w-2.5 bg-[#1B4332]/25 hover:bg-[#1B4332]/60"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => swiper?.slidePrev()}
                            aria-label="Previous slide"
                            className="btn rounded-full p-2 text-3xl font-bold  btn-outline border-[#1B4332]/30 text-[#1B4332] hover:border-[#1B4332] hover:bg-[#1B4332] hover:text-white"
                        >
                            ←
                        </button>

                        <button
                            onClick={() => swiper?.slideNext()}
                            aria-label="Next slide"
                            className="btn rounded-full p-2 text-3xl font-bold  btn-outline border-[#1B4332]/30 text-[#1B4332] hover:border-[#1B4332] hover:bg-[#1B4332] hover:text-white"
                        >
                            →
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
