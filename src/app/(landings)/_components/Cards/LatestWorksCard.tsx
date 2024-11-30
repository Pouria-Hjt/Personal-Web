import { StarsIcon } from "@/assets/icons";
import { pages } from "@/configs";
import { Card } from "@/ui/Card/Card";
import CrispyLand from "../../../../../public/crispy-land.png";
import React from "react";
import Image from "next/image";

type Props = {};

const LatestWorksCard = (props: Props) => {
  return (
    <Card
      title="See My Latest Works"
      animation="zoom-in-left"
      image={{
        icon: <StarsIcon />,
      }}
      classNames={{
        title: "mb-4",
        image: "top-1 right-1 xl:top-5 xl:right-5",
      }}
      className="py-4"
      footer={{
        link: pages.works,
        text: "All projects",
      }}
    >
      <div className="mx-auto mb-4 aspect-video h-fit w-fit max-w-80 rounded-2xl bg-[#222426] p-1">
        <Image
          className="size-full rounded-xl object-cover object-top"
          src={CrispyLand}
          alt=""
        />
      </div>
    </Card>
  );
};
export { LatestWorksCard };
