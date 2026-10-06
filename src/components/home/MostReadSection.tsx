import { INewsCard } from "@/types/type";

const MostReadSection = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read", {
    next: { revalidate: 60 * 60 * 2 },
  });
  const data = await res.json();
  const mostReadData = data.data as INewsCard[];
  return (
    <div className="border p-3 rounded-2xl space-y-3 font-bold border-gray-300">
      <h1 className="font-extrabold text-xl">{mostReadData[0].category}</h1>
      {mostReadData.map((readData) => {
        return (
          <div key={readData.id} className="flex gap-3">
            <span className="text-red-600 font-bold text-xl">
              {readData.rank}
            </span>
            <span>{readData.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MostReadSection;
