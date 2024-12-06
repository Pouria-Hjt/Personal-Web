import { Card } from "@/ui/Card/Card";
import React from "react";
import { SingleStat } from "./SingleStat";

type Props = {};

const StatsCard = (props: Props) => {
  return (
    <Card animation="zoom-in-up" className="lg:col-span-5" duration={1000}>
      {/* <Profile disableAnimation /> */}
      <div className="grid h-full w-full grid-cols-2 gap-8">
        <SingleStat title="YEARS OF EXPERIENCE" stat="07+" />
        <SingleStat title="TOTAL PROJECTS" stat="+125" />
        <SingleStat title="RECOGNITIONS" stat="09" />
        <SingleStat title="UNHAPPY CLIENTS" stat="00" />
      </div>
    </Card>
  );
};

export { StatsCard };
