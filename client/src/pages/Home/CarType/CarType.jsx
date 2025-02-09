import HeaderText from '../../../components/HeaderText'
import React, { useEffect, useState } from 'react'
import './CarType.css'


import { useCausewayMyContext } from '../../../context/CausewayMyContextProvider'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { useCausewayHqContext } from '../../../context/CausewayHqContextProvider'


function CarType() {
  const {allVehcialeTypes , allVehicales} = useCausewayHqContext()  

  return (
    <div className='bg-[#F8F8F8] w-full' >
        <div className='custom-container  mt-[80px]' >
        
            <div className='custom-flex !justify-between items-center' >
                <div >
                    <HeaderText text={'Find The Perfect Ride For Any Occasion'} smallText={'Browse by Type'} isCenter={false} />
                </div>
                {/* <div className='bg-primaryCM hidden xsm:flex basis-[30%] xsm:basis-[25%] sm:basis-[18%] md:basis-[16%] lg:basis-[14%] xl:basis-[10%] 2xl:basis-[8%] w-fit px-[15px] py-[10px] rounded-lg font-bold text-white custom-flex justify-center items-center gap-1  text-[15px] cursor-pointer' >
                    <span className='font-semibold' >View All</span>
                    <MdOutlineArrowOutward />
                </div> */}
            </div>

            <div className='carTypeGrid-container mt-[40px]' >
                    {
                        allVehcialeTypes?.map((data , index) => {
                            if(allVehicales?.filter((vehi) => (vehi?.vehicle_type_id === data.id)).length > 0){
                              return(
                                <EachCarType index={index} key={index} data={data}/>
                              )
                            }
                        })
                    }
            </div>
        </div>
    </div>

  )
}

const EachCarType = ({ index , data }) => {
    const [vehicaleTypeCount , seVehicaleTypeCount ] = useState()
    const {setCursorVariant , setTextCursor} = useCausewayMyContext()
    const {allVehicales} = useCausewayHqContext()

    const textEnter = () => {
      setCursorVariant("vehiImg")
      setTextCursor({
        ...data,
        index
      })
    }  
    const textLeave = () => {
      setCursorVariant("default")
      setTextCursor("")
    }  

    useEffect(() => {
      if (allVehicales?.length > 0) {
          seVehicaleTypeCount(allVehicales.filter((vehi) => vehi?.vehicle_type_id === data.id ).length);
      }
    }, [allVehicales]);
  

    return(
        <div className='w-full' >
           <div onMouseEnter={textEnter} onMouseLeave={textLeave}  className='px-[5px]' >
                <div className='py-[25px] cursor-pointer px-[15px] rounded-lg bg-[#f2f4f6] w-full custom-border flex justify-center items-center relative' >
                        <img src={data?.images[1].public_link} className='w-[150px] object-contain' alt='carType01' />
                        <p className='absolute text-[11px] bottom-[-14px] left-[50%] font-bold translate-x-[-50%] rounded-full p-1 px-3 text-center bg-white custom-border' >{vehicaleTypeCount} Vehicales</p>
                </div>
           </div>
            <h3 className='font-semibold text-[17px] mt-[20px] text-center w-full' >{data?.label}</h3>
        </div>
    )
}

export default CarType