import React from "react";
import {
  BiographyCard,
  CenteredCard,
  LatestWorksCard,
  MarqueeCard,
  SocialsCard,
  TechnologiesCard,
  TitleCard,
} from "./_components";
import { Card } from "@/ui/Card/Card";

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
        <div className="grid grid-cols-4 w-full"></div>
      </div>
    </main>
  );
};

export default Home;
