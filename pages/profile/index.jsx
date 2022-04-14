import React from "react";
import Bottom from "../../components/Bottom";
import { BsArrowLeft, BsArrowRightShort } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import Head from "next/head";
import Settings from "../../assets/icons/settings.svg";
import Lock from "../../assets/icons/Lock.svg";
import Help from "../../assets/icons/help.svg";
import Logout from "../../assets/icons/Logout.svg";
import Image from "next/image";
import Link from "next/link";
const Profile = () => {
  return (
    <div className="w-screen h-screen bg-second_white flex flex-col justify-between">
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
      <div className="w-full h-full flex flex-col py-2 px-5">
        <div className="flex gap-4 w-full h-20 items-center justify-center">
          {/* <Link href={"/home"}>
            <span className="w-10 h-10 bg-white flex items-center justify-center rounded-full text-xl">
              <BsArrowLeft />
            </span>
          </Link> */}
          <h1 className="font-poppins font-semibold text-[25px]">Account</h1>
        </div>

        <div className="w-full flex flex-col gap-2 p-5 items-center">
          <img
            src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-[100px] h-[100px] object-cover rounded-full "
            alt=""
          />
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-poppins font-semibold text-[26px]">
              Nama Lengkap
            </h1>
            <p className="font-poppins font-medium text-[16px] text-gray">
              ID : 5645782
            </p>
          </div>
        </div>
        <div className="w-full h-[300px]  flex flex-col gap-6 ">
          <Link href={"/profile/editprofile/id"}>
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image src={Settings} />
                <h1 className="text-[#26273C] font-poppins font-medium text-[18px] ">
                  Preferences
                </h1>
              </div>
              <span className="text-2xl text-gray">
                <IoIosArrowForward />
              </span>
            </div>
          </Link>

          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image src={Lock} />
              <h1 className="text-[#26273C] font-poppins font-medium text-[18px] ">
                Account Security
              </h1>
            </div>
            <span className="text-2xl text-gray">
              <IoIosArrowForward />
            </span>
          </div>

          <div className="flex flex-col gap-2 px-12 -mt-4 ">
            <div className="bg-[#1bba8528] w-full h-3 rounded-full">
              <div className="bg-green w-[50%] h-full rounded-full"></div>
            </div>
            <p className="font-poppins font-medium text-[16px] text-[#9395A4] ">
              intermediate
            </p>
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image src={Help} />
              <h1 className="text-[#26273C] font-poppins font-medium text-[18px] ">
                Help
              </h1>
            </div>
            <span className="text-2xl text-gray">
              <IoIosArrowForward />
            </span>
          </div>

          <Link href={"/login"}>
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image src={Logout} />

                <h1 className="text-[#26273C] font-poppins font-medium text-[18px] ">
                  Logout
                </h1>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Bottom />
    </div>
  );
};

export default Profile;
