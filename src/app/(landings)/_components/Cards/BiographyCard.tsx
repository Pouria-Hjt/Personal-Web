import { MessageIcon } from "@/assets/icons";
import { pages } from "@/configs";
import { Animate } from "@/ui/Animate/Animate";
import { Card } from "@/ui/Card/Card";
import GroupButton from "@/ui/GroupButton/GroupButton";
import React from "react";
import Profile from "/public/pouria-hajati-profile.png";
import Image from "next/image";
type Props = {};

const BiographyCard = (props: Props) => {
  return (
    <Card
      animation="zoom-in-up"
      duration={100}
      footer={{
        link: pages.about,
        text: "Biography",
      }}
      className="h-[calc(100%-120px)] xl:h-[calc(100%-162px)]"
    >
      <Animate
        animation="fade-up"
        duration={2000}
        as={"div"}
        className="relative mx-auto my-7 aspect-square w-full p-1"
      >
        <div className="absolute left-1/2 top-1/2 aspect-square size-[calc(100%+1rem)] -translate-x-1/2 -translate-y-1/2">
          <img src="/images/user-wrapper.webp" alt="" className="size-full" />
        </div>
        <Image className="rounded-full" src={Profile} alt="profile" />
      </Animate>
      <GroupButton
        as={"a"}
        text="I'm Pouria Hajati"
        className="h-14 w-full gap-1"
        href={pages.about}
        classNames={{
          textButton: "rounded-lg text-xl flex-1",
          iconButton: "rounded-lg",
        }}
        icon={<MessageIcon className="stroke-white" />}
      />
      <p className="mb-20 mt-5 text-base xl:mb-11 xl:text-lg">
        A Passionate Front-end Developer and Creative Thinker
      </p>
    </Card>
  );
};

export { BiographyCard };
