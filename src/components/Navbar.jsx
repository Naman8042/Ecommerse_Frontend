import React,{useState} from 'react'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const[isLogin,setIsLogin] = useState(true)
  const[showDropdown,setShowDropdown] = useState(false)
  return (
      <div className='absolute ' onMouseLeave={()=>setShowDropdown(false)}>
      <div className='flex justify-between w-screen py-[1%] border-b-2 h-[10%] px-[6%] bg-white'>
      <div className='w-[20%]  text-2xl font-semibold flex justify-center items-center'>
        Exclusive
      </div>
      <div className='flex gap-[10%] justify-center w-[40%] text-lg items-center font-semibold'>
        <div>Home</div>
        <div>Contact</div>
        <div>About</div>
        <div><Link to="/login">Signup</Link></div>
      </div>
      <div className='flex gap-[5%] w-[40%] justify-center items-center'>
        <div className='w-[50%] flex items-center bg-gray-50 rounded-lg'>
        <input type='text' placeholder='What are you looking for?' className='w-[90%] bg-gray-50 outline-none p-[3%] rounded-lg '/>
        <CiSearch size={30}/>
        </div>
        <FaRegHeart size={30}/>
        <Link to={"/cart"}><MdOutlineShoppingCart size={30}/></Link>
        {
          isLogin?(
            <FaUserCircle size={30} onClick={(e)=>setShowDropdown(true)} />
          ):(
            <>
            </>
          )
        }
      </div>
    </div>
   {
    showDropdown?(
      <div className='relative left-[82%] bg-gray-100  w-[13%] '>
      <p className='px-[3%] py-[2%]'>Manage My Accounts</p>
      <p className='px-[3%] py-[2%]'>My Orders</p>
    </div>
    ):(
      <>
      </>
    )
   }
    </div>

  )
}

export default Navbar
