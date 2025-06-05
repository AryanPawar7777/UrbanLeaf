
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/cart'
import Checkout  from './pages/Checkout'
import { useState } from 'react'
import Order from './pages/Order'
import Faq from './pages/Faq';
import About from './pages/About';






const App = () => {
const [order, setOrder] = useState(null);

  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path = "/" element = {<Home/>}></Route>
     <Route path = "/shop" element = {<Shop/>}></Route>
      <Route path = "/cart" element = {<Cart/>}></Route>
       <Route path = "/checkout" element = {<Checkout setOrder = {setOrder}/>}></Route>
          
             <Route path = "/order-confirmation" element = {<Order order = {order}/>}></Route>
             <Route path="/about" element={<About />} />

<Route path="/faq" element={<Faq />} />






          

   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App