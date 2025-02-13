import React, { useEffect, useState } from 'react'
import './AllVehicales.css'


import { MdArrowBackIosNew, MdArrowForwardIos, MdOutlineArrowOutward } from 'react-icons/md'
import { BsFuelPump, BsSpeedometer2 } from 'react-icons/bs'
import { FaBookmark, FaCalendarCheck, FaEye } from 'react-icons/fa'
import { CiCalendar } from "react-icons/ci";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HeaderText from '../../../components/HeaderText'
import { useCausewayMyContext } from '../../../context/CausewayMyContextProvider'
import { useCausewayHqContext } from '../../../context/CausewayHqContextProvider'
import { Link, useNavigate } from 'react-router-dom'

function AllVehicales() {
    const [selectedVehiType , setSelecteVehiType] = useState("All")
    const [newVehicales , setAllNewVehicales] = useState([])
    const [newVehicalesFillterd , setNewVehicalesFillterd] = useState([])
    const {setCursorVariant , setTextCursor ,   setPageTrans , setMovePage , setOpenSerachLoader } = useCausewayMyContext()
    const {allVehicales , allVehcialeClasses , allVehcialeTypes} = useCausewayHqContext()

    const navigate = useNavigate()

    const textEnter = () => {
      setCursorVariant("Drag")
      setTextCursor("Drag")
    }  
    const textLeave = () => {
        setTextCursor("")
      setCursorVariant("default")
    }  


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
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                }
            },
            {
            breakpoint: 850,
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

    useEffect(() =>{
        if (allVehicales?.length > 0) {
            const filteredVehicles = allVehicales
                .slice()
                .filter(vehicle => {
                    return (vehicle.status === "available" || vehicle.status === "rental") && vehicle?.vehicle_class?.images.length > 0;
                }).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))   
    
            const shuffledFillterdVehicales = shuffleVehicleClasses(filteredVehicles)
    
            setAllNewVehicales(
                shuffledFillterdVehicales    
            );
            setNewVehicalesFillterd(
                shuffledFillterdVehicales
            )
        }
    },[allVehicales])


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

    

    const fillternewVehicales = (vehiType) => {
        setOpenSerachLoader(true)
        setTimeout(() => {
            setSelecteVehiType(vehiType)
            if(vehiType !== 'All'){
                const fillterdVehicales = newVehicales?.filter((nv) => nv?.vehicle_type?.label === vehiType)
                setNewVehicalesFillterd(fillterdVehicales);
            }else{
                setNewVehicalesFillterd(newVehicales)
            }
             setOpenSerachLoader(false)
        },3500)
    }

    const handleNavigation = (nexPage) => {
        const path = './causeway-vehicles'
  
        setPageTrans(true)
        setMovePage(nexPage)
        setTimeout(() => {
            navigate(path)
        }, 1000)
    }

  return (
    <div className='bg-[#F8F8F8] w-full' >
        <div className='custom-container mt-[80px] ' >

                <div className='custom-flex !justify-between items-center ' >
                    <HeaderText text={'Explore All Vehicles'} smallText={'Book With Us'} isCenter={false} issmallNeed={false} />

                    <Link 
                        to={'./causeway-vehicles'}
                        // onClick={() => handleNavigation('Causeway vehicales') }  
                        className='bg-primaryCM hidden xsm:flex basis-[30%] xsm:basis-[25%] sm:basis-[18%] md:basis-[16%] lg:basis-[14%] xl:basis-[10%] 2xl:basis-[8%] w-fit px-[15px] py-[10px] rounded-lg font-bold text-white custom-flex justify-center items-center gap-1  text-[15px] cursor-pointer' >
                        <span className='font-semibold' >View All</span>
                        <MdOutlineArrowOutward />
                    </Link>
                </div>

                <div className='mt-[30px] custom-border-bottom w-full custom-flex justify-start gap-4 sm:gap-8' >
                    <p onClick={() => fillternewVehicales('All')} className={`py-[8px] font-[500] cursor-pointer text-black text-[16px] ${selectedVehiType === 'All' && 'carTypeBorderBottom'} `} >All</p>
                    {
                        allVehcialeTypes?.map((vt , index) => {
                            if(newVehicales?.filter((vehi) => vehi?.vehicle_type_id === vt?.id).length > 0){
                                return(
                                    <p key={index} onClick={() => fillternewVehicales(vt?.label)}  className={`py-[8px] cursor-pointer font-[500] text-black text-[16px] ${selectedVehiType === vt?.label && 'carTypeBorderBottom'} `} >{vt?.label}</p>
                                )
                            }
                        })
                    }
                </div>

                <div className='mt-[30px] relative'  >
                    {
                        newVehicalesFillterd?.length > 4 ? 
                        (
                            <Slider   className='pb-12' {...settings}>
                                {
                                    newVehicalesFillterd?.map((data , index) => (
                                        <div key={index} className='px-[4px]' onMouseEnter={textEnter} onMouseLeave={textLeave} >
                                            <EachVehicale data={data} index={index} type={selectedVehiType} />
                                        </div>
                                    ))
                                }
                            </Slider>
                        )
                        :
                        (
                            <div className='allVehiGrid-container' >
                                {
                                    newVehicalesFillterd?.map((data , index) => (
                                        <div key={index} onMouseEnter={textEnter} onMouseLeave={textLeave} >
                                            <EachVehicale data={data} index={index} type={selectedVehiType} />
                                        </div>
                                    ))
                                }
                            </div>

                        )
                    }
                </div>

                {/* <div className='custom-flex justify-start gap-4 mt-[30px]' >
                    
                    
                </div> */}
            </div>
    </div>
  )
}

const EachVehicale = ({data , index , type}) => {
    const [vehiPrice , setVehiPrice] = useState("")
    const [vehicaleClassData , setVehicaleClassData] = useState({})
    const { allVehcialeClasses , allVehicales , referenceVehicles} = useCausewayHqContext() 
    const {setSliderImageList , setImageSliderStatus} = useCausewayMyContext()
    const [selectedImage , setSelectedImage] = useState()


    useEffect(() => {
        const images = data?.vehicle_class?.images || [];
        const selectedImage = images.length > 0 ? images[index % images.length] : null;

        setSelectedImage(selectedImage)

        const vehicaleClass = allVehcialeClasses?.filter((vc) => vc?.id === data?.vehicle_class_id)[0] 
        const vehicPriceVehic = referenceVehicles?.filter((vc) => vc?.vehicle_class_id === data?.vehicle_class_id)[0] 
        
        // const priceLessPrio = vehicPriceVehic?.valueWithoutTax?.amount;
        // const pricePrio = vehicaleClass?.active_rates[0]?.price_intervals[0]?.price;
        // const price = pricePrio === "" ? priceLessPrio : pricePrio;
        const price = vehicPriceVehic?.valueWithoutTax?.amount;
        setVehicaleClassData(vehicaleClass)
      
    
            const numericPrice = typeof price === 'number' ? price : parseFloat(price);
        
            const formattedPrice =
                !isNaN(numericPrice) ? `${numericPrice.toFixed(2).replace('.', ',')}` : 'N/A';
        
            setVehiPrice(formattedPrice);
        
    },[data])

    const openImageSlider = () => {
        setImageSliderStatus(true) 
        setSliderImageList(data?.vehicle_class?.images)
    }

    return(
        <div className='eachVehi w-full rounded-xl bg-white custom-border overflow-hidden h-[490px]' >
            <div className='w-full h-[200px] relative overflow-hidden ' >
                <div className='absolute top-3 p-[10px] rounded-full glass-bg glass-bg-active left-3 flex justify-center items-center z-40' >
                    {/* <CiBookmark size={22} color='#fff' /> */}
                    {/* <FaBookmark size={16} color='#fff'  /> */}
                    <FaEye onClick={openImageSlider} size={16} color='#fff' />
                </div>

                {
                    data?.vehicle_type && 
                    (
                        <div className={`absolute top-3 px-[16px] py-[8px] rounded-full bg-blue-700 right-3 flex justify-center items-center z-40`} >
                            <p className='font-semibold text-white text-[13px]' >{data?.vehicle_type?.label}</p>
                        </div>
                    )
                }
                <img src={selectedImage?.public_link} className='object-cover w-full h-full' />
            </div>
            <div className='px-[15px] sm:px-[25px]' >
                <div className='py-[20px] custom-border-bottom' >
                        <h3 className='font-semibold text-[19px]' >{data?.label?.split('-')[0]}</h3>
                        <p className='text-[13px] text-grayDarkCM font-normal' >{vehicaleClassData?.name} - {data?.vehicle_type?.label}</p>
                </div>
                <div className='py-[18px] custom-border-bottom custom-flex gap-2 justify-between' >
                    <div className='custom-flex justify-center items-center gap-2 text-grayDarkCM flex-col' >
                        <BsFuelPump />
                        <p className='text-[14px]' >{data?.fuel_level_for_display}</p>
                    </div>
                    <div className='custom-flex justify-center items-center gap-2 text-grayDarkCM flex-col' >
                        {/* <BiTachometer size={25} /> */}
                        <BsSpeedometer2 size={21} />
                        <p className='text-[14px]' >{data?.odometer} miles</p>
                    </div>
                    <div className='custom-flex justify-center items-center gap-2 text-grayDarkCM flex-col' >
                        <CiCalendar size={21} />
                        <p className='text-[14px]' >{data?.year}</p>
                    </div>
                </div>
                <div className='py-[18px] custom-flex gap-2 justify-between items-end' >
                    <div>
                        <p className='font-semibold text-[22px] md:text-[18px] flex justify-start gap-2 items-baseline'>
                            <span>RM {vehiPrice}</span>
                            <span className='text-ptextCM text-[15px] md:text-[12px]' >/ day</span>
                        </p>
                        
                    </div>
                    {/* <button className='primaryBtn mt-6 flex justify-center gap-2 items-center bg-primaryCM px-2 py-[8px] rounded-lg text-white hover:text-black before:bg-secondaryCM font-bold' >
                        <span className='font-semibold text-[14px]' >View Details</span>
                        <MdOutlineArrowOutward />
                    </button> */}
                    <button className='primaryBtn flex justify-center gap-2 items-center bg-primaryCM px-4 py-[10px] rounded-lg !text-[13px] text-white hover:text-black before:bg-secondaryCM font-bold' >
                        <FaCalendarCheck />
                        <span>Book Now</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
    

export default AllVehicales