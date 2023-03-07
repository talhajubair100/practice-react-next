import HomeLayout from '@/layouts/Home'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "framer-motion"


const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='dark:bg-gray-700'>

      <div className="container mx-auto my-48">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
          className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
        >



          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.9,
              delay: 0.1,
            }}
            className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsa ducimus similique, quod velit minus repellat, quas voluptas accusamus et ex veritatis labore voluptatibus itaque neque mollitia. Iusto, perspiciatis iste?
          </motion.h1>




        </motion.section>


        <motion.div
          layout
          data-isOpen={isOpen}
          initial={{ borderRadius: 50 }}
          className="parent"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div layout className="child" />

        </motion.div>


      </div>

    </div>
  )
}
About.layout = HomeLayout
export default About
