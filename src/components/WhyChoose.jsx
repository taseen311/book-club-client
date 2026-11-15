
const features = [
    {
        icon: "📚",
        title: "Curated Book Collection",
        description:
            "Discover a handpicked collection of books across different genres, interests, and perspectives.",
        // number: "01",
    },
    {
        icon: "🤝",
        title: "A Community of Readers",
        description:
            "Connect with your love for reading and explore stories shared by a community of book lovers.",
        // number: "02",
    },
    {
        icon: "🌱",
        title: "Read, Learn & Grow",
        description:
            "Every book opens a new door. Expand your knowledge, imagination, and understanding.",
        // number: "03",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">

            {/* Decorative Background */}
            <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#D8F3DC]/40 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#B7E4C7]/20 blur-3xl" />

            <div className="relative mx-auto max-w-[1440px]">

                {/* Heading */}
                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2D6A4F]/15 bg-[#F7F8F2] px-5 py-2.5 text-[10px] font-bold tracking-[0.2em] text-[#2D6A4F] sm:text-xs">
                        <span className="h-2 w-2 rounded-full bg-[#52B788]" />
                        MORE THAN JUST BOOKS
                    </span>

                    <h2 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-[#1B4332] sm:text-5xl lg:text-6xl">
                        A Place Where
                        <span className="mt-2 block text-[#40916C]">
                            Stories Bring Us Together.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-gray-500 sm:text-base">
                        A little space for big ideas, meaningful stories,
                        and a lifelong love of reading. Discover what makes
                        our reading community special.
                    </p>

                    <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-[#74C69D]" />
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={feature.number}
                            className="group relative overflow-hidden rounded-[28px] border border-[#1B4332]/[0.07] bg-[#F7F8F2] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#74C69D]/50 hover:bg-white hover:shadow-[0_25px_60px_rgba(27,67,50,0.10)] sm:p-10"
                        >

                            {/* Number */}
                            <span className="absolute -right-1 -top-5 select-none text-[110px] font-black leading-none tracking-tighter text-[#1B4332]/[0.045] transition-all duration-500 group-hover:text-[#40916C]/[0.10]">
                                {feature.number}
                            </span>

                            {/* Icon */}
                            <div className="relative mb-10 flex h-[76px] w-[76px] items-center justify-center rounded-[22px] border border-[#2D6A4F]/10 bg-white text-4xl shadow-[0_8px_25px_rgba(27,67,50,0.06)] transition-all duration-500 group-hover:rotate-[-5deg] group-hover:scale-110 group-hover:bg-[#1B4332]">
                                <span className="transition-transform duration-500 group-hover:scale-110">
                                    {feature.icon}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="relative">
                                <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#40916C]">
                                    OUR VALUE / 0{index + 1}
                                </span>

                                <h3 className="max-w-xs text-2xl font-bold leading-snug tracking-tight text-[#1B4332] transition-colors duration-300 group-hover:text-[#40916C]">
                                    {feature.title}
                                </h3>

                                <p className="mt-5 text-sm leading-8 text-gray-500">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Bottom Accent */}
                            {/* <div className="mt-9 flex items-center justify-between border-t border-[#1B4332]/10 pt-6">
                                <span className="text-[10px] font-bold tracking-[0.18em] text-[#1B4332]/50">
                                    PSTU READING CLUB
                                </span>

                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D8F3DC] text-lg text-[#1B4332] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#1B4332] group-hover:text-white">
                                    →
                                </span>
                            </div> */}

                        </div>
                    ))}
                </div>

                {/* Bottom Message */}
                <div className="mt-14 text-center">
                    <p className="text-sm font-medium text-gray-400">
                        More than pages. More than stories.
                        <span className="ml-1 font-bold text-[#2D6A4F]">
                            A community that grows together.
                        </span>
                    </p>
                </div>

            </div>
        </section>
    );
}
