import Image from "next/image";
import React from "react";

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

const Companies = () => {
  return (
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
  );
};

export default Companies;
