import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import CardProduct from "./CardProduct";
const SwiperPhotos = () => {
  return (
    <div className="w-full h-full  ">
      <Swiper
        // slidesPerView={1}
        // spaceBetween={-150}
        loop={true}
        // pagination={{ clickable: true }}
        className="bg-red-500 h-[350px]"
      >
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full h-full object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/5819116/pexels-photo-5819116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full h-full object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/2121455/pexels-photo-2121455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full h-full object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full h-full object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full h-full object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full h-full object-cover"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperPhotos;
