import React from 'react'

import trsutPilot from '../../../assets/trues/trustpilot.svg'
import google from '../../../assets/trues/google.svg'
import trustStart from '../../../assets/trues/trustStart.svg'

import img01 from '../../../assets/trues/emirates.svg'
import img02 from '../../../assets/trues/forebes.svg'
import img03 from '../../../assets/trues/skydive.svg'
import img04 from '../../../assets/trues/virtuzone.svg'

import { IoIosStar } from 'react-icons/io'


function Trust() {
  return (
    <div className='max-w-[1200px]  mx-auto w-[95%] mt-[80px]' >
        <div className='px-[20px] md:px-[30px] py-[30px] bg-lightBgCm rounded-xl flex justify-between items-center flex-col xlg:flex-row gap-5' >
            <div className='basis-[100%] w-full xlg:basis-[40%] lg:basis-[50%]' >
                <h1 className='font-bold text-[23px] sm:text-[25px] lg:text-[30px] text-primaryCM' >Why you should rent a car with us?</h1>
                <p className='text-[17px] text-ptextCM' >#1 car rental company in Malaysia on Google</p>
            </div>
            <div className='basis-[100%] w-full xlg:basis-[60%] lg:basis-[50%] bg-white  rounded-xl custom-box-shadow flex justify-between items-center flex-col xsm:flex-row' >
                <div className='basis-[100%] xsm:basis-[50%] flex px-[10px] xl:px-[20px] py-[20px] justify-center items-center w-full gap-3 flex-col custom-border-bottom xsm:custom-border-right' >
                    <img src={trsutPilot} alt='trust' className='w-[130px] object-contain' />
                    <div className='flex justify-center items-center gap-3 w-full' >
                        <h3 className='font-semibold text-[20px]' >4.7</h3>
                        <div className='flex justify-between items-center gap-1' >
                            <img src={trustStart} className='w-[20px] h-[20px] object-contain' />
                            <img src={trustStart} className='w-[20px] h-[20px] object-contain' />
                            <img src={trustStart} className='w-[20px] h-[20px] object-contain' />
                            <img src={trustStart} className='w-[20px] h-[20px] object-contain' />
                            <img src={trustStart} className='w-[20px] h-[20px] object-contain' />
                        </div>
                        <p className='text-[17px] text-ptextCM' >83</p>
                    </div>
                </div>
                <div className='basis-[100%] xsm:basis-[50%] flex px-[10px] xl:px-[20px] py-[20px] justify-center items-center w-full gap-3 flex-col custom-border-right' >
                    <img src={google} alt='trust' className='w-[180px] object-contain' />
                    <div className='flex justify-center items-center gap-3 w-full' >
                        <h3 className='font-semibold text-[20px]' >4.7</h3>
                        <div className='flex justify-between items-center gap-1' >
                            <IoIosStar size={23} color='#fbbc05' />
                            <IoIosStar size={23} color='#fbbc05' />
                            <IoIosStar size={23} color='#fbbc05' />
                            <IoIosStar size={23} color='#fbbc05' />
                            <IoIosStar size={23} color='#dee2e6' />
                        </div>
                        <p className='text-[17px] text-ptextCM' >83</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='px-[15px] lg:px-[30px] py-[30px] bg-lightBgCm rounded-xl flex justify-between flex-col lg:flex-row items-center gap-5 mt-[40px]' >
            <div className='basis-[100%] lg:basis-[33%] w-full' >
                <h3 className='text-[23px] sm:text-[25px] lg:text-[30px] font-bold' >Official Partners With</h3>
            </div>
            <div className='basis-[100%] w-full lg:basis-[67%] flex justify-between items-center gap-2' >
                <div className='flex justify-between items-center flex-col md:flex-row gap-2 basis-[50%]' >
                    <img src={img01} className='basis-[50%] w-full h-[100px] object-cover rounded-xl'  />
                    <img src={img02} className='basis-[50%] w-full h-[100px] object-cover rounded-xl'  />
                </div>
                <div className='flex justify-between items-center gap-2 flex-col md:flex-row basis-[50%]' >
                    <img src={img03} className='basis-[50%] w-full h-[100px] object-cover rounded-xl'  />
                    <img src={img04} className='basis-[50%] w-full h-[100px] object-cover rounded-xl'  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trust