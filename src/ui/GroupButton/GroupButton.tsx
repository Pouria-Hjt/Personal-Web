import { cn } from "@/utils";
import { MoveUpRight } from "lucide-react";
import Link, { LinkProps } from "next/link";
import React from "react";

type Props =
  | ({
      as: "button";
      text: string;
      icon?: React.ReactNode;
      classNames?: {
        textButton?: string;
        iconButton?: string;
      };
    } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({
      as: "a";
      text: string;
      icon?: React.ReactNode;
      href: string;
      classNames?: {
        textButton?: string;
        iconButton?: string;
      };
    } & React.ButtonHTMLAttributes<HTMLButtonElement> &
      LinkProps);

const GroupButton = ({
  as,
  text,
  icon,
  className,
  classNames,
  ...props
}: Props) => {
  const Comp = as === "button" ? "button" : (Link as React.ElementType);
  return (
    <Comp className={cn("h-12 w-fit flex group/btn", className)} {...props}>
      <span
        className={cn(
          "bg-primary capitalize h-full flex justify-center items-center px-6 rounded-full font-medium",
          classNames?.textButton
        )}>
        {text}
      </span>
      <span
        className={cn(
          "bg-primary rounded-full h-full aspect-square  relative overflow-hidden",
          classNames?.iconButton
        )}>
        <div className="size-full flex justify-center items-center absolute inset-0 group-hover/btn:-top-1/2 group-hover/btn:left-1/2 group-hover/btn:translate-x-10 group-hover/btn:-translate-y-10 transition-all duration-700">
          {icon ? icon : <MoveUpRight />}
        </div>
        <div className="size-full flex justify-center items-center absolute top-1/2 -left-1/2 -translate-x-10 translate-y-10 group-hover/btn:inset-0 group-hover/btn:translate-y-0 group-hover/btn:translate-x-0 transition-all duration-700">
          {icon ? icon : <MoveUpRight />}
        </div>
      </span>
    </Comp>
  );
};

export default GroupButton;
