import React from "react";
import {
  BiographyCard,
  CenteredCard,
  LatestWorksCard,
  MarqueeCard,
  SocialsCard,
  TechnologiesCard,
  TitleCard,
  TitledCard,
} from "./_components";
import { Card } from "@/ui/Card/Card";
import { pages } from "@/configs";

type Props = {};

const Home = (props: Props) => {
  return (
    <main className="max-w-screen-xl w-full mx-auto grid grid-cols-6 gap-6">
      <div className="col-span-2 space-y-6">
        <TitleCard />
        <BiographyCard />
      </div>
      <div className="col-span-4">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6">
            <LatestWorksCard />
            <TechnologiesCard />
          </div>
          <div className="space-y-6">
            <MarqueeCard />
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 w-full">
                <CenteredCard
                  animation="fade-down"
                  description="YEARS EXPERIENCE"
                  title="03"
                />
                <CenteredCard
                  className="!mt-[38px]"
                  animation="fade-up"
                  description="ToTal PROJECTS"
                  title="10"
                />
              </div>
              <SocialsCard />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 w-full mt-6 gap-6">
          <TitledCard
            className="aspect-square w-full p-6"
            icon={{
              src: "https://softivuspro.com/bentox/bontox/assets/images/global/s-shape1.png",
              alt: "shape1",
            }}
            animation="fade-up-left"
            footer={{
              link: pages.offerings,
              text: "All Services",
              animation: "fade-up",
            }}
            classNames={{
              image: "animate-none top-0 right-0",
            }}
            title="Services"
          />
          <TitledCard
            className="w-full col-span-2 p-6"
            icon={{
              src: "https://softivuspro.com/bentox/bontox/assets/images/global/s-shape2.png",
              alt: "shape1",
            }}
            animation="fade-up"
            footer={{
              link: pages.offerings,
              text: "All Services",
              animation: "fade-up",
            }}
            classNames={{
              image: "animate-none ",
            }}
            title="Let’s Works Together"
          />
          <TitledCard
            className="aspect-square w-full p-6"
            icon={{
              src: "https://softivuspro.com/bentox/bontox/assets/images/global/s-shape3.png",
              alt: "shape1",
            }}
            animation="fade-down-right"
            footer={{
              link: pages.blog,
              text: "All Blog",
              animation: "fade-up",
            }}
            classNames={{
              image: "animate-none top-0 ",
            }}
            title="Blog"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
