import React from "react";
import Like from "../assets/icons/Like.svg";
import Image from "next/image";
import Link from "next/link";

const CardProduct = ({
  img = "https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
}) => {
  return (
    <div className="pl-5">
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
