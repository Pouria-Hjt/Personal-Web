"use client";
import React, { PropsWithChildren, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Providers = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  return <>{children}</>;
};

export { Providers };
