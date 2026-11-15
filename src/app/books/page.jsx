
import Image from "next/image";
import Link from "next/link";

async function getBooks() {
    try {
        const res = await fetch("http://localhost:8000/books", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch books");
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
}

export default async function AllBooksPage() {
    const books = await getBooks();

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#F7F8F2] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">

            {/* Decorative Background */}
            <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#D8F3DC]/50 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-32 h-96 w-96 rounded-full bg-[#B7E4C7]/20 blur-3xl" />

            <div className="relative mx-auto max-w-[1440px]">

                {/* Page Heading */}
                <div className="mb-14 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#B7E4C7] bg-white px-5 py-2.5 text-[10px] font-extrabold tracking-[0.2em] text-[#2D6A4F] sm:text-xs">
                        <span className="h-2 w-2 rounded-full bg-[#2D6A4F]" />
                        EXPLORE OUR COLLECTION
                    </span>

                    <h1 className="mt-7 text-3xl font-black tracking-tight text-[#1B4332] sm:text-4xl lg:text-5xl">
                        Discover Your Next
                        <span className="block text-[#2D6A4F]">
                            Favorite Book.
                        </span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-gray-500 sm:text-base">
                        Explore our collection of books, discover new
                        perspectives and find stories worth remembering.
                    </p>

                    <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-[#B7E4C7]" />
                </div>

                {/* Collection Information */}
                {books.length > 0 && (
                    <div className="mb-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                        <div>
                            <h2 className="text-xl font-extrabold text-[#1B4332]">
                                Our Book Collection
                            </h2>
                            <p className="mt-1 text-sm text-gray-500">
                                Find something inspiring to read today.
                            </p>
                        </div>

                        <span className="rounded-full border border-[#D8F3DC] bg-white px-5 py-2.5 text-xs font-bold text-[#1B4332]">
                            {books.length} {books.length === 1 ? "Book" : "Books"} Available in Collection
                        </span>
                    </div>
                )}

                {/* Books Grid */}
                {books.length > 0 ? (
                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                        {books.map((book) => (
                            <div
                                key={book._id}
                                className="group overflow-hidden rounded-[24px] border border-[#D8F3DC]/70 bg-white shadow-[0_8px_30px_rgba(27,67,50,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#B7E4C7] hover:shadow-[0_20px_45px_rgba(27,67,50,0.12)]"
                            >
                                {/* Book Image */}
                                <div className="relative h-[300px] overflow-hidden bg-[#EAF3E9] sm:h-[320px]">
                                    {book.image ? (
                                        <Image
                                            src={book.image}
                                            alt={book.title}
                                            fill
                                            unoptimized
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    ) : (
                                        <div className="flex h-full items-center justify-center text-6xl">
                                            📚
                                        </div>
                                    )}

                                    <div className="absolute left-5 top-5">
                                        <span className="rounded-full border border-white/60 bg-white/90 px-4 py-2 text-[10px] font-extrabold uppercase tracking-wider text-[#1B4332] shadow-sm backdrop-blur-md">
                                            {book.category}
                                        </span>
                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#102E23]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                </div>

                                {/* Book Information */}
                                <div className="p-6 sm:p-7">

                                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#2D6A4F]/70">
                                        <span className="h-px w-6 bg-[#B7E4C7]" />
                                        PSTU Reading Club
                                    </div>

                                    <h2 className="mt-4 line-clamp-2 min-h-[56px] text-xl font-extrabold leading-snug text-[#1B4332] transition-colors duration-300 group-hover:text-[#2D6A4F]">
                                        {book.title}
                                    </h2>

                                    <p className="mt-3 truncate text-sm text-gray-500">
                                        <span className="font-semibold text-[#2D6A4F]">
                                            By
                                        </span>{" "}
                                        {book.author}
                                    </p>

                                    <div className="my-6 h-px bg-[#D8F3DC]" />

                                    <Link
                                        href={`/books/${book._id}`}
                                        className="group/button flex w-full items-center justify-between rounded-xl bg-[#1B4332] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#2D6A4F]"
                                    >
                                        <span>Explore This Book</span>
                                        <span className="text-lg transition-transform duration-300 group-hover/button:translate-x-1">
                                            →
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="rounded-[28px] border border-[#D8F3DC] bg-white px-6 py-20 text-center shadow-sm">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#F7F8F2] text-4xl">
                            📚
                        </div>

                        <h2 className="mt-6 text-2xl font-extrabold text-[#1B4332]">
                            No Books Yet
                        </h2>

                        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500">
                            Our collection is waiting for its first stories.
                            Please check back later for new books.
                        </p>
                    </div>
                )}

                {/* Bottom Note */}
                {books.length > 0 && (
                    <div className="mt-14 text-center">
                        <p className="text-xs font-medium tracking-wide text-[#2D6A4F]/70">
                            ✦ EVERY BOOK HAS A STORY. EVERY STORY HAS A PURPOSE. ✦
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}

