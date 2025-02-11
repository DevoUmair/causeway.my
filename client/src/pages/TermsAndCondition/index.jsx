import React from 'react'
import Nav from '../Home/Nav/Nav'
import SubBanner from '../../components/SubBanner/SubBanner'
import { pages } from '../../../causewayDb'
import {motion} from 'framer-motion'
import SideBar from '../Home/SideBar/SideBar'
import BlackBg from '../../components/BlackBg'
import Footer from '../Home/Footer/Footer'
import BottomBar from '../../components/BottomBar/BottomBar'
import AllTermsAndCondition from './AllTermsAndCondition/AllTermsAndCondition'
import PreLoader from '../../components/PreLoader/PreLoader'
import { useCausewayMyContext } from '../../context/CausewayMyContextProvider'

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
            <Nav page={pages?.TermsAndCondtion?.name} />
            <SubBanner data={pages?.TermsAndCondtion} isBig={true} />
            <SideBar page={pages?.TermsAndCondtion?.name} />
            <BottomBar page={pages?.TermsAndCondtion?.name} />
            <BlackBg />
            <AllTermsAndCondition />
            <Footer page={pages?.TermsAndCondtion?.name} />
        </motion.div>
    </motion.div>
  )
}

export default index