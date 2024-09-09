import { StarsIcon } from "@/assets/icons";
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
        title: "mb-5",
        image: "top-5 right-5",
      }}
      className="py-4"
      footer={{
        link: "/projects",
        text: "All projects",
      }}>
      <div className="mx-auto max-w-72 aspect-video w-fit h-fit p-1 bg-[#222426] rounded-2xl mb-4">
        <img
          className="rounded-xl size-full"
          src="https://softivuspro.com/bentox/bontox/assets/images/banner/latest-work1.png"
          alt=""
        />
      </div>
    </Card>
  );
};
export { LatestWorksCard };
