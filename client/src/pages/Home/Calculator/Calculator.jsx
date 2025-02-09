import React, { useEffect, useState } from 'react'
import './Calculator.css'
import { BiSolidChevronDown } from 'react-icons/bi';

import Car from '../../../assets/svgs/car.svg'
import Location from '../../../assets/svgs/location.svg'
import Calender from '../../../assets/svgs/calender.svg'
import { IoMdArrowRoundForward } from 'react-icons/io';

const cars = ["Nissan", "Toyota", "Honda", "Ford", "Chevrolet", "BMW", "Mercedes", "Audi", "Hyundai", "Volkswagen"];
const pickupLocations = ["Airport", "Downtown", "Train Station", "University", "Shopping Mall", "Hotel Lobby", "Convention Center", "Bus Terminal", "City Park", "Residential Area"];
const dropOffLocations = ["Airport", "Downtown", "Train Station", "University", "Shopping Mall", "Hotel Lobby", "Convention Center", "Bus Terminal", "City Park", "Residential Area"];


function Calculator() {
    const [pickUpDates , setPickUpDates] = useState([])
    const [clicked , setClicked]  = useState("");

    const [selectedCar , setSelectedCar] = useState()
    const [selectedPickUpLocation , setSelectedPickUpLocation] = useState()
    const [selectedDropOffLocation , setSelectedDropOffLocation] = useState()
    const [selectedPickUpDates , setSelectedPickUpDates] = useState()
    const [selectedReturnDates , setSelectedReturnDates] = useState()

    useEffect(() => {
        const dates = getNext20Days()
        setPickUpDates(dates)

        setSelectedCar(cars[0])
        setSelectedPickUpLocation(pickupLocations[0])
        setSelectedPickUpDates(dates[0])
        setSelectedReturnDates(dates[1])
        setSelectedDropOffLocation(dropOffLocations[0])
    },[])

    function getNext20Days() {
        const dates = [];
        const today = new Date();
        
        for (let i = 0; i < 20; i++) {
            // Create a new date by adding 'i' days to today
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + i);
            
            // Format the date as YYYY-MM-DD (optional)
            const formattedDate = nextDate.toISOString().split('T')[0];
            
            dates.push(formattedDate);
        }
        
        return dates;
    }

    const handleSelectedCar = (count) => {
        setSelectedCar(count)
    }

    const handlePickUpLocation = (loca) => {
        setSelectedPickUpLocation(loca)
    }

    const handleDropOffLocation = (loca) => {
        setSelectedDropOffLocation(loca)
    }

    const handlePickUpDates = (date) => {
        setSelectedPickUpDates(date)
    }

    const handleReturnDates = (date) => {
        setSelectedReturnDates(date)
    }

    const handleClicked = (selectedItem) => {
        setClicked(selectedItem)
        if(selectedItem === clicked ){
          setClicked("")
        }
    }

  return (
    <div className='w-full relative mt-[80px] py-[120px]' >
        <div className='calculator-container' ></div>

        <div className='max-w-[1200px]  mx-auto w-[95%] relative z-50 custom-flex justify-between items-start flex-col-reverse xlg:flex-row gap-[20px]' >
            <div className='basis-[50%] rounded-2xl bg-white w-full px-[25px] sm:px-[35px] py-[40px]' >
                <div>
                    <h1 className='text-[27px] font-bold leading-[32px]' >Car Loan Calculator</h1>
                    <p className='text-ptextCM text-[15px] mt-[10px]' >Estimate your monthly auto loan payments with this calculator</p>

                    <div className='mt-[40px] flex justify-between flex-col xsm:flex-row xlg:flex-col lg:flex-row gap-3' >
                        
                        <div onClick={() => handleClicked("Car")} className={`custom-selector basis-[50%] ${clicked === "Car" && 'clicked'}`} >
                            <label>Car Type</label>
                            <div className='selected-option' >
                                <p className={`${clicked === "Car"  && 'svg-clicked'}`} >
                                    <span className='flex justify-start gap-2 items-center' >
                                        <img className='w-[25px] h-[25px] object-contain' src={Car} alt='car'  />
                                        <span>{selectedCar}</span>    
                                    </span>   
                                    <BiSolidChevronDown/>
                                </p>
                            </div>
                            <div  className={`options overflow-options ${clicked === "Car" && 'option-opened'}`}>
                                <div className='option-inner-container' >
                                   
                                    {
                                        cars.map((eachCountry , index) =>  (
                                                <div key={index} onClick={() =>  handleSelectedCar(eachCountry)} className={`each-option ${selectedCar  === eachCountry && 'selected'}`} >{eachCountry}</div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div onClick={() => handleClicked("PickupLocation")} className={`custom-selector basis-[50%] ${clicked === "PickupLocation" && 'clicked'}`} >
                            <label>Pickup Location</label>
                            <div className='selected-option' >
                                <p className={`${clicked === "PickupLocation"  && 'svg-clicked'}`} >
                                    <span className='flex justify-start gap-2 items-center' >
                                        <img  className='w-[25px] h-[25px] object-contain' src={Location} alt='Location'  />
                                        <span>{selectedPickUpLocation}</span>    
                                    </span>   
                                    <BiSolidChevronDown/>
                                </p>
                            </div>
                            <div  className={`options overflow-options ${clicked === "PickupLocation" && 'option-opened'}`}>
                                <div className='option-inner-container' >
                                   
                                    {
                                        pickupLocations.map((eachCountry , index) =>  (
                                                <div key={index} onClick={() =>  handlePickUpLocation(eachCountry)} className={`each-option ${selectedPickUpLocation  === eachCountry && 'selected'}`} >{eachCountry}</div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
            
                    </div>

                    <div className='mt-[20px] flex justify-between flex-col xsm:flex-row xlg:flex-col lg:flex-row  gap-3' >
                        
                        <div onClick={() => handleClicked("PickUpDate")} className={`custom-selector basis-[50%] ${clicked === "PickUpDate" && 'clicked'}`} >
                            <label>Pickup Date</label>
                            <div className='selected-option' >
                                <p className={`${clicked === "PickUpDate"  && 'svg-clicked'}`} >
                                    <span className='flex justify-start gap-2 items-center' >
                                        <img className='w-[25px] h-[25px] object-contain' src={Calender} alt='car'  />
                                        {
                                            selectedPickUpDates && (
                                                <span>{selectedPickUpDates}</span>    
                                            )
                                        }
                                    </span>   
                                    <BiSolidChevronDown/>
                                </p>
                            </div>
                            <div  className={`options overflow-options ${clicked === "PickUpDate" && 'option-opened'}`}>
                                <div className='option-inner-container' >
                                   
                                    {
                                        pickUpDates?.map((eachCountry , index) =>  {
                                            return(
                                                <div key={index} >
                                                    {
                                                        selectedPickUpDates && (
                                                            <div  onClick={() =>  handlePickUpDates(eachCountry)} className={`each-option ${selectedPickUpDates  === eachCountry && 'selected'}`} >{eachCountry}</div>
                                                        )
                                                    }
                                                </div>    
                                            )
                                            })
                                    }
                                </div>
                            </div>
                        </div>

                        <div onClick={() => handleClicked("DropOffLocation")} className={`custom-selector basis-[50%] ${clicked === "DropOffLocation" && 'clicked'}`} >
                            <label>Dropoff Location</label>
                            <div className='selected-option' >
                                <p className={`${clicked === "DropOffLocation"  && 'svg-clicked'}`} >
                                    <span className='flex justify-start gap-2 items-center' >
                                        <img  className='w-[25px] h-[25px] object-contain' src={Location} alt='Location'  />
                                        <span>{selectedDropOffLocation}</span>    
                                    </span>   
                                    <BiSolidChevronDown/>
                                </p>
                            </div>
                            <div  className={`options overflow-options ${clicked === "DropOffLocation" && 'option-opened'}`}>
                                <div className='option-inner-container' >
                                   
                                    {
                                        dropOffLocations.map((eachCountry , index) =>  (
                                                <div key={index} onClick={() =>  handleDropOffLocation(eachCountry)} className={`each-option ${selectedDropOffLocation  === eachCountry && 'selected'}`} >{eachCountry}</div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
            
                    </div>

                    <div className='mt-[20px] flex justify-between flex-col xsm:flex-row xlg:flex-col lg:flex-row  gap-3' >
                        
                        <div onClick={() => handleClicked("ReturnDate")} className={`custom-selector basis-[50%] ${clicked === "ReturnDate" && 'clicked'}`} >
                            <label>Return Date</label>
                            <div className='selected-option' >
                                <p className={`${clicked === "ReturnDate"  && 'svg-clicked'}`} >
                                    <span className='flex justify-start gap-2 items-center' >
                                        <img className='w-[25px] h-[25px] object-contain' src={Calender} alt='car'  />
                                        {
                                            selectedReturnDates && (
                                                <span>{selectedReturnDates}</span>    
                                            )
                                        }
                                    </span>   
                                    <BiSolidChevronDown/>
                                </p>
                            </div>
                            <div  className={`options overflow-options ${clicked === "ReturnDate" && 'option-opened'}`}>
                                <div className='option-inner-container' >
                                   
                                    {
                                        pickUpDates?.map((eachCountry , index) =>  {
                                            return(
                                                <div key={index}>
                                                    {
                                                        selectedReturnDates && (
                                                            <div  onClick={() =>  handleReturnDates(eachCountry)} className={`each-option ${selectedReturnDates  === eachCountry && 'selected'}`} >{eachCountry}</div>
                                                        )
                                                    }
                                                </div>    
                                            )
                                            })
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='basis-[50%]  flex justify-end items-end' >
                            <button className='primaryBtn flex w-full justify-center gap-2 items-center bg-secondaryCM px-5 py-[16px] rounded-lg text-black hover:text-white before:bg-primaryCM font-bold' >
                                <span>Calculate Now</span>
                                <IoMdArrowRoundForward size={25} />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className='basis-[50%] w-full' >
                <h1 className='text-white text-[40px] font-bold leading-[45px]' >Want to Calculate Your Car Payment?</h1>
                <p className='mt-[20px] text-white text-[15px] ' >Dolor irure ut ea velit aliqua cillum aute dolore occaecat amet Lorem elit commodo excepteur. Consequat in laboris voluptate elit nostrud labore ipsum culpa excepteur reprehenderit aliquip consectetur ci</p>
            </div>
        </div>

    </div>
  )
}


export default Calculator