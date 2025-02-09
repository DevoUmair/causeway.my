import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Allblogs } from '../../../causewayDb';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoArrowForwardSharp } from 'react-icons/io5';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useCausewayMyContext } from '../../context/CausewayMyContextProvider';

function BlogSlider() {
    const PrevArrow = ({onClick}) => (
        <div onClick={onClick} className='custom-border absolute bottom-0   !border-primaryCM bg-transparent hover:!border-secondaryCM hover:bg-secondaryCM cursor-pointer custom-trans text-primaryCM hover:text-black rounded-full py-[10px] px-[20px]' >
                    <MdArrowBackIosNew />
        </div>
      )  
    
      const NextArrow = ({onClick}) => (
            <div onClick={onClick} className='custom-border absolute bottom-0 left-[68px]  !border-primaryCM bg-transparent hover:!border-secondaryCM hover:bg-secondaryCM cursor-pointer custom-trans text-primaryCM hover:text-black rounded-full py-[10px] px-[20px]' >
                     <MdArrowForwardIos />
            </div>
      )

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <NextArrow  />,
        prevArrow: <PrevArrow />,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
            },
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

  return (
    <div className='mt-[80px] custom-container' >
            <Slider className='pb-12' {...settings}>
                {
                    Allblogs?.map((item , index) => (
                        <div key={index} className='px-[4px]'>
                            <SingleBlog blog={item} />
                        </div>
                    ))
                }
             </Slider>
      </div>
  )
}

const SingleBlog = ({blog}) => {
  const navigate = useNavigate()
  const {setPageTrans , setMovePage , setBlog} = useCausewayMyContext()

  const handleNavigation = (to) => {
    setTimeout(() => {
      setBlog(blog)
    },500)
    const path = `../../blog/${to}`
    setPageTrans(true)
    setMovePage('Blog')
    setTimeout(() => {
      navigate(path)
    }, 1000)
  }


    return(
        <div className='w-full relative rounded-3xl overflow-hidden' >
            <div className='absolute bottom-0 p-[20px] md:p-[30px] z-50' >
                <p className='flex justify-start items-center gap-2 text-white' >
                <FaRegCalendarAlt />
                <span className='font-semibold' >{blog.date}</span>
                </p>
                <h3 className='text-[21px] lg:text-[23px] text-white font-bold leading-[28px] my-3 max-w-[500px]' >{blog.title}</h3>
                <div className='outer-btn cursor-pointer' onClick={() => handleNavigation(blog.to)} >
                <IoArrowForwardSharp />
                </div>
            </div>
            <div className='bannerImageLinear' ></div>
            <img src={blog.blogBanner} className='w-full  object-cover h-[450px] ' />
        </div>
    )
}

export default BlogSlider