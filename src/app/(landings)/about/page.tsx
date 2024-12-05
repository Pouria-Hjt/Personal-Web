import { Card } from "@/ui/Card/Card";
import { AboutCard, ExperienceCard } from "./_components";
import { Profile } from "@/ui/Profile/Profile";

const About = () => {
  return (
    <div className="mx-auto grid w-full max-w-[100vh] flex-1 gap-4 px-4 lg:max-w-screen-lg lg:grid-cols-12 xl:max-w-screen-xl xl:gap-6">
      <AboutCard />
      <Card animation="zoom-in-up" className="col-span-4" duration={1000}>
        <Profile disableAnimation />
      </Card>
      <ExperienceCard />
      <Card animation="zoom-in-up" className="col-span-3" duration={1000}>
        {/* <Profile disableAnimation /> */}
      </Card>
      <Card animation="zoom-in-up" className="col-span-5" duration={1000}>
        {/* <Profile disableAnimation /> */}
      </Card>
    </div>
  );
};

export default About;
