import React,{useState} from 'react'
import Keyboard from '../assets/keyboard.jpg'
import { addtoCart } from '../Slices/Addtocartslice'
import {useSelector,useDispatch} from 'react-redux'

const Card = ({props}) => {
  const [isHovered, setIsHovered] = useState(false);
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='w-48 sm:w-88  sm:h-64  flex flex-col justify-center   hover:shadow-2xl '>
      <div className='w-48 md:w-72 flex flex-col relative 'onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <img src={Keyboard} alt="" className='w-48 md:w-72' 
        />
        {isHovered && (
        <button
          className='bottom-1 absolute bg-black text-white  p-[1%] w-full'
          onClick={() => dispatch(addtoCart(props))}
        >
          Add to Cart
      </button>
        )}

      </div>
      <div className='p-[1%] w-full items-center justify-center'>
        <p className='font-semibold '>{props.name}</p>
        <p className='text-red-500'>{props.price}</p>
      </div>
        
    </div>
  )
}

export default Card
