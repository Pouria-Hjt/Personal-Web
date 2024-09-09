import { IIcon } from "@/@types";
import React from "react";

type Props = IIcon;

const XIcon = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      {...props}>
      <g clipPath="url(#clip0_0_7747)">
        <path d="M14.2833 10.5804L23.2178 0H21.1006L13.3427 9.18678L7.14656 0H0L9.36984 13.892L0 24.9872H2.11732L10.3098 15.2856L16.8534 24.9872H24L14.2827 10.5804H14.2833ZM11.3833 14.0144L10.4339 12.6311L2.88022 1.62377H6.1323L12.2282 10.507L13.1776 11.8904L21.1016 23.4372H17.8495L11.3833 14.015V14.0144Z" />
      </g>
      <defs>
        <clipPath id="clip0_0_7747">
          <rect width="24" height="25" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { XIcon };
