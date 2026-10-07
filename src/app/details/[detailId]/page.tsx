import DetailsImg from "@/components/details/DetailsImg";
import DetailsSubheading from "@/components/details/DetailsSubheading";
import DetailsText from "@/components/details/DetailsText";
import { IDetailsProps } from "@/types/type";
import { notFound } from "next/navigation";

interface IDetailsPageProps {
  params: Promise<{ detailId: string }>;
}

const DetailsPage = async ({ params }: IDetailsPageProps) => {
  const { detailId } = await params;
  let data;

  try {
    const res = await fetch(
      `https://news-api-v2.vercel.app/api/article/${detailId}`,
      { cache: "force-cache" },
    );
    data = await res.json();
  } catch (error) {
    console.log(error);
  }

  if (!data?.data) {
    notFound();
  }

  const {
    body,
    description: {
      blocks: [block],
    },
    tags,
    title,
  } = data.data;

  const {
    model: {
      blocks: [first],
    },
  } = block;

  const date = new Date(data.cachedAt);

  // Using Intl.DateTimeFormat
  const formatter = new Intl.DateTimeFormat("bn-BD", {
    dateStyle: "full",
    timeStyle: "full",
    timeZone: "Asia/Dhaka",
  });

  return (
    <div className="max-w-3xl px-3 mx-auto mt-5 ">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-lg text-gray-600">{first.model.text}</p>
        <p className="py-2 border-y border-gray-400 text-gray-500 my-5">
          {formatter.format(date)}{" "}
        </p>
      </div>

      <div className="space-y-4">
        {body.map((data: IDetailsProps, idx: number) => {
          return data.type === "image" ? (
            <DetailsImg key={idx} detailImg={data}></DetailsImg>
          ) : data.type === "text" ? (
            <DetailsText key={idx} detailText={data}></DetailsText>
          ) : (
            <DetailsSubheading key={idx} subheading={data}></DetailsSubheading>
          );
        })}
      </div>

      <div className="my-4 flex gap-4 max-sm:flex-col">
        {tags.map((tag: string, idx: number) => {
          return (
            <span
              className="text-gray-600 bg-gray-100 text-sm px-3 py-1 flex items-center justify-center rounded-2xl"
              key={idx}
            >
              {" "}
              {tag}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default DetailsPage;
