"use client";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroImage from "@/components/HeroImage";
import HeroSVG from "@/components/HeroSVG";
import TabComponent from "@/components/TabsComponent";
import Image from "next/image";
import StatsSection from "./StatsSection";
import { motion } from "framer-motion";

const companies = [
  {
    id: 1,
    name: "BANK OF CHENGDE",
    logo_url:
      "https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png",
  },
  {
    id: 2,
    name: "BANK OF CHINA",
    logo_url:
      "https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png",
  },
  {
    id: 3,
    name: "Bank of Shanghai",
    logo_url:
      "https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png",
  },
  {
    id: 4,
    name: "CGB",
    logo_url:
      "https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png",
  },
  {
    id: 5,
    name: "CHINA CITIC BANK",
    logo_url:
      "https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png",
  },
  {
    id: 6,
    name: "OneBank",
    logo_url:
      "https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png",
  },
  {
    id: 7,
    name: "PING AN BANK",
    logo_url:
      "https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png",
  },
  {
    id: 8,
    name: "POSTAL SAVINGS BANK OF CHINA",
    logo_url:
      "https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png",
  },
  {
    id: 9,
    name: "sea",
    logo_url:
      "https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png",
  },
  {
    id: 10,
    name: "Shandong City Commercial Banks Alliance",
    logo_url:
      "https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png",
  },
  {
    id: 11,
    name: "VipFubon Consumer Finanace",
    logo_url:
      "https://cdn.sanity.io/images/6jywt20u/production/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.svg",
  },
  {
    id: 12,
    name: "XIAMEN INTERNATIONAL BANK",
    logo_url:
      "https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png",
  },
  {
    id: 13,
    name: "XW",
    logo_url:
      "https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png",
  },
  {
    id: 14,
    name: "SPD BANK",
    logo_url:
      "https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png",
  },
  {
    id: 15,
    name: "DCS",
    logo_url:
      "https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png",
  },
];

const philosophies = [
  {
    id: 1,
    image_path:
      "https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg?auto=format",
    title: "Full-suite solutions",
    description:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
  },
  {
    id: 2,
    image_path:
      "https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?auto=format",
    title: "Simplify the complex",
    description:
      " Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
  },
  {
    id: 3,
    image_path:
      "https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg?auto=format",
    title: "Cutting-edge tech",
    description:
      "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Header />

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

      <section className="wrapper mt-[62px]">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[15px] relative">
          <div className="md:space-y-[24px] space-y-[16px]">
            <h6 className="lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">
              POWERING THE FUTURE OF FINANCE
            </h6>
            <h2 className="whitespace-pre-line font-Montserrat text-res-head-2 text-blue-text lg:text-head-2">
              Uncovering new ways to delight customers
            </h2>

            <div className="!my-[60px] md:hidden block relative h-fit lg:text-clip">
              <figure
                className="w-[76%] mx-auto"
                style={{ boxShadow: "0px 23px 30px 0px #16437763" }}
              >
                <Image
                  src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png"
                  width="1124"
                  height="1364"
                  alt="POWERING THE FUTURE OF FINANCE"
                  className="object-cover w-full h-full"
                />
              </figure>{" "}
              <div>
                <figure
                  className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl"
                  // style="transform: translateX(var(--motion-translateX)) translateY(var(--motion-translateY)); --motion-translateX: 50%;"
                >
                  <Image
                    src="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?auto=format"
                    width="116"
                    height="115"
                    alt="anybass"
                    sizes="115px"
                    className="object-contain w-full h-full"
                  />
                </figure>{" "}
                <figure
                  className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl"
                  // style="transform: translateY(var(--motion-translateY));"
                >
                  <Image
                    src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?auto=format"
                    width="89"
                    height="88"
                    alt="anypass"
                    sizes="87px"
                    className="object-contain w-full h-full"
                  />
                </figure>{" "}
                <figure
                  className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl"
                  // style="transform: translateX(var(--motion-translateX)) translateY(var(--motion-translateY)); --motion-translateX: -50%;"
                >
                  <Image
                    src="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?auto=format"
                    width="74"
                    height="75"
                    className="object-contain w-full h-full"
                    alt="anycaas"
                    sizes="73px"
                  />
                </figure>
              </div>{" "}
              <figure
                className="absolute inset-0 w-full h-full -z-10"
                // style="transform: translate3d(0%, -2.04144%, 0px); transition: transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94); animation-fill-mode: forwards;"
              >
                <Image
                  className="object-cover w-full h-full overflow-visible"
                  loading="lazy"
                  src="/assets/backgrounds/home/futureOfFinance/background.svg"
                  alt="background frame"
                  fill
                />
              </figure>
              <figure
                className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]"
                // style="transform: translate3d(0%, 0.816576%, 0px); transition: transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94); animation-fill-mode: forwards;"
              >
                <Image
                  className="object-cover w-full h-full overflow-visible"
                  loading="lazy"
                  src="/assets/backgrounds/home/futureOfFinance/foreground.png"
                  alt="foreground frame"
                  fill
                />
              </figure>
            </div>

            <div className="lg:pt-2">
              <div>
                <div className="text-body-1">
                  <p>
                    <strong>
                      AnyTech is revolutionising financial technology by
                      introducing innovative and real-time transaction account
                      processing capabilities, specifically designed for retail
                      financial services.
                    </strong>
                  </p>
                </div>
                <div className="text-body-1">
                  <p>
                    <br />
                    Our modern approach surpasses traditional banking and card
                    processing systems, empowering you with the most advanced
                    technology for lasting success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative h-fit lg:text-clip">
            <figure
              className="w-[76%] mx-auto"
              style={{
                boxShadow: "0px 23px 30px 0px #16437763",
              }}
            >
              <Image
                src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?auto=format"
                width="1124"
                height="1364"
                alt="POWERING THE FUTURE OF FINANCE"
                className="object-cover w-full h-full"
                sizes="(min-width: 1024px) 45vw, 95vw"
                loading="lazy"
              />
            </figure>
            <div>
              <figure
                className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl"
                // style="transform: translateX(var(--motion-translateX)) translateY(var(--motion-translateY)); --motion-translateX: 50%;"
              >
                <Image
                  src="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?auto=format"
                  width="116"
                  height="115"
                  alt="anybass"
                  sizes="115px"
                  className="object-contain w-full h-full"
                  loading="lazy"
                />
              </figure>{" "}
              <figure
                className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl"
                // style="transform: translateY(var(--motion-translateY));"
              >
                <Image
                  src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?auto=format"
                  width="89"
                  height="88"
                  alt="anypass"
                  sizes="87px"
                  className="object-contain w-full h-full"
                  loading="lazy"
                />
              </figure>{" "}
              <figure
                className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl"
                // style="transform: translateX(var(--motion-translateX)) translateY(var(--motion-translateY)); --motion-translateX: -50%;"
              >
                <Image
                  src="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?auto=format"
                  width="74"
                  height="75"
                  className="object-contain w-full h-full"
                  alt="anycaas"
                  sizes="73px"
                  loading="lazy"
                />
              </figure>
            </div>{" "}
            <figure
              className="absolute inset-0 w-full h-full -z-10"
              // style="transform: translate3d(0%, -5%, 0px); transition: transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94); animation-fill-mode: forwards;"
            >
              <Image
                className="object-cover w-full h-full overflow-visible"
                src="/assets/backgrounds/home/futureOfFinance/background.svg"
                alt="background frame"
                fill
              />
            </figure>{" "}
            <figure
              className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]"
              // style="transform: translate3d(0%, 2%, 0px); transition: transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94); animation-fill-mode: forwards;"
            >
              <Image
                className="object-cover w-full h-full overflow-visible"
                src="/assets/backgrounds/home/futureOfFinance/foreground.png"
                alt="foreground frame"
                fill
              />
            </figure>
          </div>
        </div>
      </section>

      <svg
        className="max-h-[240px] md:my-sm my-lg w-full min-h-[60px]"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1920 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.7"
          d="M-240 0L1680 0L-240 280L-240 0Z"
          fill="url(#paint0_linear_6055_471)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_6055_471"
            x1="458.5"
            y1="1561.14"
            x2="392.705"
            y2="52.1879"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1F80F0"></stop>
            <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>

      <section className="wrapper md:mb-[128px]">
        <div className="md:space-y-[24px] space-y-[16px] text-center">
          <h6 className="lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">
            OUR PHILOSOPHY
          </h6>
          <h2 className="whitespace-pre-line font-Montserrat text-res-head-2 text-blue-text lg:text-head-2">
            Human-centred innovation
          </h2>
        </div>

        <figure className="pt-[32px] hidden md:block">
          <Image
            src="https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?auto=format"
            width="2206"
            height="727"
            sizes="95vw"
            className="h-full w-full"
            alt="Image"
            loading="lazy"
          />
        </figure>

        <figure className="py-[32px] md:hidden">
          <Image
            src="https://cdn.sanity.io/images/6jywt20u/production/50bc481601f8adb912da12788f7d0143eb5b5eb3-1710x1965.png?auto=format"
            width="1710"
            height="1965"
            sizes="95vw"
            className="h-full w-full "
            alt="Image"
          />
        </figure>

        <ul className="flex overflow-x-auto sm:grid grid-cols-2 lg:grid-cols-3 gap-[30px] scroll-swiper pt-[30px]">
          {philosophies.map((philosophy, index) => (
            <motion.li
              key={philosophy.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="z-20 min-h-full md:space-y-[24px] space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-md p-sm min-w-[80%]"
            >
              <figure className="w-fit rounded-full">
                <Image
                  src={philosophy.image_path}
                  width="50"
                  height="50"
                  sizes="50px"
                  alt={philosophy.title}
                  className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]"
                  loading="lazy"
                />
              </figure>
              <h4 className="undefined font-Montserrat text-blue-text text-res-head-4 lg:text-head-4">
                {philosophy.title}
              </h4>
              <p className="text-body-1">{philosophy.description}</p>
            </motion.li>
          ))}
        </ul>
      </section>

      <svg
        className="md:hidden max-h-[240px] md:my-sm my-lg w-full min-h-[60px]"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1920 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.7"
          d="M-240 0L1680 0L-240 280L-240 0Z"
          fill="url(#paint0_linear_6055_471)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_6055_471"
            x1="458.5"
            y1="1561.14"
            x2="392.705"
            y2="52.1879"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1F80F0"></stop>
            <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>

      <section className="wrapper">
        <div className="md:space-y-[24px] space-y-[16px] text-center">
          <h6 className="lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">
            TECHNOLOGY BUILT FOR YOU
          </h6>
          <h2 className="whitespace-pre-line font-Montserrat text-res-head-2 text-blue-text lg:text-head-2">
            The future of finance
          </h2>
        </div>

        <TabComponent />
      </section>

      <svg
        className="undefined max-h-[240px] md:my-sm my-lg w-full min-h-[60px]"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1920 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.7"
          d="M-240 0L1680 0L-240 280L-240 0Z"
          fill="url(#paint0_linear_6055_471)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_6055_471"
            x1="458.5"
            y1="1561.14"
            x2="392.705"
            y2="52.1879"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1F80F0"></stop>
            <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>

      <section className="mb-sm">
        <div className="wrapper">
          <h6 className="pb-lg text-center lg:pb-md lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">
            TRUSTED BY THE BEST
          </h6>

          <StatsSection />

          <div className="mt-xl flex sm:grid grid-cols-3 gap-x-16 gap-y-[34px] lg:grid-cols-5 overflow-x-auto sm:overflow-x-hidden scroll-swiper">
            {companies.map((company) => (
              <Image
                key={company.id}
                src={company.logo_url}
                width="603"
                height="414"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
                className="max-w-[170px] sm:max-w-max"
                alt={company.name}
                title={company.name}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="common-cta_container"
        className="relative h-[60vh] lg:h-[530px] w-full text-white bg-clip-cta overflow-hidden bg-[url('/assets/backgrounds/ctaMobileWaveLines.svg')] bg-no-repeat bg-cover md:z-20 z-0"
      >
        <div className="wrapper flex items-start justify-center h-full relative z-10 flex-col mt-6">
          <h2 className="font-Montserrat text-res-head-2 text-white lg:text-head-2 font-semibold mb-[24px]">
            Legacy no longer
          </h2>
          <p className="text-base lg:text-lg 2xl:text-xl lg:whitespace-pre-line mb-[30px]">
            Talk to us to find out how we can transform your organisation for
            the future
          </p>
          <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full">
            <Button title="Contact Us" href="/en/contact-us"></Button>
          </div>
        </div>

        <svg
          className="lg:block hidden absolute h-[120%] w-[120%] left-[-10%] top-[-10%]"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 2316 1021"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="cta-background-patterns">
            <g
              id="dark-patterns"
              style={{
                transform:
                  "translateX(var(--motion-translateX)) translateY(var(--motion-translateY))",
                // "--motion-translateX": "0px",
                // "--motion-translateY": "0px",
              }}
            >
              <g id="Vector">
                <path
                  d="M1968.32 314.946V192.878L1492.64 587.535H1639.77L1968.32 314.946Z"
                  fill="url(#paint0_linear_1_547)"
                ></path>
              </g>
              <g id="Vector_2">
                <path
                  d="M2036.7 424.054V301.985L1561.03 696.643H1708.15L2036.7 424.054Z"
                  fill="url(#paint1_linear_1_547)"
                ></path>
              </g>
              <g id="Vector_3">
                <path
                  d="M856.409 397.443V212.315L135 810.849H358.134L856.409 397.443Z"
                  fill="url(#paint2_linear_1_547)"
                ></path>
              </g>
              <g id="Vector_4">
                <path
                  d="M819.587 305.826V188L360.44 568.941H502.456L819.587 305.826Z"
                  fill="url(#paint3_linear_1_547)"
                ></path>
              </g>
              <g id="Vector_5">
                <path
                  d="M2315.5 349.533V143L1510.68 810.739H1759.61L2315.5 349.533Z"
                  fill="url(#paint4_linear_1_547)"
                ></path>
              </g>
              <g id="Vector_6">
                <path
                  d="M1688.78 477.271V395.506L1370.15 659.858H1468.7L1688.78 477.271Z"
                  fill="url(#paint5_linear_1_547)"
                ></path>
              </g>
              <g id="Vector_7">
                <path
                  d="M1739.88 320.611V252.731L1475.36 472.193H1557.17L1739.88 320.611Z"
                  fill="url(#paint6_linear_1_547)"
                ></path>
              </g>
              <g id="Vector_8">
                <path
                  d="M1641.43 402.256V312.585L1292 602.499H1400.08L1641.43 402.256Z"
                  fill="url(#paint7_linear_1_547)"
                ></path>
              </g>
              <g id="Vector_9" filter="url(#filter0_f_1_547)">
                <path
                  d="M2098.33 317.372V245.249L1817.28 478.428H1904.21L2098.33 317.372Z"
                  fill="url(#paint8_linear_1_547)"
                ></path>
              </g>
              <g id="Vector_10" filter="url(#filter1_f_1_547)">
                <path
                  d="M1872.34 193.563V121.44L1591.29 354.619H1678.22L1872.34 193.563Z"
                  fill="url(#paint9_linear_1_547)"
                ></path>
              </g>
              <g id="Vector_11">
                <path
                  d="M2013.32 46L1658.17 340.653H1683.57L2013.32 67.0733V46Z"
                  fill="url(#paint10_linear_1_547)"
                ></path>
                <path
                  d="M2013.32 46L1658.17 340.653H1683.57L2013.32 67.0733V46Z"
                  fill="url(#paint11_linear_1_547)"
                ></path>
              </g>
              <g id="Vector_12" filter="url(#filter2_f_1_547)">
                <path
                  d="M1854.1 284.937V234.027L1655.71 398.623H1717.07L1854.1 284.937Z"
                  fill="url(#paint12_linear_1_547)"
                ></path>
              </g>
            </g>
            <g
              id="light-patterns"
              style={{
                transform:
                  "translateX(var(--motion-translateX)) translateY(var(--motion-translateY))",
                // "--motion-translateX": "0px",
                // "--motion-translateY": "0px",
              }}
            >
              <g id="Vector_13" filter="url(#filter3_f_1_547)">
                <path
                  d="M1764 384.676V268.997L1390 642.997H1505.68L1764 384.676Z"
                  fill="url(#paint13_linear_1_547)"
                ></path>
              </g>
              <g id="Vector_14" filter="url(#filter4_f_1_547)">
                <path
                  d="M1345 579.677V463.998L971 837.998H1086.68L1345 579.677Z"
                  fill="url(#paint14_linear_1_547)"
                ></path>
              </g>
              <g id="Vector_15" filter="url(#filter5_f_1_547)">
                <path
                  d="M623 351.677V235.998L249 609.998H364.679L623 351.677Z"
                  fill="url(#paint15_linear_1_547)"
                ></path>
              </g>
              <g id="Vector_16" filter="url(#filter6_f_1_547)">
                <path
                  d="M2138 558.86V466.997L1841 763.997H1932.86L2138 558.86Z"
                  fill="url(#paint16_linear_1_547)"
                ></path>
              </g>
              <path
                id="Vector_17"
                d="M1406 435.302V361.997L1169 598.997H1242.3L1406 435.302Z"
                fill="url(#paint17_linear_1_547)"
              ></path>
              <g id="Vector_18" filter="url(#filter7_f_1_547)">
                <path
                  d="M1442 229.997L1107 564.997H1130.94L1442 253.937V229.997Z"
                  fill="url(#paint18_linear_1_547)"
                ></path>
              </g>
              <g id="Vector_19" filter="url(#filter8_f_1_547)">
                <path
                  d="M684 113.998L349 448.998H372.939L684 137.937V113.998Z"
                  fill="url(#paint19_linear_1_547)"
                ></path>
              </g>
              <g id="Vector_20" filter="url(#filter9_f_1_547)">
                <path
                  d="M427 132.998L92 467.998H115.939L427 156.937V132.998Z"
                  fill="url(#paint20_linear_1_547)"
                ></path>
              </g>
              <g id="Vector_21" filter="url(#filter10_f_1_547)">
                <path
                  d="M1886 335.997L1507 714.997H1534.08L1886 363.081V335.997Z"
                  fill="url(#paint21_linear_1_547)"
                ></path>
                <path
                  d="M1886 335.997L1507 714.997H1534.08L1886 363.081V335.997Z"
                  fill="url(#paint22_linear_1_547)"
                ></path>
              </g>
              <g id="Vector_22" filter="url(#filter11_f_1_547)">
                <path
                  d="M1693 281.998L1314 660.998H1341.08L1693 309.082V281.998Z"
                  fill="url(#paint23_linear_1_547)"
                ></path>
                <path
                  d="M1693 281.998L1314 660.998H1341.08L1693 309.082V281.998Z"
                  fill="url(#paint24_linear_1_547)"
                ></path>
              </g>
              <g id="Vector_23" filter="url(#filter12_f_1_547)">
                <path
                  d="M400 620.998L21 999.998H48.0835L400 648.082V620.998Z"
                  fill="url(#paint25_linear_1_547)"
                ></path>
                <path
                  d="M400 620.998L21 999.998H48.0835L400 648.082V620.998Z"
                  fill="url(#paint26_linear_1_547)"
                ></path>
              </g>
              <g id="Vector_24" filter="url(#filter13_f_1_547)">
                <path
                  d="M614 21.9982L235 400.998H262.084L614 49.0819V21.9982Z"
                  fill="url(#paint27_linear_1_547)"
                ></path>
                <path
                  d="M614 21.9982L235 400.998H262.084L614 49.0819V21.9982Z"
                  fill="url(#paint28_linear_1_547)"
                ></path>
              </g>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_1_547"
              x="1795.28"
              y="223.249"
              width="325.049"
              height="277.179"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="11"
                result="effect1_foregroundBlur_1_547"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter1_f_1_547"
              x="1540.29"
              y="70.4401"
              width="383.049"
              height="335.179"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="25.5"
                result="effect1_foregroundBlur_1_547"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter2_f_1_547"
              x="1604.71"
              y="183.027"
              width="300.387"
              height="266.597"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="25.5"
                result="effect1_foregroundBlur_1_547"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter3_f_1_547"
              x="1339"
              y="217.997"
              width="476"
              height="476"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="25.5"
                result="effect1_foregroundBlur_1_547"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter4_f_1_547"
              x="949"
              y="441.998"
              width="418"
              height="418"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="11"
                result="effect1_foregroundBlur_1_547"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter5_f_1_547"
              x="227"
              y="213.998"
              width="418"
              height="418"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="11"
                result="effect1_foregroundBlur_1_547"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter6_f_1_547"
              x="1819"
              y="444.997"
              width="341"
              height="341"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="11"
                result="effect1_foregroundBlur_1_547"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter7_f_1_547"
              x="1086"
              y="208.997"
              width="377"
              height="377"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="10.5"
                result="effect1_foregroundBlur_1_547"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter8_f_1_547"
              x="328"
              y="92.9979"
              width="377"
              height="377"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="10.5"
                result="effect1_foregroundBlur_1_547"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter9_f_1_547"
              x="71"
              y="111.998"
              width="377"
              height="377"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="10.5"
                result="effect1_foregroundBlur_1_547"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter10_f_1_547"
              x="1486"
              y="314.997"
              width="421"
              height="421"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="10.5"
                result="effect1_foregroundBlur_1_547"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter11_f_1_547"
              x="1293"
              y="260.998"
              width="421"
              height="421"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="10.5"
                result="effect1_foregroundBlur_1_547"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter12_f_1_547"
              x="0"
              y="599.998"
              width="421"
              height="421"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="10.5"
                result="effect1_foregroundBlur_1_547"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter13_f_1_547"
              x="214"
              y="0.998169"
              width="421"
              height="421"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="10.5"
                result="effect1_foregroundBlur_1_547"
              ></feGaussianBlur>
            </filter>
            <linearGradient
              id="paint0_linear_1_547"
              x1="1284.93"
              y1="953.252"
              x2="1712.65"
              y2="343.23"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F80F0"></stop>
              <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_547"
              x1="1353.31"
              y1="1062.36"
              x2="1781.04"
              y2="452.338"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F80F0"></stop>
              <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_1_547"
              x1="-180.015"
              y1="1365.49"
              x2="468.664"
              y2="440.338"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F80F0"></stop>
              <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_1_547"
              x1="159.946"
              y1="921.947"
              x2="572.804"
              y2="333.127"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F80F0"></stop>
              <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint4_linear_1_547"
              x1="1159.24"
              y1="1429.51"
              x2="1882.92"
              y2="397.388"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F80F0"></stop>
              <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint5_linear_1_547"
              x1="1231.02"
              y1="904.825"
              x2="1517.52"
              y2="496.216"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F80F0"></stop>
              <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint6_linear_1_547"
              x1="1359.85"
              y1="675.562"
              x2="1597.7"
              y2="336.34"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F80F0"></stop>
              <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint7_linear_1_547"
              x1="1139.41"
              y1="871.153"
              x2="1453.62"
              y2="423.033"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F80F0"></stop>
              <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint8_linear_1_547"
              x1="1766.18"
              y1="497.444"
              x2="2039.43"
              y2="216.389"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA"></stop>
              <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
            </linearGradient>
            <linearGradient
              id="paint9_linear_1_547"
              x1="1621.35"
              y1="343.084"
              x2="1757.38"
              y2="186.949"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F80F0"></stop>
              <stop offset="1" stopColor="#005CC7"></stop>
            </linearGradient>
            <linearGradient
              id="paint10_linear_1_547"
              x1="1539.82"
              y1="386.104"
              x2="1820.1"
              y2="122.109"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white"></stop>
              <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint11_linear_1_547"
              x1="1593.6"
              y1="364.682"
              x2="1938.9"
              y2="9.53058"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA"></stop>
              <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
            </linearGradient>
            <linearGradient
              id="paint12_linear_1_547"
              x1="1619.64"
              y1="412.046"
              x2="1812.53"
              y2="213.655"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA"></stop>
              <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
            </linearGradient>
            <linearGradient
              id="paint13_linear_1_547"
              x1="1322"
              y1="673.497"
              x2="1755"
              y2="303.997"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA"></stop>
              <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
            </linearGradient>
            <linearGradient
              id="paint14_linear_1_547"
              x1="903"
              y1="868.498"
              x2="1336"
              y2="498.998"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA"></stop>
              <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
            </linearGradient>
            <linearGradient
              id="paint15_linear_1_547"
              x1="181"
              y1="640.498"
              x2="614"
              y2="270.998"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA"></stop>
              <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
            </linearGradient>
            <linearGradient
              id="paint16_linear_1_547"
              x1="1787"
              y1="788.218"
              x2="2130.85"
              y2="494.791"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA"></stop>
              <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
            </linearGradient>
            <linearGradient
              id="paint17_linear_1_547"
              x1="1133.51"
              y1="606.285"
              x2="1275.78"
              y2="429.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA"></stop>
              <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint18_linear_1_547"
              x1="1116.85"
              y1="555.755"
              x2="1433.94"
              y2="261.347"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#40FEFF"></stop>
              <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
            </linearGradient>
            <linearGradient
              id="paint19_linear_1_547"
              x1="358.848"
              y1="439.755"
              x2="675.938"
              y2="145.348"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#40FEFF"></stop>
              <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
            </linearGradient>
            <linearGradient
              id="paint20_linear_1_547"
              x1="101.848"
              y1="458.755"
              x2="418.938"
              y2="164.348"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#40FEFF"></stop>
              <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
            </linearGradient>
            <linearGradient
              id="paint21_linear_1_547"
              x1="1643.28"
              y1="647.974"
              x2="2003.25"
              y2="397.707"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white"></stop>
              <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint22_linear_1_547"
              x1="1279.1"
              y1="776.321"
              x2="1815.37"
              y2="217.592"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA"></stop>
              <stop offset="1" stopColor="#1F80F0"></stop>
            </linearGradient>
            <linearGradient
              id="paint23_linear_1_547"
              x1="1450.28"
              y1="593.974"
              x2="1810.25"
              y2="343.707"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white"></stop>
              <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint24_linear_1_547"
              x1="1086.1"
              y1="722.321"
              x2="1622.37"
              y2="163.592"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA"></stop>
              <stop offset="1" stopColor="#1F80F0"></stop>
            </linearGradient>
            <linearGradient
              id="paint25_linear_1_547"
              x1="157.276"
              y1="932.975"
              x2="517.248"
              y2="682.708"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white"></stop>
              <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint26_linear_1_547"
              x1="-206.902"
              y1="1061.32"
              x2="329.37"
              y2="502.593"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA"></stop>
              <stop offset="1" stopColor="#1F80F0"></stop>
            </linearGradient>
            <linearGradient
              id="paint27_linear_1_547"
              x1="371.276"
              y1="333.975"
              x2="731.248"
              y2="83.7077"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white"></stop>
              <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint28_linear_1_547"
              x1="7.09845"
              y1="462.322"
              x2="543.37"
              y2="-96.4076"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA"></stop>
              <stop offset="1" stopColor="#1F80F0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </section>

      <Footer />
    </main>
  );
}
