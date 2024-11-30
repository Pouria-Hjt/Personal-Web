import { BackgroundBeamsWithCollision } from "@/ui/aceternity";
import { Footer, Navbar } from "./_components";

export default function LandingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-fit min-h-screen flex-col bg-[#0A090D]">
      <BackgroundBeamsWithCollision className="flex-col items-start justify-start">
        <Navbar />
        {children}
        <Footer />
      </BackgroundBeamsWithCollision>
    </div>
  );
}
