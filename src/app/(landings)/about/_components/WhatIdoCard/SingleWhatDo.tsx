import { WhatIDoArrowIcon } from "@/assets/icons";
import React from "react";

type Props = {
  title: string;
};

const SingleWhatDo = ({ title }: Props) => {
  return (
    <div className="flex items-center gap-2 text-lg font-light text-white/70">
      <WhatIDoArrowIcon />
      {title}
    </div>
  );
};

export { SingleWhatDo };
