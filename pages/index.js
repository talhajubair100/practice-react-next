import Head from 'next/head'
import { Inter } from 'next/font/google'
import Frontend from './Home/Home'
import HomeLayout from '../layouts/Home'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
      <Frontend></Frontend>
    </>
  )
}

Home.layout = HomeLayout
export default Home
