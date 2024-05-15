import React from 'react'
import { BsBank } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";
import { BiSolidDashboard } from "react-icons/bi";
import { RiLinksFill } from "react-icons/ri";
import { VscNotebook } from "react-icons/vsc";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Phonesidebar = ({}) => {
  const navigate = useNavigate()
  function Load(){
    navigate("/")
  }  
  return (
    
    <div className=''>
        <div className='md:hidden bg-white '>
    <div className='px-[8%] my-[1%] pb-[2%] pt-[5%] border-b-2 cursor-pointer'>
        <FaArrowLeftLong size={25} onClick={Load}/>
      </div>
      <div className='w-full flex flex-col items-center text-xl border-seperate '>
      <div className='w-[90%]  my-[1%] py-[4%] px-[10%] flex justify-evenly border-b-2'>
      <div className='flex w-[90%] gap-3 justify- items-center'>
      <BiSolidDashboard/>
      <p className='text-xl'>My Dashboard</p>
      </div>
      <div className='w-[10%] flex justify-center items-center '>
      <FaAngleRight />  
      </div>
      </div>
      <div className='w-[90%]  my-[1%] py-[4%] px-[10%] flex justify-evenly border-b-2'>
      <div className='flex w-[90%] gap-3 justify- items-center'>
      <RiLinksFill/>
      <p className='text-xl'>TOTM Links</p>
      </div>
      <div className='w-[10%] flex justify-center items-center'>
      <FaAngleRight />  
      </div>
      </div>
      <div className='w-[90%]  my-[1%] py-[4%] px-[10%] flex justify-evenly border-b-2'>
      <div className='flex w-[90%] gap-3 justify- items-center'>
      <VscNotebook/>
      <p className='text-xl'>Daily Summary</p>
      </div>
      <div className='w-[10%] flex justify-center items-center'>
      <FaAngleRight />  
      </div>
      </div>
      <div className='w-[90%]  my-[1%] py-[4%] px-[10%] flex justify-evenly border-b-2'>
      <div className='flex w-[90%] gap-3 justify- items-center'>
      <BsBank/>
      <p className='text-xl'>Bank Details</p>
      </div>
      <div className='w-[10%] flex justify-center items-center'>
      <FaAngleRight />  
      </div>
      </div>
      </div>
      <div className='sm:block hidden'>
       <div className='w-[90%]  my-[1%] py-[4%] px-[10%] flex justify-evenly'>
      <div className='flex w-[90%] gap-3 justify- items-center'>
      <BsBank/>
      <p className='text-xs md:text-base lg:text-xl sd:text-sm'>Bank Details</p>
      </div>
      <div className='w-[10%] flex justify-center items-center'>
      <FaAngleRight />  
      </div>
      </div>
      </div>
    </div>
    </div>

  )
}

export default Phonesidebar