import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Head from "next/head";

import CardProduct from "./CardProduct";
const SwiperProduct = () => {
  return (
    <div className="w-full ">
      <Swiper
        slidesPerView={1}
        spaceBetween={-150}
        // loop={true}
        // pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <CardProduct />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct img="https://images.pexels.com/photos/1819641/pexels-photo-1819641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct img="https://images.pexels.com/photos/9751969/pexels-photo-9751969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperProduct;
