import React from 'react'
import { FaLock, FaMoneyBillWave, FaShippingFast, FaTag } from 'react-icons/fa'

import {RiPlantLine} from "react-icons/ri"


const InfoSection = () => {
    const infoItems = [
        {
        icon: <FaShippingFast className = "text-3xl text-green-900" />,
        title:'Free Shipping',
        description: 'Get your orders delivered with no extra cost',
        },

         {
        icon: <RiPlantLine className = "text-3xl text-green-900"/>,
        title:'Support 24/7',
        description: 'We are here to assist you anytime',
        },

         {
        icon: <FaMoneyBillWave className = "text-3xl text-green-900"/>,
        title:'100% Money Back',
        description: 'Full Refund if you are not satisfied',
        },

         {
        icon: <FaLock className = "text-3xl text-green-900"/>,
        title:'Secure Payment',
        description: 'Keep You Payment information secure',
        },
         {
        icon: <FaTag className = "text-3xl text-green-900"/>,
        title:'Discount',
        description: 'Enjoy the best prices on our products',
        },
    ]

  return (
    <div className = 'bg-white pb-8 pt-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
            {infoItems.map((item, index) =>(
                <div key = {index} className ='flex flex-col items-center text-center p-4 border rounded-3xl shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer bg-amber-100'>
                    {item.icon}
                    <h3 className = 'mt-4 text-xl font-semibold'>{item.title}</h3>
                    <p className ='mt-2 text-gray-600' >{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default InfoSection