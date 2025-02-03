"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-transparent text-white max-lg:bg-blue-main max-lg:py-8 top-0 lg:absolute w-full lg:pt-[17px] lg:pb-[25px] text-res-body-p1 lg:text-body-p1 z-[9999] h-[85px] lg:h-auto flex items-center justify-center">
      <div className="wrapper relative z-50">
        <div className="flex flex-wrap items-center justify-between">
          <h1>
            <Link href="/">
              <Image
                src="/assets/anytech.svg"
                alt="AnyTech"
                width={200}
                height={32}
                className="max-w-[134px] sm:max-w-max max-h-[22px] sm:max-h-max"
              />
            </Link>
          </h1>

          <Navbar />

          <div className="hidden lg:block">
            <Link
              href="/en/contact-us"
              className="border border-white bg-transparent hover:bg-white hover:text-blue-main hidden max-lg:w-full max-lg:justify-center max-lg:mt-16 pl-6 pr-10 py-[13px] text-res-link lg:text-link lg:flex items-center group/highlight transition-all drop-shadow-button-primary hover:shadow-button-primary rounded-sm font-bold"
            >
              Contact Us
              <svg
                className="fill-white translate-x-3.5 transition-transform group-hover/highlight:translate-x-5 group-hover/highlight:fill-blue-main"
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.67969 5.89844L2.13281 10.4688C1.89844 10.6797 1.54688 10.6797 1.33594 10.4688L0.796875 9.92969C0.585938 9.71875 0.585938 9.36719 0.796875 9.13281L4.40625 5.5L0.796875 1.89062C0.585938 1.65625 0.585938 1.30469 0.796875 1.09375L1.33594 0.554688C1.54688 0.34375 1.89844 0.34375 2.13281 0.554688L6.67969 5.125C6.89062 5.33594 6.89062 5.6875 6.67969 5.89844Z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
