import React from 'react'
import {motion} from 'framer-motion'
import BlackBg from '../../components/BlackBg'
import PreLoader from '../../components/PreLoader/PreLoader'
import SearchLoader from '../../components/SearchLoader/SearchLoader'
import Conform from './Conform/Conform'

function index() {

  return (
    <motion.div className='relative'>
        <motion.div
          initial={{  opacity : 0 }} // Starts at 0
          animate={{ opacity:1 }} // Moves to -100%
          transition={{
            duration: 0.5, // Duration for the slide
            // delay:  loaderActive ?  ( window.innerWidth < 1024 ?  5 : 7) : 0, 
            ease: "easeInOut", // Smooth easing for the transition
          }}
        >
            <Conform />   
            <BlackBg />
            <SearchLoader />
        </motion.div>
    </motion.div>
  )
}

export default index