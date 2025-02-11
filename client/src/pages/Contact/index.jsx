import React from 'react'
import Nav from '../Home/Nav/Nav'
import SubBanner from '../../components/SubBanner/SubBanner'
import { pages } from '../../../causewayDb'
import {motion} from 'framer-motion'
import SideBar from '../Home/SideBar/SideBar'
import BlackBg from '../../components/BlackBg'
import Footer from '../Home/Footer/Footer'
import BottomBar from '../../components/BottomBar/BottomBar'
import Contact from '../Home/Contact/Contact'
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
            duration: 1, // Duration for the slide
            delay:  loaderActive ?  ( window.innerWidth < 1024 ?  5 : 7) : 0,
            ease: "easeInOut", // Smooth easing for the transition
          }}
        >
          <Nav page={pages?.contact.name}  />
          <SubBanner data={pages?.contact} isBig={false} />
          <SideBar page={pages?.contact?.name} />
          <BottomBar page={pages?.contact?.name}/>
          <BlackBg />
          <Contact />
          <Footer page={pages?.contact.name} />
        </motion.div>
    </div>
  )
}

export default index