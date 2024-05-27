import React,{useState} from 'react'
import Keyboard from '../assets/keyboard.jpg'
import { addtoCart } from '../Slices/Addtocartslice'
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Rating from '@mui/material/Rating';


const Card = ({props}) => {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch()
  function naviagteHandler(){
    if(isHovered===false){
      navigate(`/productdetail/${props._id}`)
    }
    
  }
  var ProductName ;
  if(props.name.length>20){
    ProductName = props.name.slice(0,20)
  }
  else{
    ProductName = props.name
  }
  return (
    <div className='cursor-pointer items-center w-full sm:w-96  sm:h-88  flex flex-col justify-center  sm:hover:shadow-2xl p-[1%]' onClick={naviagteHandler} >
      <div className='w-full sm:w-80 flex flex-col items-center relative 'onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <img src={props.imageUrl} alt="" className='w-48 h-48 md:w-64 md:h-64' onClick={()=>navigate(`/productdetail/${props._id}`)} 
        />
        {isHovered && (
        <button
          className='hidden sm:block bottom-1 absolute bg-black text-white  p-[1%] w-full'
          onClick={() => dispatch(addtoCart(props))}
        >
          Add to Cart
      </button>
        )}

      </div>
      <div className='p-[1%] w-full items-center justify-center ' >
        <p className='font-semibold text-center sm:text-start text-sm sm:text-lg my-1 sm:my-0 '>{ProductName}</p>
        <p className='text-red-500 text-center sm:text-start sm:text-lg my-1 sm:my-0'>${props.price}</p>
        <div className='flex justify-center my-1'>
        <button
          className='block sm:hidden bg-black text-white text-sm py-[2%] w-[90%] rounded-xl  '
          onClick={() => dispatch(addtoCart(props))}
        >
          Add to Cart
      </button>
      </div>
      <Rating name="read-only" value={props.price[0]} readOnly/>
      </div>
      
      
    </div>
  )
}

export default Card

