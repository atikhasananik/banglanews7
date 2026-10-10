import Link from "next/link";
import { ArrowLeft, Newspaper } from "lucide-react";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[55vh] max-w-7xl items-center justify-center px-4 py-12">
      <section className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-12">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-700">
          <Newspaper aria-hidden="true" size={30} />
        </div>

        <p className="text-7xl font-bold tracking-tight text-red-700 sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">
          এই পাতাটি খুঁজে পাওয়া যায়নি
        </h1>
        <p className="mt-2 text-gray-600">
          The page you are looking for may have been moved or is no longer
          available.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
        >
          <ArrowLeft aria-hidden="true" size={18} />
          Back to home
        </Link>
      </section>
    </main>
  );
}
