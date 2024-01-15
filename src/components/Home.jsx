import React from 'react'
import Navbar from './Navbar'
import "./Home.css"
import Slider from './Slider'
import Content from './Content'
import ImgContent from './ImgContent'
import Testimonials from './Testimonials'
import LatestPost from './LatestPost'
import Offer from './Offer'
import Footer from './Footer'


const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Slider />
      <Content />
      <ImgContent />
      <Testimonials />
      <LatestPost />
      <Offer />
      <Footer />

    </>

  )
}

export default Home