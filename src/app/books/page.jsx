
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
        <main className="min-h-screen bg-[#F7F8F2] px-4 py-16 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-[1440px]">
                <div className="mb-12 text-center">
                    <p className="mb-3 text-sm font-bold tracking-[0.25em] text-[#2D6A4F]">
                        EXPLORE OUR COLLECTION
                    </p>
                    <h1 className="text-3xl font-bold text-[#1B4332] sm:text-4xl lg:text-5xl">
                        Discover All Books
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                        Explore our collection of books and find your next great read.
                    </p>
                </div>

                {books.length > 0 ? (
                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                        {books.map((book) => (
                            <div
                                key={book._id}
                                className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="relative h-72 bg-[#D8F3DC]">
                                    {book.image && (
                                        <Image
                                            src={book.image}
                                            alt={book.title}
                                            fill
                                            unoptimized
                                            className="object-cover"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    )}
                                </div>

                                <div className="p-6">
                                    <span className="rounded-full bg-[#D8F3DC] px-3 py-1 text-xs font-semibold text-[#1B4332]">
                                        {book.category}
                                    </span>

                                    <h2 className="mt-4 text-xl font-bold text-[#1B4332]">
                                        {book.title}
                                    </h2>

                                    <p className="mt-2 text-sm text-gray-500">
                                        By {book.author}
                                    </p>

                                    <Link
                                        href={`/books/${book._id}`}
                                        className="mt-6 inline-block rounded-lg bg-[#1B4332] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2D6A4F]"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center">
                        <p className="text-lg font-medium text-gray-600">
                            No books available yet.
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}
