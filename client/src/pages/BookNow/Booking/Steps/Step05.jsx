import { useCausewayHqContext } from '../../../../context/CausewayHqContextProvider'
import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordionResrvation"
import CountryList from "react-select-country-list";
import { FaCarAlt, FaEye, FaLinux } from 'react-icons/fa';
import { useCausewayMyContext } from '../../../../context/CausewayMyContextProvider';
import logo from '../../../../assets/logo/logo.png'
import { LucideDoorOpen } from 'lucide-react';
import { PiSteeringWheel } from 'react-icons/pi';
import { MdOutlineRadio } from 'react-icons/md';
import { BsLuggage } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Checkbox } from "../../../../components/ui/checkbox"


function Step05() {
  const [openItem, setOpenItem] = useState(1);
  const {conformationChecked , setConformationChecked} = useCausewayHqContext()

  const handleConformationCheckboxChange = () => {
    if(conformationChecked){
        setConformationChecked(false)
    }else{
        setConformationChecked(true)
    }
  }

  return (
    <div>
      <Accordion value={openItem} onValueChange={setOpenItem} type="single" collapsible className="w-full">
          <BasicDetails index={1} />
          <CustomerDetails index={2} />
          <LicenseDetails index={3} />
      </Accordion>
      <div className='mt-[20px]' >
        <h3 className='text-[21px] font-[600]' >Selected Vehicle Class</h3>
        <BookedVehicleClass />
      </div>
      <div className='mt-[20px] flex justify-start gap-2 items-center' >
             <Checkbox checked={conformationChecked} onCheckedChange={() => handleConformationCheckboxChange()}   />
             <p className='flex justify-start gap-1' >
                By clicking here, I confirm that I accept the  
                <Link className='underline text-primaryCM'  to={'../privacy-policy'} target="_blank" rel="noopener noreferrer">
                    Privacy Policy.
                </Link>
            </p>

      </div>
    </div>
  )
}

const BasicDetails = ({index}) => {
  const { selectedDropLoc , selectedPickLoc , pickupDate , pickupTime , dropDate , dropTime } = useCausewayHqContext()  

  return(
    <AccordionItem value={index} >
            <AccordionTrigger>Date And Time</AccordionTrigger>
            <AccordionContent>
              <div className='res-conf-container mt-4' >
                <div>
                    <h3 className='font-semibold text-[17px] text-[#000] !my-0' >Pickup Date</h3>
                    <p className='text-[14px] !my-0' >{convertDate(pickupDate)}</p>
                </div>
                <div>
                    <h3 className='font-semibold text-[17px] text-[#000]' >Pickup Time</h3>
                    <p className='text-[14px]' >{convertTime(pickupTime)}</p>
                </div>
                <div>
                    <h3 className='font-semibold text-[17px] text-[#000]' >Return Date</h3>
                    <p className='text-[14px]' >{convertDate(dropDate)}</p>
                </div>
                <div>
                    <h3 className='font-semibold text-[17px] text-[#000]' >Return Time</h3>
                    <p className='text-[14px]' >{convertTime(dropTime)}</p>
                </div>
                <div>
                    <h3 className='font-semibold text-[17px] text-[#000]' >Pickup Location</h3>
                    <p className='text-[14px]' >{selectedPickLoc?.name}</p>
                </div>
                <div>
                    <h3 className='font-semibold text-[17px] text-[#000]' >Return Location</h3>
                    <p className='text-[14px]' >{selectedDropLoc?.name}</p>
                </div>
              </div>
            </AccordionContent>
    </AccordionItem>
  )
}

const CustomerDetails = ({index}) => {
  const { selectedCustomer} = useCausewayHqContext()  
  const countryOptions = CountryList().getData();
  const [selectedCountry , setSelectedCountry] = useState()

  useEffect(() => {
    const country = countryOptions?.filter((c) => c?.value.toLowerCase() === selectedCustomer?.country.toLowerCase())[0]
    setSelectedCountry(country)
  },[])

  return(
    <AccordionItem value={index} >
            <AccordionTrigger>Customer Details</AccordionTrigger>
            <AccordionContent>
              <div className='res-conf-container mt-4' >
                <div>
                    <h3 className='font-semibold text-[17px] text-[#000] !my-0' >First Name</h3>
                    <p className='text-[14px] !my-0' >{selectedCustomer?.first_name ? selectedCustomer?.first_name : 'N/A'}</p>
                </div>
                <div>
                    <h3 className='font-semibold text-[17px] text-[#000]' >Last Name</h3>
                    <p className='text-[14px]' >{selectedCustomer?.last_name ? selectedCustomer?.last_name : 'N/A'}</p>
                </div>
                <div>
                    <h3 className='font-semibold text-[17px] text-[#000]' >Email Address</h3>
                    <p className='text-[14px]' >{selectedCustomer?.email ? selectedCustomer?.email : 'N/A'}</p>
                </div>
                <div>
                    <h3 className='font-semibold text-[17px] text-[#000]' >Phone Number</h3>
                    <p className='text-[14px]' >{selectedCustomer?.phone_number ? selectedCustomer?.phone_number : 'N/A'}</p>
                </div>
                <div>
                    <h3 className='font-semibold text-[17px] text-[#000]' >Street</h3>
                    <p className='text-[14px]' >{selectedCustomer?.street ? selectedCustomer?.street : 'N/A'}</p>
                </div>
                <div>
                    <h3 className='font-semibold text-[17px] text-[#000]' >Street</h3>
                    <p className='text-[14px]' >{selectedCustomer?.street_2 ? selectedCustomer?.street_2 : 'N/A'}</p>
                </div>
                <div>
                    <h3 className='font-semibold text-[17px] text-[#000]' >City</h3>
                    <p className='text-[14px]' >{selectedCustomer?.city ? selectedCustomer?.city : 'NA'}</p>
                </div>
                <div>
                    <h3 className='font-semibold text-[17px] text-[#000]' >State</h3>
                    <p className='text-[14px]' >{selectedCustomer?.state ? selectedCustomer?.state : 'N/A'}</p>
                </div>
                <div>
                    <h3 className='font-semibold text-[17px] text-[#000]' >Zip</h3>
                    <p className='text-[14px]' >{selectedCustomer?.zip ? selectedCustomer?.zip : 'N/A'}</p>
                </div>
                <div>
                    <h3 className='font-semibold text-[17px] text-[#000]' >Country</h3>
                    <p className='text-[14px]' >{selectedCountry?.label ? selectedCountry?.label : 'N/A'}</p>
                </div>
                <div>
                    <h3 className='font-semibold text-[17px] text-[#000]' >Birthday</h3>
                    <p className='text-[14px]' >{selectedCustomer?.birthdate ? selectedCustomer?.birthdate : 'N/A'}</p>
                </div>
              </div>
            </AccordionContent>
    </AccordionItem>
  )
}

const LicenseDetails = ({index}) => {
  const { selectedCustomer} = useCausewayHqContext()


  return(
    <AccordionItem value={index} >
            <AccordionTrigger>Driver's License</AccordionTrigger>
            <AccordionContent>
              <div className='res-conf-container mt-4' >
                <div>
                    <h3 className='font-semibold text-[17px] text-[#000] !my-0' >DL Number</h3>
                    <p className='text-[14px] !my-0' >{selectedCustomer?.driver_license ? selectedCustomer?.driver_license : 'N/A'}</p>
                </div>
                <div>
                    <h3 className='font-semibold text-[17px] text-[#000]' >Expiration Date</h3>
                    <p className='text-[14px]' >{selectedCustomer?.f256?.split(" ")[0] ? selectedCustomer?.f256?.split(" ")[0]: 'N/A'}</p>
                </div>
                <div>
                    <h3 className='font-semibold text-[17px] text-[#000]' >License Images</h3>
                    <div className='flex justify-start gap-2 flex-wrap' >  
                        {
                                                selectedCustomer?.f252?.map((im , index) => (
                                                    <div key={index} className='relative' >
                                                        <img className='w-[80px] h-[50px] rounded-md object-cover'  src={im?.public_link} alt={im?.label} />
                                                    </div>
                                                ))
                        }
                    </div>
                </div>
              </div>
            </AccordionContent>
    </AccordionItem>
  )
}

const BookedVehicleClass = () => {
  const [data , setData] = useState()
  const [vehiPrice , setVehiPrice] = useState("")
  const [totVehiPrice , setTotVehiPrice] = useState("")
  const [totDays , setTotDays] = useState("")
  const { selectedVehicleBook , allVehcialeClasses , availableVehicle} = useCausewayHqContext()  
  const {setImageSliderStatus , setSliderImageList} = useCausewayMyContext()


  useEffect(() => {
        const vehicPriceVehic = availableVehicle?.filter((vc) => vc?.vehicle_class_id === selectedVehicleBook?.vehicle_class_id)[0] 
        const differenceInDays = vehicPriceVehic?.price?.total_days
        setTotDays(differenceInDays)

        
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
      

        const vehicleClass = allVehcialeClasses.filter((f) =>
          f.id == selectedVehicleBook?.vehicle_class_id
        )[0]
        setData(vehicleClass)

  }, [availableVehicle , allVehcialeClasses , selectedVehicleBook]);

  const openImageSlider = () => {
    setImageSliderStatus(true) 
    setSliderImageList(data?.images)
  }

  return(
    <div className='w-full rounded-2xl custom-border overflow-hidden bg-white mt-3' >
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
                        <h3 className='font-semibold text-[20px] sm:text-[24px]' >{data?.name} <span className='text-[17px] text-ptextCM font-medium' > </span> </h3>
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
                </div>
            </div>
        </div>
    </div>
  )
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

export default Step05