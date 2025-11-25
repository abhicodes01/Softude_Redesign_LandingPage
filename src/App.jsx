import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Expertise from './components/Expertise'
import Work from './components/Work'
import Industries from './components/Industries'
import Partnership from './components/Partnership'
import Blogs from './components/Blogs'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='h-[1000px]'>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Expertise/>
      <Work/>
      <Industries/>
      <Partnership/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default App