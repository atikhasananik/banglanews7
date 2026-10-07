import { INewsCard } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

export interface INewsCardProps {
  news: INewsCard;
}

const NewsCard = ({ news }: INewsCardProps) => {
  return (
    <>
      <Link href={`/details/${news.id}`}>
        <div className="card bg-base-100  group  shadow-sm">
          <figure>
            <Image
              className="group-hover:scale-105 w-full transition-all duration-300"
              height={300}
              width={500}
              src={news.imageUrl}
              alt={news.imageAlt || "img"}
            />
          </figure>
          <div className="card-body  ">
            <h1 className="text-red-600">{news.category}</h1>
            <h2 className="card-title group-hover:text-red-600 transition-all duration-50">
              {" "}
              {news.title}{" "}
            </h2>
            <p className="text-gray-600">{news.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default NewsCard;
