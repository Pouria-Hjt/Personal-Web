import React from "react";
import {
  BiographyCard,
  LatestWorksCard,
  MarqueeCard,
  TechnologiesCard,
  TitleCard,
} from "./_components";

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
          <div className="">
            <MarqueeCard />
          </div>
        </div>
        <div className="grid grid-cols-4 w-full"></div>
      </div>
    </main>
  );
};

export default Home;
