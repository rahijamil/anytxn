"use client";
import Link from "next/link";
import React, { useState } from "react";

const Button = ({ href, title }: { href: string; title: string }) => {
  const [onMouseOver, setOnMouseOver] = useState<boolean>(false);

  return (
    <Link
      className="md:py-[15.5px] py-[14px] px-[42px] rounded-xs shadow-button-primary text-link text-white flex items-center justify-center space-x-[8px] bg-orange-main"
      href={href}
      onMouseOver={() => setOnMouseOver(true)}
      onMouseLeave={() => setOnMouseOver(false)}
    >
      <span
        className={`${
          onMouseOver ? "-translate-x-1" : "translate-x-0"
        } transition-all duration-300`}
      >
        {title}
      </span>{" "}
      <svg
        width="6"
        height="9"
        viewBox="0 0 6 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          onMouseOver ? "translate-x-1" : "translate-x-0"
        } transition-all duration-300`}
      >
        <path
          d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"
          fill="white"
        ></path>
      </svg>
    </Link>
  );
};

export default Button;
