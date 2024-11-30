import { Animations } from "@/@types";
import { Card } from "@/ui/Card/Card";
import { cn } from "@/utils";
import React from "react";

type Props = {
  title: string;
  description: string;
  animation: Animations;
  className?: string;
};

const CenteredCard = ({ description, title, animation, className }: Props) => {
  return (
    <Card
      animation={animation}
      className={cn("h-fit md:h-[191px] xl:h-[212px]", className)}
    >
      <div className="flex size-full flex-col items-center justify-center">
        <span className="text-[32px] font-medium leading-150 xl:text-6xl">
          +{title}
        </span>
        <span className="text-center text-base font-light uppercase leading-128 xl:text-lg">
          {description}
        </span>
      </div>
    </Card>
  );
};

export { CenteredCard };
