import React, { PropsWithChildren } from "react";
import { Animate } from "../Animate/Animate";
import { Animations } from "@/@types";
import { cn } from "@/utils";
import { CardArrowIcon } from "@/assets/icons";
import Link from "next/link";

type CardImage = {
  src?: string;
  alt?: string;
  icon?: JSX.Element;
};

export type CardProps = {
  title?: string;
  hoverableTitle?: boolean;
  image?: CardImage;
  animation: Animations;
  duration?: number;
  className?: string;
  footer?: {
    link: string;
    text: string;
    animation?: Animations;
  };
  classNames?: {
    title?: string;
    image?: string;
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
  classNames,
}: CardProps) => {
  return (
    <div
      // duration={duration || 1000}
      // as={"div"}
      // animation={animation}
      className={cn(
        "hover:shadow-box group relative flex w-full max-w-screen-md flex-col justify-between rounded-2.5xl border border-tertiary bg-secondary/40 p-4 xl:p-8",
        className ? className : "",
      )}
    >
      {title && (
        <h3
          className={cn(
            "text-lg font-medium leading-128 xl:text-2xl",
            hoverableTitle
              ? "text-white/40 transition-all duration-400 group-hover:text-white"
              : "text-white",
            classNames?.title,
          )}
        >
          {title}
        </h3>
      )}

      {image && !image.icon ? (
        <img
          src={image?.src}
          className={cn(
            "absolute right-1 top-1 animate-workdown xl:right-5 xl:top-4",
            classNames?.image,
          )}
          alt={image.alt}
        />
      ) : (
        <span
          className={cn(
            "absolute right-1 top-1 !mt-0 animate-workdown xl:right-5 xl:top-4",
            classNames?.image,
          )}
        >
          {image?.icon}
        </span>
      )}

      {children}
      {footer && (
        <Animate animation={footer.animation || "fade-up"} as={"div"}>
          <Link
            href={footer.link}
            className="group/footer flex w-full items-center justify-between"
          >
            <span className="text-sm font-medium text-white transition-all duration-400 group-hover/footer:text-primary xl:text-base">
              {footer.text}
            </span>
            <CardArrowIcon className="size-10 fill-white transition-all duration-400 group-hover/footer:fill-primary" />
          </Link>
        </Animate>
      )}
    </div>
  );
};

export { Card };
