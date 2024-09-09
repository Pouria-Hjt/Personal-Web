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
    <Card animation={animation} className={cn("aspect-square", className)}>
      <div className="size-full flex justify-center items-center flex-col">
        <span className="text-6xl font-medium leading-150">+{title}</span>
        <span className="text-center uppercase font-light text-lg leading-128">
          {description}
        </span>
      </div>
    </Card>
  );
};

export { CenteredCard };
