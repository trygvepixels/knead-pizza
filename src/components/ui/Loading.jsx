export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-4">
                    <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-red-600 rounded-full border-t-transparent animate-spin"></div>
                </div>
                <p className="text-lg font-semibold text-gray-700">Loading delicious pizzas...</p>
            </div>
        </div>
    );
}
