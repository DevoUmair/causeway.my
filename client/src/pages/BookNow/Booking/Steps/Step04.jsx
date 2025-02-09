import { useCausewayHqContext } from '../../../../context/CausewayHqContextProvider';
import React, { useEffect, useRef, useState } from 'react'


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu"

import { DatePickerExpiration } from '../../../../components/ui/DatePickerExpiration';
import CountryList from "react-select-country-list";
import { FaCheck, FaPlus } from 'react-icons/fa';
import { FaTrashAlt } from "react-icons/fa";
import { DatePickerDob } from '../../../../components/ui/DatePickerDob';
import { Button } from '../../../../components/ui/button';
import hqApi from '../../../../axios/Axios';
import { DatePickerDobSearch } from '../../../../components/ui/DatePickerDobSearch';
import { useCausewayMyContext } from '../../../../context/CausewayMyContextProvider';
import { RxCrossCircled } from 'react-icons/rx';

function Step04() {
  const {setSelectedCustomer , customerData , setCustomerData , selectedLicenseImages , setSelectedLicenseImages , dobDateSearch , setDobDateSearch} = useCausewayHqContext()
  const {setOpenSerachLoader , notificationAvtive} = useCausewayMyContext()

  const [selectedCountry , setSelectedCountry] = useState(null)
  const [searchedCountry , setSearchedCountry] = useState(null)
  const [countryOpen , setCountryOpen] = useState(false)
  const [searchedLicense , setSearchedLicense] = useState("")
  const countryOptions = CountryList().getData();

  const licenceRef = useRef()
  
  const handleCustomerinput = (feildnum , value) => {
    setCustomerData((prevData) => ({
        ...prevData,
        [feildnum]: value
    }));
  }

    const hanlCountryOpen = (isBtn) => {
        if(isBtn){
            setCountryOpen(false)
        }else{
            if(countryOpen){
                setCountryOpen(false)
            }else{
                setCountryOpen(true)
            }
        }
    }

    useEffect(() => {
       
    },[customerData])


    const handleCountry = (c) => {
        setSelectedCountry(c?.label)
        setCustomerData((prevData) => ({
            ...prevData,
            [62]: c?.value.toUpperCase()
        }));
        setCountryOpen(false)
        setSearchedCountry(null)
    }

    const handleImageUpload = () => {
        licenceRef.current.click();
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const fileObj = {
            file: file,
            url: URL.createObjectURL(file),
          };
      
          setSelectedLicenseImages((prevData) => [...prevData, fileObj]);
        }
    };
    
    const removeImage = (imageToRemove) => {
        setSelectedLicenseImages((prevData) =>
          prevData.filter((image) => image.url !== imageToRemove.url)
        );
    };
      
  const serachCustomer = async () => {
    setOpenSerachLoader(true)
    if(searchedLicense && dobDateSearch){
        try {
            await hqApi.get('/customer/getSingleCustomer', { 
                params: { 
                    license: searchedLicense, 
                    birthday: dobDateSearch
                }
            }).then((response) => {
                if (response?.data[0]) {
                    const customer = response.data[0]; 
                    const country = countryOptions?.filter((c) => c?.value.toLowerCase() === customer?.country.toLowerCase())[0]
                    
                    setSelectedCountry(country?.label)
                    setSelectedCustomer(customer)

                    setCustomerData({
                        2: customer?.first_name || "",
                        3: customer?.last_name || "",
                        9: customer?.email || "",
                        8: customer?.phone_number || "",
                        193: customer?.street || "",
                        195: customer?.city || "",
                        196: customer?.state || "",
                        198: customer?.zip || "",
                        15: customer?.birthdate || "",
                        62: country?.label || "",
                        254: customer?.driver_license || "",
                        256:customer?.f256.split(" ")[0] || ""
                    });

                    customer?.f252?.map((c) => {
                        const fileObj = {
                            file: c?.label,
                            url: c?.public_link
                        };
                      
                        setSelectedLicenseImages((prevData) => [...prevData, fileObj]);
                    })
                    

                    setOpenSerachLoader(false)
                    setSearchedLicense("")
                    setDobDateSearch(null)
                    notificationAvtive(
                        `Customer Retrieved Successfully`,
                        "Success",
                        false,
                        <FaCheck size={20} weight="fill" color="#ffffff" style={{ marginBottom: '17px' }} />
                    ) 
                }
            })
    
            
        } catch (error) {
            setOpenSerachLoader(false)
            notificationAvtive(
                error.response.data.message,
                "Error",
                true,
               <RxCrossCircled size={20} weight="fill" color="#ffffff" style={{ marginBottom: '17px' }} />
            ) 
        }
    }else{
        setOpenSerachLoader(false)
        notificationAvtive(
            "License and birthday are required",
            "Error",
            true,
           <RxCrossCircled size={20} weight="fill" color="#ffffff" style={{ marginBottom: '17px' }} />
        ) 
    }
  }  

  return (
    <div>
        <div>
            <h1 className='font-bold text-[20px]' >Returning Customer?</h1>
            <div className='mt-[15px] customer-info-container-2' >
                <div className='custom-input' >
                    <label className='font-semibold' >Driver License</label>
                    <div className='gap-[16px]' >
                        <input onChange={(value) => setSearchedLicense(value.target.value)} value={searchedLicense}   type='text' placeholder='Driver license' />
                    </div>
                </div>
                <div> 
                    <DatePickerDobSearch />
                </div>
                <div className='flex justify-end w-full flex-col h-[80px]' >
                    <Button onClick={serachCustomer} className='!py-6' >Search</Button>
                </div>
            </div>
        </div>
        <div className='mt-[40px]' >
            <h1 className='font-bold text-[20px]' >Customer Information</h1>
            <div className='mt-[15px] customer-info-container' >
                <div className='custom-input basis-[100%]' >
                    <label className='font-semibold' >First Name</label>
                    <div className='gap-[16px]' >
                        <input onChange={(value) => handleCustomerinput(2 , value.target.value)}  value={customerData[2]} type='text' placeholder='First Name'  />
                    </div>
                </div>
                <div className='custom-input basis-[100%]' >
                    <label className='font-semibold' >Last Name</label>
                    <div className='gap-[16px]' >
                        <input onChange={(value) => handleCustomerinput(3 , value.target.value)} value={customerData[3]}  type='text' placeholder='Last Name' />
                    </div>
                </div>
                <div className='custom-input basis-[100%]' >
                    <label className='font-semibold' >Email Address</label>
                    <div className='gap-[16px]' >
                        <input onChange={(value) => handleCustomerinput(9 , value.target.value)} value={customerData[9]}  type='text' placeholder='Email Address' />
                    </div>
                </div>
                <div className='custom-input basis-[100%]' >
                    <label className='font-semibold' >Phone Number</label>
                    <div className='gap-[16px]' >
                        <input onChange={(value) => handleCustomerinput(8 , value.target.value)} value={customerData[8]}  type='text' placeholder='Phone Number' />
                    </div>
                </div>
                <div>
                    <DatePickerDob />
                </div>
                <div>
                    <DropdownMenu open={countryOpen} onOpenChange={() => hanlCountryOpen(false)}  >
                        <label className='!font-[500] text-[#000]' >Country</label>
                        <DropdownMenuTrigger asChild>
                                <div className='w-full mt-[5px]' >
                                        <div className='bg-[#fcfcfc] rounded-lg flex justify-start items-center gap-1 py-[15px] px-[10px]  cursor-pointer border-[1px] border-[#dee2e6]' >
                                            <p className='font-medium  text-[14px]' >
                                                {
                                                    !selectedCountry ?
                                                    (

                                                        <span className='text-[#a2a2a2]' >Select Country</span>
                                                    )
                                                    :
                                                    (
                                                        <span className='text-black' >{selectedCountry}</span>
                                                    )
                                                }
                                            </p>
                                        </div>
                                    </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className={`w-[450px]  ${
                                searchedCountry === null || countryOptions?.filter((cf) => cf.label.toLowerCase().includes(searchedCountry?.toLowerCase())).length > 5
                                    ? 'h-[200px] overflow-y-scroll'
                                    : 'h-fit'
                                }  p-[10px]`}>
                                <div>
                                    <div className='border-[1px] border-grayCM rounded-md p-2 mb-2' >
                                        <input onChange={(e) => setSearchedCountry(e.target.value)} className='w-full border-none outline-none text-[14px]' placeholder='Search Country'  />
                                    </div>
                                    <div>
                                        {
                                            countryOptions?.filter((cf) => cf.label.toLowerCase().includes(searchedCountry?.toLowerCase()) ).length > 0  || searchedCountry === null ?
                                           (
                                            <div>
                                                {
                                                    searchedCountry !== null ? (
                                                        countryOptions?.filter((cf) => cf.label.toLowerCase().includes(searchedCountry.toLowerCase()) )?.map((c , index) => (
                                                            <p onClick={() => handleCountry(c)} key={index} className='pb-3 cursor-pointer '  >{c.label}</p>
                                                        ))
                                                    )
                                                    :
                                                    (
                                                        countryOptions?.map((c , index) => (
                                                            <p onClick={() => handleCountry(c)} key={index} className='pb-3 cursor-pointer '  >{c.label}</p>
                                                        ))
                                                    )
                                                }
                                            </div>
                                           )
                                           :
                                           (
                                            <p className='text-center text-[15px] font-semibold text-red-500' >No Results Found</p>
                                           ) 
                                        }
                                    </div>
                                    
                                </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className='custom-input basis-[100%]' >
                    <label className='font-semibold' >Street</label>
                    <div className='gap-[16px]' >
                        <input onChange={(value) => handleCustomerinput(193 , value.target.value)} value={customerData[193]}  type='text' placeholder='Street' />
                    </div>
                </div>
                <div className='custom-input basis-[100%]' >
                    <label className='font-semibold' >City</label>
                    <div className='gap-[16px]' >
                        <input onChange={(value) => handleCustomerinput(195 , value.target.value)} value={customerData[195]}  type='text' placeholder='City' />
                    </div>
                </div>
                <div className='custom-input basis-[100%]' >
                    <label className='font-semibold' >State</label>
                    <div className='gap-[16px]' >
                        <input onChange={(value) => handleCustomerinput(196 , value.target.value)} value={customerData[196]}  type='text' placeholder='State' />
                    </div>
                </div>
                <div className='custom-input basis-[100%]' >
                    <label className='font-semibold' >Zip</label>
                    <div className='gap-[16px]' >
                        <input onChange={(value) => handleCustomerinput(198 , value.target.value)} value={customerData[198]}   type='text' placeholder='Zip' />
                    </div>
                </div>
                
            </div>
        </div>
        <div className='mt-[40px]' >
            <h1 className='font-bold text-[20px]' >Driver's License Information</h1>
            <div className='mt-[15px] customer-info-container-2' >
                <div className='custom-input' >
                    <label className='font-semibold' >Driver License</label>
                    <div className='gap-[16px]' >
                        <input onChange={(value) => handleCustomerinput(254 , value.target.value)} value={customerData[254]}   type='text' placeholder='Driver license' />
                    </div>
                </div>
                <div> 
                    <DatePickerExpiration />
                </div>
                <div>
                    <label className='font-[500]' >Driver License</label>
                    <div onClick={handleImageUpload} className='w-full mt-[8px] border-[1px] cursor-pointer border-grayCM bg-[#fcfcfc] rounded-md py-[13px] flex justify-center items-center gap-2 ' >
                        <FaPlus />
                        <p>Add Image</p>
                        <input onChange={handleFileChange} ref={licenceRef} type='file' hidden />
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-end items-center ' >
            <div className='flex justify-start gap-2 flex-wrap' >  
                    {
                            selectedLicenseImages?.map((im , index) => (
                                <div key={index} className='relative' >
                                    <div onClick={() => removeImage(im)} className='w-6 h-6 flex justify-center items-center absolute top-5 bg-slate-900/55 cursor-pointer right-1 rounded-sm ' >
                                        <FaTrashAlt className='text-red-600' size={12}  />
                                    </div>
                                    <img className='w-[90px] h-[90px] rounded-md object-contain'  src={im?.url} alt={im?.file.name} />
                                </div>
                            ))
                    }
            </div>
        </div>
    </div>
  )
}

export default Step04