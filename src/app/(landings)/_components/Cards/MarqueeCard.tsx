import { Card } from "@/ui/Card/Card";
import { Marquee } from "@/ui/magic";
import React from "react";

type Props = {};

const MarqueeCard = (props: Props) => {
  return (
    <Card animation="flip-up" duration={1400} className="px-5 py-8">
      <Marquee className="[--duration:15s] py-0">
        <img
          src="https://softivuspro.com/bentox/bontox/assets/images/global/cus-star1.png"
          alt=""
        />
        <span className="flex justify-center items-center text-opacity-70 text-lg text-whitevm">
          LATEST WORKS AND FEATURED
        </span>
      </Marquee>
    </Card>
  );
};

export { MarqueeCard };
