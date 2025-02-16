import React from 'react'
import { sections } from '../../../../causewayDb'
import HeaderText from '../../../components/HeaderText'
import './Service.css'


function Services() {

  return (
    <div className='max-w-[1200px]  mx-auto w-[95%] mt-[80px] bg-[#F8F8F8]' >
         <HeaderText text={'What We Are Providing?'} smallText={'Our Services'} isCenter={true} />
        <div className='services-container mt-[40px]' >
            {
                sections?.slice(0, 3).map((sec , index) => (
                    <EachServices key={index} sec={sec} />
                ))
            }
        </div>
    </div>
  )
}

const EachServices = ({sec , img}) => {
    return(
        <div className='rounded-2xl custom-border overflow-hidden bg-white h-[490px]' >
            <img src={sec?.img} alt='servi' className='h-[250px] object-cover w-full' />
            <div className='rounded-tr-2xl rounded-tl-2xl translate-y-[-30px] px-[25px] bg-white pt-[30px]' >
                <h1 className='text-black font-bold text-[20px] mb-[20px]' >{sec?.title}</h1>
                <p className='text-ptextCM text-[15px] font-medium' >
                     {sec?.content?.length > 150 
                    ? <>
                        {sec?.content?.slice(0, 150)} <span className="text-primaryCM font-semibold cursor-pointer">  ... See more</span>
                    </>
                    : sec?.content}
                </p>
                <button className='py-[10px] px-[20px] rounded-xl border mt-[20px] border-primaryCM font-bold bg-primaryCM text-white' >
                        <span>View Full</span>
                </button>
            </div>
        </div>
    )
}

export default Services