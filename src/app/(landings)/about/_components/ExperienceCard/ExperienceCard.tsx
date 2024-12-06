"use client";
import { ExperienceArrowIcon } from "@/assets/icons";
import { Card } from "@/ui/Card/Card";
import React from "react";
import { SingleExperience, SingleExperienceProps } from "./SingleExperince";
import { Download } from "lucide-react";
import Link from "next/link";

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
      className="w-full lg:col-span-4"
      duration={1000}
      classNames={{
        image: "xl:top-9 xl:right-8 !animate-none ",
      }}
      image={{
        icon: (
          <Link
            href="https://pouria-hjt.storage.iran.liara.space/resume/Pouria-Hajati-Fa-CV.pdf"
            target="_blank"
            download={"Pouria-Hajati-Fa-CV.pdf"}
            className="flex size-12 items-center justify-center rounded-full border border-quaternary transition-all hover:border-primary"
          >
            <Download />
          </Link>
        ),
        alt: "download Icon",
      }}
    >
      <div className="mt-6 space-y-6">
        {experiences.map((experience, index) => (
          <SingleExperience
            key={`${experience.company}-${index}`}
            {...experience}
          />
        ))}
      </div>
    </Card>
  );
};

export { ExperienceCard };
