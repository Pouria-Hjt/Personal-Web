import React from "react";

type Props = {
  title: string;
  stat: string;
};

const SingleStat = ({ stat, title }: Props) => {
  return (
    <div className="h-full w-full space-y-2">
      <h6 className="text-5xl font-medium leading-128">{stat}</h6>
      <p className="text-lg font-light uppercase leading-150">{title}</p>
    </div>
  );
};

export { SingleStat };
