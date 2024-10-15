import React,{useState,useEffect} from 'react'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";
import { useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';




const Navbar = () => {
  const navigate = useNavigate()
  const[isLogin,setIsLogin] = useState(true)
  
  useEffect(() => {
    const authToken = Cookies.get('token');
    if (authToken) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);


  const[load,setLoad] = useState(true)
  const[showDropdown,setShowDropdown] = useState(false)
  function Load(){
    setLoad(!load)
  }
  return (
      <div className='w-full ' onMouseLeave={()=>setShowDropdown(false)}>
      <div className='relative hidden sm:flex justify-between w-screen py-[1%] border-b-2  md:h-[12%] sm:px-[4%] lg:px-[6%] bg-white'>
      <div className=' sm:w-[15%] md:w-[20%] sm:text-xl md:text-2xl font-bold flex justify-center items-center'>
        Exclusive
      </div>
      <div className='flex sm:gap-[5%] md:gap-[10%] justify-center w-[40%] sm:text-base lg:text-lg items-center font-semibold'>
        <div className='cursor-pointer'><Link to={"/"}>Home</Link></div>
        <div className='cursor-pointer'>Contact</div>
        <div className='cursor-pointer'>About</div>
        <div className='cursor-pointer'><Link to={"/login"}>Login</Link></div>
      </div>
      <div className='flex gap-[5%] w-[40%] justify-center items-center'>
        <div className='w-[50%] flex items-center bg-gray-50 rounded-lg'>
        <input type='text' placeholder='What are you looking for?' className='w-[90%] bg-gray-50 outline-none p-[3%] rounded-lg sm:text-base md:text-base '/>
        <CiSearch  className='md:size-6 sm:size-6 lg:size-8' />
        </div>
        <FaRegHeart  className='md:size-6 sm:size-6 lg:size-8'/>
        <Link to={"/cart"}><MdOutlineShoppingCart className='md:size-6 sm:size-6 lg:size-8'/></Link>
        {
          isLogin?(
            <FaUserCircle  onClick={(e)=>setShowDropdown(true)} className='md:size-6 sm:size-6 lg:size-8' />
          ):(
            <>
            </>
          )
        }
      </div>
    </div>
   {
    showDropdown?(
      <div className='absolute md:left-[82%] sm:left-[70%] bg-gray-100 sm:w-[25%] md:w-[17%] lg:w-[13%] sm:text-sm lg:text-xl '>
      <p className='px-[3%] py-[2%] cursor-pointer' onClick={()=>navigate("/manageaccounts")}>Manage My Accounts</p>
      <p className='px-[3%] py-[2%] cursor-pointer' onClick={()=>navigate("/orderhistory")}>My Orders</p>
    </div>
    ):(
      <>
      </>
    )
   }
  
   {load?(
        <div className='w-full h-[10%] mb-[10%] justify-between items-center pb-[2%] pt-[2%] border-b-2 px-[5%] flex sm:hidden'>
        <div className='w-[50%]  text-2xl font-semibold '>
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
