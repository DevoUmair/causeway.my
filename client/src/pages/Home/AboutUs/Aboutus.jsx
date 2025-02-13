import React from 'react'
import './Aboutus.css'

import icon01 from '../../../assets/about/booking.png'
import icon02 from '../../../assets/about/rental-car.png'
import person01 from '../../../assets/about/person-01.jpg'
import person02 from '../../../assets/about/person-02.avif'
import person03 from '../../../assets/about/person-03.jpg'

import { FiPhoneCall } from "react-icons/fi"

import HeaderText from '../../../components/HeaderText.jsx'
import { DarkButton } from '../../../components/Button.jsx'
import { FaPlus } from 'react-icons/fa'

function Aboutus() {
  return (
    <div className='bg-[#F8F8F8] w-full' >
        <div className='mt-[100px] mb-[120px] custom-container custom-flex justify-between flex-col lg:flex-row gap-[120px] lg:gap-[45px] xl:gap-[60px]' >
            <div className='basis-[100%] 0 flex xsm:block justify-center items-center lg:basis-[55%] xl:basis-[50%]  h-full relative w-[100%] sm:w-[85%] md:w-[75%]  xlg:w-[65%] lg:w-full' >
                <div className='w-[400px] h-[500px] xsm:h-[550px] rounded-full relative about-img-1' >
                    <img src='https://www.pacecarrental.co.za/media/2024/04/Car-Rental-in-South-Africa-from-Pace-Car-Rental-1024x1024.webp' className='object-cover w-[400px] h-[500px] xsm:h-[550px] rounded-full relative' />
                </div>
                <div className='w-[300px] h-[400px] rounded-full bottom-[-80px] right-[0%] xl:right-[10%] about-img-1 absolute z-20 hidden xsm:block' >
                    <img src='https://www.japjitravel.com/blog/wp-content/uploads/2024/01/Rental-Car-For-Your-Needs-1-768x512.webp' className='object-cover w-[300px] h-[400px] rounded-full relative' />
                </div>
                <div className='top-[80%] xsm:top-0 z-50 animated-about translate-x-[10px] right-[5%] sm:right-0 w-[200px] p-[20px] absolute bg-primaryCM rounded-2xl' >
                        <h3 className='text-white font-semibold text-[18px] pb-[15px] border-b-2  border-solid border-[#fff]' >5m+ Trusted world wide global clients</h3>
                        <div className='mt-[15px] flex justify-start items-center' >
                            <img src={person01} className='w-[40px] h-[40px] rounded-full object-cover object-center' />
                            <img src={person02} className='w-[40px] relative left-[-10px] h-[40px] rounded-full object-cover object-center' />
                            <img src={person03} className='w-[40px] relative left-[-20px] h-[40px] rounded-full object-cover object-center' />
                            <div className='w-[40px] relative left-[-30px] flex justify-center items-center h-[40px] rounded-full bg-secondaryCM' >
                                <FaPlus size={16} color='#811311' />
                            </div>
                        </div>
                </div>
            </div>
            <div className='basis-[100%] w-full lg:basis-[45%] xl:basis-[50%]' >
                <div>
                    <HeaderText text={'Your Trusted Partner In Reliable Car Rental'} smallText={'About Us'} isCenter={false} issmallNeed={false} />
                </div>
                <p className='mt-[25px] mb-[40px] text-[16px] text-ptextCM' >Aqestic Optio Amet A Ququam Saepe Aliquid Voluate Dicta Fuga Dolor Saerror Sed Earum A Magni Soluta Quam Minus Dolor Dolor</p>
                <div className='mb-[40px]' >
                    <div className='custom-flex gap-4 pb-[25px] custom-border-bottom' >
                        <img src={icon01} className='object-contain w-[55px] h-[55px]' />
                        <div className='flex justify-between items-start flex-col gap-2' >
                            <h3 className='font-semibold text-[20px] ' >Easy booking process</h3>
                            <p className='text-[15px] text-ptextCM' >We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service</p>
                        </div>
                    </div>
                    <div className='custom-flex gap-4 mt-[40px] pb-[25px] custom-border-bottom' >
                        <img src={icon02} className='object-contain w-[55px] h-[55px]' />
                        <div className='flex justify-between items-start flex-col gap-2' >
                            <h3 className='font-semibold text-[20px] ' >Easy booking process</h3>
                            <p className='text-[15px] text-ptextCM' >We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service</p>
                        </div>
                    </div>
                </div>
                <DarkButton>
                        <span>Contact Us</span>
                        <FiPhoneCall size={25}  />
                </DarkButton>
            </div>
        </div>
    </div>
  )
}

export default Aboutus