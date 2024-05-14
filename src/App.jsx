import {Route,Routes, useParams} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Productdetail from './pages/Productdetail'
import Cart from './pages/Cart'

function App() {
 
  return (
  <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/productdetail/:id' element={<Productdetail/>}/>
    <Route path='/cart' element={<Cart/>}/>
  </Routes>
  </>
  )
}

export default App
