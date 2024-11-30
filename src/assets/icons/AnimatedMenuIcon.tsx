import { IIcon } from "@/@types";
import { cn } from "@/utils";
import React, { useState } from "react";

interface IAnimatedMenuIcon extends IIcon {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AnimatedMenuIcon = ({
  isOpen,
  setIsOpen,
  className,
  ...props
}: IAnimatedMenuIcon) => {
  //   const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 10"
      stroke="currentColor"
      strokeWidth=".6"
      fill="currentColor"
      strokeLinecap="round"
      className={cn(
        "aspect-square w-14 cursor-pointer fill-transparent stroke-primary",
        className ?? "",
      )}
      onClick={handleClick}
      {...props}
    >
      <path
        d={
          isOpen
            ? "M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
            : "M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
        }
        style={{
          transition: "all 0.2s ease-in-out",
        }}
      />
    </svg>
  );
};

export { AnimatedMenuIcon };
