import React from "react";
interface ISubheadingProps {
  subheading: {
    type: string;
    text: string;
  };
}

const DetailsSubheading = ({ subheading }: ISubheadingProps) => {
  return (
    <div>
      <h1 className="text-xl font-bold">{subheading.text}</h1>
    </div>
  );
};

export default DetailsSubheading;
