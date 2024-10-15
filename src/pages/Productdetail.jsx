import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Keyboard from '../assets/keyboard.png';
import Card from '../components/Card';
import { useParams } from 'react-router-dom';
import { addtoCart } from '../Slices/Addtocartslice';
import { useSelector, useDispatch } from 'react-redux';
import ImageScroller from '../components/ImageScroller';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';

const Productdetail = () => {
  const [value, setValue] = useState(3);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.counter.value);
  const [Data1, setData1] = useState({});
  const { id } = useParams();
  const [Data, setData] = useState([]);
  const [rating, setRating] = useState(0);
  
  // Consolidated data fetching useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productDetailResponse = await axios.post("https://deploy-lej8.onrender.com/api/v1/getdetails", { id });
        setData1(productDetailResponse.data.data);
        
        const allDataResponse = await axios.get("https://deploy-lej8.onrender.com/api/v1/getall");
        setData(allDataResponse.data.data);

        setLoading(false); // Only set loading to false after both fetches complete
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false on error as well
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className='w-full h-full flex justify-center items-center'>
        <div role="status">
          <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  const images = [Data1.imageUrl, Data1.imageUrl, Data1.imageUrl, Data1.imageUrl, Data1.imageUrl];

  return (
    <div className="overflow-x-hidden h-screen">
      <div className="h-[8%]">
        <Navbar />
      </div>
      <div className="h-[92%]">
        <div className="w-screen lg:px-[10%] sm:px-[4%] px-7 overflow-x-auto flex flex-col sm:flex-row items-center justify-center gap-[5%]">
          <div className="w-[60%] gap-5 hidden sm:flex h-screen">
            <div className="w-[20%] flex flex-col justify-center gap-4 ">
              <img src={Data1.imageUrl} alt="" className='w-32 h-32' />
              <img src={Data1.imageUrl} alt="" className='w-32 h-32' />
              <img src={Data1.imageUrl} alt="" className='w-32 h-32' />
              <img src={Data1.imageUrl} alt="" className='w-32 h-32' />
            </div>
            <div className="w-[80%] flex justify-center h-full items-center ">
              <img src={Data1.imageUrl} alt="" className="w-[90%] h-[60%]" />
            </div>
          </div>
          <div className='w-full block sm:hidden'>
            <ImageScroller images={images} />
          </div>
          <div className="w-full sm:w-[40%] flex flex-col gap-5 mt-[5%]">
            <p className="text-2xl sm:text-3xl font-semibold">{Data1.name}</p>
            <p className="text-xl font-semibold">${Data1.price}</p>
            <p className="border-b-2 pb-[5%] border-black">{Data1.description}</p>
            <Rating name="read-only" value={value} readOnly />
            <div className="flex sm:flex-row flex-col w-full gap-5 sm:gap-1 items-center ">
              <div className="w-[50%] flex items-center ">
                <button className="w-[25%] sm:w-[20%] p-[1%] border-2 text-2xl border-collapse border-gray-500 text-center">+</button>
                <div className="w-[50%] sm:w-[40%] p-[1%] border-y-2 text-2xl text-center border-collapse border-gray-500">1</div>
                <button className="w-[25%] sm:w-[20%] p-[1%] border-2 text-2xl border-collapse border-gray-500 text-center">-</button>
              </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row gap-4 items-center ">
              <button className="bg-red-500 w-[85%] sm:w-[40%] p-[2%] rounded-xl text-white">Buy Now</button>
              <button className="bg-red-500 w-[85%] sm:w-[45%] p-[2%] rounded-xl text-white" onClick={() => dispatch(addtoCart(Data1))}>Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="sm:flex px-[4%] sm:px-[0%] sm:pl-[8%] sm:overflow-x-visible my-[2%] gap-2 sm:gap-[10%] w-full grid grid-cols-2">
          {Data.slice(0, 4).map((data) => (
            <Card props={data} className='flex' />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Productdetail;
