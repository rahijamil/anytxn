import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#002045]">
        <div className="wrapper flex items-center justify-between py-11">
          <Link href="/en">
            <picture
              style={{
                display: "flex",
                alignItems: "stretch",
                backgroundSize: "cover",
              }}
            >
              <source
                srcSet="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&amp;fm=webp 200w"
                type="image/webp"
                sizes="127px, (min-width: 1024px) 217px"
              />
              <source
                srcSet="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200 200w"
                sizes="127px, (min-width: 1024px) 217px"
              />

              <Image
                src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg"
                width="200"
                height="32"
                data-x-lqip="false"
                data-x-lqip-transition-duration="0"
                loading="lazy"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                className="!w-[127px] !w-[217px] !object-contain"
                alt="AnyTech"
              />
            </picture>
          </Link>
          <div className="hidden items-center text-[#00E9EA] lg:flex">
            <p className="border-r border-blue-dark px-6 py-4 text-res-body-p1-semibold lg:text-body-p1-semibold">
              Our Solutions
            </p>
            <ul className="flex items-center">
              <li>
                <Link
                  className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1"
                  href="/en/solutions/anycaas"
                >
                  AnyCaaS
                </Link>
              </li>
              <li>
                <Link
                  className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1"
                  href="/en/solutions/anybaas"
                >
                  AnyBaaS
                </Link>
              </li>
              <li>
                <Link
                  className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1"
                  href="/en/solutions/anypaas"
                >
                  AnyPaaS
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-6 lg:hidden lg:gap-10">
            <Link
              href="https://www.linkedin.com/company/anytxn"
              className="flex items-center text-res-body-p1-semibold text-blue-main transition-opacity duration-300 hover:opacity-70 lg:text-body-p1-semibold"
            >
              <picture
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  backgroundSize: "cover",
                }}
                className="shrink-0 object-contain"
              >
                <source
                  srcSet="https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=320&amp;fm=webp 320w, https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=640&amp;fm=webp 640w, https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=960&amp;fm=webp 960w, https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=1280&amp;fm=webp 1280w, https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=1600&amp;fm=webp 1600w, https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=1920&amp;fm=webp 1920w, https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=2240&amp;fm=webp 2240w, https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=2560&amp;fm=webp 2560w, https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=2880&amp;fm=webp 2880w, https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=3200&amp;fm=webp 3200w, https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=3520&amp;fm=webp 3520w, https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=3840&amp;fm=webp 3840w"
                  type="image/webp"
                  sizes="24px"
                />
                <source
                  srcSet="https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=320 320w, https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=640 640w, https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=960 960w, https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=1280 1280w, https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=1600 1600w, https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=1920 1920w, https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=2240 2240w, https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=2560 2560w, https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=2880 2880w, https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=3200 3200w, https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=3520 3520w, https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=3840 3840w"
                  sizes="24px"
                />

                <Image
                  src="https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg"
                  alt=""
                  width={14}
                  height={15}
                />
              </picture>
            </Link>
            <Link
              href="tel:+6590021890"
              className="flex items-center text-res-body-p1-semibold text-blue-main transition-opacity duration-300 hover:opacity-70 lg:text-body-p1-semibold"
            >
              <picture
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  backgroundSize: "cover",
                }}
                className="shrink-0 object-contain"
              >
                <source
                  srcSet="https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=320&amp;fm=webp 320w, https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=640&amp;fm=webp 640w, https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=960&amp;fm=webp 960w, https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=1280&amp;fm=webp 1280w, https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=1600&amp;fm=webp 1600w, https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=1920&amp;fm=webp 1920w, https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=2240&amp;fm=webp 2240w, https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=2560&amp;fm=webp 2560w, https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=2880&amp;fm=webp 2880w, https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=3200&amp;fm=webp 3200w, https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=3520&amp;fm=webp 3520w, https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=3840&amp;fm=webp 3840w"
                  type="image/webp"
                  sizes="24px"
                />
                <source
                  srcSet="https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=320 320w, https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=640 640w, https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=960 960w, https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=1280 1280w, https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=1600 1600w, https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=1920 1920w, https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=2240 2240w, https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=2560 2560w, https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=2880 2880w, https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=3200 3200w, https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=3520 3520w, https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=3840 3840w"
                  sizes="24px"
                />

                <Image
                  src="https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg"
                  data-x-lqip="true"
                  data-x-lqip-transition-duration="350"
                  loading="lazy"
                  alt=""
                  width={17}
                  height={18}
                />
              </picture>
            </Link>
            <Link
              href="mailto:enquiry@anytxn.com"
              className="flex items-center text-res-body-p1-semibold text-blue-main transition-opacity duration-300 hover:opacity-70 lg:text-body-p1-semibold"
            >
              <picture
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  backgroundSize: "cover",
                }}
                className="shrink-0 object-contain"
              >
                <source
                  srcSet="https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=320&amp;fm=webp 320w, https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=640&amp;fm=webp 640w, https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=960&amp;fm=webp 960w, https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=1280&amp;fm=webp 1280w, https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=1600&amp;fm=webp 1600w, https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=1920&amp;fm=webp 1920w, https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=2240&amp;fm=webp 2240w, https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=2560&amp;fm=webp 2560w, https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=2880&amp;fm=webp 2880w, https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=3200&amp;fm=webp 3200w, https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=3520&amp;fm=webp 3520w, https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=3840&amp;fm=webp 3840w"
                  type="image/webp"
                  sizes="24px"
                />
                <source
                  srcSet="https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=320 320w, https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=640 640w, https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=960 960w, https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=1280 1280w, https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=1600 1600w, https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=1920 1920w, https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=2240 2240w, https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=2560 2560w, https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=2880 2880w, https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=3200 3200w, https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=3520 3520w, https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=3840 3840w"
                  sizes="24px"
                />

                <Image
                  src="https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg"
                  width={16}
                  height={12}
                  alt=""
                />
              </picture>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b border-blue-dark"></div>

      <div className="bg-[#00152D]">
        <div className="wrapper flex flex-col items-center justify-between py-6 text-res-body-p2 text-blue-main lg:flex-row lg:text-body-p2">
          <p>
            <strong>©2023 All rights reserved</strong>. Any Technology Pte Ltd.
          </p>
          <div className="flex items-center gap-[14px] max-lg:mt-4">
            <Link
              className="transition-colors duration-300 hover:text-blue-highlight"
              href="/en/privacy-policy"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
