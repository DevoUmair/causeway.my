import React from 'react'
import Nav from '../Home/Nav/Nav'
import SubBanner from '../../components/SubBanner/SubBanner'
import { pages } from '../../../causewayDb'
import {motion} from 'framer-motion'
import SideBar from '../Home/SideBar/SideBar'
import BlackBg from '../../components/BlackBg'
import Footer from '../Home/Footer/Footer'
import BottomBar from '../../components/BottomBar/BottomBar'
import AllServices from './AllServices/AllServices'
import PreLoader from '../../components/PreLoader/PreLoader'
import { useCausewayMyContext } from '../../context/CausewayMyContextProvider'

function index() {
  const {loaderActive } = useCausewayMyContext()

  return (
    <div className='relative'>
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
            <Nav page={pages?.services?.name} />
            <SubBanner data={pages?.services} isBig={false} />
            <SideBar page={pages?.services?.name} />
            <BottomBar page={pages?.services?.name} />
            <BlackBg />
            <AllServices />
            <Footer page={pages?.services?.name} />
        </motion.div>
    </div>
  )
}

export default index