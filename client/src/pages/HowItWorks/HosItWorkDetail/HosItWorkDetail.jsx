import React, { useState } from 'react';
import { howItWorksContent } from '../../../../causewayDb';
import './HowItWorkDetail.css'

function HosItWorkDetail() {
  return (
    <div className='max-w-[1200px] mx-auto w-[95%]'>
      <div className='flex justify-between gap-1 items-center flex-col mt-[70px]'>
        <h1 className='text-center text-[40px] font-bold'>How it works?</h1>
        <p className='text-ptextCM text-[15px] font-medium text-center max-w-[600px] w-full mx-auto'>
          Do ipsum esse commodo et commodo nisi aute qui qui do non occaecat. Nulla voluptate Lorem eiusmod cillum irure ea excepteur.
        </p>
      </div>

      <div className='mt-[80px]'>
        {
          howItWorksContent?.map((item, index) => (
            <EachHowItwork item={item} index={index} key={index} />
          ))
        }
      </div>
    </div>
  );
}

const EachHowItwork = ({ item, index }) => {
  const [dotsCount , setDotsCount] = useState(10)
    
  return (
    <div className={`relative flex justify-between items-start gap-3 sm:gap-7 flex-row mb-[20px] ${index % 2 === 1 && 'flex-row lg:flex-row-reverse'}`}>
      <div className='basis-[45%] w-full hidden lg:flex justify-start gap-3 items-start '>
        <div>
          <h1 className='text-[30px] font-bold'>{item.title}</h1>
          <p className='text-ptextCM font-medium text-[15px] mt-[15px]'>{item?.description}</p>
        </div>
      </div>
      <div className='basis-[5%] flex justify-center items-center flex-col' >
            <h1 className='text-[25px] sm:text-[30px] font-extrabold text-ptextCM leading-0' >STEP</h1>
            <h1 className='text-[30px] sm:text-[35px] text-primaryCM font-bold mt-[-8px]'>0{index + 1}</h1>
            <div className='my-[15px] hidden lg:flex justify-center items-center gap-3 flex-col' >
                {[...Array(10)].map((_, index) => (
                    <div key={index} className="w-[10px] h-[10px] rounded-full bg-[#b7b7b7]"></div>
                ))}
            </div>
            <div className='my-[15px] hidden md:flex lg:hidden justify-center items-center gap-3 flex-col' >
                {[...Array(16)].map((_, index) => (
                    <div key={index} className="w-[10px] h-[10px] rounded-full bg-[#b7b7b7]"></div>
                ))}
            </div>
            <div className='my-[15px] hidden sm:flex md:hidden justify-center items-center gap-3 flex-col' >
                {[...Array(18)].map((_, index) => (
                    <div key={index} className="w-[10px] h-[10px] rounded-full bg-[#b7b7b7]"></div>
                ))}
            </div>
            <div className='my-[15px] hidden xsm:flex sm:hidden justify-center items-center gap-3 flex-col' >
                {[...Array(20)].map((_, index) => (
                    <div key={index} className="w-[10px] h-[10px] rounded-full bg-[#b7b7b7]"></div>
                ))}
            </div>
            <div className='my-[15px] flex xsm:hidden justify-center items-center gap-3 flex-col' >
                {[...Array(24)].map((_, index) => (
                    <div key={index} className="w-[10px] h-[10px] rounded-full bg-[#b7b7b7]"></div>
                ))}
            </div>
      </div>
      <div className='basis-[95%] lg:basis-[45%] w-full flex justify-center flex-col'>
        <img src={item.img} className='w-[350px] object-contain' alt={item.title} />
        <div className='w-full flex lg:hidden justify-start gap-3 items-start mt-[20px]'>
            <div>
            <h1 className='text-[30px] font-bold'>{item.title}</h1>
            <p className='text-ptextCM font-medium text-[15px] mt-[15px]'>{item?.description}</p>
            </div>
        </div>
      </div>

    </div>
  );
};

export default HosItWorkDetail;
