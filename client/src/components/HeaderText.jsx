import React , {useEffect, useRef} from 'react'
import { useCausewayMyContext } from '../context/CausewayMyContextProvider'
import logoC from '../assets/logo/logoC.png'
import {easeIn, motion, useAnimation, useInView} from 'framer-motion'

function HeaderText({text , smallText , isCenter , issmallNeed=true}) {
  const {setCursorVariant} = useCausewayMyContext()

  const textEnter = () => {
    setCursorVariant("text")
  }  
  const textLeave = () => {
    setCursorVariant("default")
  } 

  const ref = useRef(null)
  const isInView = useInView(ref , {once : true})
  const mainControls = useAnimation()
  const slideControls = useAnimation()

  const refCenter = useRef(null)
  const isInViewCeneter = useInView(refCenter , {once : true})
  const mainControlsCenter = useAnimation()
  const slideControlsCenter = useAnimation()

  useEffect(() => {
    if(isInView){
      mainControls.start("visible")
      slideControls.start("visible")
    }
  },[isInView])

  useEffect(() => {
    if(isInViewCeneter){
      mainControlsCenter.start("visible")
      slideControlsCenter.start("visible")
    }
  },[isInViewCeneter])

  // console.log();
  
  if(isCenter){
    return(
      <div ref={refCenter} className='custom-container w-full text-center flex justify-center items-center flex-col' >
        <div className='w-fit  overflow-hidden relative' >
          {
            issmallNeed &&
            (
              <motion.p 
                variants={{
                  hidden: {opacity : 0 , y:75},
                  visible: {opacity : 1 , y:0}
                }}
                initial="hidden"
                animate={mainControlsCenter}
                transition={{
                  duration:0.5,
                  delay:0.25
                }}
                className='text-primaryCM text-center w-fit font-bold text-[16px] custom-flex justify-center items-center gap-2' >
                <img className='w-[22px] object-contain' src={logoC} alt='logoc' />
                <span>{smallText}</span>
              </motion.p>
            )
          }
          <motion.div
            variants={{
              hidden:{left : 0},
              visible:{left : '100%'} 
            }}
            initial="hidden"
            animate={slideControlsCenter}
            transition={{
              duration:0.5,
              ease : "easeIn"
            }}
            style={{
              position:'absolute',
              top:4,
              bottom:4,
              left:0,
              right:0,
              background:'#811311',
              zIndex:20
            }}
          >
          </motion.div>
        </div>
        <div className='w-fit  overflow-hidden relative' >
          <motion.h1  
            variants={{
              hidden: {opacity : 0 , y:75},
              visible: {opacity : 1 , y:0}
            }}
            initial="hidden"
            animate={mainControlsCenter}
            transition={{
              duration:0.5,
              delay:0.25
            }}
            onMouseEnter={textEnter} onMouseLeave={textLeave} className='  w-fit text-center mt-1  md:mt-3 text-[23px] sm:text-[25px] md:text-[30px] lg:text-[38px] text-[#230908] font-bold leading-[35px] md:!leading-[50px]' >
            {text}
          </motion.h1>
          <motion.div
            variants={{
              hidden:{left : 0},
              visible:{left : '100%'} 
            }}
            initial="hidden"
            animate={slideControlsCenter}
            transition={{
              duration:0.5,
              ease : "easeIn"
            }}
            style={{
              position:'absolute',
              top:4,
              bottom:4,
              left:0,
              right:0,
              background:'#811311',
              zIndex:20
            }}
          >
          </motion.div>
        </div>
      </div>
    )
  }
  
  return (
    <div ref={ref} className='w-fit  overflow-hidden relative'  >
      <div className='w-fit  overflow-hidden relative'  >
        {
          issmallNeed &&
          (
            <motion.p 
              variants={{
                hidden: {opacity : 0 , y:75},
                visible: {opacity : 1 , y:0}
              }}
              initial="hidden"
              animate={mainControls}
              transition={{
                duration:0.5,
                delay:0.25
              }}
              className='text-primaryCM font-bold text-[16px] custom-flex justify-start gap-2' >
              <img className='w-[22px] object-contain' src={logoC} alt='logoc' />
              <span>{smallText}</span>
            </motion.p>
          )
        }
        <motion.div
            variants={{
              hidden:{left : 0},
              visible:{left : '100%'} 
            }}
            initial="hidden"
            animate={slideControls}
            transition={{
              duration:0.5,
              ease : "easeIn"
            }}
            style={{
              position:'absolute',
              top:4,
              bottom:4,
              left:0,
              right:0,
              background:'#811311',
              zIndex:20
            }}
          >
          </motion.div>
      </div>
      <div className='w-fit  overflow-hidden relative'  >
         <motion.h1  
            variants={{
              hidden: {opacity : 0 , y:75},
              visible: {opacity : 1 , y:0}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration:0.5,
              delay:0.25
            }}
            onMouseEnter={textEnter} onMouseLeave={textLeave} 
            className='text-[23px] mt-1 md:mt-3 sm:text-[25px] md:text-[30px] lg:text-[38px] text-[#230908]  font-bold leading-[35px] md:!leading-[50px]' >
            {text}
          </motion.h1>

          <motion.div
            variants={{
              hidden:{left : 0},
              visible:{left : '100%'} 
            }}
            initial="hidden"
            animate={slideControls}
            transition={{
              duration:0.5,
              ease : "easeIn"
            }}
            style={{
              position:'absolute',
              top:4,
              bottom:4,
              left:0,
              right:0,
              background:'#811311',
              zIndex:20
            }}
          >
          </motion.div>
      </div>
        
    </div>
  )
}

export default HeaderText