import React from 'react'
import { FaStar } from 'react-icons/fa'
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

const ProductCard = ({product}) => {
  const dispatch = useDispatch( )
  const handleAddToCart=(e,product)=>{
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(product))
    alert("Product Added Succesfully!")
  }
  return (
    <div className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105 flex flex-col h-full'>
        <img src={product.image} alt="" className="object-cover" />
        
        {/* Wrap the text part in a div with mt-auto to push it down */}
        <div className="mt-auto">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-500">Rs.{product.price}</p>
          <div className="flex items-center mt-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-gray-200"/>
          </div>
        </div>
        
        <div className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-black group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-100" onClick ={(e)=> handleAddToCart(e, product)}>
          
          <span className="group-hover:hidden">+</span>
          <span className="hidden group-hover:block">Add to cart</span>
        </div>
    </div>
  )
}

export default ProductCard
