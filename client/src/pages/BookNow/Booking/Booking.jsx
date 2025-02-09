import { useCausewayHqContext } from '../../../context/CausewayHqContextProvider'
import { Step, StepLabel, Stepper } from '@mui/material'
import React, { useState } from 'react'
import { useMediaQuery, useTheme } from '@mui/material';
import { Button } from '../../../components/ui/button'
import hqApi from '../../../axios/Axios';
import { useCausewayMyContext } from '../../../context/CausewayMyContextProvider';
import Step01 from './Steps/Step01';
import Step02 from './Steps/Step02';
import BookingSummary from './Steps/BookingSummary';
import Step03 from './Steps/Step03';
import Step04 from './Steps/Step04';
import { RxCrossCircled } from 'react-icons/rx';
import { FaCheck } from 'react-icons/fa';
import Step05 from './Steps/Step05';

const bookingSteps = [
    "Dates", 
    "Vehicles",
    "Features", 
    "Customer",
    "Confirm",
]

const customerFeild = [
    {
        name : 'First Name',
        id:2,
    },
    {
        name : 'Last Name',
        id:3,
    },
    {
        name : 'Email Address',
        id:9,
    },
    {
        name : 'Phone Number',
        id:8,
    },
    {
        name : 'Street',
        id:193,
    },
    {
        name : 'City',
        id:195,
    },
    {
        name : 'State',
        id:196,
    },
    {
        name : 'Zip',
        id:198,
    },
    {
        name : 'Date Of Birth',
        id:15,
    },
    {
        name : 'Country',
        id:62,
    },
    {
        name : 'License',
        id:254,
    },
    {
        name : 'Expiration Date',
        id:256,
    },
]

const optionalFeild = [193 , 195 , 196 , 198]

function Booking() {
    const {setPayNowOpen , setReservedReservationDetail , selectedVehicleBook , setSelectedCustomer , conformationChecked , selectedCustomer , setCustomerData , customerData , selectedLicenseImages , setSelectedLicenseImages, bookingStep , setBookingStep , pickupDate ,  pickupTime , dropDate , dropTime  , selectedPickLoc , selectedDropLoc , setAvailableVehicle , selectedAdditionalCahrges } = useCausewayHqContext()
    const {setOpenSerachLoader  , notificationAvtive , setOpenBg , bookingSummaryOpen , setBookingSummaryOpen} = useCausewayMyContext()
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg')); // Detect small screens

    const handlePrevBtn = () => {
        if(bookingStep !== 0 ){
            setBookingStep((prev) => prev - 1)
            
        }
    }

    const handleNextBtn = async () => {
        if(bookingStep  < (bookingSteps.length - 1)){
            if(bookingStep === 0){
                checkVehicaleAvailability(true)
            } 
            if(bookingStep === 2){
                setOpenSerachLoader(true)

                setTimeout(() => {
                    setOpenSerachLoader(false)
                    setBookingStep(3)
                },1000)
            }
            if(bookingStep == 3){
               await saveContact()
            }   
        }
    }

    const saveContact = async () => {
                setOpenSerachLoader(true)
                const CustomerEmptyStringKeys = Object.keys(customerData).filter(key => customerData[key] === "");

                const filteredCustomerFields = customerFeild.filter(field => 
                    !optionalFeild.includes(field.id) && 
                    CustomerEmptyStringKeys.includes(field.id.toString())
                );

                if(filteredCustomerFields.length !== 0){
                    notificationAvtive(
                        `Please Fill ${filteredCustomerFields[0].name}`,
                        "Error",
                        true,
                        <RxCrossCircled size={20} weight="fill" color="#ffffff" style={{ marginBottom: '17px' }} />
                    ) 
                    setOpenSerachLoader(false)
                }else{
                    console.log(Object.keys(selectedCustomer)?.length);
                    if(Object.keys(selectedCustomer)?.length <= 0){
                        if(selectedLicenseImages.length >0){
                            const transformedObject = Object.entries(customerData).reduce((acc, [key, value]) => {
                                acc[`field_${key}`] = value;
                                return acc;
                            }, {});
                            
                            await hqApi.post('/customer/createCustomer', null, {
                                params: transformedObject
                            }).then((res) => {
                                setTimeout(() => {
                                    setCustomerData({
                                        2:"",
                                        3:"",
                                        9:"",
                                        8:"",
                                        193: "",
                                        195:"",
                                        196:"",
                                        198:"",
                                        15 : "",
                                        254:"",
                                        256:"",
                                        62:"",
                                    })
                                    setSelectedCustomer(res.data?.contact)
                                    console.log(res.data?.contact);
                                    saveLicenceImages(res.data?.contact?.id)
                                },1000)
                            });
                        }else{
                            notificationAvtive(
                                `Please Select Atleast License Image`,
                                "Error",
                                true,
                                <RxCrossCircled size={20} weight="fill" color="#ffffff" style={{ marginBottom: '17px' }} />
                            ) 
                            setOpenSerachLoader(false)
                        }
                    }else{
                        console.log("customer already there");
                        setTimeout(() => {
                            setOpenSerachLoader(false)
                            setBookingStep(4)
                        },1000)
                    }

                }
    } 

    
    const saveLicenceImages = async (customerId) => {
        try {
          for (const image of selectedLicenseImages) {
            const formData = new FormData();
            formData.append("item_id", customerId);
            formData.append("item_type", "contacts.3");
            formData.append("filename", image?.file.name);
            formData.append("field_id", "252");
            formData.append("file", image?.file);
     
            const response = await hqApi.post("/reservation/upload", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
          }
      
          setTimeout(() => {
            notificationAvtive(
                `Customer Created Successfully`,
                "Success",
                false,
                <FaCheck size={20} weight="fill" color="#ffffff" style={{ marginBottom: '17px' }} />
            )
            setOpenSerachLoader(false) 
            setBookingStep(4)
            setSelectedLicenseImages([])
          },1000)
        } catch (error) {
        }
    };
      
  
    const checkVehicaleAvailability = (isNext) => {
        setOpenSerachLoader(true)
        const pickUpDateTime = `${convertDate(pickupDate)} ${convertTime(pickupTime)}`
        const dropDateTime = `${convertDate(dropDate)} ${convertTime(dropTime)}`
        const pickUpLoaction = selectedPickLoc?.id
        const dropLoaction = selectedDropLoc?.id

        hqApi.get('/reservation/checkAvailabilityVehicles', {
            params: {
                pick_up_date : pickUpDateTime,
                pick_up_location_id : pickUpLoaction,
                return_location_id :dropLoaction,
                return_date : dropDateTime,
            }
        }).then((res) => {
            setTimeout(() => {
                setAvailableVehicle(res?.data);
                if(isNext){
                    setBookingStep((prev) => prev + 1)
                }
                setTimeout(() => {
                    setOpenSerachLoader(false)
                },500)
            } , 500)
        }).catch((err) => {
            setTimeout(() => {
                setOpenSerachLoader(false)
            } , 1000)
        })
    }
 

    const conformBookingBtn = () => {
        setOpenSerachLoader(true)
        if(conformationChecked){
            console.log("Selected Customer" , selectedCustomer);
            console.log("Pick Up Date" , pickupDate);
            console.log("Pick Up Time" , pickupTime);
            console.log("Drop Date" , dropDate);
            console.log("Drop Time" , dropTime);
            console.log("Selected Additional Charges" , selectedAdditionalCahrges);
            console.log("Selected Vehicale" , selectedVehicleBook);

            hqApi.post('/reservation/confirmReservation', null ,  {
                params: {
                    pick_up_date : convertDate(pickupDate),
                    return_date : convertDate(dropDate),
                    pick_up_location : selectedPickLoc?.id,
                    return_location : selectedDropLoc?.id, 
                    pick_up_time : convertTime(pickupTime),
                    return_time : convertTime(dropTime),
                    brand_id : 1,
                    vehicle_class_id : selectedVehicleBook?.vehicle_class_id,
                    additional_charges : selectedAdditionalCahrges,
                    customer_id : selectedCustomer?.id
                }
            }).then((res) => {
                console.log(res);
                if(res?.status === 200){
                    setReservedReservationDetail(res?.data?.data)
                    setTimeout(() => {
                        setOpenSerachLoader(false)
                        setPayNowOpen(true)
                    },1000)
                }else{
                    setTimeout(() => {
                        setOpenSerachLoader(false)
                    },1000)
                }
                
            }).catch((err) => {
                console.log(err);
                setOpenSerachLoader(false)
            })

        }else{
            notificationAvtive(
                `Please conform our privacy policy`,
                "Error",
                true,
                <RxCrossCircled size={20} weight="fill" color="#ffffff" style={{ marginBottom: '17px' }} />
            )
            setOpenSerachLoader(false) 
        }
    }

    const moveSteps = (index) => {
        if(index < bookingStep){
            setBookingStep(index)
        }
        // setBookingStep(index)
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
 
    const hanldeBookingSummary = () => {
        setOpenBg(true)
        setTimeout(() => {
            setBookingSummaryOpen(true)
        },100)
    }

  return (
    <div className='max-w-[1200px] lg:max-w-[1400px] mx-auto w-[95%]'>
        <div className='flex justify-between gap-1 items-center flex-col mt-[70px]'>
            <h1 className='text-center text-[40px] font-bold'>Book Now</h1>
            <p className='text-ptextCM text-[15px] font-medium text-center max-w-[600px] w-full mx-auto'>
                Do ipsum esse commodo et commodo nisi aute qui qui do non occaecat. Nulla voluptate Lorem eiusmod cillum irure ea excepteur.
            </p>
        </div>
        <div className='mt-[50px]' >
            <div className='w-full flex justify-end items-center mb-3 flex lg:hidden' >
                <Button onClick={hanldeBookingSummary}  >Check Booking Summary</Button>
            </div>
            <div className='flex justify-between items-start flex-row mxl:flex-col gap-[10px] mxl:gap-[50px]' >
                <div className='basis-[1%]  mxl:basis-[100%]  w-full'  >
                    <Stepper 
                        activeStep={bookingStep} 
                        orientation={isSmallScreen ? "vertical" : "horizontal"} // Dynamically set orientation
                        sx={{
                            flexDirection: isSmallScreen ? "column" : "row", // Adjust layout
                            alignItems: isSmallScreen ? "flex-start" : "center",
                            gap: isSmallScreen ? 2 : 4, // Adjust spacing
                        }}
                    >
                        {bookingSteps.map((item, index) => {
                            return (
                            <Step  key={index} >
                                <StepLabel
                                   onClick={() => moveSteps(index)}
                                    sx={{
                                        "& .Mui-active": {
                                        color: "#0F172A !important", // Active step color
                                        },
                                        "& .Mui-completed": {
                                        color: "green !important", // Completed step color
                                        },
                                        "& .MuiStepLabel-label": {
                                            cursor:'pointer',
                                            color: bookingStep === index ? "#0F172A" : "gray", // Label color based on active step
                                            fontSize: isSmallScreen ? "14px" : "17px", // Responsive font size
                                        },
                                    }}
                                >
                                    {
                                        !isSmallScreen && (
                                            item
                                        )
                                    }
                                </StepLabel>
                            </Step>
                            );
                        })}
                    </Stepper>
                </div>
                <div className=' basis-[99%] lg:basis-[100%] gap-[20px] flex justify-between items-start w-full relative' >
                    <div className='basis-[100%] lg:basis-[70%] relative w-full' >
                        {
                            bookingStep == 0 && 
                            (
                                <Step01 />
                            )
                        }
                        {
                            bookingStep == 1 && 
                            (
                                <Step02 />
                            )
                        }
                        {
                            bookingStep == 2 && 
                            (
                                <Step03 />
                            )
                        }
                        {
                            bookingStep == 3 && 
                            (
                                <Step04 />
                            )
                        }
                        {
                            bookingStep == 4 && 
                            (
                                <Step05 />
                            )
                        }
                    </div>
                    <div className={`${bookingSummaryOpen ? 'opacity-100 z-[1000]' : 'opacity-0 z-[-1000]'} lg:opacity-100 lg:z-0 basis-[0%] lg:basis-[30%]  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  lg:top-[130px] lg:left-0 lg:translate-x-0 lg:translate-y-0 fixed  lg:sticky w-[95%] max-w-[600px] mx-auto lg:w-full lg:max-w-full h-[400px] overflow-y-scroll lg:h-fit`} >
                            <BookingSummary />
                    </div>
                </div>
            </div>
           
        </div>
       
        <div className='mt-[50px] flex justify-between items-center' >
            <Button onClick={handlePrevBtn} disabled={bookingStep === 0}>Previous</Button>   
            {
                bookingStep >= 4 ? 
                (
                    <Button onClick={conformBookingBtn}>Confirm Booking</Button> 
                )
                :
                (
                    <Button onClick={handleNextBtn}>Next</Button> 
                )
            }  
        </div>

    </div>    
  )
}

export default Booking

