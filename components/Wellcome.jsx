import React from 'react'
import Logo from "../assets/traveler.png"
import Image from 'next/image'

const Wellcome = () => {
  return (
    <div className='fadeInUp w-screen h-screen flex flex-col justify-center items-center bg-[#F3F5F6]'>
      <Image src={Logo}  />
      <h1 className='uppercase text-[45px] text-[#1BBA85] font-bold font-poppins '>Traveler</h1>
    </div>
  )
}

export default Wellcome