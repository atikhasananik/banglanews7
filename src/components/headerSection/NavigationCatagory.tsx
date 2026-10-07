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
    next:{revalidate:60}
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
            <Link key={catagory.topicId} href={`/catagory/${catagory.topicId}`}>
              <span className="hover:text-red-700 cursor-pointer">
                {" "}
                {catagory.title}
              </span>
            </Link>
          );
        })}
    </div>
  );
};

export default NavigationCatagory;
