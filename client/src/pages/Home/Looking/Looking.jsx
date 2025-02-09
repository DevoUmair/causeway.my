import React from 'react'
import './Looking.css'
import HeaderText from '../../../components/HeaderText'
import { IoMdArrowRoundForward } from 'react-icons/io'

function Looking() {
  return (
    <div className='bg-[#F8F8F8] w-full' >
        <div className='mt-[80px] w-full ' >
            <div className='max-w-[1200px]  mx-auto w-[95%] custom-flex flex-col xlg:flex-row justify-between gap-3 items-center ' >
            
                <div className='LookingImg relative basis-[49%] w-full h-[350px] rounded-xl overflow-hidden ' >
                    <div className='px-[20px] py-[45px] xsm:p-[40px]  h-full flex justify-start items-start gap-3 flex-col  relative z-20' >
                        <h3 className='text-white text-[30px] font-bold' >Loking for a rental car?</h3>
                            <p className='text-white text-[16px] font-medium' >Discover your ideal rental car for every adventure,
                            whether it's a road trip or business travel </p>
                            <button className='primaryBtn mt-6 flex justify-center gap-2 items-center bg-secondaryCM px-5 py-[16px] rounded-lg text-black hover:text-white before:bg-primaryCM font-bold' >
                                <span>Get Started Now</span>
                                <IoMdArrowRoundForward size={25} />
                            </button>
                    </div>        
                </div>
                <div className='LookingImg2 relative basis-[49%] w-full h-[350px] rounded-xl overflow-hidden ' >
                    <div className='px-[20px] py-[45px] xsm:p-[40px]  h-full flex justify-start items-start gap-3 flex-col  relative z-20' >
                        <h3 className='text-white text-[30px] font-bold' >Loking for a rental car?</h3>
                            <p className='text-white text-[16px] font-medium' >Discover your ideal rental car for every adventure,
                            whether it's a road trip or business travel </p>
                            <button className='primaryBtn mt-6 flex justify-center gap-2 items-center bg-secondaryCM px-5 py-[16px] rounded-lg text-black hover:text-white before:bg-primaryCM font-bold' >
                                <span>Get Started Now</span>
                                <IoMdArrowRoundForward size={25} />
                            </button>
                    </div>        
                </div>

            </div>
        </div>
    </div>
  )
}

export default Looking