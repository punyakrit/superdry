import React from 'react'
import { Button } from "@/components/ui/button"
import Appbar from '@/components/Appbar'
import HeaderHome from '@/components/HeaderHome'
import About from '@/components/About'
import Services from '@/components/Services'

function Home() {
  return (
    <div className=''>
        <Appbar/>
        <HeaderHome/>
        <About/>
        <Services/>
    </div>
  )
}

export default Home
