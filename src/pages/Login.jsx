import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import Cookies from 'js-cookie'
import LoginPhoto from '../assets/Loginphoto.png'

const Login = () => {
  const[isLogin,setIsLogin] = useState(true)
  async function Login(){
    try{
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/login",
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
      )
      .then((res)=>Cookies.set('token',res.data.token))
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
      {
        isLogin?(
          <div className='w-screen flex h-[90%]  '>
        <div className='w-[60%]'>
         <img src={LoginPhoto} alt='' className='w-full h-full'/>
        </div>
        <div className='w-[40%] flex gap-4 flex-col items-center justify-center h-full '>
           <p className='text-4xl font-semibold w-[50%] my-[2%]'>Login Into Account</p> 
           <input type='text' placeholder='Email or Phone Number' className='w-[50%] p-[1%] outline-none border-gray-400 border-b-2'/>  
           <input type='text' placeholder='Password' className='w-[50%] p-[1%] outline-none border-gray-400 border-b-2'/>  
           <button onClick={Login} className='bg-red-500 text-white w-[50%] py-[1.5%]'>Login Account</button>
           <div onClick={(e)=>setIsLogin(false)} className='cursor-pointer'>Don't Have Account? <span className='text-red-500 font-semibold'>Sign Up</span></div>
        </div>
      </div>
        ):(
        <div className='w-screen flex h-[90%] '>
        <div className='w-[60%]'>
         <img src={LoginPhoto} alt='' className='w-full h-full'/>
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
        )
      }
    </div>
  )
}

export default Login
