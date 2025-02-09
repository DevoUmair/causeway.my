
import React, { useEffect, useState } from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../../../components/ui/popover"

import { Button } from '../../../../components/ui/button'

import { Calendar } from "../../../../components/ui/calendar"
import { TimePickerDemo } from "../../../../components/ui/timePicker"

import { IoLocationOutline } from 'react-icons/io5';
import { addDays, startOfDay } from "date-fns";
import { useCausewayHqContext } from '../../../../context/CausewayHqContextProvider';


const Step01 = () => {
    const  {allLocation ,   selectedDropLoc , setSelectedDropLoc , selectedPickLoc , setSelectedPickLoc , pickupDate , setPickupDate , pickupTime , setPickupTime , dropDate , setDropDate , dropTime , setDropTime} = useCausewayHqContext()
    const [pickupTimeOpen, setPickupTimeOpen] = useState(false)
    const [dropTimeOpen, setDropTimeOpen] = useState(false)

    useEffect(() => {
        setSelectedPickLoc({id : allLocation[0]?.id , name : allLocation[0]?.name})
        setSelectedDropLoc({id : allLocation[0]?.id , name : allLocation[0]?.name})
    },[allLocation])

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

    const handlePickUpDate = (date) => {
        if(date !=undefined){
            setPickupDate(date);
    
            const nextDate = new Date(date);
            nextDate.setDate(nextDate.getDate() + 1); 
            setDropDate(nextDate);
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
        <div>
            <div className='customer-info-container' >
                <div className='w-full' >
                    <DropdownMenu>
                        <p className='text-ptextCM font-normal text-[17px] mb-3' >Pickup Location</p>
                        <DropdownMenuTrigger asChild>
                            <div className='w-full' >
                                <div className='bg-white rounded-xl flex justify-start items-center gap-1 p-3 shadow-sm cursor-pointer border border-[#0F172A]' >
                                    <IoLocationOutline color='#0F172A' size={20} />
                                    <p className='font-medium text-[#0F172A] text-[16px]' >
                                        {selectedPickLoc?.name}
                                    </p>
                                </div>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[100%] mx-auto h-[200px] overflow-y-scroll p-[10px]">
                            {
                                allLocation?.map((loc , index) => (
                                    <DropdownMenuItem onClick={() => setSelectedPickLoc({id : loc?.id , name : loc?.name})} key={index} >{loc?.name}</DropdownMenuItem>
                                ))
                            }
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className='w-full' >
                    <DropdownMenu>
                        <p className='text-ptextCM font-normal text-[17px] mb-3' >Dropoff Location</p>
                        <DropdownMenuTrigger asChild>
                            <div className='w-full' >
                                <div className='bg-white rounded-xl flex justify-start items-center gap-1 p-3 shadow-sm cursor-pointer border border-[#0F172A]' >
                                    <IoLocationOutline color='#0F172A' size={20} />
                                    <p className='font-medium text-[#0F172A] text-[16px]' >
                                        {selectedDropLoc?.name}
                                    </p>
                                </div>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[100%] mx-auto h-[200px] overflow-y-scroll p-[10px]">
                             {
                                allLocation?.map((loc , index) => (
                                    <DropdownMenuItem onClick={() => setSelectedDropLoc({id : loc?.id , name : loc?.name})} key={index} >{loc?.name}</DropdownMenuItem>
                                ))
                            }
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className='w-full' >
                    <Popover open={pickupTimeOpen} onOpenChange={() => hanlePickUpTime(false)}>
                        <p className='text-ptextCM font-normal text-[17px] mb-3' >Pickup Date And Time</p>
                        <PopoverTrigger asChild>
                            <div className='w-full' >
                                <div className='bg-white rounded-xl flex justify-start items-center gap-1 p-3 shadow-sm cursor-pointer border border-[#0F172A]' >
                                    <IoLocationOutline color='#0F172A' size={20} />
                                    <p className='font-medium text-[#0F172A] text-[16px]' >
                                        <span>{convertDate(pickupDate)} - {convertTime(pickupTime)} </span>
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
                <div className='w-full' >
                    <Popover open={dropTimeOpen} onOpenChange={() => hanlDropUpTime(false )}>
                        <p className='text-ptextCM font-normal text-[17px] mb-3' >Droppoff Date And Time</p>
                        <PopoverTrigger asChild>
                                <div className='w-full' >
                                    
                                    <div className='bg-white rounded-xl flex justify-start items-center gap-1 p-3 shadow-sm cursor-pointer border border-[#0F172A]' >
                                        <IoLocationOutline color='#0F172A' size={20} />
                                        <p className='font-medium text-[#0F172A] text-[16px]' >
                                            <span>{convertDate(dropDate)} - {convertTime(dropTime)} </span>
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
            </div>
        </div>
    )
}



export default Step01