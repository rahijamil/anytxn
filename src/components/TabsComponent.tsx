import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";

const tabItems = [
  {
    id: 1,
    name: "Customer focused",
  },
  {
    id: 2,
    name: "Agile and adaptable",
  },
  {
    id: 3,
    name: "Compliance ready",
  },
  {
    id: 4,
    name: "Secure and safe",
  },
];

const tabCardItems = [
  {
    id: 1,
    tabName: "Customer focused",
    title: "Purpose-built financial services",
    description1:
      "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
    description2:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg",
  },
  {
    id: 2,
    tabName: "Agile and adaptable",
    title: "Agile and adaptable",
    description1:
      "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
    description2:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=1280&auto=format",
  },
  {
    id: 3,
    tabName: "Compliance ready",
    title: "Compliance ready",
    description1:
      "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
    description2:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    image: "/assets/production/compliance_ready.png",
  },
  {
    id: 4,
    tabName: "Secure and safe",
    title: "Secure and safe",
    description1:
      "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
    description2:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=1280&auto=format",
  },
];

export default function TabComponent() {
  const [activeTabId, setActiveTabId] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveTabId((prevId) => {
        const nextId = prevId < tabCardItems.length ? prevId + 1 : 1;
        if (containerRef.current) {
          const cardWidth =
            containerRef.current.scrollWidth / tabCardItems.length;
          containerRef.current.scrollTo({
            left: cardWidth * (nextId - 1),
            behavior: "smooth",
          });
        }
        return nextId;
      });
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, [isInView]);

  const handleTabClick = (id: number) => {
    setActiveTabId(id);
    if (containerRef.current) {
      const cardWidth = containerRef.current.scrollWidth / tabCardItems.length;
      containerRef.current.scrollTo({
        left: cardWidth * (id - 1),
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={sectionRef}>
      {/* Tabs */}
      <div className="flex-wrap space-x-4 justify-center items-center lg:flex hidden py-[32px]">
        {tabItems.map((tabItem) => (
          <button
            key={tabItem.id}
            className={`lg:text-body-p0 text-res-body-p0 !font-semibold xl:px-[48px] md:px-[38px] px-[28px] py-[6px] xl:py-[8px] rounded-[200px] transition-colors duration-300 text-blue-main ${
              activeTabId == tabItem.id
                ? "bg-blue-highlight"
                : "hover:bg-[#F5FAFF]"
            }`}
            onClick={() => handleTabClick(tabItem.id)}
          >
            {tabItem.name}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div
        ref={containerRef}
        className="relative max-md:mt-[24px] flex gap-[50px] box-content overflow-x-auto scroll-swiper snap-x snap-mandatory"
        style={{
          filter: "drop-shadow(rgba(207, 233, 247, 0.47) 0px 16px 21px)",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
        }}
      >
        {tabCardItems.map((card) => (
          <article
            key={card.id}
            data-id={card.id}
            className="grid lg:grid-cols-2 grid-cols-1 md:gap-[32px] lg:p-[64px] rounded-[20px] mb-5 p-[24px] lg:h-[550px] bg-white min-w-full snap-start"
          >
            <div className="lg:space-y-[32px] space-y-[16px]">
              <h6 className="lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">
                {card.tabName}
              </h6>
              <figure className="md:hidden h-[150px]">
                <Image
                  src={card.image}
                  width="6400"
                  height="4800"
                  alt={card.tabName}
                  className="h-full w-full object-cover rounded-[8px]"
                />
              </figure>
              <h3 className="text-blue-text text-res-head-3 lg:text-head-3 font-Montserrat">
                {card.title}
              </h3>
              <p className="text-body-1 !font-bold">{card.description1}</p>
              <p className="text-body-1 mt-2">{card.description2}</p>
            </div>
            <figure className="hidden md:block h-[425px]">
              <Image
                src={card.image}
                width="3672"
                height="2712"
                alt={card.tabName}
                className="h-full w-full object-cover rounded-[16px]"
                sizes="35vw"
                loading="lazy"
              />
            </figure>
          </article>
        ))}
      </div>

      {/* Mobile Dots */}
      <div className="flex items-center justify-center gap-4 py-8 sm:hidden">
        {tabItems.map((_, index) => (
          <span
            key={index}
            onClick={() => handleTabClick(index + 1)}
            className={`w-[10px] h-[10px] rounded-full cursor-pointer inline-block ${
              activeTabId == index + 1 ? "bg-blue-main" : "bg-blue-highlight"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
