
const features = [
    {
        icon: "📚",
        title: "Curated Book Collection",
        description:
            "Discover a handpicked collection of books across different genres, interests, and perspectives.",
        number: "01",
    },
    {
        icon: "🤝",
        title: "A Community of Readers",
        description:
            "Connect with your love for reading and explore stories shared by a community of book lovers.",
        number: "02",
    },
    {
        icon: "🌱",
        title: "Read, Learn & Grow",
        description:
            "Every book opens a new door. Expand your knowledge, imagination, and understanding.",
        number: "03",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
            <div className="mx-auto max-w-[1440px]">

                {/* Heading */}
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <p className="mb-3 text-sm font-bold tracking-[0.2em] text-[#2D6A4F]">
                        MORE THAN JUST BOOKS
                    </p>

                    <h2 className="text-3xl font-extrabold leading-tight text-[#1B4332] sm:text-4xl lg:text-5xl">
                        Why You Might Join{" "}
                        <span className="text-[#2D6A4F]">PSTUReadingCLUB</span>
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
                        A little space for big ideas, meaningful stories,
                        and a lifelong love of reading.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.number}
                            className="group relative overflow-hidden rounded-2xl border border-[#1B4332]/10 bg-[#F7F8F2] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#2D6A4F]/30 hover:shadow-xl sm:p-10"
                        >
                            <span className="absolute right-7 top-5 text-5xl font-black text-[#1B4332]/[0.05]">
                                {feature.number}
                            </span>

                            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D8F3DC] text-3xl transition duration-300 group-hover:scale-110">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold text-[#1B4332]">
                                {feature.title}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-gray-500">
                                {feature.description}
                            </p>

                            <div className="mt-8 h-1 w-12 rounded-full bg-[#2D6A4F] transition-all duration-300 group-hover:w-20" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
