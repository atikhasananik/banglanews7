import Marquee from "react-fast-marquee";

interface IMarqueeData {
  id: string;
  title: string;
}

const MarqueeContent = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10", {
    cache: "force-cache",
  });
  const data = await res.json();

  const marqueeData: IMarqueeData[] = data.data;

  return (
    <div className="flex gap-2 my-3  text-white text-sm bg-red-700">
      <div className="max-w-7xl mx-auto flex items-center ">
        <span className="bg-red-900 text-white p-1.5 px-3 font-bold">
          সর্বশেষ
        </span>
        <Marquee speed={100}>
          {marqueeData.map((data) => {
            return (
              <span
                className="mx-2 hover:underline hover:cursor-pointer"
                key={data.id}
              >
                {data.title}
                 ●{" "}
              </span>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeContent;
