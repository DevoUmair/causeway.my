import React from 'react'
import Nav from '../Home/Nav/Nav'
import SubBanner from '../../components/SubBanner/SubBanner'
import { pages } from '../../../causewayDb'
import {motion} from 'framer-motion'
import SideBar from '../Home/SideBar/SideBar'
import BlackBg from '../../components/BlackBg'
import Footer from '../Home/Footer/Footer'
import Aboutus from '../Home/AboutUs/Aboutus'
import BottomBar from '../../components/BottomBar/BottomBar'
import Reviews from '../Home/Reviews/Reviews'
import Trust from '../Home/Trust/Trust'
import FreqQuestion from '../Home/FreqQuestion/FreqQuestion'
import FreqAllQuestion from '../Home/FreqAllQuestion/FreqAllQuestion'
import AboutCauseway from './AboutCauseway/AboutCauseway'
import MostWanted from '../Home/MostWanted/MostWanted'
import PreLoader from '../../components/PreLoader/PreLoader'
import { useCausewayMyContext } from '../../context/CausewayMyContextProvider'
import BlogSlider from '../../components/BlogSlider/BlogSlider'

function index() {
  const {loaderActive } = useCausewayMyContext()

  return (
    <div className='relative overflow-x-hidden-custom' >
      <PreLoader />
      <motion.div
        initial={{  opacity : 0 }} // Starts at 0
        animate={{ opacity:1 }} // Moves to -100%
        transition={{
          duration: 0.5, // Duration for the slide
          // delay:  loaderActive ?  ( window.innerWidth < 1024 ?  5 : 7) : 0, 
          ease: "easeInOut", // Smooth easing for the transition
        }}
      >
          <Nav page={pages?.about.name} />
          <SubBanner data={pages?.about} isBig={false} />
          <SideBar page={pages?.about?.name} />
          <BottomBar page={pages?.about?.name} />
          <BlackBg />
          <AboutCauseway />
          <MostWanted page={pages?.about.name} />
          <Aboutus />
          <FreqQuestion />
          <Reviews />
          <Trust />
          <FreqAllQuestion />
          <BlogSlider />
          <Footer page={pages?.about.name} />
      </motion.div>
    </div>
  )
}

export default index