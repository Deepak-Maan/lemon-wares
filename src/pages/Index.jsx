import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import WebHosting from '../components/WebHosting'
import GetInTouch from '../components/GetInTouch'
import Footer from '../components/Footer'
import RealStories from '../components/RealStories'
import Price from '../components/Price'

const Index = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <WebHosting />
      <Price />
      <RealStories />
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default Index
