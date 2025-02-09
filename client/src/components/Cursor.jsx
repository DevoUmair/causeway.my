import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { useCausewayMyContext } from '../context/CausewayMyContextProvider';

function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  const {cursorVariant , textCursor} = useCausewayMyContext()

  useEffect(() => {
    const mouseMove = (e) => {
        setMousePosition({
            x : e.clientX,
            y : e.clientY
        })
    }

    window.addEventListener("mousemove" , mouseMove)
    
    return () => {
        window.removeEventListener("mousemove" , mouseMove)
    }
},[])

const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      transition: {
        type: "tween",
        ease:'backOut'
      }
    },
    text: {
      height: 60,
      width: 60,
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
      transition: {
        type: "tween",
        ease:'backOut'
      }
    },
    text2: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
      transition: {
        type: "tween",
        ease:'backOut'
      }
    },
    Drag: {
        height: 80,
        width: 80,
        x:  mousePosition.x - 30,
        y: mousePosition.y - 30,
        backgroundColor: '#811311ac',
        transition: {
          type: "tween",
          ease:'backOut'
        }
    },
    vehiImg: {
      height: 200,
      width: 350,
      x: textCursor?.index === 0 ? mousePosition.x + 13 : mousePosition.x - 350,
      y: textCursor?.index === 0 ? mousePosition.y + 13 : mousePosition.y - 200,
      backgroundColor: '#fff',
      transition: {
        type: "tween",
        ease:'backOut'
      }
  },
      
  };


  return ( 
    <motion.div variants={variants} animate={cursorVariant} className={`hidden lg:flex cursor ${cursorVariant === 'vehiImg' && '!rounded-xl overflow-hidden custom-box-shadow'} justify-center text-white font-semibold items-center`} >
        {
           cursorVariant === 'Drag' && (<span>{textCursor}</span>)
        }
        {
          cursorVariant === 'vehiImg' && (
            <div className='w-full h-full relative' >
              <div className='cursorLinear' ></div>
              <div className='absolute bottom-0 left-0 right-0 p-3 z-20' >
                  <h3 className='text-white font-semibold text-[19px]' >{textCursor?.label}</h3>
                  {/* <p className='text-white font-normal text-[14px] mt-0' >{textCursor?.para}</p> */}
              </div>
              <img className='w-full h-full object-cover' src={textCursor?.images[0].public_link} />
            </div>
          )
        }
    </motion.div>
  )
}

export default Cursor