import { Loader } from "@/ui/icons/Loader";
export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Loader className="w-16 h-16 text-blue-600 animate-spin" />
            <h2 className="mt-4 text-xl font-semibold text-gray-700">Loading...</h2>
            <p className="mt-2 text-sm text-gray-500">Please wait while we fetch the data.</p>
        </div>
    );
}
