import React from 'react'
import './Reviews.css'
import HeaderText from '../../../components/HeaderText'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { FaStar } from 'react-icons/fa'
import { useCausewayMyContext } from '../../../context/CausewayMyContextProvider';

function Reviews() {
    const {setCursorVariant , setTextCursor} = useCausewayMyContext()

    const textEnter = () => {
      setCursorVariant("Drag")
      setTextCursor("Drag")
    }  
    const textLeave = () => {
        setTextCursor("")
      setCursorVariant("default")
    }  

    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,
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
    <div className='bg-[#F8F8F8] w-full' >
        <div className='mt-[80px]' >
            <div className='custom-container' >
                <HeaderText text={'What They Say About Us?'} smallText={'Testimonial'} isCenter={true} />
            </div>
            <div className='review-slider-container' >
                <Slider className='py-[40px]' {...settings}>
                    <div className='px-[4px]' onMouseEnter={textEnter} onMouseLeave={textLeave} >
                        <EachReview />
                    </div>
                    <div className='px-[4px]' onMouseEnter={textEnter} onMouseLeave={textLeave} >
                        <EachReview />
                    </div>
                    <div className='px-[4px]' onMouseEnter={textEnter} onMouseLeave={textLeave} >
                        <EachReview />
                    </div>
                    <div className='px-[4px]' onMouseEnter={textEnter} onMouseLeave={textLeave} >
                        <EachReview />
                    </div>
                    <div className='px-[4px]' onMouseEnter={textEnter} onMouseLeave={textLeave} >
                        <EachReview />
                    </div>
                    <div className='px-[4px]' onMouseEnter={textEnter} onMouseLeave={textLeave} >
                        <EachReview />
                    </div>
                </Slider>
            </div>  
        </div>
    </div>
  )
}

const EachReview = () => {
    return(
        <div className='bg-white custom-border p-[30px]  rounded-xl' >
            <div>
                <h1 className='text-[22px] font-bold' >Mobile Friendly And Fast</h1>
                <p  className='text-ptextCM text-[15px] leading-[25px] mt-[8px]'>Non laborum nostrud nisi sint. Nulla cillum occaecat velit nisi. Irure consequat adipisicing ea amet eu adipisicing ut duis ad nostrud tempor non. Sunt laboris culpa dol</p>
            </div>
            <div className='mt-[40px] flex justify-between items-end gap-2' >
                <div className='custom-flex gap-3 items-end' >
                    <img src='https://carento-demo.vercel.app/assets/imgs/testimonials/testimonials-1/author-2.png' alt='testi-img' className='w-[60px] h-[60px] rounded-full object-cover' />
                    <div>
                        <h3 className='text-[20px] font-semibold' >Alted John</h3>
                        <p className='text-ptextCM' >Paris</p>
                    </div>
                </div>
                <div className='flex justify-end gap-2 items-center' >
                    <div className='h-[26px] w-[26px] bg-secondaryCM flex justify-center items-center' >
                        <FaStar size={17} />
                    </div>
                    <div className='h-[26px] w-[26px] bg-secondaryCM flex justify-center items-center' >
                        <FaStar size={17} />
                    </div>
                    <div className='h-[26px] w-[26px] bg-secondaryCM flex justify-center items-center' >
                        <FaStar size={17} />
                    </div>
                    <div className='h-[26px] w-[26px] bg-secondaryCM flex justify-center items-center' >
                        <FaStar size={17} />
                    </div>
                    <div className='h-[26px] w-[26px] bg-secondaryCM flex justify-center items-center' >
                        <FaStar size={17} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews