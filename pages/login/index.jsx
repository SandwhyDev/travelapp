import Image from "next/image";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Facebook from "../../assets/Facebook.png";
import Link from "next/link";
import { useRouter } from "next/router";

const Register = () => {
  const navigate = useRouter();
  const [loginGoogle, setLoginGoogle] = useState(false);

  const showGoogle = () => {
    setLoginGoogle(!loginGoogle);
  };

  const [loginFacebook, setloginFacebook] = useState(false);

  const showFacebook = () => {
    setloginFacebook(!loginFacebook);
  };

  const handleSubmit = () => {
    navigate.push("/home");
  };
  return (
    <div className="w-screen h-screen flex flex-col gap-6  bg-[#F3F5F6] relative">
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

              <h1 className="text-[22px] font-poppins font-bold">Login</h1>
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
            <div className="flex flex-col  items-center justify-center gap-4 ">
              <span className="text-[48px] text-blue-500 mb-2">
                <BsFacebook />
              </span>

              <h1 className="text-[22px] font-poppins font-bold">Login</h1>
              <p className="-mt-2">Lanjut Dengan Facebook</p>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={"masukan email"}
                className="capitalize p-4 w-full rounded-[15px] font-medium text-[#B3B2B2] shadow-xl  outline-none hover:border-[#1BBA85] hover:border-2 hover:text-[#1BBA85] hover:font-semibold font-poppins mt-2 "
              />
              <div className="p-4 w-full bg-white flex justify-between items-center font-medium font-poppins rounded-[15px] text-black  outline-none hover:border-[#1BBA85] hover:border-2 hover:text-[#1BBA85] shadow-xl ">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder={"Masukan Password"}
                  className="w-full text-black  outline-none invalid:border-[#1BBA85] invalid:border-2 invalid:text-[#1BBA85] font-medium font-poppins "
                />
                <span className="text-lg text-gray">
                  <AiFillEyeInvisible />
                </span>
              </div>
            </div>

            <button className="bg-[#1BBA85] text-white w-[160px] h-[60px] shadow-xl rounded-[18px] ">
              Next
            </button>
          </div>
        </div>
      )}
      <div className="w-fulll h-full py-[34px] px-[30px] flex flex-col gap-6">
        <h1 className="font-bold text-[40px] font-poppins">Masuk</h1>

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

        <form className=" flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="form_group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder={"Email"}
              className=" p-4 w-full rounded-[15px] text-black  outline-none invalid:border-[#1BBA85] invalid:border-2 invalid:text-[#1BBA85] font-medium font-poppins "
            />
          </div>

          <div className="p-4 w-full bg-white flex justify-between items-center font-medium font-poppins rounded-[15px] text-black  outline-none hover:border-[#1BBA85] hover:border-2 hover:text-[#1BBA85] ">
            <input
              type="password"
              id="password"
              name="password"
              placeholder={" Password"}
              className="w-full text-black  outline-none invalid:border-[#1BBA85] invalid:border-2 invalid:text-[#1BBA85] font-medium font-poppins "
            />
            <span className="text-lg text-gray">
              <AiFillEyeInvisible />
            </span>
          </div>

          <Link href={"/forgotPassword"}>
            <div className="ml-auto">
              <h1 className="text-[#1BBA85] font-poppins font-medium ">
                Forget Password ?
              </h1>
            </div>
          </Link>

          {/* <button className="bg-[#A9A9A9] h-[57px] rounded-[15px] capitalize text-[18px] mt-5 text-white font-poppins font-bold hover:bg-[#1BBA85] ">
            masuk
          </button> */}
        </form>

        <button
          className="bg-[#A9A9A9] h-[57px] rounded-[15px] capitalize text-[18px] mt-5 text-white font-poppins font-bold hover:bg-[#1BBA85] "
          onClick={handleSubmit}
        >
          masuk
        </button>

        <div className="text-center flex flex-col gap-1">
          <h1>Belum punya akun ?</h1>
          <Link href={"/register"}>
            <p className=" tracking-[2px] uppercase text-[#1BBA85] ">daftar</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
