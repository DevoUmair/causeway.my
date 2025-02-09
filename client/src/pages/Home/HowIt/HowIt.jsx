import HeaderText from '../../../components/HeaderText'
import React from 'react'
import './HowIt.css'


import { DarkButton } from '../../../components/Button'
import { FaRegCalendarCheck } from 'react-icons/fa'
import { howItWorksContent } from '../../../../causewayDb'

function HowIt() {
  return (
    <div className='custom-container bg-lightBgCm mt-[80px] rounded-2xl px-[20px] xlg:px-[40px] py-[100px]' >
         <HeaderText text={'Presenting Your New Go-To Car Rental Experience'} smallText={'How It Works'} isCenter={true} />

        <div className='mt-[40px] HowItGrid-container' >

            {
              howItWorksContent?.slice(0, 4).map((item , index) => (
                <HowItCard key={index} item={item} index={`0${index  + 1}`} />
              ))
            }
        </div>

        <div className='mt-[40px] w-full flex justify-center items-center' >
          <DarkButton>
              <span>Book Your Car</span>
              <FaRegCalendarCheck size={25} />
          </DarkButton>
        </div>
    </div>
  )
}

const HowItCard = ({item ,  index}) => (
  <div className='bg-white custom-border py-[60px] px-[20px] rounded-2xl relative howItCard h-[270px]' >
      <div className='custom-flex justify-center items-center gap-3 flex-col' >
        <img src={item?.icon} alt={item?.icon} />
        <h3 className='text-center text-[23px] font-semibold' >{item?.title}</h3>
        <p className='text-center text-[16px] text-ptextCM' >{item?.summary}</p>
      </div>
      <div className=' numHowIt opacity-15 text-[60px] font-bold absolute top-1 h-fit right-5  custom-trans text-stroke' >{index}</div>
  </div>
)

export default HowIt