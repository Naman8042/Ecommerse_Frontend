import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate ,Link} from 'react-router-dom';


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
      <IoMdHome/>
      <p className='text-xl'>Home</p>
      </div>
      <div className='w-[10%] flex justify-center items-center '>
      <FaAngleRight />  
      </div>
      </div>
      <div className='w-[90%]  my-[1%] py-[4%] px-[10%] flex justify-evenly border-b-2'>
      <div className='flex w-[90%] gap-3 justify- items-center'>
      <CiLogin/>
      <p className='text-xl'>Login</p>
      </div>
      <div className='w-[10%] flex justify-center items-center'>
      <FaAngleRight />  
      </div>
      </div>
      <div className='w-[90%]  my-[1%] py-[4%] px-[10%] flex justify-evenly border-b-2'>
      <Link className='flex w-[90%] gap-3 justify- items-center' to="/cart">
      <MdOutlineShoppingCart/>
      <p className='text-xl'>My Cart</p>
      </Link>
      <div className='w-[10%] flex justify-center items-center'>
      <FaAngleRight />  
      </div>
      </div>
      <div className='w-[90%]  my-[1%] py-[4%] px-[10%] flex justify-evenly border-b-2'>
      <div className='flex w-[90%] gap-3 justify- items-center'>
      <FaUserCircle/>
      <p className='text-xl'>Manage My Accounts</p>
      </div>
      <div className='w-[10%] flex justify-center items-center'>
      <FaAngleRight />  
      </div>
      </div>
      </div>
      <div className='sm:block hidden'>
       <div className='w-[90%]  my-[1%] py-[4%] px-[10%] flex justify-evenly'>
      <div className='flex w-[90%] gap-3 justify- items-center'>
      <FaUserCircle/>
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