import { BackgroundBeamsWithCollision } from "@/ui/aceternity";
import { Footer, Navbar } from "./_components";

export default function LandingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex h-fit min-h-screen flex-col bg-[#0A090D] before:absolute before:left-0 before:top-0 before:z-50 before:size-[500px] before:-translate-x-[250px] before:-translate-y-[250px] before:rounded-full before:bg-[#FF6900]/20 before:blur-[200px]">
      {/* <BackgroundBeamsWithCollision className="min-h-screen flex-col items-start justify-between"> */}
      <Navbar />
      {children}
      <Footer />
      {/* </BackgroundBeamsWithCollision> */}
    </div>
  );
}
