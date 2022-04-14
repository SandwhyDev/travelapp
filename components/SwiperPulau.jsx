import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Link from "next/link";
import CardProduct from "./CardProduct";
import Head from "next/head";

const SwiperPulau = () => {
  return (
    <div className="w-full ">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Swiper
        slidesPerView={3}
        // loop={true}
        // pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Link href={"/about"}>
            <h1 className="text-green font-nunito text-[20px] font-semibold capitalize">
              All
            </h1>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <h1 className="text-green font-nunito text-[20px] font-semibold capitalize">
            Jawa
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="text-green font-nunito text-[20px] font-semibold capitalize">
            Sumatra
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="text-green font-nunito text-[20px] font-semibold capitalize">
            sulawesi
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="text-green font-nunito text-[20px] font-semibold capitalize">
            timur
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperPulau;
