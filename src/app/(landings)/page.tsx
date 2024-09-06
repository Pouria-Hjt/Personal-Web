import { StarsIcon } from "@/assets/icons";
import { Animate } from "@/ui/Animate/Animate";
import { Card } from "@/ui/Card/Card";
import { Marquee } from "@/ui/magic";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <main className="max-w-screen-xl w-full mx-auto grid grid-cols-6 gap-6">
      <div className="col-span-2">
        <Card
          hoverableTitle
          title="Title"
          animation="zoom-in-down"
          image={{
            src: "https://softivuspro.com/bentox/bontox/assets/images/global/cus-stargay.png",
            alt: "star",
          }}>
          <h2 className="capitalize text-4xl font-medium leading-128">
            FrontEnd Developer
          </h2>
        </Card>
      </div>
      <div className="col-span-2">
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
      </div>
      <div className="col-span-2">
        <Card animation="flip-up" duration={1400} className="px-5 py-8">
          <Marquee className="[--duration:15s] py-0">
            <img
              src="https://softivuspro.com/bentox/bontox/assets/images/global/cus-star1.png"
              alt=""
            />
            <span className="flex justify-center items-center text-opacity-70 text-lg text-white">
              LATEST WORKS AND FEATURED
            </span>
          </Marquee>
        </Card>
      </div>
    </main>
  );
};

export default Home;
