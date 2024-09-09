import { Card, CardProps } from "@/ui/Card/Card";
import React from "react";

type Props = {
  title: string;
  footer: CardProps["footer"];
  animation: CardProps["animation"];
  icon: CardProps["image"];
  classNames: CardProps["classNames"];
  className: string;
};

const TitledCard = ({
  animation,
  footer,
  icon,
  title,
  classNames,
  className,
}: Props) => {
  return (
    <Card
      animation={animation}
      title={title}
      classNames={classNames}
      className={className}
      footer={footer}
      image={icon}
    />
  );
};

export { TitledCard };
