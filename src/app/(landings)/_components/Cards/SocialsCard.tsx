import { ISocialBox } from "@/@types";
import { InstagramIcon, TelegramIcon } from "@/assets/icons";
import { XIcon } from "@/assets/icons/X.icon";
import { Card } from "@/ui/Card/Card";
import { SocialBox } from "@/ui/SocialBox/SocialBox";
import React from "react";

type Props = {};
const socials: ISocialBox[] = [
  {
    icon: <InstagramIcon className="size-10" />,
    link: "https://www.instagram.com/",
  },
  {
    icon: <TelegramIcon className="size-10" />,
    link: "https://www.telegram.com/",
  },
  {
    icon: <XIcon className="size-8" />,
    link: "https://www.x.com/",
  },
];
const SocialsCard = (props: Props) => {
  return (
    <Card animation="zoom-in-down" className="h-full">
      <div className=" mx-auto flex flex-col gap-5 ">
        {socials.map((social) => (
          <SocialBox {...social} key={social.link} />
        ))}
      </div>
    </Card>
  );
};

export { SocialsCard };
