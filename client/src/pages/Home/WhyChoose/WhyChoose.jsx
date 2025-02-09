import React, { useEffect, useRef, useState } from 'react'
import './WhyChoose.css'
import HeaderText from '../../../components/HeaderText'
import { IoCarSportOutline } from "react-icons/io5"
import frq02 from '../../../assets/freq/frew-02.jpg'
import whyChooseImg from '../../../assets/whyChoose/why-choose-car-img.png'
import Plx from "react-plx";

function WhyChoose() {
  const [height , setHeight] = useState(0)
  const myRef = useRef()

    useEffect(() => {
        if(myRef){
            setHeight(myRef.current.offsetTop)
        }
    },[])

    const parallaxData = [
        {
            start: height  - 500,
            end:height + 100,
            easing : "linear",
            duration:5,
            properties: [
              {
                startValue : 1500,
                endValue: 0,
                property: "translateX",
              },
              {
                startValue : 0.1,
                endValue: 1,
                property: "scale",
              },
              {
                startValue : 0,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
    ];

  return (
    <div className='bg-[#F8F8F8] w-full' >
      <div className='mt-[80px] w-full ' >
          <HeaderText text={'Most Wanted Car Rental Brands In Malaysia'} smallText={'Explore With Us'} isCenter={true} />

          <div ref={myRef} className='mt-[40px] max-w-[1200px]  mx-auto w-[95%] custom-flex flex-col xlg:flex-row justify-between items-center gap-3' >
              <div className='basis-[100%] xlg:basis-[33%] w-full ' >
                  <EachWhyChoose islast={false} />
                  <EachWhyChoose islast={true} />
              </div>
              <div className='basis-[100%] xlg:basis-[33%] flex justify-center items-center w-fit xlg:w-[85%] mx-auto relative' >
                  <img className='h-[550px] bg-green-800 rounded-full object-cover' src={frq02} alt='why-choose' />
                  <Plx parallaxData={parallaxData} className='absolute bg- bottom-0 w-[300px]  z-10 left-[0%] xlg:left-[-7%] lg:left-[12%] translate-x-[-50%]' >
                    <img src={whyChooseImg} className='w-full object-contain bg-fixed'  alt='why-choose-car' />
                  </Plx>
              </div>
              <div className='basis-[100%] xlg:basis-[33%] w-full' >
                  <EachWhyChoose islast={false} />
                  <EachWhyChoose islast={true} />
              </div>
          </div>
      </div>
    </div>
  )
}

const EachWhyChoose = ({islast}) => {
  return(
    <div className={`w-full ${!islast && 'custom-border-bottom'} custom-flex pt-[31px] pb-[13px] justify-start items-baseline gap-2`} >
        <div className='relative text-[#000]' >
            <div className='absolute top-[-5px] left-[-5px] w-[43px] h-[43px] rounded-full bg-[#ffc5c573]' ></div>
            {/* <FaCarOn  /> */}
            <IoCarSportOutline className='z-10' size={45} />
        </div>
        <div className='translate-y-[-23px] sm:translate-y-[-18px]' >
          <h1 className='mb-[6px] font-semibold text-[22px] leading-[30px]' >Extensive fleet options</h1>
          <p className='text-ptextCM font-normal text-[15px]' >Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa</p>
        </div>
    </div>
  )
}

export default WhyChoose