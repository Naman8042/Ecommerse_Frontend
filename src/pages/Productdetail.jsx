import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Keyboard from '../assets/keyboard.png'
import Card from '../components/Card'
import { Rating } from 'react-simple-star-rating'
import { useParams } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import ImageScroller from '../components/ImageScroller';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Productdetail = () => {
  const navigate = useNavigate()
  const data = useSelector((state) => state.counter.value)
  const[Data1,setData1] = useState({})
  const {id} = useParams()

  useEffect(()=>{
    axios.post("http://localhost:4000/api/v1/getdetails",{id})
    .then((res)=>setData1(res.data.data))
    },[id])

   const[Data,setData] = useState([])

   useEffect(()=>{
   axios.get("http://localhost:4000/api/v1/getall")
   .then((res)=>setData(res.data.data))
   },[])
  
  const [rating, setRating] = useState(0)
  const handleRating = (rate) => {
    setRating(rate)
  }
  const images = [
    Data1.imageUrl,
    Data1.imageUrl,
    Data1.imageUrl,
    Data1.imageUrl,
    Data1.imageUrl,
  ];


 
  return (
    <div className=" overflow-x-hidden h-screen">

      <div className="h-[10%]">
        <Navbar />
      </div>
      <div className='h-[90%]'>
      <div className="w-screen px-[10%] overflow-x-auto flex flex-col sm:flex-row items-center justify-center gap-[5%]">
        
        <div className="w-[60%] gap-5 hidden sm:flex h-screen">
          <div className="w-[20%] flex flex-col justify-center ">
            <div className="w-full p-[1%] my-[5%]">
              <img src={Data1.imageUrl} alt="" />
            </div>
            <div className="w-full p-[1%] my-[5%]">
              <img src={Data1.imageUrl} alt="" />
            </div>
            <div className="w-full p-[1%] my-[5%]">
              <img src={Data1.imageUrl} alt="" />
            </div>
            <div className="w-full p-[1%] my-[5%]">
              <img src={Data1.imageUrl} alt="" />
            </div>
          </div>
          <div className="w-[80%] flex justify-center h-full items-center ">
            <img src={Data1.imageUrl} alt="" className="w-[90%] h-[60%]" />
          </div>
        </div>
        <div className='w-full block sm:hidden'>
          <ImageScroller images={images}/>
        </div>
    
        <div className="w-full sm:w-[40%] flex flex-col gap-5 mt-[5%]">
          <p className="text-2xl sm:text-3xl font-semibold">{Data1.name}</p>
          
          
          <p className="text-xl font-semibold">${Data1.price}</p>
          <p className="border-b-2 pb-[5%] border-black">
            {Data1.description}
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
       <div className=" sm:flex px-[4%] sm:px-[0%] sm:pl-[8%] sm:overflow-x-visible my-[2%] gap-2  sm:gap-[10%] w-full  grid grid-cols-2" >
        {Data.slice(0,4).map((data) => (
          <Card props={data} className='flex' />
        ))}
      </div>
      <div className='App'>
     
    </div>
      </div>
      
      
    </div>
  );
}

export default Productdetail
