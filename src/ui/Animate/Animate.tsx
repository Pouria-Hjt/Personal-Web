"use client";
import React from "react";
import { Animations } from "@/@types";
import { easingOptions } from "aos";

interface Props {
  as: React.ElementType;
  animation: Animations;
  easingFunction?: easingOptions;
  duration?: number;
  delay?: number;
  children?: React.ReactNode;
}
const Animate: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({
  as: Component,
  animation,
  delay,
  duration,
  easingFunction,
  children,
  ...props
}: Props) => {
  return (
    <Component
      data-aos={animation}
      data-aos-duration={duration || 400}
      data-aos-easing={easingFunction || "ease-in-out"}
      data-aos-delay={delay || 0}
      data-aos-once="true"
      {...props}
    >
      {children}
    </Component>
  );
};

export { Animate };
