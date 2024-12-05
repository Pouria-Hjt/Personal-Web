import { ExperienceArrowIcon } from "@/assets/icons";
import { Card } from "@/ui/Card/Card";
import React from "react";
import { SingleExperience, SingleExperienceProps } from "./SingleExperince";

type Props = {};

const ExperienceCard = (props: Props) => {
  const experiences: SingleExperienceProps[] = [
    {
      company: "Kixy LTD",
      from: "apr 2024",
      to: "now",
    },
    {
      company: "Mehr-Pars ICT",
      from: "nov 2023",
      to: "mar 2024",
    },
    {
      company: "Pishkhan-e-Melli ",
      from: "jun 2023",
      to: "oct 2023",
    },
  ];
  return (
    <Card
      animation="zoom-in-up"
      title={"My Experience"}
      className="col-span-4"
      duration={1000}
    >
      <div className="mt-6 space-y-6">
        {experiences.map((experience, index) => (
          <SingleExperience {...experience} />
        ))}
      </div>
    </Card>
  );
};

export { ExperienceCard };
