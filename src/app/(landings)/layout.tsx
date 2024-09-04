import { BackgroundBeamsWithCollision } from "@/ui/aceternity";
import { Navbar } from "./_components";

export default function LandingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#0A090D] h-fit min-h-screen flex flex-col">
      <BackgroundBeamsWithCollision className="flex-col items-start justify-start">
        <Navbar />
        {children}
      </BackgroundBeamsWithCollision>
    </div>
  );
}
