import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch ,FaShoppingCart, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
useSelector

const Navbar = () => {
    const products = useSelector(state => state.cart.products)
  return (
   <nav className='bg-white shadow-md '>

    <div className = 'container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center '>

        <div className ='text-5xl font-bold text-black'>
            <Link to = "/">UrbanLeaf</Link>
        </div>

        <div className='relative flex-1 mx-13'>
            <form>
                <input type = "text" placeholder='Search Product'
                className='w-full border py-2 px-4 bg-white' />
                <FaSearch className = 'absolute top-3 right-3 text-green-600'></FaSearch>
            </form>
        </div>
        <div className='flex items-center space-x-4 '>
            <Link to = "/cart" className ='relative'>
            <FaShoppingCart className='text-lg'/>
           {products.length > 0 && (
            <span className = "absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">
                {products.length}
            </span>
           )}
            </Link>
            <button className='hidden md:block'>
                Login | Register
            </button>
            <button className='block md:hidden'>
                <FaUser/>
            </button>
        </div>
    </div>

    <div className = 'flex items-center justify-center space-x-13 py-4 text-sm font-bold  '> 
        <Link to = "/"className  = "hover:underline" >
            Home
        </Link>

          <Link to = "/shop"className  = "hover:underline" >
            Shop
        </Link>

        <Link to ="/"className = "hover:underline" >
            Blog
        </Link>

        <Link to ="/"className = "hover:underline" >
            Ask PlantBot
        </Link>

          <Link to ="/about" className=" hover:underline" >
            About Us
        </Link>

          <Link to ="/faq "className = "hover:underline" >
            FAQ
        </Link>




    </div>
   </nav>
  )
}

export default Navbar