import Orderhistory from '../components/OrderHistory'
import Navbar from '../components/Navbar'

const OrderHistory = () => {
  return (
    <div>
         <div className='h-[10%]'>
            <Navbar/>
         </div>
        <div className='flex items-center justify-center h-full mt-5'>
        <Orderhistory/>
        </div>
    </div>
      )
}

export default OrderHistory