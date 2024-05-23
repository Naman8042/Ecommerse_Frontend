import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Photo from '../assets/iphone.jpg';
import { FaChevronRight } from "react-icons/fa";
import Card from '../components/Card';
import { FaMobile } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { BiSolidJoystick } from "react-icons/bi";
import Speaker from '../assets/speaker.jpg';
import axios from 'axios';
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";

const Home = () => {
   const [saleEndTime, setSaleEndTime] = useState(Date.now() + 72 * 3600000); 
   const [remainingTime, setRemainingTime] = useState(0);
   const [Data, setData] = useState([]);
   const [start, setStart] = useState(0);
   const [end, setEnd] = useState(4);
   const [start1, setStart1] = useState(0);
   const [end1, setEnd1] = useState(4);
   const [start2, setStart2] = useState(0);
   const [end2, setEnd2] = useState(4);

   useEffect(() => {
      axios.get("http://localhost:4000/api/v1/getall")
         .then((res) => setData(res.data.data));
   }, []);

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

   const increment = (val) => {
      if (val===1 && end <= Data.length) {
         setStart1(prevStart => prevStart + 1);
         setEnd1(prevEnd => prevEnd + 1);
      }
      if (val===2 && end <= Data.length) {
         setStart2(prevStart => prevStart + 1);
         setEnd2(prevEnd => prevEnd + 1);
      }
      if (val===0 && end <= Data.length) {
         setStart(prevStart => prevStart + 1);
         setEnd(prevEnd => prevEnd + 1);
      }
   };

   const decrement = (val) => {
      if (start > 0 && val===0) {
         setStart(prevStart => prevStart - 1);
         setEnd(prevEnd => prevEnd - 1);
      }
      if (start > 0 && val===1) {
         setStart1(prevStart => prevStart - 1);
         setEnd1(prevEnd => prevEnd - 1);
      }
      if (start > 0 && val==2) {
         setStart2(prevStart => prevStart - 1);
         setEnd2(prevEnd => prevEnd - 1);
      }
   };

   return (
      <div className='w-screen h-screen overflow-x-hidden overflow-y-scroll '>
         <div className='h-[10%]'>
            <Navbar />
         </div>
         <div className='w-full flex sm:h-[90%] md:px-[8%]'>
            <div className='w-full sm:w-[20%] sm:h-[98%] sm:border-r-2 flex flex-col items-end sm:pt-[2%] px-[10%] sm:px-[0%] mb-[5%] sm:mb-2 '>
               <div className='flex items-center justify-between w-full py-[2%] pr-[8%] '>
                  <p className='text-lg text-start font-semibold'>Women's Collection</p>
                  <FaChevronRight />
               </div>
               <div className='flex items-center justify-between w-full py-[2%] pr-[8%]'>
                  <p className='text-lg text-start font-semibold'>Men's Collection</p>
                  <FaChevronRight />
               </div>
               <div className='flex items-center justify-between w-full py-[2%] pr-[8%]'>
                  <p className='text-lg font-semibold'>Kids's Collection</p>
                  <FaChevronRight />
               </div>
               <div className='flex items-center justify-between w-full py-[2%] pr-[8%]'>
                  <p className='text-lg font-semibold'>Electronics</p>
                  <FaChevronRight />
               </div>
               <div className='flex items-center justify-between w-full py-[2%] pr-[8%]'>
                  <p className='text-lg font-semibold'>Home & Lifestyle</p>
                  <FaChevronRight />
               </div>
               <div className='flex items-center justify-between w-full py-[2%] pr-[8%]'>
                  <p className='text-lg font-semibold'>Medicines</p>
                  <FaChevronRight />
               </div>
               <div className='flex items-center justify-between w-full py-[2%] pr-[8%]'>
                  <p className='text-lg font-semibold'>Sports & Outdoor</p>
                  <FaChevronRight />
               </div>
               <div className='flex items-center justify-between w-full py-[2%] pr-[8%]'>
                  <p className='text-lg font-semibold'>Baby's & Toys</p>
                  <FaChevronRight />
               </div>
               <div className='flex items-center justify-between w-full py-[2%] pr-[8%]'>
                  <p className='text-lg font-semibold'>Grocies & Pets</p>
                  <FaChevronRight />
               </div>
               <div className='flex items-center justify-between w-full py-[2%] pr-[8%]'>
                  <p className='text-lg font-semibold'>Health & Beauty</p>
                  <FaChevronRight />
               </div>
            </div>
            <div className='hidden sm:block w-[80%] pt-[2%] pl-[2%] sm:h-full'>
               <img src={Photo} alt='' className='w-[99%] h-[98%]' />
            </div>
         </div>
         <div className='w-full flex justify-center items-center my-[2%] px-[8%] gap-4'>
            <div className='w-[1.5%] bg-red-600 text-red-600 py-[0.5%] rounded-md'>f</div>
            <div className='w-[94.5%] text-red-600 font-semibold text-xl'>Today's</div>
         </div>
         <div className='px-[4%] md:px-[8%] flex flex-col sm:flex-row gap-3 md:gap-[10%] w-full items-center sm:items-end my-[2%]'>
            <h2 className='md:text-4xl text-xl font-semibold w-full sm:w-[20%] text-start px-[4%] sm:px-[0%]'>Flash Sales</h2>
            <div className='flex items-end gap-4 w-[60%]'>
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
            <div className='flex w-[20%]  gap-10 justify-end items-center px-[4%] sm:px-[8%] my-[2%]'>
            <button onClick={()=>decrement(0)} className=' px-[1%] py-[1%]'><FaCircleChevronLeft size={35}/></button>
            <button onClick={()=>increment(0)} className=' px-[1%] py-[1%]'><FaCircleChevronRight size={35}/></button>
            </div>
         </div>
         
         <div className='sm:flex px-[4%] sm:px-[0%] sm:pl-[8%] sm:overflow-x-visible my-[2%] gap-2 sm:gap-[10%] w-full grid grid-cols-2'>
            {
               Data.slice(start, end).map((data) => (
                  <Card key={data.id} props={data} />
               ))
            }
         </div>
         <div className='w-screen flex justify-center mt-[10%] sm:my-[2%] sm:border-b-2 pb-[4%]'>
            <button className='bg-red-500 sm:px-[1%] px-[2%] py-[1%] sm:py-[0.5%] text-white'>View All Products</button>
         </div>
         <p className='text-2xl text-center sm:text-start sm:text-3xl md:text-4xl font-semibold pl-[6%] my-[5%] sm:my-0'>
            Browse By Category
         </p>
         <div className='sm:flex grid grid-cols-3 gap-2 sm:flex-row items-center justify-between px-[6%] my-[2%]'>
            <div className='flex flex-col items-center border-2 py-[4%] sm:py-[2%] sm:px-[4%] gap-2 hover:bg-red-400 hover:text-white'>
               <div>
                  <FaMobile className='size-12 sm:size-24' />
               </div>
               <p className='sm:text-xl text-base'>Phones</p>
            </div>
            <div className='flex flex-col items-center border-2 px-[8%] py-[4%] md:py-[2%] md:px-[4%] gap-2 hover:bg-red-400 hover:text-white'>
               <div>
                  <HiComputerDesktop className='size-12 sm:size-24' />
               </div>
               <p className='sm:text-xl text-base'>Computers</p>
            </div>
            <div className='flex flex-col items-center border-2 gap-2 px-[8%] py-[4%] md:py-[2%] md:px-[4%] hover:bg-red-400 hover:text-white'>
               <div>
                  <BsSmartwatch className='size-12 sm:size-24' />
               </div>
               <p className='sm:text-xl text-base'>SmartWatch</p>
            </div>
            <div className='flex flex-col items-center border-2 gap-2 px-[8%] py-[4%] md:py-[2%] md:px-[4%] hover:bg-red-400 hover:text-white'>
               <div>
                  <FaCamera className='size-12 sm:size-24' />
               </div>
               <p className='sm:text-xl text-base'>Camera</p>
            </div>
            <div className='flex flex-col items-center border-2 px-[8%] py-[4%] md:py-[2%] md:px-[4%] gap-2 hover:bg-red-400 hover:text-white'>
               <div>
                  <FaHeadphones className='size-12 sm:size-24' />
               </div>
               <p className='sm:text-xl text-base'>HeadPhones</p>
            </div>
            <div className='flex flex-col items-center border-2 px-[8%] py-[4%] md:py-[2%] md:px-[4%] gap-2 hover:bg-red-400 hover:text-white'>
               <div>
                  <BiSolidJoystick className='size-12 sm:size-24' />
               </div>
               <p className='sm:text-xl text-base'>Gaming</p>
            </div>
         </div>
         <div className='px-[6%] flex justify-between w-full my-[10%] sm:my-[5%] sm:mx-[0%]'>
            <p className='sm:text-4xl text-xl font-semibold'>Best Selling Products</p>
            
            <div className='flex w-[40%] gap-10 justify-end items-center px-[4%] sm:px-[8%] my-[2%]'>
              
            <button onClick={()=>decrement(1)} className=' px-[1%] py-[1%]'><FaCircleChevronLeft size={35} /></button>
            <button onClick={()=>increment(1)} className=' px-[1%] py-[1%]'><FaCircleChevronRight size={35}/></button>
            {/* <button className='sm:px-[5%] px-[5%] py-[2%] sm:py-[2%] bg-red-500 text-white'>View All</button> */}
            </div>
         </div>
         
         <div className='sm:flex px-[4%] sm:px-[0%] sm:pl-[8%] sm:overflow-x-visible my-[2%] gap-2 sm:gap-[10%] w-full grid grid-cols-2'>
            {
               Data.slice(start1, end1).map((data) => (
                  <Card key={data.id} props={data} />
               ))
            }
         </div>
         <div className='w-full px-[1%] sm:px-[6%] my-[10%] sm:my-[4%]'>
            <img src={Speaker} alt='' />
         </div>
         <div className='px-[6%] flex justify-between'>
            <p className='sm:text-4xl text-xl font-semibold'>Explore All Products</p>
            <div className='flex w-[40%] gap-10 justify-end items-center px-[4%] sm:px-[8%] my-[2%]'>
              
            <button onClick={()=>decrement(2)} className=' px-[1%] py-[1%]'><FaCircleChevronLeft size={35} /></button>
            <button onClick={()=>increment(2)} className=' px-[1%] py-[1%]'><FaCircleChevronRight size={35}/></button>
            {/* <button className='sm:px-[5%] px-[5%] py-[2%] sm:py-[2%] bg-red-500 text-white'>View All</button> */}
            </div>
         </div>
         
         <div className='sm:flex px-[4%] sm:px-[0%] sm:pl-[8%] sm:overflow-x-visible my-[2%] gap-2 sm:gap-[10%] w-full grid grid-cols-2'>
            {
               Data.slice(start2, end2).map((data) => (
                  <Card key={data.id} props={data} />
               ))
            }
         </div>
      </div>
   )
}

export default Home;
