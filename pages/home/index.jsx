import React from "react";
import { BiMenuAltLeft, BiBell } from "react-icons/bi";

import { BsBell } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

import Image from "next/image";
import Trip from "../../assets/Trip.svg";
import Hotel from "../../assets/Hotel.svg";
import Transport from "../../assets/Transport.svg";
import Events from "../../assets/Events.svg";
import NotificationTop from "../../assets/icons/NotificationTop.svg";

import Head from "next/head";
import Bottom from "../../components/Bottom";
import CardProduct from "../../components/CardProduct";
import SwiperProduct from "../../components/SwiperProduct";
import SwiperPulau from "../../components/SwiperPulau";
const Home = () => {
  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-between gap-5  pt-5 ">
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
      <div className="w-full   flex flex-col gap-3 pr-6 pl-5">
        <div className="w-full flex justify-between">
          <span className="text-4xl">
            <BiMenuAltLeft />
          </span>

          <span className="text-4xl">
            <Image src={NotificationTop} />
          </span>
        </div>

        <h1 className="font-poppins text-[28px]">
          Mau kemana kamu <br /> ingin pergi ?
        </h1>

        <div className="w-full h-12 bg-second_gray rounded-[86px] flex items-center pl-4 pr-2  ">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Cari Perjalananmu"
            className="w-full bg-transparent outline-none no-underline"
          />
          <div className="w-[45px] h-[40px] bg-green rounded-full flex items-center justify-center ">
            <span className="text-xl text-white font">
              <IoSearch />
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-[400px]  flex flex-col gap-4  ">
        <div className="w-full  flex  items-center gap-4 pl-5">
          {/* <SwiperPulau /> */}
          <h1 className="text-green font-nunito text-[20px] font-semibold capitalize">
            All
          </h1>

          <h1 className="text-gray font-nunito text-[20px] font-semibold capitalize">
            Jawa
          </h1>

          <h1 className="text-gray font-nunito text-[20px] font-semibold capitalize">
            Sumatra
          </h1>

          <h1 className="text-gray font-nunito text-[20px] font-semibold capitalize">
            sulawesi
          </h1>

          <h1 className="text-gray font-nunito text-[20px] font-semibold capitalize">
            timur
          </h1>
        </div>

        <div className="w-full h-[250px]   ">
          <SwiperProduct />
        </div>

        <div className="w-full h-full  flex flex-col gap-1 mt-1 pl-5 ">
          <h1 className="font-nunito font-bold text-[17px]  ">
            Popular Categories
          </h1>

          <div className="w-full flex gap-2 justify-between">
            <div className=" h-[75px]  flex flex-col gap-1 items-center justify-center">
              <Image src={Trip} />
              <p className="font-nunito font-bold text-[14px] text-gray ">
                Trips
              </p>
            </div>
            <div className="w-20 h-[75px]  flex flex-col gap-1 items-center justify-center">
              <Image src={Hotel} />
              <p className="font-nunito font-bold text-[14px] text-gray ">
                Hotel
              </p>
            </div>
            <div className="w-20 h-[75px]  flex flex-col gap-1 items-center justify-center">
              <Image src={Transport} />
              <p className="font-nunito font-bold text-[14px] text-gray ">
                Transport
              </p>
            </div>

            <div className="w-20 h-[75px]  flex flex-col gap-1 items-center justify-center">
              <Image src={Events} />
              <p className="font-nunito font-bold text-[14px] text-gray ">
                Events
              </p>
            </div>
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default Home;
