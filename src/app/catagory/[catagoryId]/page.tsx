import NewsCard from "@/components/common/NewsCard";
import { INewsCard } from "@/types/type";
import { notFound } from "next/navigation";
import React from "react";

interface ICatagoryNewsPageProps {
  params: Promise<{ catagoryId: string }>;
}

const CatagoryNewsPage = async ({ params }: ICatagoryNewsPageProps) => {
  const { catagoryId } = await params;
  let data;
  try {
    const res = await fetch(
      `https://news-api-v2.vercel.app/api/category/${catagoryId}`,
      { next: { revalidate: 60 * 60 * 2 } },
    );

    data = await res.json();
  } catch (error) {
    console.log(error);
  }

  if (!data?.data) {
    notFound();
  }

  const catagoryData = data.data as INewsCard[];

  return (
    <div className="max-w-7xl m-3  md:mx-auto mt-5">
      <h1 className="font-bold text-2xl border-b-2 py-2 my-5 border-red-700">
        {data.title}{" "}
      </h1>

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
        {catagoryData.map((news) => {
          return <NewsCard key={news.id} news={news}></NewsCard>;
        })}
      </div>
    </div>
  );
};

export default CatagoryNewsPage;
