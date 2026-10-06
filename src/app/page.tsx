import NewsCard from "@/components/common/NewsCard";
import HomeNewsSection from "@/components/home/HomeNewsSection";
import MostReadSection from "@/components/home/MostReadSection";
import { INewsCard } from "@/types/type";

const HomePage = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections", {
    next: { revalidate: 60 * 60 * 2 },
  });
  const data = await res.json();

  

  const [firstData, ...otherData] = data.data;
  const [firstArticles, ...otherArticles] = firstData.articles as INewsCard[];

  return (
    <div className="grid w-full mt-4 gap-5 max-w-7xl mx-auto grid-cols-3">
      {/* letf section  */}
      <div className="col-span-2">
        <div className=" flex gap-5">
          <div>
            <NewsCard news={firstArticles}></NewsCard>
          </div>
          <div>
            <div className="border min-w-90 border-gray-200 rounded-2xl overflow-hidden h-full">
              {otherArticles.slice(0, 4).map((articlesData) => {
                return (
                  <div
                    key={articlesData.id}
                    className="p-3 py-4 w-full border-t border-gray-200"
                  >
                    <h1 className="text-red-600">{articlesData.category}</h1>
                    <p className="font-bold">{articlesData.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <HomeNewsSection homeCard={otherData}></HomeNewsSection>
      </div>

      {/* right section  */}
      <div className="col-span-1">
        <MostReadSection></MostReadSection>
      </div>
    </div>
  );
};

export default HomePage;
