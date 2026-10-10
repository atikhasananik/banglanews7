const LoadingCard = ({ featured = false }: { featured?: boolean }) => (
  <div className="animate-pulse space-y-3">
    <div
      className={`w-full rounded-xl bg-gray-200 ${featured ? "h-56" : "h-36"}`}
    />
    <div className="h-3 w-20 rounded bg-red-100" />
    <div className="h-4 w-full rounded bg-gray-200" />
    <div className="h-4 w-4/5 rounded bg-gray-200" />
  </div>
);

export default function Loading() {
  return (
    <main
      aria-busy="true"
      aria-live="polite"
      className="mx-auto min-h-[60vh] w-full max-w-7xl px-3 py-8"
    >
      <div className="mb-8 flex items-center gap-3 border-b-2 border-red-700 pb-4">
        <span
          aria-hidden="true"
          className="h-6 w-1.5 animate-pulse rounded-full bg-red-700"
        />
        <div>
          <p className="font-bold text-red-700">সংবাদ প্রস্তুত হচ্ছে</p>
          <p className="text-sm text-gray-500">Loading the latest news...</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="grid gap-5 md:grid-cols-2">
            <LoadingCard featured />
            <div className="space-y-5 rounded-xl border border-gray-200 p-4">
              <LoadingCard />
              <LoadingCard />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </div>
        </div>

        <aside className="space-y-5 rounded-xl border border-gray-200 p-4">
          <div className="h-5 w-32 rounded bg-red-100" />
          <LoadingCard />
          <LoadingCard />
        </aside>
      </div>
      <span className="sr-only">Loading news content</span>
    </main>
  );
}
