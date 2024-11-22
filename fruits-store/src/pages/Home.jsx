import React from 'react'
import { IndianRupee } from 'lucide-react'
import HomeCarousel from '../components/HomeCarousel'
import HomeCards from '../components/HomeCards'
import CountdownTimer from '../pages/CountDown'
import NewlyAdded from '../pages/NewlyAdded'
import Footer from '../pages/BookMark'
const Home = () => {
  return (
    <>

      <div className="flex flex-row justify-end items-start gap-8 w-screen h-full">
        <HomeCarousel />


      </div>
      <br></br>
      <br></br>
      <div className='flex flex-row justify-end items-start gap-8 w-screen h-full'>
        <HomeCards />
      </div>
      <div className="relative h-[30px] w-full">
      </div>

      <div className="relative h-[400px] w-full">
        {/* Background Image */}
        <img className="h-[70vh] w-[100vw] top-10 bottem-10  object-cover flex justify-center align-center " src="https://wallpaperaccess.com/full/2637624.jpg" />
        {/* Overlay Text */}
        <div className="absolute inset-0  bg-opacity-50 flex items-left justify-left">
          <div className="text-center text-black">
            <h2 className="text-5xl font-semibold font-sans-serif mb-4">Deal of The Day</h2>
            <p className="text-[40px] text-red-800 font-sans-serif font-medium">Cherry</p>
            <p className=" font-sans  leading-relaxed text-inherit antialiased font-bold flex flex-row text-xl justify-center items-center">
              <IndianRupee className='h-4 w-4' />500  now  <IndianRupee className='h-4 w-4' />250
            </p>
            <br></br>
            <CountdownTimer/>
          </div>
        </div>
        </div>
        <br></br>
        <br>
        </br>
        <div>
          <h1 className='items-center justify-center text-center text-5xl text-black font-semibold'>Newly Added</h1>
          <div>
          <NewlyAdded/>
          </div>

            </div>
            <div>
              <Footer/>
            </div>
          
        
    </>
  )
}

export default Home
