import Image from "next/image";
import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ x: "20%" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full bg-clip-hero-image pointer-events-none"
    >
      <figure
        className="h-[115%] w-[115%] object-cover"
        style={{
          transform: "translate3d(-12%, 0.014%, 0px)",
          transition: "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <Image
          src="/assets/backgrounds/hero_image.jpg"
          alt="Background Image"
          width={7952}
          height={5304}
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="gradient-overlay"></div>
    </motion.div>
  );
};

export default HeroImage;
