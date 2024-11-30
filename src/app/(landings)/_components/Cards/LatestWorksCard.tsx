import { StarsIcon } from "@/assets/icons";
import { pages } from "@/configs";
import { Card } from "@/ui/Card/Card";
import React from "react";

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
      <div className="mx-auto mb-4 aspect-video h-fit w-fit max-w-72 rounded-2xl bg-[#222426] p-1">
        <img
          className="size-full rounded-xl"
          src="https://softivuspro.com/bentox/bontox/assets/images/banner/latest-work1.png"
          alt=""
        />
      </div>
    </Card>
  );
};
export { LatestWorksCard };
