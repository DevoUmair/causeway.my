import React, { useEffect, useState } from 'react'
import './Banner.css'
import { GoSearch } from 'react-icons/go'
import { TbCarSuv } from 'react-icons/tb'
import bg01 from '../../../assets/banner/banner-image-01.jpg'
import bg02 from '../../../assets/banner/banner-image-02.jpg'
import bg03 from '../../../assets/banner/banner-image-03.jpg'
import { IoIosArrowDown } from 'react-icons/io'
import Calender from '../../../assets/svgs/calender.svg'
import Car from '../../../assets/svgs/car.svg'
import Location from '../../../assets/svgs/location.svg'
import { useCausewayMyContext } from '../../../context/CausewayMyContextProvider'
import { useCausewayHqContext } from '../../../context/CausewayHqContextProvider'
import { addDays, startOfDay } from "date-fns";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu"

import { Calendar } from "../../../components/ui/calendar"
import { TimePickerDemo } from "../../../components/ui/timePicker"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/ui/popover"
import { Button } from '../../../components/ui/button'
import hqApi from '../../../axios/Axios'
import { Oval } from 'react-loader-spinner'
import { Link, useNavigate } from 'react-router-dom'
import { RxCrossCircled } from 'react-icons/rx'


function Banner() {
    // const [sliderNum , setSliderNum] = useState(1);
    const {setCursorVariant ,  setOpenSerachLoader} = useCausewayMyContext()

    const textEnter = () => {
        setCursorVariant("text2")
    }  
    const textLeave = () => {
        setCursorVariant("default")
    }  

    // useEffect(() => {
    //   const timeoutId = setTimeout(() => {
    //     if (sliderNum === 3) {
    //       setSliderNum(1);
    //     } else {
    //       setSliderNum(sliderNum + 1);
    //     }
    //   }, 4500);
  
    //   return () => clearTimeout(timeoutId); 
    // }, [sliderNum]);

  return (
    <div className="banner-container">
        <div className='bannerImageLinear' ></div>
            <div className='bannerImage' 
                        style={{
                            backgroundImage:`url(${bg01})`,
                            // animation: 'zoomAnimation 5s ease-in-out',
                        }}
            ></div>
        {/* {
            sliderNum === 1 &&(
                <div className='bannerImage' 
                    style={{
                        backgroundImage:`url(${bg01})`,
                        animation: 'zoomAnimation 5s ease-in-out',
                    }}
                ></div>
            )
        }
        {
            sliderNum === 2 &&(
                <div className='bannerImage' 
                    style={{
                        backgroundImage:`url(${bg02})`,
                        animation: 'zoomAnimation 5s ease-in-out',
                    }}
                ></div>
            )
        }
        {
            sliderNum === 3 &&(
                <div className='bannerImage' 
                    style={{
                        backgroundImage:`url(${bg03})`,
                        animation: 'zoomAnimation 5s ease-in-out',
                    }}
                ></div>
            )
        } */}

        
        <div className='banner-content' >
            <div className='flex justify-center items-center w-full' >
               <p className='text-white text-center mb-7 text-[17px] xsm:text-[20px] relative small-para' >Find cars for sale and for rent near you</p>
            </div>
            <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}  className='text-[45px] max-w-[750px]  mx-auto w-full xsm:text-[52px] sm:text-[60px] md:text-7xl leading-[48px] font-bold text-white text-center' >Find Your Perfect Car</h1>
            <SearchBar />
            <div className='mt-[50px]' >
                 <p className='text-white text-center mb-7 text-[17px] relative' >Or Browse Featured Model</p>
                 <ListModel />
            </div>
        </div>
    </div>
  )
}

const SearchBar = () => {
    const {setOpenSerachLoader , openSerachLoader , notificationAvtive ,setPageTrans , setMovePage } = useCausewayMyContext()
    const [selectedVehitype , setSelectedVehiType] = useState({
        name : "",
        id: 0,
    })

    const [pickupTimeOpen, setPickupTimeOpen] = useState(false)
    const [dropTimeOpen, setDropTimeOpen] = useState(false)

    const {allLocation , allVehcialeTypes ,   selectedDropLoc , setSelectedDropLoc , selectedPickLoc , setSelectedPickLoc , pickupDate , setPickupDate , pickupTime , setPickupTime , dropDate , setDropDate , dropTime , setDropTime , setAvailableVehicle , setBookingStep} = useCausewayHqContext()

    const navigate = useNavigate();

    const handleClosePickupTime = (newDay) => {
        setPickupTime(newDay);
    }

    const handleCloseDropTime = (newDay) => {
        setDropTime(newDay);
    }

    const hanlePickUpTime = (isBtn) => {
        if(isBtn){
            setPickupTimeOpen(false)
            setDropDate(addDays(pickupDate, 1));
        }else{
            if(pickupTimeOpen){
                setPickupTimeOpen(false)
            }else{
                setPickupTimeOpen(true)
            }
        }
    }

    const hanlDropUpTime = (isBtn) => {
        if(isBtn){
            setDropTimeOpen(false)
        }else{
            if(dropTimeOpen){
                setDropTimeOpen(false)
            }else{
                setDropTimeOpen(true)
            }
        }
    }

    const convertDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
        const day = String(date.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;

        return formattedDate
    }

    const convertTime = (time) => {
        const hours = String(time.getHours()).padStart(2, "0");
        const minutes = String(time.getMinutes()).padStart(2, "0");
        const formattedTime = `${hours}:${minutes}`;

        return formattedTime
    }

    const checkVehicaleAvailability = () => {
        setOpenSerachLoader(true)
        const pickUpDateTime = `${convertDate(pickupDate)} ${convertTime(pickupTime)}`
        const dropDateTime = `${convertDate(dropDate)} ${convertTime(dropTime)}`
        const pickUpLoaction = selectedPickLoc?.id
        const dropLoaction = selectedDropLoc?.id

        console.log(pickUpDateTime);
        console.log(dropDateTime);
        console.log(pickUpLoaction);
        console.log(dropLoaction);

      if(pickUpLoaction === 0){
            notificationAvtive(
                `Please Slect Pickup Location`,
                "Error",
                true,
                <RxCrossCircled size={20} weight="fill" color="#ffffff" style={{ marginBottom: '17px' }} />
            )
            setOpenSerachLoader(false)
      }else if(dropLoaction === 0){
        notificationAvtive(
            `Please Select Drop Location`,
            "Error",
            true,
            <RxCrossCircled size={20} weight="fill" color="#ffffff" style={{ marginBottom: '17px' }} />
        )
        setOpenSerachLoader(false)
      }else{
        console.log("enter");
        hqApi.get('/reservation/checkAvailabilityVehicles', {
            params: {
                pick_up_date : pickUpDateTime,
                pick_up_location_id : pickUpLoaction,
                return_location_id :dropLoaction,
                return_date : dropDateTime,
            }
        }).then((res) => {
            setAvailableVehicle(res.data);
            setBookingStep(1);

            setPageTrans(true)
            setMovePage('Book Now')
            setOpenSerachLoader(false)

            setTimeout(() => {
              navigate('causeway-booking') 
            }, 1000)

        }).catch((err) => {
            console.log(err);
            setTimeout(() => {
                setOpenSerachLoader(false)
            } , 1000)
        })
        console.log(allVehcialeTypes);
      }
    }

    const handlePickUpDate = (date) => {
        setPickupDate(date);

        const nextDate = new Date(date);
        nextDate.setDate(nextDate.getDate() + 1); 
        setDropDate(nextDate);
    }

    return(
        <div className='max-w-[1300px] bg-white px-[15px] sm:p-[15px] w-full  rounded-lg mx-auto mt-7 custom-flex !justify-between flex-wrap !gap-0' >
            {/* <div className='basis-[100%] sm:basis-[49%] md:basis-[32%] lg:basis-[22%] xl:basis-[18%] w-full' >
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className='cursor-pointer  my-0 py-[15px] sm:py-0 sm:my-[7px] px-[0px] custom-flex justify-start gap-2 items-baseline w-full border-b sm:border-b-0 sm:border-r border-solid border-[#dee2e6]' >
                            <img src={Car} alt='car' className='translate-y-2' />
                            <div className='border-left w-full pr-3' >
                                    <h2 className='font-semibold text-[17px] sm:text-[20px]' >Car Type</h2>
                                    <p className='text-grayDarkCM w-full text-[14px] custom-flex gap-3 justify-between' >
                                        {
                                            selectedVehitype?.name ? (
                                                <span>{selectedVehitype?.name}</span>
                                            )
                                            :
                                            (
                                                <span>Choose Your Car Type</span>
                                            )
                                        }
                                        
                                        <IoIosArrowDown size={22}  />
                                    </p>
                            </div>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[300px] xxsm:w-[380px] xsm:w-[480px] sm:w-[300px] md:w-[235px] p-[10px]">
                        {
                            allVehcialeTypes?.map((vt , index) => (
                                <DropdownMenuItem onClick={() => setSelectedVehiType({id : vt?.id , name : vt?.label})} key={index} >{vt?.label}</DropdownMenuItem>
                            ))
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
            </div> */}
            <div className='basis-[100%] sm:basis-[49%] md:basis-[32%] lg:basis-[22%] xl:basis-[24%]' >
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className='cursor-pointer my-0 py-[15px] sm:py-0 sm:my-[10px] px-[0px] pl-[0px] xm:pl-[10px]  custom-flex justify-start gap-2 items-baseline w-full border-b sm:border-b-0 sm:border-r border-solid border-[#dee2e6]' >
                            <img src={Location} alt='location' className='translate-y-2' />
                            <div className='border-left w-full pr-3' >
                                <h2 className='font-semibold text-[17px] sm:text-[20px]' >Pickup Location</h2>
                                <p className='text-grayDarkCM w-full text-[14px] custom-flex gap-3 justify-between' >
                                    
                                    {
                                            selectedPickLoc?.name ? (
                                                <span>
                                                    {selectedPickLoc?.name?.length > 20 
                                                    ? `${selectedPickLoc.name.slice(0, 17)}...` 
                                                    : selectedPickLoc?.name}
                                                </span>
                                            )
                                            :
                                            (
                                                <span>Pickup Location</span>
                                            )
                                    }
                                    <IoIosArrowDown size={22}  />
                                </p>
                            </div>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[300px] xxsm:w-[380px] xsm:w-[480px] sm:w-[300px] md:w-[280px] h-[200px] overflow-y-scroll p-[10px]">
                        {
                            allLocation?.filter((loc) => loc?.active === true).map((loc , index) => (
                                <DropdownMenuItem onClick={() => setSelectedPickLoc({id : loc?.id , name : loc?.name})} key={index} >{loc?.name}</DropdownMenuItem>
                            ))
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className='basis-[100%] sm:basis-[49%] md:basis-[32%] lg:basis-[22%] xl:basis-[23%] ' >
                    <Popover open={pickupTimeOpen} onOpenChange={() => hanlePickUpTime(false)}>
                        <PopoverTrigger asChild>
                            <div className='my-0 cursor-pointer py-[15px] sm:py-0 sm:my-[10px] px-[0px] pl-[0px] md:pl-[10px] custom-flex justify-start gap-2 items-baseline w-full border-b sm:border-b-0 sm:border-r border-solid border-[#dee2e6]' >
                                <img src={Calender} alt='calender'  className='translate-y-2' />
                                <div className='border-left w-full pr-3' >
                                    <h2 className='font-semibold text-[17px] sm:text-[20px]' >Pickup Date</h2>
                                    <p className='text-grayDarkCM w-full text-[14px] custom-flex gap-3 justify-between' >
                                        <span>{convertDate(pickupDate)} - {convertTime(pickupTime)} </span>
                                        <IoIosArrowDown size={22}  />
                                    </p>
                                </div>
                            </div>
                        </PopoverTrigger>
                        <PopoverContent className="p-0" align="bottom">
                            <Calendar
                                    mode="single"
                                    selected={pickupDate}
                                    onSelect={(newdate) => handlePickUpDate(newdate)}
                                    initialFocus
                                    disabled={(date) =>
                                        startOfDay(date) < startOfDay(new Date()) 
                                    }
                            />
                            <div className="p-3 border-t border-border">
                                <TimePickerDemo
                                    setDate={(newDay) => handleClosePickupTime(newDay)}
                                    date={pickupTime}
                                />
                            </div>
                            <div className='px-3 pb-3' >
                                <Button onClick={() => hanlePickUpTime(true)} >Pick</Button> 
                            </div>
                        </PopoverContent>
                    </Popover>
            </div>
            <div className='basis-[100%] sm:basis-[49%] md:basis-[32%] lg:basis-[22%] xl:basis-[23%]' >
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className='cursor-pointer my-0 py-[15px] sm:py-0 sm:my-[10px] px-[0px] pl-[0px] lg:pl-[10px]  custom-flex justify-start gap-2 items-baseline w-full border-b sm:border-b-0 sm:border-r border-solid border-[#dee2e6]' >
                            <img src={Location} alt='location'  className='translate-y-2' />
                            <div className='border-left w-full pr-3' >
                                <h2 className='font-semibold text-[17px] sm:text-[20px]' >Dropoff Location</h2>
                                <p className='text-grayDarkCM !w-full text-[14px] custom-flex justify-between gap-3 ' >
                                {
                                            selectedDropLoc?.name ? (
                                                <span>
                                                    {selectedDropLoc?.name?.length > 20 
                                                    ? `${selectedDropLoc.name.slice(0, 17)}...` 
                                                    : selectedDropLoc?.name}
                                                </span>
                                            )
                                            :
                                            (
                                                <span>Dropoff Location</span>
                                            )
                                    }
                                    <IoIosArrowDown size={22}  />
                                </p>
                            </div>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[300px] xxsm:w-[380px] xsm:w-[480px] sm:w-[300px] md:w-[280px] h-[200px] overflow-y-scroll p-[10px]">
                        {
                            allLocation?.filter((loc) => loc?.active === true).map((loc , index) => (
                                <DropdownMenuItem onClick={() => setSelectedDropLoc({id : loc?.id , name : loc?.name})} key={index} >{loc?.name}</DropdownMenuItem>
                            ))
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className='basis-[100%]  sm:basis-[49%] md:basis-[32%] lg:basis-[22%] xl:basis-[23%] ' >
                    <Popover open={dropTimeOpen} onOpenChange={() => hanlDropUpTime(false )}>
                        <PopoverTrigger asChild>
                            <div className='my-0 py-[15px] cursor-pointer sm:py-0 sm:my-[10px] px-[0px] pl-[0px] xl:pl-[10px] custom-flex justify-start gap-2 items-baseline w-full border-none sm:border-b-0 sm:border-r sm:border-solid border-[#dee2e6]' >
                                <img src={Calender} alt='calender'  className='translate-y-2' />
                                <div className='border-left w-full pr-3' >
                                    <h2 className='font-semibold  text-[17px] sm:text-[20px]' >Return Date</h2>
                                    <p className='text-grayDarkCM w-full text-[14px] custom-flex gap-3 justify-between' >
                                        <span>{convertDate(dropDate)} - {convertTime(dropTime)} </span>
                                        <IoIosArrowDown size={22}  />
                                    </p>
                                </div>
                            </div>
                        </PopoverTrigger>
                        <PopoverContent className=" p-0" align="bottom">
                            <Calendar
                                    mode="single"
                                    selected={dropDate}
                                    onSelect={(newdate) =>  newdate && setDropDate(newdate)}
                                    initialFocus
                                    disabled={(date) =>
                                        startOfDay(date) <= startOfDay(pickupDate)   
                                    }
                            />
                            <div className="p-3 border-t border-border">
                                <TimePickerDemo
                                    setDate={(newDay) => handleCloseDropTime(newDay)}
                                    date={dropTime}
                                />
                            </div>
                            <div className='px-3 pb-3' >
                                <Button onClick={() => hanlDropUpTime(true)} >Pick</Button> 
                            </div>
                        </PopoverContent>
                    </Popover>
            </div>
            
            <div className='basis-[100%] sm:basis-[49%] md:basis-[32%] lg:basis-[77%] xl:basis-[6%]  my-[15px] w-full h-full justify-start xl:justify-center items-center flex' >
                <div onClick={checkVehicaleAvailability} className='w-full cursor-pointer lg:w-[60px] flex justify-center items-center gap-2 h-[60px] bg-primaryCM text-white rounded-full' >
                    {
                        !openSerachLoader ?
                        (
                            <div className='flex justify-center items-center gap-2' >
                                <p className='text-white text-[18px] font-semibold block lg:hidden' >Search</p>
                                <GoSearch size={28} className='!m-0' color='#FF' />
                            </div>
                        )
                        :
                        (
                            <Oval
                                visible={true}
                                height="30"
                                width="30"
                                color="#fff"
                                ariaLabel="oval-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                strokeWidth="3"
                                secondaryColor="#cecece"
                            />
                        )
                    }
                </div>
            </div>
        </div>  
    )
}

const ListModel = () => {
    const {allVehcialeTypes , allVehicales} = useCausewayHqContext()

    return(
        <div className='custom-flex !justify-center gap-2 mt-7 max-w-[850px] mx-auto flex-wrap ' >
           { 
                allVehcialeTypes
                    ?.filter(data => data.id !== 1)
                    .map((data, index) => (
                        <EachModel key={index} data={data} />
                    ))
            }
        </div>
    )
}

const EachModel = ({data}) => {
    return(
        <div className='glass-bg basis-[48%]  sm:basis-[18%] rounded-3xl py-[12px] flex justify-center items-center cursor-pointer' >
            <Link to={`/causeway-vehicles?carType=${data?.id}`} className='custom-flex gap-2 !justify-start' >
                {/* <TbCarSuv className='text-white' size={25} /> */}
                
                <img src={data?.images[2]?.public_link} alt={data?.images[2]?.label} className='w-[35px] object-contain'  />
                <p className='text-white font-semibold' >{data?.label}</p>
            </Link>
        </div>
    )
}

export default Banner