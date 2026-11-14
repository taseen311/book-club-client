
"use client";

import dynamic from "next/dynamic";

const HeroSliderContent = dynamic(
    () => import("./HeroSliderContent"),
    {
        ssr: false,
        loading: () => (
            <div className="min-h-[650px] rounded-2xl bg-[#1B4332]" />
        ),
    }
);

export default function HeroSlider() {
    return <HeroSliderContent />;
}
