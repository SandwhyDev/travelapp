import React from "react";
import Image from "next/image";
import Pattern from "../../assets/pattern.png";
import Arrow from "../../assets/Arrow.png";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";
import Head from "next/head";

const SplashScreen = () => {
  const navigate = useRouter();
  const handleNext = () => {
    navigate.push("/splashscreen/featured");
  };
  return (
    <div className=" w-screen h-screen flex flex-col gap-12 justify-between items-center bg-[#F3F5F6] relative">
      <Head>
        <title>Pergi</title>
        <link rel="icon" href="Logo.png" />
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
      <Image src={Pattern} width={400} height={300} />
      <h1 className=" font-bold font-poppins text-[44px] text-[#191C32] rotate-[-20deg] ">
        Welcome
      </h1>
      <span className="w-full rotate-180 ">
        <Image src={Pattern} width={400} height={320} />
      </span>

      <button
        className="bg-white rounded-full text-[#1BBA85] font-bold shadow-md absolute bottom-10 right-5 p-5"
        onClick={handleNext}
      >
        <span className=" text-2xl ">
          <FaArrowRight />
        </span>
      </button>
    </div>
  );
};

export default SplashScreen;
