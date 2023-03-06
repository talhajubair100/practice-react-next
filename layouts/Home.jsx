import Header from '@/components/Frontend/Home/Header'
import Footer from '@/components/Frontend/Home/footer'
import React from 'react'

const HomeLayout = ({children}) => {
  return (
    <div className='dark:bg-gray-700'>
        <Header></Header>
        {children}
        <Footer></Footer>
    </div>  
  )
}

export default HomeLayout