import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Photo from '../assets/iphone.jpg'
import { FaChevronRight } from "react-icons/fa";
import Card from '../components/Card';
import { FaMobile } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { BiSolidJoystick } from "react-icons/bi";
import Speaker from '../assets/speaker.jpg'

const Home = () => {
   const [saleEndTime, setSaleEndTime] = useState(Date.now() + 72*3600000); 

   useEffect(() => {
     const timer = setInterval(() => {
       const currentTime = Date.now();
       if (currentTime >= saleEndTime) {
         clearInterval(timer); 
       }
       setRemainingTime(saleEndTime - currentTime);
     }, 1000); 
 
     return () => clearInterval(timer); 
   }, [saleEndTime]);
 
   const calculateTime = (milliseconds) => {
     const seconds = Math.floor((milliseconds / 1000) % 60);
     const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
     const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
     const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
 
     return { days, hours, minutes, seconds };
   };
   const { days, hours, minutes, seconds } = calculateTime(saleEndTime - Date.now());

   const data=[
      {name:"AK-900 Wired Keyboard",price:"$120"},
      {name:"AK-900 Wired Keyboard",price:"$120"},
      {name:"AK-900 Wired Keyboard",price:"$120"},
      {name:"AK-900 Wired Keyboard",price:"$120"},
      {name:"AK-900 Wired Keyboard",price:"$120"},
      {name:"AK-900 Wired Keyboard",price:"$120"},
      {name:"AK-900 Wired Keyboard",price:"$120"},
      {name:"AK-900 Wired Keyboard",price:"$120"},
      {name:"AK-900 Wired Keyboard",price:"$120"},
    ]
    const data1=[
      {name:"AK-900 Wired Keyboard",price:"$120"},
      {name:"AK-900 Wired Keyboard",price:"$120"},
      {name:"AK-900 Wired Keyboard",price:"$120"},
      {name:"AK-900 Wired Keyboard",price:"$120"},
      {name:"AK-900 Wired Keyboard",price:"$120"},
      {name:"AK-900 Wired Keyboard",price:"$120"},
      {name:"AK-900 Wired Keyboard",price:"$120"},
      {name:"AK-900 Wired Keyboard",price:"$120"},
      {name:"AK-900 Wired Keyboard",price:"$120"},
    ]
    const data2=[
      {name:"AK-900 Wired Keyboard",price:"$120"},
      {name:"AK-900 Wired Keyboard",price:"$120"},
      {name:"AK-900 Wired Keyboard",price:"$120"},
      {name:"AK-900 Wired Keyboard",price:"$120"},
    ]
  return (
    <div className='w-full h-screen overflow-x-hidden overflow-y-scroll '>
     <div className='h-[10%]'>
     <Navbar/> 
     </div>
     <div className='w-full  flex h-[20%] sm:h-[90%] md:px-[8%] md:p-[0.25%]'>
        <div className='w-full sm:w-[20%] sm:border-r-2 flex flex-col items-end pt-[2%] px-[10%] sm:px-[0%] '>
             <div className='flex items-center justify-between w-full py-[2%] pr-[8%]'>
                <p className='text-lg text-start font-semibold'>Women's Collection</p>
                <FaChevronRight/>
             </div>
             <div className='flex items-center justify-between w-full py-[2%] pr-[8%]'>
                <p className='text-lg text-start font-semibold'>Men's Collection</p>
                <FaChevronRight/>
             </div>
             <div className='flex items-center justify-between w-full py-[2%] pr-[8%]'>
                <p className='text-lg font-semibold'>Kids's Collection</p>
                <FaChevronRight/>
             </div>
        </div>
        <div className='hidden sm:block w-[80%] pt-[2%]  pl-[2%]'>
          <img src={Photo} alt='' className='w-[99%] h-full'/>
        </div>
       
     </div>
     <div className='w-full flex justify-center items-center my-[2%] px-[8%] gap-4'>
         <div className='w-[1.5%] bg-red-600 text-red-600 py-[0.5%] rounded-md'>f</div>
         <div className='w-[94.5%] text-red-600 font-semibold text-xl'>Today's</div>
      </div> 
      <div className='px-[4%] md:px-[8%] flex flex-col sm:flex-row gap-3 md:gap-[10%] w-full items-center sm:items-end my-[2%]'>
      <h2 className='md:text-4xl text-xl font-semibold w-full sm:w-[20%] text-start px-[4%] sm:px-[0%]'>Flash Sales</h2>
      <div className='flex items-end gap-4'>
         <div>
            <p className='text-center md:text-xl font-semibold'>Days</p>
            <p className='text-center text-xl font-semibold md:text-5xl'>{days}</p>
         </div>
         <p className='text-red-600 text-4xl'>:</p>
         <div>
            <p className='text-center md:text-xl font-semibold'>Hours</p>
            <p className='text-center text-xl font-semibold md:text-5xl'>{hours}</p>
         </div>
         <p className='text-red-600 text-4xl'>:</p>
         <div>
            <p className='text-center md:text-xl font-semibold'>Minutes</p>
            <p className='text-center text-xl font-semibold md:text-5xl'>{minutes}</p>
         </div>
         <p className='text-red-600 text-4xl'>:</p>
         <div>
            <p className='text-center md:text-xl font-semibold'>Seconds</p>
            <p className='text-center text-xl font-semibold md:text-5xl'>{seconds}</p>
         </div>
     
      </div>  
    </div>
     <div className=' h-screen sm:h-min sm:flex px-[4%] sm:px-[0%] sm:pl-[8%] sm:overflow-x-visible my-[2%] gap-[5%] sm:gap-[10%] w-full  grid grid-cols-2 '>
     {
        data.slice(0,8).map((data)=>(
            
          <Card props={data}/>
 
        ))
     }
     
     </div>
     <div className='w-screen flex justify-center mt-[10%] sm:my-[2%] border-b-2 pb-[4%]'>
        <button className='bg-red-500 sm:px-[1%] px-[2%] py-[1%] sm:py-[0.5%] text-white'>View All Products</button>
     </div>
     <p className='text-4xl font-semibold pl-[6%]'>
        Browse By Category
     </p>
     <div className='sm:flex grid grid-cols-3 gap-2  sm:flex-row items-center justify-between px-[6%] my-[2%]'>
        <div className='flex flex-col items-center border-2   py-[4%] sm:py-[2%] sm:px-[4%] gap-2  hover:bg-red-400 hover:text-white'>
         <div>
            <FaMobile className='size-12 sm:size-24'/>
         </div>
         <p className='sm:text-xl text-base'>Phones</p>
        </div>
        <div className='flex flex-col items-center border-2  px-[8%] py-[4%] md:py-[2%] md:px-[4%] gap-2  hover:bg-red-400 hover:text-white'>
         <div>
            <HiComputerDesktop className='size-12 sm:size-24'/>
         </div>
         <p className='sm:text-xl text-base'>Computers</p>
        </div>
        <div className='flex flex-col items-center border-2 gap-2 px-[8%] py-[4%] md:py-[2%] md:px-[4%] hover:bg-red-400 hover:text-white'>
         <div>
            <BsSmartwatch className='size-12 sm:size-24'/>
         </div>
         <p className='sm:text-xl text-base'>SmartWatch</p>
        </div>
        <div className='flex flex-col items-center border-2 gap-2 px-[8%] py-[4%] md:py-[2%] md:px-[4%]  hover:bg-red-400 hover:text-white'>
         <div>
            <FaCamera className='size-12 sm:size-24'/>
         </div>
         <p className='sm:text-xl text-base'>Camera</p>
        </div>
        <div className='flex flex-col items-center border-2  px-[8%] py-[4%] md:py-[2%] md:px-[4%] gap-2  hover:bg-red-400 hover:text-white'>
         <div>
            <FaHeadphones className='size-12 sm:size-24'/>
         </div>
         <p className='sm:text-xl text-base'>HeadPhones</p>
        </div>
        <div className='flex flex-col items-center border-2 px-[8%] py-[4%] md:py-[2%] md:px-[4%] gap-2  hover:bg-red-400 hover:text-white'>
         <div>
            <BiSolidJoystick className='size-12 sm:size-24'/>
         </div>
         <p className='sm:text-xl text-base'>Gaming</p>
        </div>
     </div>
     <div className='px-[6%] flex justify-between w-full my-[10%] sm:mx-[0%]'>
        <p className='sm:text-4xl text-2xl font-semibold'>Best Selling Products</p>
        <button className='sm:px-[2%] px-[5%] py-[2%] sm:py-[1%] bg-red-500 text-white'>View All</button>
     </div>
     <div className=' h-screen sm:h-min sm:flex px-[4%] sm:px-[0%] sm:pr-[8%] overflow-x-visible my-[2%] gap-[5%] sm:gap-[10%] w-full  grid grid-cols-2   justify-center items-center'>
        {
            data1.slice(0,8).map((data)=>(
                <Card props={data}/>
            ))
        }
     </div>
     <div className='w-full px-[6%] my-[10%] sm:my-[4%]'>
        <img src={Speaker} alt=''/>
     </div>
     <div className='px-[6%] flex justify-between'>
        <p className='sm:text-4xl text-2xl font-semibold'>Explore All Products</p>
        <button className='px-[2%] py-[1%] bg-red-500 text-white'>View All</button>
     </div>
     <div className='sm:grid-cols-4 gap-[5%] mt-[4%] px-[6%]  grid grid-cols-2 '>
        {
            data2.slice(0,8).map((data)=>(
                <Card props={data}/>
            ))
        }
     </div>
    </div>
  )
}

export default Home
