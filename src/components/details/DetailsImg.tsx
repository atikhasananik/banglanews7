import Image from "next/image";
import React from "react";

interface IDetailsImgProps {
  detailImg: {
    type: string;
    url: string;
    width: number;
    height: number;
    caption: string | null;
    altText: string;
  };
}

const DetailsImg = ({ detailImg }: IDetailsImgProps) => {
  return (
    <div className="w-full space-y-1 ">
      <Image
        className="w-full rounded-2xl"
        src={detailImg.url}
        height={detailImg.height}
        width={detailImg.width}
        alt={detailImg.altText}
      ></Image>
      <p className="text-gray-500">{detailImg.caption}</p>
    </div>
  );
};

export default DetailsImg;
