import hqApi from '../../../../axios/Axios';
import { useCausewayHqContext } from '../../../../context/CausewayHqContextProvider'
import React, { useEffect, useState } from 'react'

function BookingSummary() {
    const {bookingStep , pickupDate , dropDate , pickupTime , dropTime , selectedDropLoc , selectedPickLoc , selectedVehicleBook , reservationDetail } = useCausewayHqContext()
    const [selectedAdditionCahrges , setSelectedAdditionalCharges] = useState({})

    useEffect(() => {
        const items = reservationDetail?.selected_additional_charges
        const groupedItems = items?.reduce((acc, item) => {
                const categoryId = item?.additional_charge_category.label?.en;
                if (!acc[categoryId]) acc[categoryId] = [];
                acc[categoryId].push(item);
                return acc;
        }, {});
            
        setSelectedAdditionalCharges(groupedItems)
    },[reservationDetail])

    const convertDate = (date) => {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
        const dayOfWeek = daysOfWeek[date.getDay()];
        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
    
        const formattedDate = `${dayOfWeek}, ${month} ${day}, ${year}`;
        return formattedDate;
    };

    

    const convertTime = (time) => {
        const hours = String(time.getHours()).padStart(2, "0");
        const minutes = String(time.getMinutes()).padStart(2, "0");
        const formattedTime = `${hours}:${minutes}`;

        return formattedTime
    }

    function formatCurrency(amount) {
        if (amount === undefined || amount === null) {
          return ''; 
        }
      
        const formattedAmount = parseFloat(amount).toFixed(2); 
        const parts = formattedAmount.split('.');
        const intPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        return `RM ${intPart},${parts[1]}`;
    }

  return (
    <div className='bg-white shadow-lg rounded-md p-[20px]' >
        <h1 className='text-[18px] font-semibold border-b-2 border-primaryCM pb-[5px]' >Booking Summary</h1>

        <div className='mt-[25px]' >
            <div>
                <h3 className='font-medium text-[17px]' >Pickup</h3>
                <p className='text-ptextCM text-[15px] flex justify-start gap-2 items-center' >
                    <span>{convertDate(pickupDate)}</span>
                    <span>@ {convertTime(pickupTime)}</span>
                </p>
                <p className='text-ptextCM text-[15px] flex justify-start gap-2 items-center' >
                    <span>Location: </span>
                    <span>{selectedPickLoc?.name}</span>
                </p>
            </div>
            <div className='mt-[10px]' >
                <h3 className='font-medium text-[17px]' >Dropoff</h3>
                <p className='text-ptextCM text-[15px] flex justify-start gap-2 items-center' >
                    <span>{convertDate(dropDate)}</span>
                    <span>@ {convertTime(dropTime)}</span>
                </p>
                <p className='text-ptextCM text-[15px] flex justify-start gap-2 items-center' >
                    <span>Location: </span>
                    <span>{selectedDropLoc?.name}</span>
                </p>
            </div>
        </div>
        

        {
            selectedVehicleBook !== null &&
            (
                <div>
                     {
                        bookingStep > 0 &&
                        (
                            <div>
                                <div className='mt-[10px]' >
                                    <h3 className='font-medium text-[17px]' >{selectedVehicleBook?.name}</h3>
                                    <p className='text-ptextCM text-[15px] flex justify-between gap-2 items-center border-b-2 border-grayCM pb-2' >
                                        <span>{selectedVehicleBook?.price?.total_days}x Days : </span>
                                        <span>
                                            {reservationDetail?.selected_vehicle_class?.price?.details[0]?.base_daily_price?.amount_for_display}
                                        </span>
                                        <span>
                                            {reservationDetail?.selected_vehicle_class?.price?.base_price?.amount_for_display}
                                        </span>
                                    </p>
                                    <p className='text-ptextCM text-[15px] flex justify-between gap-2 items-center pt-2' >
                                        <span></span>
                                        <span>
                                
                                        </span>
                                        <span>
                                            {reservationDetail?.selected_vehicle_class?.price?.base_price?.amount_for_display}
                                        </span>
                                    </p>
                                </div>
                                <div>
                                {
                                        selectedAdditionCahrges && // Check if the object is not null or undefined
                                        Object.keys(selectedAdditionCahrges).length > 0 && // Check if the object has any keys
                                        Object.keys(selectedAdditionCahrges)?.map((category, index) => (
                                            <div key={index} className='mt-[10px]' >
                                                <h3 className='font-medium text-[17px]' >{category}</h3>
                                                <div className='mt-[5px]' >
                                                    {
                                                        selectedAdditionCahrges[category]?.map((item, index) => (
                                                            <p key={index} className='text-ptextCM text-[15px] flex justify-between gap-2 items-center' >
                                                                <span>
                                                                    {
                                                                            item?.selection_type === "multiple" && 
                                                                            (
                                                                                <span>{item?.selected_quantity}x </span>
                                                                            )
                                                                    }
                                                                    {item?.description}
                                                                </span>
                                                                <span>
                                                                    {item?.total_price_with_taxes?.amount_for_display} (With Tax)
                                                                </span>
                                                            </p>
                                                        ))
                                                    }
                                                </div>  
                                            </div>         
                                        ))
                                }
                                </div>
                                <div className='mt-[10px]' >
                                    <h3 className='font-medium text-[17px]' >Miscellaneous</h3>
                                    <p className='text-ptextCM text-[15px] flex justify-between gap-2 items-center' >
                                        <span>Sales Tax (8%):</span>
                                        <span>
                                            RM{""}
                                            {new Intl.NumberFormat('id-ID', {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            }).format(selectedVehicleBook?.taxValue?.amount || 0)}
                                        </span>
                                    </p>
                                </div>

                                <div className='mt-[10px]' >
                                    <h3 className='font-medium text-[17px]' >Total</h3>
                                    <p className='text-[22px] font-semibold text-right' >
                                        <span>
                                            {reservationDetail?.total?.total_price?.amount_for_display}
                                        </span>
                                    </p>
                                </div>

                                <div className='mt-[10px]' >
                                    <h3 className='font-medium text-[17px]' >Amount Required to Reserve</h3>
                                    <p className='text-[22px] font-semibold text-right' >
                                        <span>
                                            {reservationDetail?.total?.total_price?.amount_for_display}
                                        </span>
                                    </p>
                                </div>
                                <div className='mt-[10px]' >
                                    <h3 className='font-medium text-[17px]' >Secuirity Deposit</h3>
                                    <p className='text-[22px] font-semibold text-right text-red-700' >
                                        {reservationDetail?.total?.security_deposit?.amount_for_display}
                                    </p>
                                </div>
                            </div>
                        )
                    }
                </div>

              
            )
        }

    </div>
  )
}

export default BookingSummary