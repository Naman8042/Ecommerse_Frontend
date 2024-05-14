import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

const Login = () => {
  async function Login(){
    try{
      const { data } = await axios.post(
        `https://deploy-lej8.onrender.com/api/v1/login`,
        {
          email:"naman@gmail.com",
          password:"123",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className='h-screen '>

      <div className='h-[10%]'>
      <Navbar/>
      </div>
      <div className='w-screen flex h-[90%]  '>
        <div className='w-[60%]'>
         
        </div>
        <div className='w-[40%] flex gap-4 flex-col items-center justify-center h-full '>
           <p className='text-4xl font-semibold w-[50%]'>Create An Account</p>
           <p className='text-bg  w-[50%] mb-[5%]'>Enter Your Details Here</p>

           <input type='text' placeholder='Name' className='w-[50%] p-[1%] outline-none my-[1%] border-gray-400 border-b-2'/>  
           <input type='text' placeholder='Email or Phone Number' className='w-[50%] p-[1%] outline-none border-gray-400 border-b-2'/>  
           <input type='text' placeholder='Password' className='w-[50%] p-[1%] outline-none border-gray-400 border-b-2'/>  
           <button onClick={Login} className='bg-red-500 text-white w-[50%] py-[1.5%]'>Create Account</button>

        </div>
      </div>
    </div>
  )
}

export default Login
