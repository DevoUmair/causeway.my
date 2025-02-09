import React from 'react'
import './ImageSlider.css'
import { RxCross2 } from 'react-icons/rx'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { useCausewayMyContext } from '../../context/CausewayMyContextProvider';
import logo from '../../assets/logo/logo.png'

function NextArrow({onClick}){
    return(
        <div className='Arrow arrow-image-slider arrow-image-slider-next next-Arrow' onClick={onClick}>
            <HiOutlineArrowNarrowRight />
        </div>
    )
}

function PrevArrow({onClick}){
    return(
        <div className='Arrow  arrow-image-slider arrow-image-slider-prev prev-Arrow' onClick={onClick}>
            <HiOutlineArrowNarrowLeft />
        </div>
    )
}

function ImageSlider() {
    const {imageSliderStatus , setImageSliderStatus , sliderImageList  , setSliderImageList} = useCausewayMyContext()

    const handleCancelSlider = () => {
        setImageSliderStatus(false)
        setSliderImageList([])
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        nextArrow: <NextArrow  />,
        prevArrow: <PrevArrow />
    };

  return (
    <div className={`image-slider-container ${imageSliderStatus  && 'image-slider-container-open'}`} >
        <div onClick={handleCancelSlider} className='cancel-image-slider' >
                <RxCross2 />
        </div>
        <div className='slider-conatiner'>
            <Slider {...settings}>
                {
                    sliderImageList.map((image , index) => (
                        <ImageContainer image={image} key={index}/>
                    ))
                }
            </Slider>
        </div>


    </div>
  )
}

function ImageContainer({image}){
    return(
        <div className='image-container' >
            <img className='copyright-img' src={logo} alt='logo' />
            <img className='each-slider-image' src={image?.public_link} alt='Toyata_PRIUSPHV_C01_01 ' />
        </div>
    )
}

export default ImageSlider