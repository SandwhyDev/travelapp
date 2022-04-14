import React from "react";
import { HiHome } from "react-icons/hi";
import { FaCompass, FaBell } from "react-icons/fa";
import Notification from "../assets/icons/Notification.svg";
import Profile from "../assets/icons/Profile.svg";
import Image from "next/image";

const Bottom = () => {
  return (
    <div className="w-full h-10  flex items-center justify-between pr-10 pl-5  ">
      <span className="text-2xl text-gray">
        <HiHome />
      </span>

      <span className="text-2xl text-gray">
        <FaCompass />
      </span>

      <span className="text-2xl text-gray ">
        <Image src={Notification} width={22} height={22} />
      </span>

      <span className="text-2xl  ">
        <Image src={Profile} width={22} height={22} />
      </span>
    </div>
  );
};

export default Bottom;
