import { ISocialBox } from "@/@types";
import React from "react";

type Props = ISocialBox;

const SocialBox = ({ icon, link }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      className="group/icon relative flex aspect-square size-full max-w-[100px] items-center justify-center rounded-full border fill-white transition-all duration-1000 hover:border-transparent hover:fill-primary md:size-[100px]"
    >
      <div className="absolute left-1/2 top-1/2 aspect-square size-[124px] -translate-x-1/2 -translate-y-1/2 object-cover opacity-0 transition-all duration-1000 group-hover/icon:rotate-45 group-hover/icon:opacity-100">
        <img className="size-full" src="/images/social-hover.webp" alt="" />
      </div>
      {icon}
    </a>
  );
};

export { SocialBox };
