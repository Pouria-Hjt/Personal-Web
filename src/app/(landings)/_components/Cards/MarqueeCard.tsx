import { Card } from "@/ui/Card/Card";
import { Marquee } from "@/ui/magic";
import React from "react";

type Props = {};

const MarqueeCard = (props: Props) => {
  return (
    <Card
      animation="flip-up"
      duration={1400}
      className="w-[calc(100vw-32px)] px-4 py-6 md:w-full xl:px-5 xl:py-8"
    >
      <Marquee className="py-0 [--duration:15s]">
        <img src="/images/cus-star1.webp" alt="" />
        <span className="flex items-center justify-center text-sm text-white text-opacity-70 xl:text-lg">
          LATEST WORKS AND FEATURED
        </span>
      </Marquee>
    </Card>
  );
};

export { MarqueeCard };
