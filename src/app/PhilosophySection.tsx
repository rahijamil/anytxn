import PhilosophyCard from "@/components/PhilosophyCard";
import { Philosophy } from "@/types/philosophy.types";
import Image from "next/image";
import React from "react";

const philosophies: Philosophy[] = [
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

const PhilosophySection = () => {
  return (
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
          <PhilosophyCard
            key={philosophy.id}
            index={index}
            philosophy={philosophy}
          />
        ))}
      </ul>
    </section>
  );
};

export default PhilosophySection;
