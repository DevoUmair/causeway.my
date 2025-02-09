import React from 'react'
import cm01 from '../../../assets/causeway/causeway-01.jpeg'
import cm02 from '../../../assets/causeway/causeway-02.jpeg'
import cm04 from '../../../assets/causeway/causeway-04.jpeg'

function AboutCauseway() {
  return (
    <div className='mt-[80px] max-w-[1200px] mx-auto w-[95%] ' >
        <div className='flex justify-between items-center gap-3 md:gap-2 lg:gap-1 flex-col xlg:flex-row' >
            <h1 className='basis-[35%]  w-full text-[28px] sm:text-[30px] md:text-[33px] xlg:text-[40px] lg:text-[50px] text-black font-bold md:leading-[50px] lg:leading-[60px]' >The Future Of <br /> <span className='text-primaryCM' >Car Rental</span> Is Here </h1>
            <div className='basis-[65%] w-full flex justify-end items-center gap-4' >
                    <p className='text-ptextCM text-[15px] xlg:text-[17px] leading-[28px] font-medium max-w-[100%] xlg:max-w-[700px] ml-auto' >Welcome to Carento, your trusted partner in car rentals. Since our founding, we have been committed to providing our customers with a seamless and reliable car rental experience. Whether you're planning a business trip, a family vacation, or just need a vehicle for everyday use, we offer a wide range of vehicles to meet your needs.</p>
            </div>
        </div>

        <div className='flex justify-between items-center gap-[8px] sm:gap-[14px] mt-[40px] flex-col lg:flex-row' >
            <div className='basis-[100%] lg:basis-[66%] w-full flex justify-between items-center gap-[8px] sm:gap-[14px]' >
                <div className='basis-[50%] w-full rounded-xl h-[218px] sm:h-[300px] md:h-[350px] lg:h-[450px] overflow-hidden relative' >
                    <img src={cm01} alt='causeway-01' className='absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover object-right' />
                </div>
                <div className='basis-[50%] w-full rounded-xl h-[218px] sm:h-[300px] md:h-[350px] lg:h-[450px] overflow-hidden relative' >
                    <img src={cm02} alt='causeway-02' className='absolute top-0 left-0 right-0 bottom-0 w-full h-full  object-cover object-left' />
                </div>
            </div>
            <div className='basis-[100%] lg:basis-[33%] w-full rounded-xl h-[450px] flex justify-between gap-[8px] sm:gap-[14px] items-start flex-row lg:flex-col' >
                <div className='w-full rounded-xl bg-primaryCM h-[218px]  flex justify-center items-center flex-col' >
                      <div className='flex justify-start gap-[5px] xsm:gap-[10px] sm:gap-[16px] flex-col xsm:flex-row items-center px-[5px] text-white' >
                            <h1 className='text-[55px] sm:text-[70px] md:text-[80px] font-bold leading-2' >5+</h1>
                            <div>
                              <h3 className='font-bold text-[28px] md:text-[34px] leading-[40px] w-full text-center xsm:text-left' >Years In</h3>
                              <h3 className='font-bold text-[28px] md:text-[34px] leading-[40px] w-full text-center xsm:text-left' >Bussiness</h3>
                            </div>
                      </div>
                </div>
                <div className='w-full rounded-xl h-[218px] relative overflow-hidden' >
                    <img src={cm04} alt='causeway-02' className='absolute top-0 left-0 right-0 bottom-0 w-full h-full  object-cover object-left' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutCauseway