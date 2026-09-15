import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../Context/AppContext'
import { motion } from 'framer-motion'

const BuyCedits = () => {

  const { user } = useContext(AppContext)

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='text-center pt-14 mb-10  min-h-[80vh]'>
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Pricing Plans</button>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-6 sm:mb-10 '>Choose the plan that fits your needs</h1>
      <div className='flex flex-wrap justify-center gap-6 text-left '>
        {plans.map((item, index) => (
          <div key={index} className='bg-white drop-shadow-md border rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-500'>
            <img src={assets.logo_icon} width={40} alt="logo" />
            <p className='mt-3 font-semibold '>{item.id}</p>
            <p className='text-sm '>{item.desc}</p>
            <p className='mt-6'>
              <span className='text-3xl font-medium '>${item.price}</span>/ {item.credits} credits
            </p>
            <button className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>{user ? 'Purchase' : 'Get Started'}</button>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default BuyCedits
