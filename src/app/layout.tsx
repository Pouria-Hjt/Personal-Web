import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { Providers } from "@/features";

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  adjustFontFallback: true,
  display: "swap",
  preload: true,
  variable: "--font-kanit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pouria Hajati - Front-end Developer",
  description: "Hi there! I'm Pouria Hajati, a passionate front-end developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className} h-fit min-h-screen w-full select-none text-white`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
