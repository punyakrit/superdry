import React from 'react'
import { Button } from "@/components/ui/button"
import Appbar from '@/components/Appbar'
import HeaderHome from '@/components/HeaderHome'
import About from '@/components/About'

function Home() {
  return (
    <div className=''>
        <Appbar/>
        <HeaderHome/>
        <About/>
    </div>
  )
}

export default Home
