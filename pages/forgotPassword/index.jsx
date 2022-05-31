import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/router";
import Head from "next/head";

const ForgotPassword = () => {
  const navigate = useRouter();
  const handleSubmit = () => {
    navigate.push("/login");
  };
  return (
    <div className="w-screen h-screen bg-second_white flex flex-col px-5 py-10 gap-5">
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
      <span className="text-xl" onClick={handleSubmit}>
        <BsArrowLeft />
      </span>
      <h1 className="text-[40px] text-black font-poppins font-semibold ">
        Forget password
      </h1>
      <p className="text-[17px] font-poppins ">
        Masukan alamat email untuk <br /> Reset Password
      </p>

      <div className="form_group">
        <input
          type="email"
          id="email"
          name="email"
          placeholder={"Email"}
          className=" p-4 w-full rounded-[15px] text-black  outline-none invalid:border-[#1BBA85] invalid:border-2 invalid:text-[#1BBA85] font-medium font-poppins "
        />
      </div>

      <button
        className="bg-[#A9A9A9] h-[57px] rounded-[15px] capitalize text-[18px] mt-5 text-white font-poppins font-bold hover:bg-[#1BBA85] "
        onClick={handleSubmit}
      >
        Kirim
      </button>
    </div>
  );
};

export default ForgotPassword;
