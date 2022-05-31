import React,{ useState } from "react";
import { BsArrowLeft, BsArrowRightShort } from "react-icons/bs";
import { BiWifi } from "react-icons/bi";
import Head from "next/head";
import Star from "../../assets/icons/Star.svg";
import Wifi from "../../assets/icons/wifi.svg";
import Minibar from "../../assets/icons/Minibar.svg";
import Parking from "../../assets/icons/Parking.svg";
import Gym from "../../assets/icons/Gym.svg";
import Laundry from "../../assets/icons/Laundry.svg";
import Love from "../../assets/icons/Love.svg";
import Image from "next/image";
import Link from "next/link";
import SwiperPhotos from "../../components/SwiperPhotos";
import PreImage from "../../components/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
const DetailProduct = () => {
  const [showImg, setShowImg] = useState(false)
  const preImg = ()=>{
    setShowImg(!showImg)
  }
  return (
    <main className="w-screen h-screen bg-white flex flex-col">
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
      {showImg && (
        <div className="w-screen h-screen bg-black/70 absolute top-0 z-20 flex items-center justify-center p-5" onClick={preImg}>
           <img
          src="https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className=" object-cover"
          alt=""
          onClick={preImg}
        />
        </div>
      )}
      <div className="w-full h-[500px] bg-green  ">
        {/* <SwiperPhotos /> */}
        {/* <PreImage /> */}
        {/* <img
          src="https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full h-full object-cover"
          alt=""
          onClick={preImg}
        /> */}

<Swiper
        // slidesPerView={1}
        // spaceBetween={-150}
        loop={true}
        // pagination={{ clickable: true }}
        className="bg-red-500 h-[350px]"
      >
        <SwiperSlide>
          <PreImage />
        </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/5819116/pexels-photo-5819116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-full h-full object-cover"
              alt=""
              onClick={preImg}
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
        <div className="w-full h-20 bg-gradient-to-b from-[#00000067] to-transparent absolute top-0 flex items-center px-5 z-10">
          <Link href={"/home"}>
            <span className="text-white text-xl">
              <BsArrowLeft />
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full h-[55%] bg-white z-10 -mt-[180px] rounded-[40px] flex flex-col gap-4 px-7 pt-5 pb-0">
        <div className="w-full h-20   flex flex-col  items-center">
          <div className="w-full h-12 flex items-center justify-between ">
            <h1 className="text-[23px] font-nunito font-bold ">
              Bali, Indonesia
            </h1>
            <Image src={Love} />
            {/* <h1 className="text-[20px] font-nunito font-bold text-green ">
              Rp.1.500.000
            </h1> */}
          </div>
          <div className="w-full h-12 flex items-center justify-between">
            <div className="flex  gap-2   ">
              <Image src={Star} />
              <p className="font-nunito font-semibold text-gray text-[15px]  ">
                4.9 (500)
              </p>
            </div>
            {/* <h1 className="text-[16px] font-nunito font-bold text-gray  ">
              * Estimasi Harga
            </h1> */}
          </div>
        </div>

        <hr className="text-slate-200 border-[1px]" />

        <div className="w-full h-[67px] flex gap-2">
          <div className="w-[200px] bg-second_gray rounded-[13px] p-3 flex justify-between  ">
            <div className="flex flex-col gap-1">
              <h1 className="text-[10px] font-nunito text-gray ">Check-in</h1>
              <h1 className="font-nunito font-semibold  ">25 Aug</h1>
            </div>
            <span className="flex  items-center justify-center text-2xl text-[#7A869A]">
              <BsArrowRightShort />
            </span>
            <div className="flex flex-col gap-1">
              <h1 className="text-[10px] font-nunito text-gray ">Check-out</h1>
              <h1 className="font-nunito font-semibold  ">26 Aug</h1>
            </div>
          </div>
          <div className="w-[60px]  bg-second_gray rounded-[13px] flex flex-col items-center py-3  ">
            <h1 className="text-[10px] font-nunito text-gray ">Guest</h1>
            <h1 className="font-nunito font-semibold  ">1</h1>
          </div>
          <div className="w-[60px] bg-second_gray rounded-[13px] flex flex-col items-center py-3   ">
            <h1 className="text-[10px] font-nunito text-gray ">Room</h1>
            <h1 className="font-nunito font-semibold  ">1</h1>
          </div>
        </div>

        <h1 className="font-nunito text-[16px] font-semibold text-gray ">
          Fasilitas
        </h1>

        <div className="w-full h-[60px]  -mt-3 flex gap-2">
          <div className="w-20 h-[75px] -ml-4 flex flex-col gap-1 items-center justify-center">
            <Image src={Wifi} />
            <p className="font-nunito font-bold text-[14px] text-[#172b4dd0] ">
              Wifi
            </p>
          </div>
          <div className="w-20 h-[75px] -ml-4 flex flex-col gap-1 items-center justify-center">
            <Image src={Minibar} />
            <p className="font-nunito font-bold text-[14px] text-[#172b4dd0] ">
              Mini Bar
            </p>
          </div>

          <div className="w-20 h-[75px] -ml-4 flex flex-col gap-1 items-center justify-center">
            <Image src={Parking} />
            <p className="font-nunito font-bold text-[14px] text-[#172b4dd0] ">
              Parking
            </p>
          </div>

          <div className="w-20 h-[75px] -ml-4 flex flex-col gap-1 items-center justify-center">
            <Image src={Gym} />
            <p className="font-nunito font-bold text-[14px] text-[#172b4dd0] ">
              Gym
            </p>
          </div>

          <div className="w-20 h-[75px] -ml-4 flex flex-col gap-1 items-center justify-center">
            <Image src={Laundry} />
            <p className="font-nunito font-bold text-[14px] text-[#172b4dd0] ">
              Laundry
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full mt-3">
          <div className="flex gap-1  w-[50%] ">
            <h1 className="text-[20px] font-nunito font-bold text-green ">
              Rp.1.5m
            </h1>
            <p className="text-[8px] w-full mt-3 font-nunito font-semibold ">
              / per night
            </p>
          </div>
          <button className="w-[50%] h-[55px] bg-green text-white rounded-[50px]  ml-auto">
            <h1 className="font-nunito font-bold text-[20px] text-white ">
              Book Now
            </h1>
          </button>
        </div>
      </div>
    </main>
  );
};

export default DetailProduct;
