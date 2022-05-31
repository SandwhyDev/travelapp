import Image from "next/image";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Facebook from "../../assets/Facebook.png";
import Link from "next/link";
import Head from "next/head";

const Register = () => {
  const [loginGoogle, setLoginGoogle] = useState(false);

  const showGoogle = () => {
    setLoginGoogle(!loginGoogle);
  };

  const [loginFacebook, setloginFacebook] = useState(false);

  const showFacebook = () => {
    setloginFacebook(!loginFacebook);
  };
  return (
    <div className="w-screen h-screen flex flex-col gap-6  bg-[#F3F5F6] relative">
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
      {loginGoogle && (
        <div
          className="w-full h-full bg-black/40 absolute top-0 p-10 flex flex-col items-center justify-center  "
          onClick={showGoogle}
        >
          <div className="w-full h-[440px] bg-[#F3F5F6] rounded-[40px] flex flex-col items-center justify-center gap-10 p-5">
            <div className="flex flex-col  items-center justify-center gap-2 ">
              <span className="text-[48px] mb-2">
                <FcGoogle />
              </span>

              <h1 className="text-[22px] font-poppins font-bold">Daftar</h1>
              <p className="-mt-2">Lanjut Dengan Gmail</p>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={"masukan email"}
                className="capitalize p-4 w-full rounded-[15px] font-medium text-[#B3B2B2] shadow-xl  outline-none hover:border-[#1BBA85] hover:border-2 hover:text-[#1BBA85] hover:font-semibold font-poppins mt-4 "
              />
            </div>

            <button className="bg-[#1BBA85] text-white w-[160px] h-[60px] shadow-xl rounded-[18px] ">
              Next
            </button>
          </div>
        </div>
      )}

      {loginFacebook && (
        <div
          className="w-full h-full bg-black/40 absolute top-0 p-10 flex flex-col items-center justify-center  "
          onClick={showFacebook}
        >
          <div className="w-full h-[440px] bg-[#F3F5F6] rounded-[40px] flex flex-col items-center justify-center gap-10 p-5">
            <div className="flex flex-col  items-center justify-center gap-2 ">
              <span className="text-[48px] text-blue-500 mb-2">
                <BsFacebook />
              </span>

              <h1 className="text-[22px] font-poppins font-bold">Daftar</h1>
              <p className="-mt-2">Lanjut Dengan Facebook</p>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={"masukan email"}
                className="capitalize p-4 w-full rounded-[15px] font-medium text-[#B3B2B2] shadow-xl  outline-none hover:border-[#1BBA85] hover:border-2 hover:text-[#1BBA85] hover:font-semibold font-poppins mt-2 "
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder={"masukan password"}
                className="capitalize p-4 w-full rounded-[15px] font-medium text-[#B3B2B2] shadow-xl  outline-none hover:border-[#1BBA85] hover:border-2 hover:text-[#1BBA85] hover:font-semibold font-poppins mt-2 "
              />
            </div>

            <button className="bg-[#1BBA85] text-white w-[160px] h-[60px] shadow-xl rounded-[18px] ">
              Next
            </button>
          </div>
        </div>
      )}
      <div className="w-fulll h-full py-[34px] px-[30px] flex flex-col gap-6">
        <h1 className="font-bold text-[40px] font-poppins">Register</h1>

        <div className="flex gap-4">
          <button
            className="w-[162px] h-[51px] bg-[#D44638]/25 text-[#D44638] rounded-[5px] font-semibold text-[14px] "
            onClick={showGoogle}
          >
            <h1 className=" tracking-wide">GOOGLE</h1>
          </button>

          <button
            className="w-[162px] h-[51px] bg-[#4267B2]/25 text-[#4267B2] rounded-[5px] font-semibold text-[14px] "
            onClick={showFacebook}
          >
            <h1 className=" tracking-wide">FACEBOOK</h1>
          </button>
        </div>
        <p className="text-center text-[14px] font-semibold text-[#B3B2B2]  ">
          OR
        </p>

        <form className=" flex flex-col gap-4">
          <div className="form_group">
            <input
              type="text"
              id="nama_lengkap"
              name="nama_lengkap"
              placeholder={"nama lengkap"}
              className="capitalize p-4 w-full rounded-[15px] font-medium text-[#B3B2B2]  outline-none hover:border-[#1BBA85] hover:border-2 hover:text-[#1BBA85] hover:font-semibold font-poppins "
            />
          </div>
          <div className="form_group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder={"email"}
              className="capitalize p-4 w-full rounded-[15px] font-medium text-[#B3B2B2]  outline-none hover:border-[#1BBA85] hover:border-2 hover:text-[#1BBA85] hover:font-semibold font-poppins "
            />
          </div>

          <div className="form_group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder={"password"}
              className="capitalize p-4 w-full rounded-[15px] font-medium text-[#B3B2B2]  outline-none hover:border-[#1BBA85] hover:border-2 hover:text-[#1BBA85] hover:font-semibold font-poppins "
            />
          </div>

          <div className="form_group">
            <input
              type="password"
              id="password2"
              name="password2"
              placeholder={"ulangi password"}
              className="capitalize p-4 w-full rounded-[15px] font-medium text-[#B3B2B2]  outline-none hover:border-[#1BBA85] hover:border-2 hover:text-[#1BBA85] hover:font-semibold font-poppins "
            />
          </div>

          <Link href={"/home"}>
            <button className="bg-[#A9A9A9] h-[57px] rounded-[15px] capitalize text-[18px] mt-5 text-white font-poppins font-bold hover:bg-[#1BBA85] ">
              register
            </button>
          </Link>
        </form>

        <div className="text-center flex flex-col gap-1">
          <h1>Sudah punya akun ?</h1>
          <Link href={"/login"}>
            <p className=" tracking-[2px] uppercase text-[#1BBA85] ">Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
