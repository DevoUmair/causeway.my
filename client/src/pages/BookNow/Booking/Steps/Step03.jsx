import React, { useEffect, useState } from "react";
import { useCausewayHqContext } from "../../../../context/CausewayHqContextProvider"; // Replace with the actual file where the context is defined
import './Steps.css'
import { Button } from "../../../../components/ui/button";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import hqApi from "../../../../axios/Axios";
import { useCausewayMyContext } from "../../../../context/CausewayMyContextProvider";

function Step03() {
    const {selectedAdditionalCahrges, setSelectedAdditionalCahrges, additionalCharges ,  setReservationDetails ,  pickupDate , dropDate , pickupTime  , dropTime ,  selectedPickLoc  , selectedDropLoc  , selectedVehicleBook} = useCausewayHqContext();
    const {setOpenSerachLoader} = useCausewayMyContext()

    const hanldeAdditionalCahrges = (item) => {
        const selAddCahrge = {
            id: item?.id,
            quantity: 1,
        };
        const selAddCahrgeString = `${selAddCahrge.id}_${selAddCahrge.quantity}`;

        setSelectedAdditionalCahrges((prevCharges) => {
            // Check if the string already exists in the array
            const exists = prevCharges.includes(selAddCahrgeString);

            if (!exists) {
                return [...prevCharges, selAddCahrgeString]; // Add the new charge string
            }

            return prevCharges; // Return the current state if the item already exists
        });
    };

    // useEffect to call the function when selectedAdditionalCahrges updates
    useEffect(() => {
        CheckingVehiclePrice(
            pickupDate,
            dropDate,
            pickupTime,
            dropTime,
            selectedVehicleBook?.vehicle_class_id,
            selectedPickLoc,
            selectedDropLoc,
            selectedAdditionalCahrges // Updated value
        );
    }, [selectedAdditionalCahrges]); 

    
    const CheckingVehiclePrice = async (pickupDate , dropDate , pickupTime  , dropTime , vehiid , selectedPickLoc  , selectedDropLoc , additionalCharges ) =>{
        setOpenSerachLoader(true)
        await hqApi.post('/reservation/checkVehiclePrice', null, {
            params: {
                pick_up_date: convertDate(pickupDate),
                return_date: convertDate(dropDate),
                pick_up_time: convertTime(pickupTime),
                return_time: convertTime(dropTime),
                brand_id: 1,
                vehicle_class_id: vehiid,
                pick_up_location: selectedPickLoc?.id,  // Example location, replace as needed
                return_location: selectedDropLoc?.id,   // Example location, replace as needed
                additionalCharges : additionalCharges
            }
        }).then((res) => {
            setReservationDetails(res.data?.data)
            setOpenSerachLoader(false)
        });
    }

    const doesIdExist = ( idToCheck) => {
        return selectedAdditionalCahrges?.some((charge) => {
            const [id] = charge.split('_'); // Split the string to get the ID part
            return id === `${idToCheck}`; // Check if the ID matches
        });
    };

    const removeAdditionalCharges = (item) => {
        setSelectedAdditionalCahrges((prevCharges) =>
            prevCharges.filter((charge) => {
                const [id] = charge.split('_'); // Extract the ID part from the string
                return id !== `${item.id}`; // Keep only items whose ID doesn't match
            })
        );
    };    

  return (
    <div className="w-full">
      {additionalCharges &&
        Object.keys(additionalCharges).map((category , index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-semibold mb-[15px]">{category}</h2>
                <div className="addi-charge-container" >
                    {additionalCharges[category]?.map((item , index) => (
                        <div key={index} className="bg-white flex justify-center h-[230px] items-center flex-col gap-2 shadow-md px-[20px]" >
                            <h1 className="text-center" >{item?.description}</h1>
                            {
                                item?.image != null &&
                                (
                                    <img src={item?.image} alt={index} className="w-[50px]" />
                                )
                            }
                            {
                                item?.base_price?.amount !== "0.00"  ? (
                                    <p className="text-center" >{item?.base_price?.amount_for_display} 
                                        <span>
                                            {
                                                    item?.charge_type == 'amount' ? 
                                                    (
                                                        <span> One Time</span>
                                                    )
                                                    :
                                                    (
                                                        <span> /Day</span>
                                                    )
                                            }
                                        </span>

                                        
                                    </p>
                                )
                                :
                                (
                                    <p className="text-center" >{item?.label}</p>
                                )
                            }
                            {
                                item?.selection_type !== "multiple" ?
                                (
                                    <div className="w-full" >
                                        {
                                            doesIdExist(item?.id) ? (
                                                <button onClick={() => removeAdditionalCharges(item)}  className="w-full bg-transparent rounded-md border-2 border-[#262D3E] py-[6px] text-[#262D3E]" >Selected</button>
                                            )
                                            :
                                            (
                                                <Button onClick={() => hanldeAdditionalCahrges(item)} className="w-full" >Select</Button>
                                            )
                                        }
                                    </div>
                                )
                                :
                                (
                                    <DayAdditionalCharge item={item} setSelectedAdditionalCahrges={setSelectedAdditionalCahrges} />
                                )
                            }
                        </div>
                    ))}
                </div>
          </div>
        ))}
    </div>
  );
}

const DayAdditionalCharge = ({item , setSelectedAdditionalCahrges}) => {
    const [lastvalue , setLastValue] = useState(0)
    const [quantity , setQuantity] = useState(0)

    useEffect(() => {
        const values = Object.values(item?.dropdown_options);
        const lastValue = values[values.length - 1];
        setLastValue(lastValue);
    },[item])


    const Increase = () => {
        if(lastvalue !== quantity){
            setQuantity((prev) => prev + 1)

            const selAddCahrge = {
                id: item?.id,
                quantity: quantity + 1,
            };
            
            setSelectedAdditionalCahrges((prevCharges) => {
                // Check if the ID already exists in the array
                const exists = prevCharges.some((charge) => {
                    const [id] = charge.split('_'); // Split the existing string to get the ID
                    return id === `${item?.id}`; // Check if the ID matches
                });
            
                if (exists) {
                    // Update the quantity for the existing entry
                    return prevCharges.map((charge) => {
                        const [id, qty] = charge.split('_'); // Split the string into ID and quantity
                        if (id === `${item?.id}`) {
                            // Update the quantity
                            return `${id}_${selAddCahrge.quantity}`;
                        }
                        return charge; // Keep other entries unchanged
                    });
                }
            
                // Add a new entry if the ID doesn't exist
                return [...prevCharges, `${selAddCahrge.id}_${selAddCahrge.quantity}`];
            });
            
        }
      
    }
    const Decrease = () => {
        if(quantity > 0){
            setQuantity((prev) => prev - 1)

            const selAddCahrge = {
                id: item?.id,
                quantity: quantity - 1,
            };
            
            setSelectedAdditionalCahrges((prevCharges) => {
                // Check if the ID already exists in the array
                const exists = prevCharges.some((charge) => {
                    const [id] = charge.split('_'); // Split the existing string to get the ID
                    return id === `${item?.id}`; // Check if the ID matches
                });
            
                if (exists) {
                    // Update the quantity for the existing entry
                    return prevCharges.map((charge) => {
                        const [id, qty] = charge.split('_'); // Split the string into ID and quantity
                        if (id === `${item?.id}`) {
                            // Update the quantity
                            
                            return `${id}_${selAddCahrge.quantity}`;
                        }
                        return charge; // Keep other entries unchanged
                    });
                }
            
                // Add a new entry if the ID doesn't exist
                return [...prevCharges, `${selAddCahrge.id}_${selAddCahrge.quantity}`];
            });
            
        }
    }

    return(
        <div className="flex justify-center items-center gap-3" > 
            {
                quantity !== 0? 
                (
                    <FiMinusCircle onClick={Decrease} size={40} />
                )
                :
                (
                    <FiMinusCircle  size={40} color="#dee2e6" />
                )
            }
            <p className="text-[20px]" >{quantity}</p>
            {
                lastvalue === quantity ? 
                (
                    <FiPlusCircle color="#dee2e6"  size={40} />
                )
                :
                (
                    <FiPlusCircle onClick={Increase} size={40} />
                )
            }
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

export default Step03;
