import React from 'react'
import pav from "../assets/images/pav.jpg"
import yam from "../assets/images/yam.jpg"
import divya from "../assets/images/divya.jpg"
import asma from "../assets/images/asma.jpg"
import Footer from '../pages/BookMark'
const About = () => {
  return (
    <>
   
      
      <div className="relative h-[400px] w-full">
  {/* Background Image */}
  <img className="h-[85vh] w-full top-10 bottem-10 object-cover flex justify-center align-center " src="https://static.vecteezy.com/system/resources/thumbnails/037/944/263/small_2x/ai-generated-fresh-ripe-fruit-and-strawberry-water-drops-splash-photo.jpg" />
  {/* Overlay Text */}
  <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
    <div className="text-center text-white">
      <h2 className="text-5xl font-semibold font-sans-serif mb-4">ABOUT US</h2>
      {/* <p className="text-xl font-medium">Your Subheading</p> */}
    </div>
  </div>
</div>
<div>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br />
  <h1 class="text-3xl font-semibold font-sans-serif text-black mb-4"  >Welcome to Fresh Fruits an eCommerce website</h1>
  <p class="text-1xl  text-black">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
<br></br>
<p class="text-1xl  text-black">But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
<br></br>
<button data-ripple-light="true" type="button" className="w-[15%] select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Shop Now
                    </button>
</div>

<div>
<div class="bg-white-50 py-6 px-4 flex items-center justify-between">

<div>

  <h2 class="text-xl font-semibold font-sans-serif text-gray-800">Subscribe to our Newsletter</h2>

  <p class="text-gray-500">Get e-mail updates about our latest shops and special offers</p>

</div>



<form class="flex items-center  w-full max-w-md ">

  <input 

  type="email" 

    placeholder="Enter email address" 

    class="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:ring-green-300"

  />

  <button 

    type="submit" 

    class="bg-green-500 text-white px-5 py-3 rounded-r-lg font-sans-serif hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300">

    Subscribe

  </button>

</form>

</div>
</div>
<div>
<div className="relative h-[400px] w-full">
  {/* Background Image */}
  <img className="h-[68vh] w-[100vw] top-10 bottem-10 object-cover flex justify-center align-center " src="https://i.pinimg.com/736x/c8/3b/2e/c83b2e66b2f3243dcc52fd4ba8909309.jpg" />
  {/* Overlay Text */}
  <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
    <div className="text-center text-black">
      <div className='flex flex-row space-x-20'>
   
   <div className='flex flex-col'>
      <h4 className="text-5xl font-sans-serif mb-4">10,000</h4>
       <p className="text-xl font-sans-serif">happy customers</p>
     
       </div>
       <div className='flex flex-col'>
      <h4 className="text-5xl font-sans-serif mb-4">100</h4>
       <p className="text-xl font-sans-serif">branches</p> 
       </div>
       <div className='flex flex-col'>
      <h4 className="text-5xl font-sans-serif mb-4">10</h4>
       <p className="text-xl font-sans-serif">partners</p> 
       </div>
       <div className='flex flex-col'>
      <h4 className="text-5xl font-sans-serif mb-4">100</h4>
       <p className="text-xl font-sans-serif">awards</p> 
       </div> 
      </div>
    </div>
  </div>
</div>
</div>




<div>
  <h1 className='font-sans-serif font-semibold text-green-500  text-center text-2xl '>Testimony</h1>
  <br>
  </br>
  <br>
  </br>
  <br></br>
  <br></br>
  <br></br>

  <div className="flex flex-row ">
<div className="flex flex-col justify-center items-center h-[25vh] w-[25vw]">
<img className="h-[25vh] w-[15vw] top-10 bottom-10 object-cover flex justify-center align-center " src={pav} alt='Customer' />
<div>
<p font-sans-serif>Fruits from Fresh Fruits are always fresh!</p>
</div>
<br></br>
 <br></br>
 <h4 className="text-[25px] font-sans-serif mb-4">Pavani Sri</h4>
 <p className="text-[18px] font-sans-serif">UI Designer</p>
 </div>
 <div className="flex flex-col justify-center items-center  h-[25vh] w-[25vw]">
<img className="h-[25vh] w-[15vw] top-10 bottom-10 object-cover object-top flex justify-center align-center " src={asma} alt="Bomma" />
<div>
<p font-sans-serif>too Good!</p>
</div>
<br></br>
 <br></br>
 <h4 className="text-[25px] font-sans-serif mb-4">Asma Begum</h4>
 <p className="text-[18px] font-sans-serif">Marketing Manager</p>
 </div>
 <div className="flex flex-col justify-center items-center  h-[25vh] w-[25vw]">
<img className="h-[25vh] w-[15vw] top-10 bottom-10 object-cover object-top flex justify-center align-center " src={divya} alt="divya" />
<div>
<p font-sans-serif>Trusted site for Fruit Purchased</p>
</div>
<br></br>
 <br></br>
 <h4 className="text-[25px] font-sans-serif mb-4">Divya Sri</h4>
 <p className="text-[18px] font-sans-serif">Interface Designer</p>
 </div>
 <div className="flex flex-col justify-center items-center  h-[25vh] w-[25vw]">
<img className="h-[25vh] w-[15vw] top-10 bottom-10 object-cover object-top flex justify-center align-center " src={yam} alt="yam" />
<div>
<p font-sans-serif>Loved it!</p>
</div>
<br></br>
 <br></br>
 <h4 className="text-[25px] font-sans-serif mb-4">Yamini</h4>
 <p className="text-[18px] font-sans-serif">System Analyst</p>
 </div>

</div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<div>
   <Footer/>
</div>
          
</>
)
}

export default About