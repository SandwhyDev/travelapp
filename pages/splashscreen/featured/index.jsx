import React from "react";
import Montain from "../../../assets/mountain.png";
import Image from "next/image";
import SwiperHome from "../../../components/SwiperHome";
import Head from "next/head";

const Featured = () => {
  return (
    <div className=" w-screen h-screen flex flex-col gap-4 justify-center items-center bg-[#F3F5F6] relative">
      <SwiperHome />
    </div>
  );
};

export default Featured;
