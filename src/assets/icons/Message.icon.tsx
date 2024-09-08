import { IIcon } from "@/@types";
import React from "react";

type Props = IIcon;

const MessageIcon = (props: Props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M9.86625 8.42687L21.1863 4.65354C26.2663 2.96021 29.0263 5.73354 27.3463 10.8135L23.5729 22.1335C21.0396 29.7469 16.8796 29.7469 14.3463 22.1335L13.2262 18.7735L9.86625 17.6535C2.25292 15.1202 2.25292 10.9735 9.86625 8.42687Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"></path>
      <path
        d="M13.4766 18.2007L18.2499 13.4141"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"></path>
    </svg>
  );
};

export { MessageIcon };
