import React from 'react'
import Nav from '../Home/Nav/Nav'
import SubBanner from '../../components/SubBanner/SubBanner'
import { pages } from '../../../causewayDb'
import {motion} from 'framer-motion'
import SideBar from '../Home/SideBar/SideBar'
import BlackBg from '../../components/BlackBg'
import Footer from '../Home/Footer/Footer'
import BottomBar from '../../components/BottomBar/BottomBar'
import HosItWorkDetail from './HosItWorkDetail/HosItWorkDetail'
import PreLoader from '../../components/PreLoader/PreLoader'
import { useCausewayMyContext } from '../../context/CausewayMyContextProvider'

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
          <Nav page={pages?.HowItWorks.name} />
          <SubBanner data={pages?.HowItWorks} isBig={false} />
          <SideBar page={pages?.HowItWorks?.name} />
          <BottomBar page={pages?.HowItWorks?.name} />
          <BlackBg />
          <HosItWorkDetail />
          <Footer page={pages?.HowItWorks.name} />
        </motion.div>
    </div>
  )
}

export default index