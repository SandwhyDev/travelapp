import React from "react";
import Logo from "../assets/traveler.png";
import Image from "next/image";
import Head from "next/head";

const Wellcome = () => {
  return (
    <div className="fadeInUp w-screen h-screen flex flex-col justify-center items-center bg-[#F3F5F6]">
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
      <Image src={Logo} />
      <h1 className="uppercase text-[45px] text-[#1BBA85] font-bold font-poppins ">
        Pergi
      </h1>
    </div>
  );
};

export default Wellcome;
