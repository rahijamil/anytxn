import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Philosophy } from "@/types/philosophy.types";

const PhilosophyCard = ({philosophy,index}: {
    philosophy: Philosophy,
    index: number
}) => {
  return (
    <motion.li
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
  );
};

export default PhilosophyCard;
