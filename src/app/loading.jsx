
export default function Loading() {
    return (
        <div className="flex min-h-[60vh] items-center justify-center bg-[#F7F8F2] px-4">
            <div className="flex flex-col items-center text-center">

                {/* Loading Animation */}
                <div className="relative flex h-20 w-20 items-center justify-center">
                    <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-[#D8F3DC] border-t-[#1B4332]" />

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1B4332] text-2xl shadow-lg shadow-[#1B4332]/15">
                        📚
                    </div>
                </div>

                {/* Loading Text */}
                <h2 className="mt-7 text-lg font-extrabold tracking-tight text-[#1B4332]">
                    Preparing Your Reading Experience
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    Just a moment, your next story is loading...
                </p>

                {/* Loading Dots */}
                <div className="mt-5 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#1B4332]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#2D6A4F] [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#B7E4C7] [animation-delay:300ms]" />
                </div>

            </div>
        </div>
    );
}
