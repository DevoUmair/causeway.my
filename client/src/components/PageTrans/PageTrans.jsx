import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useCausewayMyContext } from '../../context/CausewayMyContextProvider'
import { useParams } from 'react-router-dom'
import { Allblogs } from '../../../causewayDb'

function PageTrans() {
  const controls = useAnimation()
  const { setPageTrans, activePageTrans , movePage ,  setBlog , blog} = useCausewayMyContext()
  const {title} = useParams() 


  useEffect(() => {
    function sequence() {
      if(title){
        const getBlog = Allblogs?.filter((blog) => blog?.to === title)[0]
        console.log(getBlog);
        setBlog(getBlog)
      }
      controls.start({ y: 0, transition: { duration: 0.8, ease: 'easeInOut' } }).then(() => {
       
        setTimeout(() => {
          controls.start({ y: '-100%', transition: { duration: 0.8, ease: 'easeInOut' } }).then(() => {
            setPageTrans(false)
          })
        },500)
      })
      
    }

    if (activePageTrans) {
      controls.set({ y: '100%' })  // Reset position before starting
      sequence()
    }
  }, [controls, activePageTrans, setPageTrans])

  return (
    <motion.div
      className='fixed top-0 left-0 right-0 bottom-0 z-[9999] opacity-1 bg-primaryCM w-full h-full flex justify-center items-center flex-col'
      initial={false}  // Disable initial since we're controlling y explicitly
      animate={controls}
    >
      <h1 className='text-white font-cmSecondary font-bold italic text-[45px] xsm:text-[55px] sm:text-[65px] uppercase max-w-[95%] text-center'>{movePage}</h1>
    </motion.div>
  )
}

export default PageTrans
