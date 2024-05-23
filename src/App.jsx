import {Route,Routes, useParams} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Productdetail from './pages/Productdetail'
import Cart from './pages/Cart'
import Phonesidebar from './components/Phonesidebar'
import Billingdetails from './pages/Billingdetails'

function App() {
 
  return (
  <div className='w-screen h-screen overflow-x-hidden'>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/productdetail/:id' element={<Productdetail/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/phonesidebar' element={<Phonesidebar/>}/>
    <Route path='/billingdetails' element={<Billingdetails/>}/>
  </Routes>
  </div>
  )
}

export default App
