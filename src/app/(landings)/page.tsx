import { Animate } from "@/ui/Animate/Animate";
import { Card } from "@/ui/Card/Card";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <main className="max-w-screen-xl w-full mx-auto grid grid-cols-6">
      <div className="col-span-2">
        <Card
          hoverableTitle
          title="Title"
          animation="fade-down"
          image={{
            src: "https://softivuspro.com/bentox/bontox/assets/images/global/cus-stargay.png",
            alt: "star",
          }}>
          <h2 className="capitalize text-4xl font-medium leading-128">
            FrontEnd Developer
          </h2>
        </Card>
      </div>
    </main>
  );
};

export default Home;
