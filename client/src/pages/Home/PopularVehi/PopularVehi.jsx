import React from 'react'
import './PopularVehi.css'
import HeaderText from '../../../components/HeaderText'

import car01 from '../../../assets/popular/car-1.png'
import car02 from '../../../assets/popular/car-2.png'
import car03 from '../../../assets/popular/car-3.png'
import car04 from '../../../assets/popular/car-4.png'

import { BsFuelPump } from 'react-icons/bs'
import { BiTachometer } from 'react-icons/bi'
import { PiEngineBold } from 'react-icons/pi'
import { DarkButton } from '../../../components/Button'

function PopularVehi() {
  return (
    <div className='bg-[#F8F8F8] w-full' >
        <div className='custom-container mt-[80px]' >

            <div className='custom-flex !justify-between items-center' >
                <div>
                    <HeaderText text={'Special Offers By Cauesway'} smallText={'Popular Vehicale'} isCenter={false} />
                </div>
            </div>

            <div className='mt-[40px] popularVehi-container' >
                <EachPopularVehi img={car01} />
                <EachPopularVehi img={car02} />
                <EachPopularVehi img={car03} />
                <EachPopularVehi img={car04} />
            </div>

        </div>    
    </div>
  )
}

const EachPopularVehi = ({img}) => {
    return(
        <div className='w-full rounded-2xl custom-border overflow-hidden bg-white' >
            <div className='flex justify-between flex-col xsm:flex-row' >
                <img src={img} className='basis-[100%]  xsm:basis-[40%] w-[100%] h-[150px] xsm:h-[260px] object-cover' />
                <div className='h-fit xsm:h-[260px] px-[15px] xsm:pl-[15px] xl:pl-[30px] py-[30px] custom-max-w  basis-[100%]  xsm:basis-[60%] bg-white rounded-tl-2xl rounded-bl-2xl rounded-tr-2xl xsm:rounded-tr-none translate-x-0 translate-y-[-20px] xsm:translate-y-0 xsm:translate-x-[-20px]' >
                    <div className='custom-border-bottom pb-[30px]' >
                        <div>
                            <h3 className='font-semibold text-[20px] sm:text-[24px]' >Mercedes-Benz, C Class</h3>
                            <p className='text-[13px] sm:text-[14px]  text-grayDarkCM font-normal' >2023 C300e AMG Line Night Ed Premiu...</p>
                        </div>
                        <div className='mt-[20px]  custom-flex gap-2 justify-between' >
                            <div className='custom-flex justify-center items-center gap-2 text-grayDarkCM flex-col' >
                                <BsFuelPump />
                                <p className='text-[13px] sm:text-[14px]' >74,456 Miles</p>
                            </div>
                            <div className='custom-flex justify-center items-center gap-2 text-grayDarkCM flex-col' >
                                <BiTachometer />
                                <p className='text-[13px] sm:text-[14px]' >Petrol</p>
                            </div>
                            <div className='custom-flex justify-center items-center gap-2 text-grayDarkCM flex-col' >
                                <PiEngineBold />
                                <p className='text-[13px] sm:text-[14px]' >Automatic</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between mt-[20px]' >
                        <div className='flex justify-start gap-2 items-end' >
                            <p className='font-medium text-grayDarkCM text-[15px] translate-y-[-3px]' >From</p>
                            <p className='font-semibold text-[25px]' >$389</p>
                        </div>
                        <button className='primaryBtn flex justify-center gap-2 items-center bg-primaryCM px-4 py-[10px] rounded-lg !text-[13px] text-white hover:text-black before:bg-secondaryCM font-bold' >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default PopularVehi