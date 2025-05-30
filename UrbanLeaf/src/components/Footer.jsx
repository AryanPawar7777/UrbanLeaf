import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className = 'bg-gray-700 text-white py-8 md:px-16 lg:px-24'>
        <div className ='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
                <h3 className = 'text-3xl font-semibold'>Urban Leaf</h3>
                <p className = 'mt-4'>Your all plant needs at one destination. Shop here and have a unforgettable experience.</p>
            </div>
            <div className = 'flex flex-col md: items-center'>
                <h4 className ='text-lg font-semibold'>Quick Links</h4>
                <ul className =' mt-4 space-y-2'>
                    <li>
                        <Link to = "/" className = 'hover:underline'>Home</Link>
                    </li>
                      <li>
                        <Link to = "/shop"className = 'hover:underline'>Shop</Link>
                    </li>
                    
                      <li>
                        <Link to = "/Ask Plantbot" className = 'hover:underline'>Ask PlantBot</Link>
                    </li>

                       <li>
                        <Link to = "/about" className = 'hover:underline'>About Us</Link>
                    </li>

                    <li>
                        <Link to = "/FAQ"className = 'hover:underline'>FAQ</Link>
                    </li>
                </ul>

                
            </div>
            <div >
                <h4 className ='text-lg font-semibold'>Follow us</h4>
                <div className ='flex space-x-4 mt-4'>
                    <a href = "" className="hover:text-gray-400"><FaLinkedin/></a>
                    <a href = "" className="hover:text-gray-400"><FaGithub/></a>
                    <a href = "" className="hover:text-gray-400"><FaFacebook/></a>
                </div>
                <form className ='flex items-center justify-center mt-8'>
                    <input type = "email" placeholder ='Enter Email' className ='w-full p-2 rounded-lg bg-gray-800 border-gray-600'/>
                    <button className ='bg-red-600 text-white px-4 py-2 rounded-r-lg'>Subscribe</button>
                </form>
            </div>
        </div>
        <div className ='mt-8 border-t border-gray-800 pt-4'>
            <div className = 'container mx-auto flex flex-col md:flex-row justify-between items-center'>
                <p>&copy; 2025 Urban Leaf All rights reserved. </p>
                <div className = 'flex space-x-4 mt-4 md:mt-0'>
                    <a href ="" className =  "hover:underline" >Privacy Policy</a>
                     <a href ="" className =  "hover:underline">Term & Condition</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer