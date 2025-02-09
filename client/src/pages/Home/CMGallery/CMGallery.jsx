import React from 'react'
import './CMGallery.css'
import HeaderText from '../../../components/HeaderText'
import { IoMdArrowRoundForward, IoMdCheckmark } from 'react-icons/io'
import { DarkButton } from '../../../components/Button'

function CMGallery() {
  return (
    <div className='bg-[#F8F8F8] w-full' >
        <div className='mt-[80px] lg:mt-[120px] mb-[120px] custom-container ' >
            <div className='custom-flex justify-between items-center gap-[80px] lg:gap-2 flex-col lg:flex-row' >
                <div className='basis-[49%]' >
                    <HeaderText text={'Sell your car at a fair price Get started with us today'} smallText={'Best Car Rental System'} isCenter={false} />
                    <p className='font-normal text-ptextCM text-[16px] mt-[20px]' >We are committed to delivering exceptional service, competitive pricing, and a diverse selection of options for our customers.</p>
                    <div className=' mt-[25px] flex justify-start items-start gap-3 flex-col w-full' >
                        <EachPoint />
                        <EachPoint />
                        <EachPoint />
                    </div>
                    <DarkButton>
                        <span>Get Started Now</span>
                        <IoMdArrowRoundForward size={25} />
                    </DarkButton>
                </div>
                <div className='basis-[49%] w-full  custom-flex justify-between items-center gap-0 xxsm:gap-[10px] flex-col xxsm:flex-row' >
                    <div className='basis-[49%] translate-y-0 xxsm:translate-y-[-40px] w-full' >
                        <div className='GalleryImg GalleryImg01 relative w-full h-[240px] sm:h-[300px] mt-[10px] rounded-lg overflow-hidden' ></div>
                        <div className='GalleryImg GalleryImg02 relative w-full h-[240px] sm:h-[300px] mt-[10px] rounded-lg overflow-hidden' ></div>
                    </div>
                    <div className='basis-[49%] translate-y-0 xxsm:translate-y-[40px] w-full' >
                        <div className='GalleryImg GalleryImg03 relative w-full h-[240px] sm:h-[300px] mt-[10px] rounded-lg overflow-hidden' ></div>
                        <div className='GalleryImg GalleryImg04 relative w-full h-[240px] sm:h-[300px] mt-[10px] rounded-lg overflow-hidden' ></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

const EachPoint = () => (
    <div className='flex justify-start items-center gap-2 mb-[15px]' >
        <div className='bg-lightBgCm text-primaryCM w-[30px] h-[30px]   rounded-full flex justify-center items-center' >
            <IoMdCheckmark size={17} />
        </div>
        <p className='text-[14px] font-semibold' >Explore a wide range of flexible rental options to suit your needs</p>
    </div>
)

export default CMGallery