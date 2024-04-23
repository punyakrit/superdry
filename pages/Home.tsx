import React from 'react'
import Appbar from '@/components/Appbar'
import HeaderHome from '@/components/HeaderHome'
import About from '@/components/About'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Accordian from '@/components/Accordian'
import Book from '@/components/Book'
import Footer from '@/components/Footer'

function Home() {
  return (
    <div className=''>
        <Appbar/>
        <HeaderHome/>
        <About/>
        <Services/>
        <Gallery/>
        <Accordian/>
        <Book/>
        <Footer/>
    </div>
  )
}

export default Home
