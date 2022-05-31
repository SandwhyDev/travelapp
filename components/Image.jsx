import React,{ useState } from 'react'

const PreImage = ({img="https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}) => {
    const [showImg, setShowImg] = useState(false)
    const preImg = ()=>{
      setShowImg(!showImg)
      console.log(setShowImg);
    }
  return (
    <div>
        {showImg && (
        <div className="w-screen h-screen bg-black/70 absolute top-0 z-20 flex items-center justify-center p-5" onClick={preImg}>
           <img
          src={img}
          className=" object-cover"
          alt=""
          onClick={preImg}
        />
        </div>
      )}
        <img
    src={img}
    className="w-full h-full object-cover"
    alt=""
  /></div>
  )
}

export default PreImage