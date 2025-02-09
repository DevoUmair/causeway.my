import { useCausewayHqContext } from '../../../../context/CausewayHqContextProvider'
import React, { useEffect, useState } from 'react'
import logo from '../../../../assets/logo/logo.png'

import { useCausewayMyContext } from '../../../../context/CausewayMyContextProvider';
import { FaCalendarCheck, FaCarAlt, FaEye, FaLinux } from 'react-icons/fa';
import { BsFuelPump, BsLuggage, BsSpeedometer2 } from 'react-icons/bs';
import { CiCalendar } from 'react-icons/ci';
import { MdArrowBackIosNew, MdArrowForwardIos, MdOutlineColorLens, MdOutlineRadio } from 'react-icons/md';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LucideDoorOpen } from 'lucide-react';
import { PiSteeringWheel } from 'react-icons/pi';
import hqApi from '../../../../axios/Axios';

const Step02 = () => {
    const {availableVehicle , bookingStep , allVehicales , allVehcialeTypes , allVehcialeClasses } = useCausewayHqContext()
    const {setOpenSerachLoader} = useCausewayMyContext()
    const [allAvailableVehicle , setAllAvailableBehicle] = useState([])
    const [availableVehicleType , setAvailableVehicleType] = useState([])
    const [filterdAvailableVehicle , setFilterdAvailableBehicle] = useState([])
     const [selectedVehiType , setSelecteVehiType] = useState('All')

    const PrevArrow = ({onClick}) => (
        <div onClick={onClick} className='custom-border absolute bottom-0   !border-primaryCM bg-transparent hover:!border-secondaryCM hover:bg-secondaryCM cursor-pointer custom-trans text-primaryCM hover:text-black rounded-full py-[10px] px-[20px]' >
            <MdArrowBackIosNew />
        </div>
    )  
    
    const NextArrow = ({onClick}) => (
        <div onClick={onClick} className='custom-border absolute bottom-0 left-[68px]  !border-primaryCM bg-transparent hover:!border-secondaryCM hover:bg-secondaryCM cursor-pointer custom-trans text-primaryCM hover:text-black rounded-full py-[10px] px-[20px]' >
            <MdArrowForwardIos />
        </div>
    )
        

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <NextArrow  />,
        prevArrow: <PrevArrow />,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(() => {
        if(allVehcialeTypes.length > 0){
            const availableVehicleClassesId = availableVehicle
              ?.filter((f) => f.status === "available")
              .map((f) => f.vehicle_class_id);
            
            const vehicleClass = allVehcialeClasses.filter((f) =>
              availableVehicleClassesId?.includes(f.id)
            );
            
            const availableVehileVehiType = Array.from(
                allVehicales
                  ?.filter(
                    (f) =>
                      availableVehicleClassesId.includes(f?.vehicle_class_id) && f?.vehicle_type !== null // Skip if vehicle_type is null
                  )
                  ?.reduce((map, f) => {
                    const vehicleTypeLabel = f?.vehicle_type?.label; // Assuming vehicle_type has a "label"
                    // If the vehicle_type already exists in the map, add the vehicle_class_id to the array
                    if (map.has(vehicleTypeLabel)) {
                      const existing = map.get(vehicleTypeLabel);
                      existing.vehicle_class_ids.add(f.vehicle_class_id); // Add to Set for unique IDs
                    } else {
                      // Otherwise, create a new entry for this vehicle_type
                      map.set(vehicleTypeLabel, {
                        vehicle_type: f?.vehicle_type,
                        vehicle_class_ids: new Set([f?.vehicle_class_id]), // Use Set to ensure uniqueness
                      });
                    }
                    return map;
                  }, new Map())
                  .values() // Extract the grouped values from the Map
              )
              .map((item) => ({
                ...item,
                vehicle_class_ids: Array.from(item.vehicle_class_ids), // Convert Set back to Array
            }));
            setAvailableVehicleType(availableVehileVehiType);
            
            setAllAvailableBehicle(vehicleClass)
            setFilterdAvailableBehicle(vehicleClass)
       
        }
    },[bookingStep , allVehcialeTypes])

    const fillternewVehicales = (vehiType) => {
        setOpenSerachLoader(true)
        setTimeout(() => {
            setSelecteVehiType(vehiType)
            if(vehiType !== 'All'){
                const vehicleClassIdOfType = availableVehicleType
                    ?.find((f) => f.vehicle_type.label === vehiType);

                const fillterdVehicales = allVehcialeClasses?.filter((nv) => vehicleClassIdOfType?.vehicle_class_ids.includes(nv?.id) )
                setFilterdAvailableBehicle(fillterdVehicales)
            }else{
                setFilterdAvailableBehicle(allAvailableVehicle)
            }
             setOpenSerachLoader(false)
        },2000)
    }

    return(
        <div className='relative ' >
             <div className='mb-[30px] custom-border-bottom w-full custom-flex justify-start gap-8' >
                     <p onClick={() => fillternewVehicales('All')} className={`py-[8px] font-[500] cursor-pointer text-black text-[16px] ${selectedVehiType === 'All' && 'carTypeBorderBottom'} `} >All</p>
                    {
                        allVehcialeTypes?.map((vt , index) => {
                            if(availableVehicleType?.filter((vehi) => vehi?.vehicle_type?.id === vt?.id).length > 0){
                                return(
                                    <p key={index} onClick={() => fillternewVehicales(vt?.label)}  className={`py-[8px] cursor-pointer font-[500] text-black text-[16px] ${selectedVehiType === vt?.label && 'carTypeBorderBottom'} `} >{vt?.label}</p>
                                )
                            }
                        })
                    }
            </div>
            <div className='flteer-vehi-container ' >
                        {
                            filterdAvailableVehicle?.map((data , index) => {
                                const vehicleType = availableVehicleType?.filter((f) => f?.vehicle_class_ids.includes(data?.id))[0]?.vehicle_type
                                return(
                                    <div key={index} >
                                        <EachVehicale data={data} type={vehicleType}  />
                                    </div>
                                )
                            })
                        }
            </div>  
        </div>
    )
}

const EachVehicale = ({data , type}) => {
    const [vehiPrice , setVehiPrice] = useState("")
    const [totVehiPrice , setTotVehiPrice] = useState("")
    const [totDays , setTotDays] = useState("")
    const { availableVehicle , setBookingStep , setSelectedVehicleBook  , selectedVehicleBook , setReservationDetails  , pickupDate , dropDate , pickupTime , dropTime , selectedDropLoc , selectedPickLoc , setAdditionalCharges } = useCausewayHqContext() 
    const {setSliderImageList , setImageSliderStatus ,  setOpenSerachLoader} = useCausewayMyContext()
    

    useEffect(() => {
        const vehicPriceVehic = availableVehicle?.filter((vc) => vc?.vehicle_class_id === data?.id)[0] 
        const differenceInDays = vehicPriceVehic?.price?.total_days
        setTotDays(differenceInDays)


        if (data) {
            let price
            if(differenceInDays > 0){
                price = (vehicPriceVehic?.valueWithoutTax?.amount) / differenceInDays;
            }else{
                price = vehicPriceVehic?.valueWithoutTax?.amount;
            }
            setTotVehiPrice(vehicPriceVehic?.valueWithoutTax?.amount_for_display)

            const numericPrice = typeof price === 'number' ? price : parseFloat(price);
        
            const formattedPrice =
                !isNaN(numericPrice) ? `${numericPrice.toFixed(2).replace('.', ',')}` : 'N/A';
        
            setVehiPrice(formattedPrice);
        }
    },[data , selectedVehicleBook])
    
    const openImageSlider = () => {
        setImageSliderStatus(true) 
        setSliderImageList(data?.images)
    }

    const onClickVehicleSelect = async () => {
        setOpenSerachLoader(true)
        try {
            const response = await hqApi.post('/reservation/checkVehiclePrice', null, {
                params: {
                    pick_up_date: convertDate(pickupDate),
                    return_date: convertDate(dropDate),
                    pick_up_time: convertTime(pickupTime),
                    return_time: convertTime(dropTime),
                    brand_id: 1,
                    vehicle_class_id: data?.id,
                    pick_up_location: selectedPickLoc?.id,  // Example location, replace as needed
                    return_location: selectedDropLoc?.id   // Example location, replace as needed
                }
            });
            const response2 = await hqApi.post('/reservation/getAdditonalCharges', null, {
                params: {
                    pick_up_date: convertDate(pickupDate),
                    return_date: convertDate(dropDate),
                    pick_up_time: convertTime(pickupTime),
                    return_time: convertTime(dropTime),
                    brand_id: 1,
                    vehicle_class_id: data?.id,
                    pick_up_location: selectedPickLoc?.id,  // Example location, replace as needed
                    return_location: selectedDropLoc?.id   // Example location, replace as needed
                }
            });
            const vehicPriceVehic = availableVehicle?.filter((vc) => vc?.vehicle_class_id === data?.id)[0] 

            const items = response2?.data
            const groupedItems = items?.reduce((acc, item) => {
                const categoryId = item?.additional_charge_category.label?.en;
                if (!acc[categoryId]) acc[categoryId] = [];
                acc[categoryId].push(item);
                return acc;
            }, {});
            
            setAdditionalCharges(groupedItems);
            
            setTimeout(() => {
                setReservationDetails(response.data?.data)
                setSelectedVehicleBook(vehicPriceVehic);
                setOpenSerachLoader(false)
                setBookingStep(2)
            },1000) 
        } catch (err) {
            setOpenSerachLoader(false)
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

    return(
        <div className='w-full rounded-2xl custom-border overflow-hidden bg-white ' >
            <div className='flex relative justify-between flex-col sm:flex-row' >
                <div className='basis-[100%]  xsm:basis-[40%] relative' >
                    <div className='absolute top-3 p-[7px] cursor-pointer rounded-full glass-bg glass-bg-active left-3 flex justify-center items-center z-40' >            
                        <FaEye onClick={openImageSlider} size={16} color='#fff' />
                    </div>
                    <div className={`absolute top-3 right-9`}>
                        <img className='w-[100px] object-contain' src={logo} alt='logo' />
                    </div>
                    <img src={data?.images[0]?.public_link} className=' w-[100%]  h-full object-cover' />
                </div>
                <div className='px-[15px] xsm:pl-[15px] xl:pl-[30px] py-[30px] custom-max-w  basis-[100%]  xsm:basis-[60%] bg-white rounded-tl-2xl rounded-bl-2xl rounded-tr-2xl xsm:rounded-tr-none translate-x-0 translate-y-[-20px] xsm:translate-y-0 xsm:translate-x-[-20px]' >
                    <div className='custom-border-bottom pb-[30px]' >
                        <div>
                            <h3 className='font-semibold text-[20px] sm:text-[24px]' >{data?.name} <span className='text-[17px] text-ptextCM font-medium' > - {type?.label}</span> </h3>
                        </div>
                        <div className='mt-[20px]  custom-flex gap-7 justify-start flex-wrap' >
                           {
                            data?.features?.map((data) => {
                               if(data?.label === 'Automatic Transmission' || data?.label === 'Manual Transmission'){
                                    return(
                                        <div className='custom-flex justify-center items-center gap-2 text-grayDarkCM flex-col' >
                                            <FaCarAlt size={21} />
                                            <p className='text-[14px]' >{data?.label}</p>
                                        </div>
                                    )
                               }
                               if(data?.label === 'Airconditioning'){
                                    return(
                                        <div className='custom-flex justify-center items-center gap-2 text-grayDarkCM flex-col' >
                                            <FaLinux size={21} />
                                            <p className='text-[14px]' >{data?.label}</p>
                                        </div>
                                    )
                               }
                               if(data?.label === '4-doors' || data?.label === '5-doors'){
                                    return(
                                        <div className='custom-flex justify-center items-center gap-2 text-grayDarkCM flex-col' >
                                            <LucideDoorOpen size={21} />
                                            <p className='text-[14px]' >{data?.label}</p>
                                        </div>
                                    )
                               }
                               if(data?.label === 'Power Steering'){
                                    return(
                                        <div className='custom-flex justify-center items-center gap-2 text-grayDarkCM flex-col' >
                                            <PiSteeringWheel size={21} />
                                            <p className='text-[14px]' >{data?.label}</p>
                                        </div>
                                    )
                               }
                               if(data?.label === 'Radio/CD Player'){
                                    return(
                                        <div className='custom-flex justify-center items-center gap-2 text-grayDarkCM flex-col' >
                                            <MdOutlineRadio size={21}/>
                                            <p className='text-[14px]' >{data?.label}</p>
                                        </div>
                                    )
                               }
                               if(data?.label === '3 Luggage'){
                                    return(
                                        <div className='custom-flex justify-center items-center gap-2 text-grayDarkCM flex-col' >
                                            <BsLuggage size={21} />
                                            <p className='text-[14px]' >{data?.label}</p>
                                        </div>
                                    )
                               }
                            })
                           } 
                        </div>
                    </div>
                    <div className='flex justify-between mt-[20px]' >
                        <div className='flex justify-start gap-2 items-end' >
                            <div>
                                {
                                    vehiPrice && 
                                    ( 
                                        <div>
                                            <p className='font-semibold text-[25px] flex justify-start gap-2 items-baseline'>
                                                <span>RM {vehiPrice}</span>
                                                <span className='text-ptextCM text-[12px]' >/ day</span>
                                            </p>
                                    
                                            <p className='text-grayDarkCM text-[12px]' >
                                                <span>{totVehiPrice}</span> total for <span>{totDays}</span> Days
                                                Excl. taxes & insurance(s)</p>
                                        </div>

                                    )
                                }
                            </div>
                        </div>
                        <button onClick={onClickVehicleSelect} className={`flex justify-center gap-2 items-center ${selectedVehicleBook?.vehicle_class_id == data?.id ? 'bg-green-700' : 'bg-primaryCM' } px-4 !py-[7px] rounded-lg !text-[13px] text-white  font-bold`} >
                            <FaCalendarCheck />
                            {
                                selectedVehicleBook?.vehicle_class_id == data?.id ?
                                (<span>Booked</span>)
                                :
                                (<span>Booknow</span>)
                            }
                            
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}


function shuffleVehicleClasses(vehicles) {
    const result = [];
    const vehicleGroups = {};

    // Group vehicles by their vehicle_class_id
    vehicles.forEach(vehicle => {
        const classId = vehicle?.vehicle_class_id;
        if (!vehicleGroups[classId]) vehicleGroups[classId] = [];
        vehicleGroups[classId].push(vehicle);
    });

    const groupKeys = Object.keys(vehicleGroups);

    // Shuffle group keys to randomize initial order
    groupKeys.sort(() => Math.random() - 0.5);

    while (result.length < vehicles.length) {
        let added = false;

        for (let i = 0; i < groupKeys.length; i++) {
            const key = groupKeys[i];

            // Check if the group has vehicles left
            if (vehicleGroups[key].length > 0) {
                // Ensure the same class ID does not appear consecutively
                if (result.length === 0 || result[result.length - 1].vehicle_class_id !== key) {
                    result.push(vehicleGroups[key].shift());
                    added = true;
                }
            }
        }

        // If no vehicle was added in a pass, reshuffle groupKeys
        if (!added) {
            groupKeys.sort(() => Math.random() - 0.5);
        }
    }

    return result;
}

export default Step02