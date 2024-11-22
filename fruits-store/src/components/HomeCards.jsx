import React from 'react'
import { IndianRupee } from 'lucide-react'
// import frshp from '../assets/images/frshp.jpg'
// import quality from '../assets/images/quality.jpg'
// import alwy from '../assets/images/alwy.jpg'
// import support from '../assets/images/support.jpg'
import { Gift, MessageSquareHeart, PiggyBank, ShoppingCart } from 'lucide-react'
const HomeCards = () => {
    return (
        <>
      


    <div className="w-full h-full flex flex-row gap-8 justify-center items-center">
        
      <div className="card h-60 w-60 bg-white flex flex-col justify-center items-center hover:scale-110 hover:z-10">
      {/* <PiggyBank className='h-35 w-40 size-10 mr-3 text-black group-hover:text-white  duration-300 ' /> */}
      <img className="h-[15vh] w-[10vw]  top-10 bottom-10 object-contain flex justify-center align-center " src="https://pngimg.com/d/free_shipping_PNG10.png" alt='Customer' />
      <br></br>
        <p className="text-base font-bold">FREE SHIPPING</p>
        <p className="text-sm flex flex-row align-baseline justify-center items-center">ON ORDER OVER<IndianRupee className=' h-[13px] w-[13px]'/>100</p>
      
      </div>
      <div className="card h-60 w-60 bg-white flex flex-col justify-center items-center hover:scale-110 hover:z-10">
      {/* <ShoppingCart className='h-35 w-40 size-10 mr-3 text-black group-hover:text-white  duration-300 ' /> */}
      <img className="h-[15vh] w-[15vw] top-10 bottom-10 object-contain flex justify-center align-center " src="https://static.vecteezy.com/system/resources/previews/051/664/479/non_2x/premium-quality-guaranteed-black-logo-free-vector.jpg" alt='Customer' />
      <br></br>
        <p className="text-base font-bold">SUPERIOR QUALITY</p>
        <p className="text-sm">QUALITY PRODUCTS</p>
      </div>
      <div className="card h-60 w-60 bg-white flex flex-col justify-center items-center hover:scale-110 hover:z-10">
      <img className="h-[15vh] w-[15vw] top-10 bottom-10 object-contain flex justify-center align-center " src="https://images.vexels.com/content/126916/preview/100-percent-fresh-badge-svg-cfda6c.png" alt='Customer' /> 
      {/* <Gift className='h-35 w-40 size-10 mr-3 text-black group-hover:text-white  duration-300 ' /> */}
      <br></br>
        <p className="text-base font-bold">ALWAYS FRESH</p>
        <p className="text-sm">PRODUCT WELL PACKAGE</p>
      </div>
      <div className="card h-60 w-60 bg-white flex flex-col justify-center items-center hover:scale-110 hover:z-10">
      <img className="h-[15vh] w-[15vw] top-10 bottom-10 object-contain flex justify-center align-center " src="https://t3.ftcdn.net/jpg/06/04/78/60/360_F_604786022_I9yXhkIkrtgkO0GNwCNNKfFQrbMPeVTd.jpg" alt='Customer' />
      {/* <MessageSquareHeart className='h-35 w-40 size-10 mr-3 text-black group-hover:text-white  duration-300 ' /> */}
      <br></br>
        <p className="text-base font-bold">SUPPORT</p>
        <p className="text-sm">24/7 SUPPORT</p>
      </div>
    </div>




            {/* <div className='w-full h-full flex flex-row justify-center items-center gap-8 mt-10'>
                <div className=" h-[8rem] w-[23%] bg-white  rounded-sm overflow-hidden relative group p-2 z-0 shadow-lg">
                    <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-lime-500 group-hover:scale-[800%] duration-500 z-[-1] op" />
                    <div className='flex h-full w-full justify-center items-center flex-row'>
                        <ShoppingCart className='h-8 w-8 mr-2 text-black group-hover:text-white  duration-300 ' />
                        <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-300 text-lg">
                            Free Shipping
                        </h1>
                    </div>
                </div>
                <div className=" h-[8rem] w-[23%] bg-white rounded-sm overflow-hidden relative group p-2 z-0 shadow-lg">
                    <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-lime-500 group-hover:scale-[800%] duration-500 z-[-1] op" />
                    <div className='flex h-full w-full justify-center items-center flex-row'>
                        <Gift className='h-8 w-8 mr-2 text-black group-hover:text-white  duration-300 ' />
                        <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-300 text-lg">
                            Great Deals
                        </h1>
                    </div>
                </div>
                <div className=" h-[8rem] w-[23%] bg-white  rounded-sm overflow-hidden relative group p-2 z-0 shadow-lg">
                    <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-lime-500 group-hover:scale-[800%] duration-500 z-[-1] op" />
                    <div className='flex h-full w-full justify-center items-center flex-row'>
                        <PiggyBank className='h-8 w-8 mr-2 text-black group-hover:text-white  duration-300 ' />
                        <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-300 text-lg">
                            EMI Offers
                        </h1>
                    </div>
                </div>
                <div className=" h-[8rem] w-[23%] bg-white  rounded-sm overflow-hidden relative group p-2 z-0 shadow-lg">
                    <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-lime-500 group-hover:scale-[800%] duration-500 z-[-1] op" />
                    <div className='flex h-full w-full justify-center items-center flex-row'>
                        <MessageSquareHeart className='h-7 w-7 mr-2 text-black group-hover:text-white  duration-300 ' />
                        <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-300 text-lg">
                            Instant Support
                        </h1>
                    </div>
                </div>
            </div> */}
            
        </>
    )
}

export default HomeCards