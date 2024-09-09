import { InstagramIcon, TelegramIcon } from "@/assets/icons";
import { XIcon } from "@/assets/icons/X.icon";
import { Card } from "@/ui/Card/Card";
import React from "react";

type Props = {};
const socials: {
  icon: React.ReactNode;
  link: string;
}[] = [
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
          <a
            key={social.link}
            href={social.link}
            target="_blank"
            className="flex items-center justify-center size-[100px] border rounded-full relative aspect-square fill-white hover:fill-primary group/icon hover:border-transparent transition-all duration-1000">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[124px] aspect-square object-cover opacity-0 group-hover/icon:opacity-100 group-hover/icon:rotate-45  transition-all duration-1000">
              <img
                className="size-full"
                src="https://softivuspro.com/bentox/bontox/assets/images/global/social-hover.png"
                alt=""
              />
            </div>
            {social.icon}
          </a>
        ))}
      </div>
    </Card>
  );
};

export { SocialsCard };
