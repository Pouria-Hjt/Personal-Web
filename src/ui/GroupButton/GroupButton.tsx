import { cn } from "@/utils";
import { MoveUpRight } from "lucide-react";
import Link, { LinkProps } from "next/link";
import React from "react";

type Props =
  | ({
      as: "button";
      text: string;
      icon?: React.ReactNode;
    } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({
      as: "a";
      text: string;
      icon?: React.ReactNode;
      href: string;
    } & React.ButtonHTMLAttributes<HTMLButtonElement> &
      LinkProps);

const GroupButton = ({ as, text, icon, className, ...props }: Props) => {
  const Comp = as === "button" ? "button" : (Link as React.ElementType);
  return (
    <Comp
      className={cn("h-12 w-fit flex group", { className: className })}
      {...props}>
      <span className="bg-primary capitalize h-full flex justify-center items-center px-6 rounded-full font-medium">
        {text}
      </span>
      <span className="bg-primary rounded-full h-full aspect-square  relative overflow-hidden">
        <div className="size-full flex justify-center items-center absolute inset-0 group-hover:-top-1/2 group-hover:left-1/2 group-hover:translate-x-10 group-hover:-translate-y-10 transition-all duration-700">
          {icon ? icon : <MoveUpRight />}
        </div>
        <div className="size-full flex justify-center items-center absolute top-1/2 -left-1/2 -translate-x-10 translate-y-10 group-hover:inset-0 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-700">
          {icon ? icon : <MoveUpRight />}
        </div>
      </span>
    </Comp>
  );
};

export default GroupButton;
