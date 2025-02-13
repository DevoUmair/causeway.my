import HeaderText from '../../../components/HeaderText'
import React from 'react'

import { FaRegCalendarAlt } from 'react-icons/fa'
import { IoArrowForwardSharp } from 'react-icons/io5'
import { Allblogs, allPages } from '../../../../causewayDb'
import { Link, useNavigate } from 'react-router-dom'
import { useCausewayMyContext } from '../../../context/CausewayMyContextProvider'

function Blogs() {
  const navigate = useNavigate()
  const {setPageTrans , setMovePage} = useCausewayMyContext()

  const handleNavigation = (blog) => {
    setTimeout(() => {
      setBlog(blog)
    },500)
    const path = `blog/${blog?.to}`
    setPageTrans(true)
    setMovePage('Blog')
    setTimeout(() => {
      navigate(path)
    }, 1000)
  }

  return (
    <div className='bg-[#F8F8F8] w-full' >
      <div className='max-w-[1200px]  mx-auto w-[95%] mt-[80px]' >
          <div>
              <HeaderText text={'Stay Inofrmed And Inspired For Your Next Journey'} smallText={'Latest Blogs'} isCenter={true} />
          </div>
          <div className='mt-[40px] h-fit custom-flex justify-between items-start gap-[25px] md:gap-[20px] flex-col md:flex-row' >
              
              <div className='basis-[100%] md:basis-[50%] w-full bg-red-600  relative rounded-3xl overflow-hidden' >
                <div className='absolute bottom-0 p-[20px] md:p-[30px] z-50' >
                    <p className='flex justify-start items-center gap-2 text-white' >
                      <FaRegCalendarAlt />
                      <span className='font-semibold' >{Allblogs[0].date}</span>
                    </p>
                    <h3 className='text-[21px] lg:text-[23px] text-white font-bold leading-[28px] my-3 max-w-[500px]' >{Allblogs[0].title}</h3>
                    <Link Link to={`blog/${Allblogs[0]?.to}`}  className='outer-btn cursor-pointer' >
                      <IoArrowForwardSharp />
                    </Link>
                </div>
                <div className='bannerImageLinear' ></div>
                <img src={Allblogs[0].blogBanner} className='w-full  object-cover h-[350px] md:h-[420px] lg:h-[490px]' />
              </div>

              <div className='basis-[100%] md:basis-[50%] w-full' >
                {
                  Allblogs?.slice(0,3).map((item, index) => (
                    <EachBlog key={index} isLast={index === (allPages?.length)} item={item} />
                  ))
                }               
              </div>
          </div>
      </div>
    </div>
  )
}

const EachBlog = ({isLast , item}) =>{
  const navigate = useNavigate()
  const {setPageTrans , setMovePage} = useCausewayMyContext()

  const handleNavigation = () => {
    setTimeout(() => {
      setBlog(item)
    },500)
    const path = `blog/${item?.to}`
    setPageTrans(true)
    setMovePage('Blog')
    setTimeout(() => {
      navigate(path)
    }, 1000)
  }

  return(
    <div className={`w-full flex justify-between items-center gap-[15px] lg:gap-[20px] ${isLast === false && 'mb-[25px] md:mb-[15px] lg:mb-[20px]'}`} >
          <div className='basis-[40%] sm:basis-[30%] h-[130px] lg:h-[150px] overflow-hidden rounded-3xl relative' >
              <div className='bannerImageLinear' ></div>
              <img src={item?.blogBanner} alt={item?.blogBanner} className='absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full' />
          </div>
          <div className='basis-[60%] sm:basis-[70%] w-full' >
              <p className='flex justify-start text-[14px] items-center gap-2 text-ptextCM' >
                    <FaRegCalendarAlt />
                    <span className='font-semibold' >{item?.date}</span>
              </p>
              <h3 className='text-[16px] sm:text-[18px] lg:text-[20px]  font-bold leading-[23px] lg:leading-[28px] my-2' >{item?.title}</h3>
              <div className='flex justify-end gap-2 flex-row-reverse' >
                  <div className='outer-btn-2' >
                    <IoArrowForwardSharp />
                  </div>
                  <Link to={`blog/${item?.to}`} className='text-[14px] cursor-pointer sm:text-[16px] font-semibold text-primaryCM ' >Read Story</Link>
              </div>
          </div>
    </div>
  )
}

export default Blogs