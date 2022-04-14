import React from "react";
import Like from "../assets/icons/Like.svg";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const CardProduct = ({
  img = "https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
}) => {
  return (
    <div className="pl-5">
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
      <Link href={`/detailproduct/id`}>
        <div className="w-[200px] h-[265px] relative  ">
          <img
            src={img}
            className="w-full h-full object-cover rounded-[18px]  "
            alt=""
          />

          <div className="w-full h-14 bg-gradient-to-t from-[#000] to-transparent absolute bottom-0 left-0 rounded-[18px] px-5 flex justify-between ">
            <div className="flex flex-col">
              <h1 className="font-poppins font-bold text-[18px] text-white">
                Bali
              </h1>
              <p className="font-poppins font-normal text-[13px] text-white">
                Mulai dari 1,500,000
              </p>
            </div>
            <Image src={Like} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProduct;
