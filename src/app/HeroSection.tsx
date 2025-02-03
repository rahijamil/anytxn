import Button from "@/components/Button";
import HeroImage from "@/components/HeroImage";
import HeroSVG from "@/components/HeroSVG";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="hero_section lg:h-[max(620px,_calc(92vh-49px))] h-auto relative text-white overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%] lg:bg-clip-hero-container">
        <div className="wrapper relative z-10 h-full md:flex md:items-center md:justify-center">
          <div className="h-fit lg:flex-[65] xl:flex-[75]">
            <div className="max-w-2xl lg:space-y-sm space-y-[16px] mb-[32px]">
              <h1 className="lg:max-w-max lg:whitespace-pre-line lg:text-[80px] font-Montserrat text-res-head-1 lg:text-head-1 text-white">
                Embrace the future of finance
              </h1>
              <h5 className="!text-white max-w-[37rem] lg:mr-5 text-res-head-5 lg:text-head-5 font-Montserrat">
                Reimagine financial services with AnyTech&apos;s open platform,
                distributed banking solution that powers transformation
              </h5>
            </div>
            <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full lg:mb-0 mb-md max-w-xl">
              <Button href="/en/contact-us" title=" Reach Out to Us" />
            </div>
          </div>

          <div className="lg:flex-[35] xl:flex-[25] lg:block hidden"></div>
        </div>
        <HeroImage />
        <HeroSVG />
      </section>

      <div className="block lg:hidden translate-y-[-20%] -mb-[10%]">
        <figure
          style={{
            clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0% 100%)",
          }}
          className="object-cover overflow-hidden"
        >
          <Image
            src="/assets/backgrounds/hero_image.jpg"
            width="7952"
            height="5304"
            className="h-full w-full object-cover scale-150"
            sizes="100vw"
            alt="background image"
          />
        </figure>
      </div>
    </>
  );
};

export default HeroSection;
