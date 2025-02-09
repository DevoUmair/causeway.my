import React from 'react'
import Nav from '../Home/Nav/Nav'
import SubBanner from '../../components/SubBanner/SubBanner'
import { pages } from '../../../causewayDb'
import {motion} from 'framer-motion'
import SideBar from '../Home/SideBar/SideBar'
import BlackBg from '../../components/BlackBg'
import Footer from '../Home/Footer/Footer'
import BottomBar from '../../components/BottomBar/BottomBar'
import PreLoader from '../../components/PreLoader/PreLoader'
import { useCausewayMyContext } from '../../context/CausewayMyContextProvider'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import SearchLoader from '../../components/SearchLoader/SearchLoader'
import Booking from './Booking/Booking'
import { Toaster } from 'sonner'
import PayNow from './Booking/Steps/PayNow'

function index() {
  const {loaderActive } = useCausewayMyContext()

  return (
    <motion.div className='relative'>
        <PreLoader />
        <motion.div
          initial={{  opacity : 0 }} // Starts at 0
          animate={{ opacity:1 }} // Moves to -100%
          transition={{
            duration: 1, // Duration for the slide
            delay:  loaderActive ?  ( window.innerWidth < 1024 ?  5 : 7) : 0.5,
            ease: "easeInOut", // Smooth easing for the transition
          }}
        >
            <Nav page={pages?.BookNow?.name} />
            <SubBanner data={pages?.BookNow} isBig={true} />
            <SideBar page={pages?.BookNow?.name} />
            <BottomBar page={pages?.BookNow?.name} />
            <BlackBg />
            <Booking />
            <Footer page={pages?.BookNow?.name} />
            <Toaster />
            <ImageSlider />
            <SearchLoader />
            <PayNow />
        </motion.div>
    </motion.div>
  )
}

export default index