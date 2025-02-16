import React, { useEffect, useRef, useState } from 'react'
import './Nav.css'
import logo from '../../../assets/logo/logo.png'
import { FaRegCalendarCheck} from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import {motion} from 'framer-motion'

import { useCausewayMyContext } from '../../../context/CausewayMyContextProvider'
import { Link, useNavigate } from 'react-router-dom'
import { allPages } from '../../../../causewayDb'

function Nav({page}) {
    const {setSideBarActive , setOpenBg , setPageTrans , setMovePage} = useCausewayMyContext()
    const navigate = useNavigate()
    const [postition  , setPosition] = useState({
      left:0,
      width :0,
      opacity : 0
    })
    

    useEffect(() => {
      if(page === 'home'){
        setPosition({
          width  : 105.85,
          opacity : 1,
          left:0
        })
      }else if(page === 'about'){
        setPosition({
          width  : 131.567,
          opacity : 1,
          left:114
        })
      }else if(page === 'contact'){
        setPosition({
          width  : 124.183,
          opacity : 1,
          left:253
        })
      }else if(page === 'services'){
        setPosition({
          width  : 127.017,
          opacity : 1,
          left:386
        })
      }else if(page === 'how-it-works'){
        setPosition({
          width  : 161.833,
          opacity : 1,
          left:521
        })
      }
    }, [page])

    const navLeaveMouse = () => {
      if(page === 'home'){
        setPosition({
          width  : 105.85,
          opacity : 1,
          left:0
        })
      }else if(page === 'about'){
        setPosition({
          width  : 131.567,
          opacity : 1,
          left:114
        })
      }else if(page === 'contact'){
        setPosition({
          width  : 124.183,
          opacity : 1,
          left:253
        })
      }else if(page === 'services'){
        setPosition({
          width  : 127.017,
          opacity : 1,
          left:386
        })
      }else if(page === 'how-it-works'){
        setPosition({
          width  : 161.833,
          opacity : 1,
          left:521
        })
      }else if(page === 'terms-and-condition'){
        setPosition({
          width  : 0,
          opacity : 0,
          left:0
        })
      }else if(page === 'privacy-policy'){
        setPosition({
          width  : 0,
          opacity : 0,
          left:0
        })
      }
    }

    const handleSideBar = () => {
      setSideBarActive(true)
      setOpenBg(true)
    }

    const handleBookNow = () => {
      setPageTrans(true)
      setMovePage('Book Now')
      setTimeout(() => {
        navigate('causeway-booking')
      }, 1000)
    }

  return (
   <div className='w-full fixed top-0 left-0 right-0 z-[500] ' >
        <div className={`custom-flex shadow-lg gap-2 !justify-between custom-container  glass-bg-active p-[20px] mt-3 rounded-md`} >
            <img src={`${logo}`} className='object-contain w-[180px] md:w-[200px]' />
            <div onMouseLeave={navLeaveMouse} className='custom-flex !justify-end gap-4' >
                <div className='custom-flex relative  hidden xxl:flex gap-10 !justify-end  py-3 px-4' >
                    {
                      allPages?.map((item , index) => (
                          <Tab key={index} page={page} name={item?.page} to={item?.name} icon={item?.navIcon}  setPostion={setPosition}  />
                      ))
                    }
                    <TabCurosr postion={postition} setPostion={setPosition} />
                </div>
                <Link 
                    to={`${page === 'home' ? 'causeway-booking' : '../causeway-booking'}`}
                    // onClick={handleBookNow} 
                    className='borderBtn hidden sm:flex  custom-flex justify-center gap-2' >
                      <FaRegCalendarCheck />
                      <span>Book Now</span>
                </Link>
                <RxHamburgerMenu onClick={handleSideBar} className='block xxl:hidden cursor-pointer' size={34} color='#fff' />
            </div>
            
        </div>
   </div>
  )
}

const TabCurosr = ({postion}) => (
  <motion.p animate={postion} className='absolute left-[9px] mix-blend-exclusion z-0 h-11 bg-secondaryCM rounded-full pointer-events-none w-[83.85px]' > </motion.p>
)

const Tab = ({page , name , to , icon , setPostion}) => {
  const navigate = useNavigate()
  const {setPageTrans , setMovePage} = useCausewayMyContext()
  const ref = useRef() 

  const handleNavigation = () => {
    const path = page !== 'home'
      ? to === 'home' ? '../' : `../${to}`
      : `./${to === 'home' ? './' : to }`

    setPageTrans(true)
    setMovePage(to)
    setTimeout(() => {
      navigate(path)
    }, 1000)
  }

  return(
    <div style={{ isolation: 'isolate' }}>
      <Link
        // onClick={() => handleNavigation()}
        to={`${page !== 'home' ?  `${to === 'home' ? `../` : `../${to}`}` : `./${to === 'home' ? `./` : to }`}`} 
        ref={ref}
        onMouseEnter={() => {
          if(!ref.current) return
          const { width} = ref.current.getBoundingClientRect()

          setPostion({
            width  : width + 32,
            opacity : 1,
            left:ref.current.offsetLeft - 16
          })
        }}
        className='custom-flex navIcon justify-center gap-2 cursor-pointer z-20 text-white  font-bold text-[16px] py-1'   style={{ isolation: 'isolate' }} >
          <img src={icon} alt={icon} className='w-[20px] h-[20px]'/>
          <span>{name}</span>
        </Link>
    </div>
  
  )
}

export default Nav