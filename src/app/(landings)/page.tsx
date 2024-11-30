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
import { pages } from "@/configs";

type Props = {};

const Home = (props: Props) => {
  return (
    <main className="mx-auto grid w-full max-w-[100vh] gap-4 px-4 lg:max-w-screen-lg lg:grid-cols-6 xl:max-w-screen-xl xl:gap-6">
      <div className="mx-auto w-full space-y-4 md:w-fit lg:col-span-2 xl:space-y-6">
        <TitleCard />
        <BiographyCard />
      </div>
      <div className="w-full lg:col-span-4">
        <div className="grid gap-4 md:grid-cols-2 xl:gap-6">
          <div className="space-y-4 xl:space-y-6">
            <LatestWorksCard />
            <TechnologiesCard />
          </div>
          <div className="space-y-4 xl:space-y-6">
            <MarqueeCard />
            <div className="xl grid gap-4 md:grid-cols-2 xl:gap-6">
              <div className="w-full space-y-4 xl:space-y-6">
                <CenteredCard
                  animation="fade-down"
                  description="YEARS EXPERIENCE"
                  title="03"
                />
                <CenteredCard
                  className="md:h-[212px] xl:h-[237px]"
                  animation="fade-up"
                  description="ToTal PROJECTS"
                  title="10"
                />
              </div>
              <SocialsCard />
            </div>
          </div>
        </div>
        <div className="mt-4 grid w-full gap-4 md:grid-cols-4 xl:mt-6 xl:gap-6">
          <TitledCard
            className="w-full p-6 md:col-span-3"
            icon={{
              src: "/images/s-shape2.webp",
              alt: "shape1",
            }}
            animation="fade-up"
            footer={{
              link: pages.offerings,
              text: "All Services",
              animation: "fade-up",
            }}
            classNames={{
              image: "!animate-none ",
            }}
            title="Let’s Works Together"
          />
          <TitledCard
            className="w-full p-6 md:aspect-square"
            icon={{
              src: "/images/s-shape3.webp",
              alt: "shape1",
            }}
            animation="fade-down-right"
            footer={{
              link: pages.blog,
              text: "All Blog",
              animation: "fade-up",
            }}
            classNames={{
              image: "!animate-none top-0 ",
            }}
            title="Blog"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
