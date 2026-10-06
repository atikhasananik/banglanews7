import Link from "next/link";

interface ICatagory {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

const NavigationCatagory = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories", {
    cache: "force-cache",
  });
  const data = await res.json();
  const catagoryData = data.data as ICatagory[];

  return (
    <div className="flex gap-3 items-center justify-center text-gray-600  font-semibold">
      <Link href={"/"}>
        <span className="hover:text-red-700 cursor-pointer">হোম</span>
      </Link>
      {catagoryData
        .filter((catagory: ICatagory) => {
          return catagory.scrapable;
        })
        .map((catagory: ICatagory) => {
          return (
            <span
              className="hover:text-red-700 cursor-pointer"
              key={catagory.topicId}
            >
              {" "}
              {catagory.title}
            </span>
          );
        })}
    </div>
  );
};

export default NavigationCatagory;
