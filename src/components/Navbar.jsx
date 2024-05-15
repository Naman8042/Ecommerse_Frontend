import React,{useState} from 'react'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";
import Phonesidebar from './Phonesidebar';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  const[isLogin,setIsLogin] = useState(true)
  const[load,setLoad] = useState(true)
  const[showDropdown,setShowDropdown] = useState(false)
  function Load(){
    setLoad(!load)
  }
  return (
      <div className='w-full ' onMouseLeave={()=>setShowDropdown(false)}>
      <div className='hidden sm:flex justify-between w-screen py-[1%] border-b-2  md:h-[12%] sm:px-[4%] md:px-[6%] bg-white'>
      <div className=' sm:w-[15%] md:w-[20%] sm:text-xl md:text-2xl font-bold flex justify-center items-center'>
        Exclusive
      </div>
      <div className='flex sm:gap-[5%] md:gap-[10%] justify-center w-[40%] sm:text-base md:text-lg items-center font-semibold'>
        <div>Home</div>
        <div>Contact</div>
        <div>About</div>
        <div>Sign Up</div>
      </div>
      <div className='flex gap-[5%] w-[40%] justify-center items-center'>
        <div className='w-[50%] flex items-center bg-gray-50 rounded-lg'>
        <input type='text' placeholder='What are you looking for?' className='w-[90%] bg-gray-50 outline-none p-[3%] rounded-lg sm:text-base md:text-xl '/>
        <CiSearch  className='md:size-8 sm:size-6' />
        </div>
        <FaRegHeart  className='md:size-8 sm:size-6'/>
        <Link to={"/cart"}><MdOutlineShoppingCart size={30} className='md:size-8 sm:size-6'/></Link>
        {
          isLogin?(
            <FaUserCircle  onClick={(e)=>setShowDropdown(true)} className='md:size-8 sm:size-6' />
          ):(
            <>
            </>
          )
        }
      </div>
    </div>
   {
    showDropdown?(
      <div className='relative md:left-[82%] sm:left-[70%] bg-gray-100 sm:w-[25%] md:w-[13%] sm:text-sm md:text-xl '>
      <p className='px-[3%] py-[2%]'>Manage My Accounts</p>
      <p className='px-[3%] py-[2%]'>My Orders</p>
    </div>
    ):(
      <>
      </>
    )
   }
  
   {load?(
        <div className='w-full h-[10%] mb-[10%] justify-between items-center pb-[2%] pt-[2%] border-b-2 px-[5%] flex sm:hidden'>
        <div className='w-[20%]  text-2xl font-semibold flex justify-center items-center'>
        Exclusive
      </div>
        <IoReorderThreeOutline size={40} onClick={Load}/>
      </div>
        ):(
          navigate("/phonesidebar")
        )
      }

    </div>

  )
}

export default Navbar
