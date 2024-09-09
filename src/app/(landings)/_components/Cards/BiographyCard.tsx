import { MessageIcon } from "@/assets/icons";
import { Animate } from "@/ui/Animate/Animate";
import { Card } from "@/ui/Card/Card";
import GroupButton from "@/ui/GroupButton/GroupButton";
import React from "react";

type Props = {};

const BiographyCard = (props: Props) => {
  return (
    <Card
      animation="zoom-in-up"
      duration={100}
      footer={{
        link: "/",
        text: "Biography",
      }}>
      <Animate
        animation="fade-up"
        duration={2000}
        as={"div"}
        className="my-7 mx-auto aspect-square relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[calc(100%+1rem)] aspect-square">
          <img
            src="https://softivuspro.com/bentox/bontox/assets/images/global/img-resize.png"
            alt=""
            className="size-full"
          />
        </div>
        <img
          className="rounded-full"
          src="https://softivuspro.com/bentox/bontox/assets/images/banner/layla-husbent.png"
          alt=""
        />
      </Animate>
      <GroupButton
        as={"a"}
        text="I'm Pouria Hajati"
        className="gap-1 h-14 w-full"
        href={"/"}
        classNames={{
          textButton: "rounded-lg text-xl flex-1",
          iconButton: "rounded-lg",
        }}
        icon={<MessageIcon className="stroke-white" />}
      />
      <p className="text-lg mt-5 mb-11">
        A Passionate Front-end Developer and Creative Thinker
      </p>
    </Card>
  );
};

export { BiographyCard };
