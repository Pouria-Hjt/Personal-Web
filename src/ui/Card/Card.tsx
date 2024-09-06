import React, { PropsWithChildren } from "react";
import { Animate } from "../Animate/Animate";
import { Animations } from "@/@types";
import { cn } from "@/utils";
import { CardArrowIcon } from "@/assets/icons";
import Link from "next/link";

type Props = {
  title?: string;
  hoverableTitle?: boolean;
  image?: {
    src: string;
    alt: string;
    className?: string;
  };
  animation: Animations;
  duration?: number;
  className?: string;
  footer?: {
    link: string;
    text: string;
    animation?: Animations;
  };
} & PropsWithChildren;

const Card = ({
  title,
  hoverableTitle = false,
  image,
  animation,
  duration,
  className,
  footer,
  children,
}: Props) => {
  return (
    <Animate
      duration={duration || 1000}
      as={"div"}
      animation={animation}
      className={cn(
        "group w-full rounded-2.5xl bg-secondary/40 p-8 border space-y-1 relative flex flex-col justify-between border-tertiary hover:shadow-box",
        className ? className : ""
      )}>
      {title && (
        <h3
          className={cn(
            " font-medium text-2xl leading-128",
            hoverableTitle
              ? "text-white/40 group-hover:text-white transition-all duration-400"
              : "text-white"
          )}>
          {title}
        </h3>
      )}

      {image && (
        <img
          src={image.src}
          className={cn(
            "absolute top-4 right-5 animate-workdown",
            image.className
          )}
          alt={image.alt}
        />
      )}

      {children}
      {footer && (
        <Animate animation={footer.animation || "fade-up"} as={"div"}>
          <Link
            href={footer.link}
            className="w-full flex justify-between items-center group ">
            <span className="text-white font-medium transition-all duration-400 group-hover:text-primary">
              {footer.text}
            </span>
            <CardArrowIcon className="size-10 fill-white  transition-all duration-400 group-hover:fill-primary" />
          </Link>
        </Animate>
      )}
    </Animate>
  );
};

export { Card };
