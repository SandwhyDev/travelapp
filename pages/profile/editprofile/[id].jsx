import React from "react";
import { BsArrowLeft, BsArrowRightShort } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Bottom from "../../../components/Bottom";
import Edit from "../../../assets/icons/Edit.svg";
const EditProfile = () => {
  return (
    <div className="w-screen h-screen bg-second_white flex flex-col justify-between">
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
      <div className="w-full h-full flex flex-col py-2 px-5">
        <div className="flex gap-4 w-full h-20 items-center">
          <Link href={"/profile"}>
            <span className="w-10 h-10 bg-white flex items-center justify-center rounded-full text-xl">
              <BsArrowLeft />
            </span>
          </Link>
          <h1 className="font-poppins font-semibold text-[25px]">
            Edit Account
          </h1>
        </div>

        <div className="w-full flex flex-col gap-2 p-5 items-center -mt-5">
          <img
            src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-[100px] h-[100px] object-cover rounded-full "
            alt=""
          />
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-poppins font-medium text-[15px]">
              Ganti Foto Profil
            </h1>
          </div>
        </div>

        <form className="w-full  flex flex-col gap-2  ">
          <div className="form_group flex flex-col gap-2">
            <label
              htmlFor="nama_lengkap"
              className="font-poppins font-semibold text-[13px] px-4"
            >
              Nama Lengkap
            </label>

            <div className="w-full p-4 bg-white flex  justify-between rounded-[15px] ">
              <input
                type="text"
                name="nama_lengkap"
                id="nama_lengkap"
                placeholder="Sandy Al Rasyid Iswahyudi"
                className="outline-none font-poppins font-medium  text-[13px]"
              />

              <Image src={Edit} />
            </div>
          </div>

          <div className="form_group flex flex-col gap-2">
            <label
              htmlFor="lokasi"
              className="font-poppins font-semibold text-[13px] px-4"
            >
              Lokasi
            </label>

            <div className="w-full p-4 bg-white flex  justify-between rounded-[15px] ">
              <input
                type="text"
                name="lokasi"
                id="lokasi"
                placeholder="INA(Indonesia)"
                className="outline-none font-poppins font-medium  text-[13px]"
              />

              <Image src={Edit} />
            </div>
          </div>

          <div className="form_group flex flex-col gap-2">
            <label
              htmlFor="alamat"
              className="font-poppins font-semibold text-[13px] px-4 capitalize"
            >
              alamat
            </label>

            <div className="w-full p-4 bg-white flex  justify-between rounded-[15px] ">
              <input
                type="text"
                name="alamat"
                id="alamat"
                placeholder="Jln. BBD Raya Blok B1 No.91"
                className="outline-none font-poppins font-medium  text-[13px]"
              />

              <Image src={Edit} />
            </div>
          </div>

          <div className="form_group flex flex-col gap-2">
            <label
              htmlFor="no_hp"
              className="font-poppins font-semibold text-[13px] px-4 capitalize"
            >
              no handphone
            </label>

            <div className="w-full p-4 bg-white flex  justify-between rounded-[15px] ">
              <input
                type="tel"
                name="no_hp"
                id="no_hp"
                placeholder="+62 81217333000"
                className="outline-none font-poppins font-medium  text-[13px]"
              />

              <Image src={Edit} />
            </div>
          </div>

          <button className="bg-green w-full mt-2 p-3 rounded-[8px] font-poppins font-bold text-[18px] text-white">
            Ubah Perubahan
          </button>
        </form>
      </div>

      <Bottom />
    </div>
  );
};

export default EditProfile;
