import { ISocialBox } from "@/@types";
import { InstagramIcon, TelegramIcon, XIcon } from "@/assets/icons";
import { GithubIcon } from "@/assets/icons/techs";
import { GithubOutline } from "@/assets/icons/techs/GithubOutline.icon";
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
    icon: <GithubOutline className="size-10" />,
    link: "https://www.x.com/",
  },
];
const SocialsCard = (props: Props) => {
  return (
    <Card animation="zoom-in-down" className="h-full">
      <div className="grid h-full w-full grid-cols-3 justify-items-center gap-5 py-5 md:grid-cols-1">
        {socials.map((social) => (
          <SocialBox {...social} key={social.link} />
        ))}
      </div>
    </Card>
  );
};

export { SocialsCard };
