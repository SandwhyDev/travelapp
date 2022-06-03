import React, { useEffect, useState } from "react";
import Wellcome from "../components/Wellcome";
import SplashScreen from "./splashscreen";
import Head from "next/head";

const Home = () => {
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#F3F5F6]">
      <Head>
        <title>Pergi</title>
        <meta property="og:image" content="Logo.png" />
        <meta name="description" content="Aplikasi travel" />
        <link rel="shortcut icon" href="Logo.png" type="image/png" />
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
      {Loading ? (
        <Wellcome />
      ) : (
        <div className="w-full h-full">
          <SplashScreen />
        </div>
      )}
    </div>
  );
};

export default Home;
