import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Keyboard from '../assets/keyboard.png'
import Card from '../components/Card'
import { Rating } from 'react-simple-star-rating'
import { useParams } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'

const Productdetail = () => {
  const data = useSelector((state) => state.counter.value)
  
  const [rating, setRating] = useState(0)
  const handleRating = (rate) => {
    setRating(rate)
  }

  const data1=[
    {name:"AK-900 Wired Keyboard",price:"120"},
    {name:"AK-900 Wired Keyboard",price:"120"},
    {name:"AK-900 Wired Keyboard",price:"120"},
    {name:"AK-900 Wired Keyboard",price:"120"},
  ]
  return (
    <div className="h-screen">

      <div className="h-[10%]">
        <Navbar />
      </div>
      
      <div className="w-screen px-[10%] h-[90%] flex items-center gap-[5%]">
        
        <div className="w-[60%] flex gap-5 ">
          <div className="w-[20%] ">
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
          <div className="w-[80%] flex ">
            <img src={Keyboard} alt="" className="" />
          </div>
        </div>
        <div className="w-[40%] flex flex-col gap-5">
          <p className="text-3xl font-semibold">Havic HV G-92 Gamepad</p>
          
          
          <p className="text-xl font-semibold">$192</p>
          <p className="border-b-2 pb-[5%] border-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            voluptatum a quibusdam distinctio ratione nulla quam suscipit?
            Necessitatibus ducimus consectetur excepturi hic. Perspiciatis
            libero minima qui iste enim dignissimos consequatur!
          </p>
          <div className="flex w-full  items-center">
            <div className="w-[50%] flex  items-center mx-[1%]">
              <button className="w-[20%] p-[1%] border-2 text-2xl border-collapse border-gray-500 text-center">
                +
              </button>
              <div className="w-[40%] p-[1%] border-y-2 text-2xl text-center border-collapse border-gray-500">
                1
              </div>
              <button className="w-[20%] p-[1%] border-2 text-2xl border-collapse border-gray-500 text-center">
                -
              </button>
            </div>
            <div className="w-full">
              <button className="w-[50%] py-[2%]  text-xl border-collapse bg-red-700 text-white text-center">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between px-[5%] mt-[4%]">
        {data1.map((data) => (
          <Card props={data}/>
        ))}
      </div>
      <div className='App'>
      <Rating
        onClick={handleRating}
  
      />
    </div>
         
    </div>
  );
}

export default Productdetail
