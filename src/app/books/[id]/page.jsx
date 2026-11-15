
import BorrowButton from "../../../components/BorrowButton";
import Image from "next/image";

export const instant = false;

async function getBook(id) {
    try {
        const res = await fetch(`http://localhost:8000/books/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            return null;
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching book:", error);
        return null;
    }
}

export default async function BookDetails({ params }) {
    const { id } = await params;
    const book = await getBook(id);

    if (!book) {
        return (
            <main className="flex min-h-[70vh] items-center justify-center bg-[#F7F8F2] px-4">
                <div className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#D8F3DC] text-4xl">
                        📚
                    </div>
                    <h2 className="mt-6 text-2xl font-extrabold text-[#1B4332]">
                        Book Not Found
                    </h2>
                    <p className="mt-3 text-sm text-gray-500">
                        Sorry, this book is currently unavailable.
                    </p>
                </div>
            </main>
        );
    }

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#F7F8F2] px-4 py-12 sm:px-6 lg:px-10 lg:py-20">

            {/* Decorative Background */}
            <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#D8F3DC]/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#B7E4C7]/20 blur-3xl" />

            <div className="relative mx-auto max-w-[1200px]">

                {/* Page Heading */}
                <div className="mb-9">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#B7E4C7] bg-white px-4 py-2 text-[10px] font-extrabold tracking-[0.18em] text-[#2D6A4F] sm:text-xs">
                        <span className="h-2 w-2 rounded-full bg-[#2D6A4F]" />
                        BOOK DETAILS
                    </span>

                    <h1 className="mt-5 text-3xl font-black tracking-tight text-[#1B4332] sm:text-4xl">
                        Discover Your Next Read
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Explore the details and make this book part of your journey.
                    </p>
                </div>

                {/* Book Details Card */}
                <div className="grid overflow-hidden rounded-[28px] border border-[#D8F3DC]/70 bg-white shadow-[0_20px_60px_rgba(27,67,50,0.08)] md:grid-cols-2 lg:rounded-[36px]">

                    {/* Book Cover */}
                    <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden bg-[#EAF3E9] p-8 sm:p-12 md:min-h-[600px]">
                        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border border-[#1B4332]/10" />
                        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full border border-[#1B4332]/10" />

                        <div className="relative h-[360px] w-full max-w-[280px] overflow-hidden rounded-xl shadow-[0_25px_50px_rgba(27,67,50,0.25)] sm:h-[440px] sm:max-w-[320px] md:h-[470px]">
                            <Image
                                src={book.image}
                                alt={book.title}
                                fill
                                unoptimized
                                className="rounded-xl object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        <div className="absolute bottom-5 left-5 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-xs font-bold text-[#1B4332] shadow-sm backdrop-blur-md sm:bottom-8 sm:left-8">
                            📖 PSTU Reading Club
                        </div>
                    </div>

                    {/* Book Information */}
                    <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">

                        <div className="flex flex-wrap items-center gap-3">
                            <span className="rounded-full bg-[#D8F3DC] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#1B4332] sm:text-xs">
                                {book.category}
                            </span>

                            <span className="text-xs font-medium text-gray-400">
                                Book Collection
                            </span>
                        </div>

                        <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-[#1B4332] sm:text-4xl lg:text-[42px]">
                            {book.title}
                        </h2>

                        <div className="mt-5 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F8F2] text-lg">
                                ✍️
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                    Written by
                                </p>
                                <p className="mt-0.5 text-sm font-bold text-[#2D6A4F]">
                                    {book.author}
                                </p>
                            </div>
                        </div>

                        <div className="my-8 h-px w-full bg-[#D8F3DC]" />

                        <div>
                            <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#1B4332]">
                                About This Book
                            </h3>

                            <p className="mt-4 text-sm leading-8 text-gray-600">
                                {book.description}
                            </p>
                        </div>

                        {/* Availability */}
                        <div className="mt-8 rounded-2xl border border-[#D8F3DC] bg-[#F7F8F2] p-5">
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                        Available Copies
                                    </p>
                                    <p className="mt-2 text-3xl font-black text-[#1B4332]">
                                        {book.totalCopies}
                                    </p>
                                </div>

                                <span className={`rounded-full px-4 py-2 text-xs font-bold ${book.totalCopies > 0
                                    ? "bg-[#D8F3DC] text-[#1B4332]"
                                    : "bg-red-100 text-red-600"
                                    }`}>
                                    {book.totalCopies > 0
                                        ? "● Available"
                                        : "● Out of Stock"}
                                </span>
                            </div>
                        </div>

                        {/* Borrow Action */}
                        <div className="mt-7">
                            <BorrowButton book={book} />
                        </div>

                        <p className="mt-5 text-center text-xs leading-6 text-gray-400">
                            Happy reading! Explore more books and discover new stories.
                        </p>
                    </div>
                </div>

                {/* Bottom Note */}
                <div className="mt-8 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
                    <span className="text-lg">🌿</span>
                    <p className="text-xs font-medium text-[#2D6A4F]/70">
                        Every book opens a new door to knowledge and imagination.
                    </p>
                </div>

            </div>
        </main>
    );
}

