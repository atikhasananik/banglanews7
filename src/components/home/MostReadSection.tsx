import { INewsCard } from "@/types/type";
import Link from "next/link";

const MostReadSection = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  const mostReadData = data.data as INewsCard[];
  return (
    <div className="border p-3 rounded-2xl space-y-3 font-bold border-gray-300">
      <h1 className="font-extrabold text-xl">{mostReadData[0].category}</h1>
      {mostReadData.map((readData) => {
        return (
          <Link
            href={`/details/${readData.id}`}
            key={readData.id}
            className="flex gap-3"
          >
            <span className="text-red-600 font-bold text-xl">
              {readData.rank}
            </span>
            <span>{readData.title}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default MostReadSection;
