import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Link from "next/link";
import Montain from "../assets/mountain.png";
import Cars from "../assets/cars.png";
import Plane from "../assets/plane.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";
const SwiperHome = () => {
  const navigate = useRouter();
  const handleNext = () => {
    navigate.push("/register");
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative   ">
      <Swiper
        modules={[Autoplay, Pagination]}
        // autoplay={{ delay: 5000 }}
        className="w-full h-[700px]  "
        // loop={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className=" p-2 flex gap-2 flex-col justify-center items-center w-full h-full">
            <Image src={Montain} width={200} height={200} />

            <h1 className="font-bold text-[28px] font-poppins  ">
              Banyak Destinasi
            </h1>
            <p className="text-[#A5A7AC] text-center text-[16px] font-poppins px-5 ">
              Temukan tempat untuk perjalanan Anda di dunia dan rasakan
              pengalaman hebat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" p-2 flex flex-col gap-2 justify-center items-center w-full h-full">
            <Image src={Cars} width={200} height={200} />

            <h1 className="font-bold text-[28px] font-poppins  ">
              Pilih Destinasi
            </h1>
            <p className="text-[#A5A7AC] text-center text-[16px] font-poppins px-5 ">
              Pilih tempat untuk perjalanan Anda dengan mudah dan ketahui biaya
              tur yang tepat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-2 flex flex-col gap-2 justify-center items-center w-full h-full">
            <Image src={Plane} width={200} height={200} />

            <h1 className="font-bold text-[28px] font-poppins  ">
              Terbang ke Destinasi
            </h1>
            <p className="text-[#A5A7AC] text-center text-[16px] font-poppins px-5 ">
              Akhirnya, bersiaplah untuk tur dan pergi ke tujuan yang Anda
              inginkan.
            </p>
          </div>

          <button
            className="bg-white rounded-full text-[#1BBA85] font-bold shadow-md absolute bottom-10 right-5 p-5"
            onClick={handleNext}
          >
            <span className=" text-2xl ">
              <FaArrowRight />
            </span>
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperHome;
