import React, { useState } from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import {
   homeObject,
   homeObjThree,
   homeObjTwo,
} from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Sidebar from '../components/Sidbar'

const Home = () => {
   const [isOpen, setIsOpen] = useState(false)
   const toggle = () => {
      setIsOpen(!isOpen)
   }
   return (
      <div>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle} />
         <HeroSection />
         <InfoSection {...homeObject} />
         <InfoSection {...homeObjTwo} />
         <Services />
         <InfoSection {...homeObjThree} />
         <Footer />
      </div>
   )
}

export default Home
