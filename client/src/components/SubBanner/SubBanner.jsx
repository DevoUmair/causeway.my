import React, { useEffect, useState } from 'react'
import './SubBanner.css'
import { FaChevronRight } from 'react-icons/fa'
import { useNavigate} from 'react-router-dom'
import { useCausewayMyContext } from '../../context/CausewayMyContextProvider'
import { IoPersonOutline, IoTimeOutline } from 'react-icons/io5'

function SubBanner({data , isBig }) {
  const navigate = useNavigate()
  const {setPageTrans , setMovePage , blog} = useCausewayMyContext()

  useEffect(() => {
   
  },[blog])

  const handleNavigation = () => {
    const path = '../'

    setPageTrans(true)
    setMovePage('Home')
    setTimeout(() => {
      navigate(path)
    }, 1000)
  }


  if(data?.name === 'blog'){
    return(
      <div className='custom-container mt-[100px] sm:mt-[110px] lg:mt-[130px] overflow-visible h-[60vh] relative' >
          <div className='subBannerImageLinear' ></div>
          <div className='subbannerImage'  style={{ backgroundImage:`url(${blog?.blogBanner})` }}> </div>
          <div className='absolute top-1/2 translate-y-[-50%] w-full z-20 ' >
              <div className='max-w-[1250px] w-[90%] text-white mx-auto' >
                <h1 className='font-bold text-[25px]  md:text-[35px] leading-[32px] md:leading-[40px]' >{blog?.title}</h1>
                <div className='flex justify-start mt-[20px] gap-3 items-center' >
                  <p className='flex justify-start items-center font-semibold text-[23px] text-secondaryCM gap-2' ><IoPersonOutline /><span className='text-white font-medium text-[17px]' >{blog?.author}</span></p>
                  <p className='font-semibold text-white text-[18px]' > / </p>
                  <p className='flex justify-start items-center font-semibold text-[23px] text-secondaryCM gap-2' ><IoTimeOutline /><span className='text-white font-medium text-[17px]' >{blog?.date}</span></p>
                </div>
              </div>
          </div>
          <div className={`bg-white rounded-xl  custom-border py-[10px] px-[13px] absolute left-1/2 translate-x-[-50%] top-[100%] translate-y-[-50%] z-20 flex justify-center items-center gap-2`} >
              <p onClick={handleNavigation} className='text-ptextCM cursor-pointer underline font-medium custom-trans hover:text-primaryCM ' >Home</p>
              <FaChevronRight size={17} color='#811311' />
              <span className='font-semibold' >{data?.page}</span>
          </div>
      </div>
    )
  }

  return (
    <div className='custom-container mt-[100px] sm:mt-[110px] lg:mt-[130px] overflow-visible h-[50vh] relative' >
        <div className='subBannerImageLinear' ></div>
        <div className='subbannerImage'  style={{ backgroundImage:`url(${data?.img})` }}> </div>
        <div className='absolute top-1/2 translate-y-[-50%] w-full z-20 ' >
            <div className='max-w-[1250px] w-[95%] text-white mx-auto' >
               <h1 className='font-bold text-[35px]' >{data?.page}</h1>
               <p className='text-[16px] font-semibold' >{data?.description}</p>
            </div>
        </div>
        <div className={`bg-white rounded-xl  custom-border py-[10px]  ${isBig ? 'max-w-[280px] w-full' : 'px-[13px]'} absolute left-1/2 translate-x-[-50%] top-[100%] translate-y-[-50%] z-20 flex justify-center items-center gap-2`} >
            <p onClick={handleNavigation} className='text-ptextCM cursor-pointer underline font-medium custom-trans hover:text-primaryCM ' >Home</p>
            <FaChevronRight size={17} color='#811311' />
            <span className='font-semibold' >{data?.page}</span>
        </div>
    </div>
  )
}

export default SubBanner