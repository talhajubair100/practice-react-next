import ArticaleCard from '@/components/Frontend/Home/ArticaleCard'
import Header from '@/components/Frontend/Home/Header'
import Hero from '@/components/Frontend/Home/Hero'
import HomeLayout from '@/layouts/Home'
import React from 'react'

const Frontend = () => {
  return (
    <div className='dark:bg-gray-700'>
      <Hero></Hero>
      <ArticaleCard></ArticaleCard>
    </div>
  )
}

Frontend.layout = HomeLayout
export default Frontend