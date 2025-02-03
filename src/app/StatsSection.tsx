"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { id: 1, value: 20, suffix: "", label: "Years of Experience" },
  { id: 2, value: 40, suffix: "+", label: "Financial Institutions" },
  { id: 3, value: 200, suffix: "m", label: "Customers Each" },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCounts((prevCounts) =>
          prevCounts.map((count, i) =>
            count < stats[i].value ? count + Math.ceil(stats[i].value / 50) : stats[i].value
          )
        );
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="items-center justify-between max-lg:space-y-6 lg:flex xl:mx-28">
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className="flex items-center border-dashed max-lg:justify-between lg:flex-col max-lg:border-b border-blue-highlight max-lg:pb-xs"
        >
          <h2 className="max-[280px]:text-[40px] text-[64px] lg:text-[96px] font-Montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-blue-main to-[#0057BB] text-transparent bg-clip-text">
            <motion.span animate={{ opacity: isInView ? 1 : 0 }}>
              {">"}
              {counts[index]}
              {stat.suffix}
            </motion.span>
          </h2>
          <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
