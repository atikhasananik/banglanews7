import NewsCard from "@/components/common/NewsCard";
import HomeNewsSection from "@/components/home/HomeNewsSection";
import MostReadSection from "@/components/home/MostReadSection";
import { INewsCard } from "@/types/type";
import Link from "next/link";

const HomePage = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections", {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  const [firstData, ...otherData] = data.data;
  const [firstArticles, ...otherArticles] = firstData.articles as INewsCard[];

  return (
    <div className="mx-auto mt-4 grid w-full max-w-7xl grid-cols-1 gap-4 px-2.5 sm:gap-5 lg:grid-cols-3">
      {/* letf section  */}
      <div className="min-w-0 lg:col-span-2">
        <div className="flex min-w-0 flex-col gap-5 lg:flex-row">
          <div className="min-w-0 flex-1">
            <NewsCard news={firstArticles}></NewsCard>
          </div>
          <div className="min-w-0 lg:w-90">
            <div className="h-full w-full overflow-hidden rounded-2xl border border-gray-200">
              {otherArticles.slice(0, 4).map((articlesData) => {
                return (
                  <Link
                    href={`/details/${articlesData.id}`}
                    key={articlesData.id}
                  >
                    <div className="p-3 py-4 w-full border-t border-gray-200">
                      <h1 className="text-red-600">
                        {articlesData.category}
                      </h1>
                      <p className="font-bold">{articlesData.title}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <HomeNewsSection homeCard={otherData}></HomeNewsSection>
      </div>

      {/* right section  */}
      <div className="min-w-0 lg:col-span-1">
        <MostReadSection></MostReadSection>
      </div>
    </div>
  );
};

export default HomePage;
