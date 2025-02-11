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
import VehicleFleet from './VehicleFleet/VehicleFleet'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import SearchLoader from '../../components/SearchLoader/SearchLoader'

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
            delay:  loaderActive ?  ( window.innerWidth < 1024 ?  5 : 7) : 0,
            ease: "easeInOut", // Smooth easing for the transition
          }}
        >
            <Nav page={pages?.Vehicle?.name} />
            <SubBanner data={pages?.Vehicle} isBig={true} />
            <SideBar page={pages?.Vehicle?.name} />
            <BottomBar page={pages?.Vehicle?.name} />
            <BlackBg />
            <VehicleFleet />
            <Footer page={pages?.Vehicle?.name} />
            <ImageSlider />
            <SearchLoader />
        </motion.div>
    </motion.div>
  )
}

export default index