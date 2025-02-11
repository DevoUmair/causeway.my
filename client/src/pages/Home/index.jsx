import React from 'react'
import Banner from './Banner/Banner'
import Nav from './Nav/Nav'
import MostWanted from './MostWanted/MostWanted'
import AllVehicales from './AllVehicales/AllVehicales'
import Cursor from '../../components/Cursor'
import FreqQuestion from './FreqQuestion/FreqQuestion'
import BottomBar from '../../components/BottomBar/BottomBar'
import WhyChoose from './WhyChoose/WhyChoose'
import CarType from './CarType/CarType'
import Looking from './Looking/Looking'
import CMGallery from './CMGallery/CMGallery'
import HowIt from './HowIt/HowIt'
import Aboutus from './AboutUs/Aboutus'
import PopularVehi from './PopularVehi/PopularVehi'
import Reviews from './Reviews/Reviews'
import Trust from './Trust/Trust'
import FreqAllQuestion from './FreqAllQuestion/FreqAllQuestion'
import Blogs from './Blogs/Blogs'
import Calculator from './Calculator/Calculator'
import Contact from './Contact/Contact'
import PreLoader from '../../components/PreLoader/PreLoader'
import Footer from './Footer/Footer'
import SideBar from './SideBar/SideBar'
import BlackBg from '../../components/BlackBg'

import {motion} from 'framer-motion'
import { pages } from '../../../causewayDb'
import { useCausewayMyContext } from '../../context/CausewayMyContextProvider'
import Services from './Services/Services'
import PageTrans from '../../components/PageTrans/PageTrans'
import { Toaster } from 'sonner'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import SearchLoader from '../../components/SearchLoader/SearchLoader'


function App() {
  const {loaderActive} = useCausewayMyContext()

  return (
    <div className='relative overflow-x-hidden-custom' >
      <PreLoader />
      <motion.div
        initial={{  opacity : 0 }} // Starts at 0
        animate={{ opacity:1 }} // Moves to -100%
        transition={{
          duration: 1, // Duration for the slide
          delay:  loaderActive ?  ( window.innerWidth < 1024 ?  5 : 7) : 0, 
          ease: "easeInOut", // Smooth easing for the transition
        }}
      >
          <Nav page={pages?.home?.name} />
          <Banner />
          <MostWanted />
          <AllVehicales />
          {/* <PopularVehi /> */}
          <Aboutus />
          <WhyChoose />
          <HowIt />
          <Looking />
          <CMGallery />
          <CarType />
          <FreqQuestion />
          <Services />
          <Reviews />
          <Trust />
          <FreqAllQuestion />
          <Calculator />
          <Contact /> 
          <Blogs />
          <Cursor />
          <BottomBar page={pages?.home?.name} />
          <Footer page={pages?.home?.name} />
          <SideBar page={pages?.home?.name} />
          <BlackBg />
          <Toaster />
          <ImageSlider />
          <SearchLoader />
      </motion.div>
    </div>
    
  )
}

export default App
