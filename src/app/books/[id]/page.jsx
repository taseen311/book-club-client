// import BorrowModal from "@/components/BorrowModal";
import BorrowButton from "../../../components/BorrowButton";
import Image from "next/image";

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
        return <p className="text-center py-20">Book not found.</p>;
    }

    return (
        <main className="min-h-screen bg-[#F7F8F2] px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 grid md:grid-cols-2 gap-10">

                    <div className="relative w-full h-80 md:h-[450px]">
                        <Image
                            src={book.image}
                            alt={book.title}
                            fill
                            className="object-cover rounded-xl"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <p className="text-sm text-[#2D6A4F] font-semibold uppercase">
                            {book.category}
                        </p>

                        <h1 className="text-3xl md:text-4xl font-bold text-[#1B4332] mt-3">
                            {book.title}
                        </h1>

                        <p className="text-gray-600 mt-3">
                            By {book.author}
                        </p>

                        <p className="text-gray-700 leading-relaxed mt-6">
                            {book.description}
                        </p>

                        <p className="mt-6 font-semibold text-[#1B4332]">
                            Available Copies: {book.totalCopies}
                        </p>

                        {/* <button
                            disabled={book.totalCopies <= 0}
                            className="btn bg-[#1B4332] text-white hover:bg-[#2D6A4F] mt-6 disabled:bg-gray-400"
                        >
                            {book.totalCopies > 0 ? "Borrow This Book" : "Not Available"}
                        </button> */}
                        <BorrowButton book={book} />
                    </div>

                </div>
            </div>
        </main>
    );
}
