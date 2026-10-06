import { IHomeCardSection, INewsCard } from "@/types/type";
import NewsCard from "../common/NewsCard";

interface IHomeNewsSectonProps {
  homeCard: IHomeCardSection[];
}

const HomeNewsSection = ({ homeCard }: IHomeNewsSectonProps) => {
  return (
    <div>
      {homeCard.map(
        (card: {
          title: string;
          curationId: string;
          articles: INewsCard[];
        }) => {
          return (
            <div key={card.curationId}>
              <h1 className="font-bold text-2xl border-b-2 py-2 mt-5 border-red-700">
                {card.title}{" "}
              </h1>
              <div className="grid grid-cols-3 mt-4 gap-4">
                {card.articles.map((news) => {
                  return <NewsCard key={news.id} news={news}></NewsCard>;
                })}
              </div>
            </div>
          );
        },
      )}
    </div>
  );
};

export default HomeNewsSection;
