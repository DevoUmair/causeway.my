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
import AllPrivacyPolicy from './AllPrivacyPolicy/AllPrivacyPolicy'

function index() {
  const {loaderActive } = useCausewayMyContext()

  return (
    <motion.div className='relative'>
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
            <Nav page={pages?.PrivacyPolicy?.name} />
            <SubBanner data={pages?.PrivacyPolicy} isBig={true} />
            <SideBar page={pages?.PrivacyPolicy?.name} />
            <BottomBar page={pages?.PrivacyPolicy?.name} />
            <BlackBg />
            <AllPrivacyPolicy />
            <Footer page={pages?.PrivacyPolicy?.name} />
        </motion.div>
    </motion.div>
  )
}

export default index