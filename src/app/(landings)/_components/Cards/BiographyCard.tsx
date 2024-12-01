import { MessageIcon } from "@/assets/icons";
import { pages } from "@/configs";
import { Card } from "@/ui/Card/Card";
import GroupButton from "@/ui/GroupButton/GroupButton";
import { Profile } from "@/ui/Profile/Profile";
import React from "react";
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
      <Profile />
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
