import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "../src/components/Home.css"
import AOS from "aos";
import "aos/dist/aos.css";
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import { HashRouter } from "react-router-dom";

import About from "./components/About"
import Contact from './components/Contact'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Flowering from './components/Flowering'
import Succulent from './components/Succulent'
import Indoor from './components/Indoor'
import ReadMore from './components/ReadMore'
import RecentPost from './components/RecentPost'
import FeedBack from './components/FeedBack'
import SiteMap from './components/SiteMap'
function App() {
  useEffect(() => {

    AOS.init();
    AOS.refresh();

  }, [])
  useEffect(() => {
    let data = localStorage.getItem("cartItems")
    if (data == null) localStorage.setItem("cartItems", "[]")
  }, [])
  return (
    <>
      <HashRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/flower" element={<Flowering />} />
          <Route path="/suclent" element={<Succulent />} />
          <Route path="/indoor" element={<Indoor />} />
          <Route path="/readMore" element={<ReadMore />} />
          <Route path="/recentPost" element={<RecentPost />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/sitemap" element={<SiteMap />} />

        </Routes>
      </HashRouter>
     
    </>
  )
}

export default App
