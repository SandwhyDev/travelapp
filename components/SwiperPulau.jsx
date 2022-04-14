import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Link from "next/link";
import CardProduct from "./CardProduct";
const SwiperPulau = () => {
  return (
    <div className="w-full ">
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
