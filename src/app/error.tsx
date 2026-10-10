"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, TriangleAlert } from "lucide-react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[55vh] max-w-7xl items-center justify-center px-4 py-12">
      <section
        role="alert"
        className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-12"
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-700">
          <TriangleAlert aria-hidden="true" size={30} />
        </div>

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-700">
          Something went wrong
        </p>
        <h1 className="mt-3 text-2xl font-bold text-gray-900">
          দুঃখিত, একটি সমস্যা হয়েছে
        </h1>
        <p className="mt-2 text-gray-600">
          The page could not be loaded. Please try again.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
          >
            <RefreshCw aria-hidden="true" size={18} />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
          >
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
