import React,{useEffect,useState} from 'react'
import Wellcome from '../components/Wellcome';
import SplashScreen from './splashscreen';
const Home = () => {
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-[#F3F5F6]'>
      {Loading ? (
        <Wellcome />
      ) : (
        <div className="w-full h-full">
          <SplashScreen />
        </div>
      )}
    </div>
  )
}

export default Home