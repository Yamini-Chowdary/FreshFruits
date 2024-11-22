import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar'
import {Outlet} from 'react-router-dom'
 import Home from '../pages/Home'
 import HomeCarousel from '../components/HomeCarousel'

const WebLayout = () => {
  return (
    <>
    <div className='flex flex-col flex-initial'>
    <div className=''>
        <Navbar/>
        <div className=" flex  gap-0  justify-start items-start left-0 text-left">
        <div className="w-full h-full flex flex-col justify-start  left-0 top-0">
        <Leftbar/>
        </div>

         
        {/* <div className='relative h-full object-cover'>
        <div className="absolute bottom-8 top-3 flex flex-col justify-start items-start gap-8 h-full w-full">
                <HomeCarousel />
                </div> 
                </div> */}
                </div>
                
                {/* <div className=" gap-5 flex justify-start items-end  flex-row left-0 top-0">
          
        <Home/>
        </div > */}
        </div>

        <Outlet />

    </div></>
  )
}

export default WebLayout