import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TicketCounter from './components/TicketCounter'

const page = () => {
  return (
   <>
    <Navbar />
    <Hero />
    <TicketCounter />
   </>
  )
}

export default page