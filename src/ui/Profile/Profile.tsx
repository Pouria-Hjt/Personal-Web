import React from "react";
import { Animate } from "../Animate/Animate";
import Image from "next/image";
import ProfileImage from "/public/pouria-hajati-profile.png";
import ProfileWrapper from "/public/images/user-wrapper.webp";

type Props = {
  disableAnimation?: boolean;
};

const Profile = ({ disableAnimation }: Props) => {
  return (
    <Animate
      animation={disableAnimation ? "" : "fade-up"}
      duration={2000}
      as={"div"}
      className="relative mx-auto aspect-square h-full max-h-64 w-full max-w-64 p-1 md:my-7"
    >
      <div className="absolute left-1/2 top-1/2 aspect-square size-[calc(100%+1rem)] -translate-x-1/2 -translate-y-1/2">
        <Image src={ProfileWrapper} alt="user-wrapper" className="size-full" />
      </div>
      <Image className="rounded-full" src={ProfileImage} alt="profile" />
    </Animate>
  );
};

export { Profile };
