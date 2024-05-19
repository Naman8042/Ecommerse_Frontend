import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Keyboard from '../assets/keyboard.png'
import Card from '../components/Card'
import { Rating } from 'react-simple-star-rating'
import { useParams } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import ImageScroller from '../components/ImageScroller';


const Productdetail = () => {
  const data = useSelector((state) => state.counter.value)
  
  const [rating, setRating] = useState(0)
  const handleRating = (rate) => {
    setRating(rate)
  }
  const images = [
    Keyboard,
    Keyboard,
    Keyboard,
    Keyboard,
    Keyboard,
  ];


  const data1=[
    {name:"AK-900 Wired Keyboard",price:"120"},
    {name:"AK-900 Wired Keyboard",price:"120"},
    {name:"AK-900 Wired Keyboard",price:"120"},
    {name:"AK-900 Wired Keyboard",price:"120"},
  ]
  return (
    <div className=" overflow-x-hidden h-screen">

      <div className="h-[10%]">
        <Navbar />
      </div>
      <div className='h-[90%]'>
      <div className="w-screen px-[10%]  h-[90%] overflow-x-auto flex flex-col sm:flex-row items-center justify-center gap-[5%]">
        
        <div className="w-[60%] gap-5 hidden sm:flex h-screen">
          <div className="w-[20%] flex flex-col justify-center ">
            <div className="w-full p-[1%] my-[5%]">
              <img src={Keyboard} alt="" />
            </div>
            <div className="w-full p-[1%] my-[5%]">
              <img src={Keyboard} alt="" />
            </div>
            <div className="w-full p-[1%] my-[5%]">
              <img src={Keyboard} alt="" />
            </div>
            <div className="w-full p-[1%] my-[5%]">
              <img src={Keyboard} alt="" />
            </div>
          </div>
          <div className="w-[80%] flex justify-center h-full items-center ">
            <img src={Keyboard} alt="" className="w-[90%] h-[60%]" />
          </div>
        </div>
        <div className='w-full block sm:hidden'>
          <ImageScroller images={images}/>
        </div>
    
        <div className="w-full sm:w-[40%] flex flex-col gap-5 mt-[5%]">
          <p className="text-2xl sm:text-3xl font-semibold">Havic HV G-92 Gamepad</p>
          
          
          <p className="text-xl font-semibold">$192</p>
          <p className="border-b-2 pb-[5%] border-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            voluptatum a quibusdam distinctio ratione nulla quam suscipit?
            Necessitatibus ducimus consectetur excepturi hic. Perspiciatis
            libero minima qui iste enim dignissimos consequatur!
          </p>
          <div className="flex sm:flex-row flex-col w-full gap-5 sm:gap-1 items-center">
            <div className="w-[40%] sm:w-[50%] flex  items-center mx-[1%]">
              <button className="w-[25%] sm:w-[20%] p-[1%] border-2 text-2xl border-collapse border-gray-500 text-center">
                +
              </button>
              <div className="w-[50%] sm:w-[40%] p-[1%] border-y-2 text-2xl text-center border-collapse border-gray-500">
                1
              </div>
              <button className="w-[25%] sm:w-[20%] p-[1%] border-2 text-2xl border-collapse border-gray-500 text-center">
                -
              </button>
            </div>
            <div className="w-full flex flex-col sm:flex-row gap-4">
              <button className="w-full rounded-2xl sm:w-[50%] py-[2%]  text-xl border-collapse bg-red-700 text-white text-center">
                Buy Now
              </button>
              <button className="w-full rounded-2xl sm:w-[50%] py-[2%]  text-xl border-collapse bg-red-700 text-white text-center">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        
       </div>
       <div className=" grid grid-cols-2 sm:flex justify-between  mt-[4%] gap-2 px-[1%]">
        {data1.slice(0,8).map((data) => (
          <Card props={data} className='flex'/>
        ))}
      </div>
      <div className='App'>
     
    </div>
      </div>
      
      
    </div>
  );
}

export default Productdetail
