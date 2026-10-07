import React from "react";
interface IDetailsTextProps {
  detailText: {
    type: string;
    text: string;
  };
}

const DetailsText = ({ detailText }: IDetailsTextProps) => {
  return (
    <div>
      <p>{detailText.text}</p>
    </div>
  );
};

export default DetailsText;
