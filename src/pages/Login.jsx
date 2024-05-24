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
        "https://deploy-lej8.onrender.com/api/v1/login",
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

      <div className='h-[8%]'>
      <Navbar/>
      </div>
      {
        isLogin?(
          <div className='w-screen flex h-[92%] flex-col sm:flex-row '>
        <div className='sm:w-[60%] w-full '>
         <img src={LoginPhoto} alt='' className='w-full h-full'/>
        </div>
        <div className='sm:w-[40%] w-full  flex sm:gap-4 gap-3  flex-col items-center justify-center h-full '>
           <p className='md:text-4xl text-2xl font-semibold w-full sm:w-[50%] my-[2%] text-center sm:text-start'>Login Into Account</p> 
           <input type='text' placeholder='Email or Phone Number' className='sm:w-[50%] w-[85%] sm:p-[1%] outline-none border-gray-400 sm:border-b-2 border-2 rounded-xl p-[2%]'/>  
           <input type='text' placeholder='Password' className='sm:w-[50%] w-[85%] sm:p-[1%] outline-none border-gray-400 sm:border-b-2 border-2 rounded-xl p-[2%]'/>  
           <button onClick={Login} className='bg-red-500 text-white w-[50%] py-[1.5%]'>Login Account</button>
           <div onClick={(e)=>setIsLogin(false)} className='cursor-pointer'>Don't Have Account? <span className='text-red-500 font-semibold'>Sign Up</span></div>
        </div>
      </div>
        ):(
        <div className='w-screen flex h-[92%] flex-col sm:flex-row '>
        <div className='w-full sm:w-[60%]'>
         <img src={LoginPhoto} alt='' className='w-full h-full'/>
        </div>
        <div className='w-full sm:w-[40%] flex sm:gap-4 gap-2 flex-col items-center justify-center h-full '>
           <p className='text-2xl sm:text-4xl font-semibold sm:w-[50%] w-full text-center sm:text-start'>Create An Account</p>
           <p className='text-bg  w-[50%] mb-[5%] hidden sm:block'>Enter Your Details Here</p>

           <input type='text' placeholder='Name' className='w-[85%] sm:w-[50%] sm:p-[1%] outline-none my-[1%] border-gray-400 border-b-2 sm:border-b-2 border-2 rounded-xl p-[2%]'/>  
           <input type='text' placeholder='Email or Phone Number' className='w-[85%] sm:w-[50%] sm:p-[1%] outline-none border-gray-400 border-b-2 sm:border-b-2 border-2 rounded-xl p-[2%]'/>  
           <input type='text' placeholder='Password' className='w-[85%] sm:w-[50%] sm:p-[l%] outline-none border-gray-400 border-b-2 sm:border-b-2 border-2 rounded-xl p-[2%]'/>  
           <button onClick={Login} className='bg-red-500 text-white w-[50%] py-[1.5%]'>Create Account</button>

        </div>
      </div>
        )
      }
    </div>
  )
}

export default Login
