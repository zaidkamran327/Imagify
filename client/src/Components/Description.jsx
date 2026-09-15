import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex flex-col items-center justify-center my-24 p-6 md:px-28 '>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
            <p className='text-gray-500 mb-8'>Turn your Imagination into Visuals</p>


            <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center '>
                <img src={assets.sample_img_1} alt=" sample_img" className='w-4/5 xl:w-96 rounded-lg  ' />
                <div>
                    <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
                    <p className='text-gray-600 mb-4'>
                        Imagify leverages state-of-the-art AI technology to instantly transform your text descriptions into high-quality, unique images. Whether you're a designer, marketer, developer, or creative enthusiast — Imagify empowers you to produce professional visuals without any design skills.</p>
                    <p className='text-gray-600 mb-4'>
                        From product mockups and social media content to concept art and illustrations, Imagify handles it all. Just type your idea, and let our AI do the rest. Fast, intuitive, and endlessly creative.</p>
                </div>
            </div>
        </motion.div>


    )
}

export default Description
