import React from 'react'
import {useSelector} from 'react-redux'
import Navbar from '../components/Navbar'
import Keyboard from '../assets/keyboard.png'
import { Link } from 'react-router-dom'

const Cart = () => {
    
    const data = useSelector((state) => state.counter.cart)
    let totalPrice = 0;
    for(let i=0;i<data.length;i++){
        totalPrice+=Number(data[i].price)
    }
    console.log(totalPrice)
  return (
    <div>
        <div className='h-[10%]'>
            <Navbar/>
            </div>  
      {
        data.length>0?(
            <div className=''>
              
            <div className='px-[6%] w-screen h-[90%] mt-[2%]'>
                <p className='text-xl font-bold my-[1%]'>My Cart</p>
                <div className='hidden sm:flex justify-between text-xl border-2 p-[1%] rounded-xl'>
                
                    <div className='w-[25%] text-center'>Product Name</div>
                    <div className='w-[25%] text-center'>Price</div>
                    <div className='w-[25%] text-center'>Quantity</div>
                    <div className='w-[25%] text-center'>Subtotal</div>

                </div>
                {
                    data.map((data)=>(
                        
                    <div className='flex flex-col sm:flex-row justify-between text-base sm:text-xl border-b-2 sm:border-2 p-[1%] rounded-xl my-[2%]'>
                    <div className='w-full sm:w-[25%] text-start sm:text-center'>{data.name}</div>
                    <div className='w-full hidden sm:block sm:w-[25%] text-start sm:text-center'>{data.price}</div>
                    <div className='w-full sm:w-[25%] text-start sm:text-center'>1</div>
                    <div className='w-full font-bold sm:w-[25%] text-start sm:text-center'>{data.price}</div>
                    </div>
                    ))
                }
                <div className='w-full flex flex-col sm:flex-row justify-between gap-4'>
                    <div className='w-full sm:w-[40%] flex gap-5 '>
                        <input placeholder='Coupon Code' type='text' className='border-2 border-black h-[30%] w-[60%] p-[1%]'/>
                        <button className='text-white bg-red-500 rounded-xl px-[2%] py-[1%] h-[30%]'>Apply Coupon</button>
                    </div>
                    <div className='w-full sm:w-[30%] border-2 p-[1%] rounded-xl'>
                        <p className='px-[2%] text-lg'>Cart Total</p>
                        <div className='flex justify-between px-[2%] text-lg'>
                        <p>Total : </p>
                        <p>{totalPrice}</p>
                        </div>
                        <div className='flex justify-between px-[2%] text-lg'>
                        <p>Shipping : </p>
                        <p>Free</p>
                        </div>
                        <div className='flex justify-between px-[2%] text-lg'>
                        <p>Total : </p>
                        <p>{totalPrice}</p>
                        </div>
                        <div className=' justify-center hidden sm:flex'>
                        <Link to="/billingdetails">   
                        <div className='flex w-full'>
                        <button className='text-white bg-red-500 w-full py-[5%] px-1'>Proceed to Checkout</button>
                        </div>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[10%] justify-center items-center w-full flex sm:hidden'>
            
            <button className='w-[80%] text-white rounded-xl bg-red-500 px-[4%] py-[2%] '>Proceed to Checkout</button>
            
            </div>
            </div>
            
              
        ):(
            <div>
                No items in Cart
            </div>
        )
      }
    </div>
  )
}

export default Cart
