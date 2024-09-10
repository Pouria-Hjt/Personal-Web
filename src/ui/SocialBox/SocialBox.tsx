import { ISocialBox } from "@/@types";
import React from "react";

type Props = ISocialBox;

const SocialBox = ({ icon, link }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center justify-center size-[100px] border rounded-full relative aspect-square fill-white hover:fill-primary group/icon hover:border-transparent transition-all duration-1000">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[124px] aspect-square object-cover opacity-0 group-hover/icon:opacity-100 group-hover/icon:rotate-45  transition-all duration-1000">
        <img
          className="size-full"
          src="https://softivuspro.com/bentox/bontox/assets/images/global/social-hover.png"
          alt=""
        />
      </div>
      {icon}
    </a>
  );
};

export { SocialBox };
