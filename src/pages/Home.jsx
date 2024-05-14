import React from 'react'
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
   const data=[
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
     <div className='w-full flex h-[70%] px-[8%]'>
        <div className='w-[20%] border-r-2 flex flex-col items-end pt-[2%] '>
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
        <div className='w-[80%] pt-[2%]  pl-[2%]'>
          <img src={Photo} alt='' className='w-[99%] h-full'/>
        </div>
        
     </div>
     <div className='flex-col flex sm:flex-row pl-[8%] overflow-x-visible my-[2%] gap-[10%] w-full '>
     {
        data.map((data)=>(
            
                <Card props={data}/>
 
        ))
     }
     
     </div>
     <div className='w-screen flex justify-center my-[2%] border-b-2 pb-[4%]'>
        <button className='bg-red-500 px-[1%] py-[0.5%] text-white'>View All Products</button>
     </div>
     <p className='text-4xl font-semibold pl-[6%]'>
        Browse By Category
     </p>
     <div className='flex items-center justify-between px-[6%] my-[2%]'>
        <div className='flex flex-col items-center border-2  py-[2%] px-[4%] gap-2  hover:bg-red-400 hover:text-white'>
         <div>
            <FaMobile size={100}/>
         </div>
         <p className='text-xl'>Phones</p>
        </div>
        <div className='flex flex-col items-center border-2  py-[2%] px-[4%] gap-2  hover:bg-red-400 hover:text-white'>
         <div>
            <HiComputerDesktop size={100}/>
         </div>
         <p className='text-xl my-[1%]'>Computers</p>
        </div>
        <div className='flex flex-col items-center border-2 gap-2 py-[2%] px-[4%] hover:bg-red-400 hover:text-white'>
         <div>
            <BsSmartwatch size={100}/>
         </div>
         <p className='text-xl '>SmartWatch</p>
        </div>
        <div className='flex flex-col items-center border-2 gap-2 py-[2%] px-[4%]  hover:bg-red-400 hover:text-white'>
         <div>
            <FaCamera size={100}/>
         </div>
         <p className='text-xl'>Camera</p>
        </div>
        <div className='flex flex-col items-center border-2  py-[2%] px-[4%] gap-2  hover:bg-red-400 hover:text-white'>
         <div>
            <FaHeadphones size={100}/>
         </div>
         <p className='text-xl'>HeadPhones</p>
        </div>
        <div className='flex flex-col items-center border-2  py-[2%] px-[4%] gap-2  hover:bg-red-400 hover:text-white'>
         <div>
            <BiSolidJoystick size={100}/>
         </div>
         <p className='text-xl'>Gaming</p>
        </div>
     </div>
     <div className='px-[6%] flex justify-between'>
        <p className='text-4xl font-semibold'>Best Selling Products</p>
        <button className='px-[2%] py-[1%] bg-red-500 text-white'>View All</button>
     </div>
     <div className='flex justify-center gap-[5%] mt-[4%]'>
        {
            data1.map((data)=>(
                <Card props={data1}/>
            ))
        }
     </div>
     <div className='w-full px-[6%] my-[4%]'>
        <img src={Speaker} alt=''/>
     </div>
     <div className='px-[6%] flex justify-between'>
        <p className='text-4xl font-semibold'>Explore All Products</p>
        <button className='px-[2%] py-[1%] bg-red-500 text-white'>View All</button>
     </div>
     <div className='grid grid-cols-4 gap-[5%] mt-[4%] px-[6%]'>
        {
            data2.slice(0,8).map((data)=>(
                <Card props={data2}/>
            ))
        }
     </div>
    </div>
  )
}

export default Home
