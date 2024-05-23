import React, { useState ,useEffect} from 'react'
import Navbar from '../components/Navbar'
import {useSelector} from 'react-redux'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const Billingdetails = () => {
  const navigate = useNavigate()
  const[login,setIsLogin] = useState(false)
  useEffect(()=>{
    const token  = Cookies.get('token')
    if(token){
      setIsLogin(true)
    }
    else{
      navigate("/login")
      setIsLogin(false)
    }
  },[])
  const data = useSelector((state) => state.counter.cart)
  console.log(data.length)
  return (
    <div className='w-full'>
      <Navbar/>
      <div className=' w-full flex sm:flex-row flex-col pt-[3%]'>
        <div className='w-full sm:w-[50%] flex  flex-col items-center justify-center sm:justify-start sm:items-start sm:pl-[6%]'>
            <h1 className='w-full text-3xl text-center sm:text-start font-semibold mb-[5%] sm:my-[1%]'>Billing Details</h1>
            <label>First Name</label>
            <input  className='w-[90%] rounded-xl sm:rounded-none sm:w-[70%]  mb-[2%] p-[1%] border-2 bg-gray-200'/>
            <label>Address</label>
            <input  className='w-[90%] rounded-xl sm:rounded-none sm:w-[70%]  mb-[2%] p-[1%] border-2 bg-gray-200'/>
            <label>Street Address</label>
            <input  className='w-[90%] rounded-xl sm:rounded-none sm:w-[70%]  mb-[2%] p-[1%] border-2 bg-gray-200'/>
            <label>Apartment floor etc</label>
            <input  className='w-[90%] rounded-xl sm:rounded-none sm:w-[70%]  mb-[2%] p-[1%] border-2 bg-gray-200'/>
            <label>Town City</label>
            <input  className='w-[90%] rounded-xl sm:rounded-none sm:w-[70%]  mb-[2%] p-[1%] border-2 bg-gray-200'/>
            <label>Phone Number</label>
            <input  className='w-[90%] rounded-xl sm:rounded-none sm:w-[70%]  mb-[2%] p-[1%] border-2 bg-gray-200'/>
            <label>Email</label>
            <input  className='w-[90%] rounded-xl sm:rounded-none sm:w-[70%]  mb-[2%] p-[1%] border-2 bg-gray-200'/>
        </div>
        <div className='w-full sm:w-[50%] px-2 sm:px-0 sm:pr-[6%] pt-[3%]'>
           <div className='w-full sm:w-[60%]  sm:p-0'>
           {
            data.length>0? (
              
                data.map((data)=>(
                        
                  <div className='flex  sm:flex-row justify-between text-base sm:text-lg  sm:p-[1%] rounded-xl my-[2%]'>
                  <div className='w-[50%] sm:w-[50%] text-start '>{data.name}</div>
                  <div className='w-[50%] font-bold sm:w-[50%] text-end '>{data.price}</div>
                  </div>
                ))
            
            ):(
              <div></div>
            )
           }  
           </div>
           <div className='flex justify-between  sm:w-[60%] p-[1%] text-lg border-b-2'>
           <p className='w-[50%] font-bold sm:w-[50%] text-start '>
            Subtotal  
           </p>
           <p className='w-[50%] font-bold sm:w-[50%] text-end'>
            $1000
           </p>
           </div> 
           <div className='flex justify-between w-full sm:w-[60%] p-[1%] text-lg border-b-2'>
           <p className='w-[50%] font-bold sm:w-[50%] text-start '>
            Shipping  
           </p>
           <p className='w-[50%] font-bold sm:w-[50%] text-end'>
            Free
           </p>
           </div> 
           <div className='flex justify-between w-full sm:w-[60%] p-[1%] text-lg '>
           <p className='w-[50%] font-bold sm:w-[50%] text-start '>
            Total 
           </p>
           <p className='w-[50%] font-bold sm:w-[50%] text-end'>
            $1000
           </p>
           </div> 
           <div className='flex w-full sm:flex-col  '>
           <div class="flex sm:flex-row items-center mb-2 p-[1%] text-base sm:text-lg w-[50%]">
           <input id="default-checkbox" type="checkbox" value="" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
           <label for="default-checkbox" class="ms-2 text-base sm:text-lg font-medium text-gray-900 dark:text-gray-300">Bank</label>
           </div>
           <div class="flex items-center mb-4 p-[1%] text-base sm:text-lg w-[50%]">
           <input id="default-checkbox" type="checkbox" value="" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
           <label for="default-checkbox" class="ms-2 text-base sm:text-lg font-medium text-gray-900 dark:text-gray-300">Cash On Delivery </label>
           </div>
           
           </div>
           <div className=' flex gap-5 w-full justify-center sm:justify-start'>
            <input placeholder='Coupon Code' type='text' className='border-2 border-black h-[30%] w-[60%] sm:w-[40%] p-[1%]'/>
            <button className='text-white bg-red-500 px-[2%] py-[1%] h-[30%] w-[40%] sm:w-[25%]'>Apply Coupon</button>
          </div>
          <div className='flex justify-center w-full  sm:justify-start'>
          <button className='text-white bg-red-500 px-[2%] py-[1%] mt-[3%] w-[50%] sm:w-[30%] '>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billingdetails
