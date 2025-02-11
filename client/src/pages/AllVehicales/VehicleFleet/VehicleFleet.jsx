import { useCausewayHqContext } from '../../../context/CausewayHqContextProvider'
import './VehicleFleet.css'
import React , {useEffect , useState} from 'react'
import { BiTachometer } from 'react-icons/bi'
import { BsFuelPump, BsLuggage, BsSpeedometer2 } from 'react-icons/bs'
import { PiEngineBold, PiSteeringWheel } from 'react-icons/pi'
import logo from '../../../assets/logo/logo.png'

import filterIcon  from '../../../assets/reservation/filter.png'

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../../../components/ui/pagination"


import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "../../../components/ui/select"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../../components/ui/accordianFillter"

import { Label } from "../../../components/ui/label"
import { Checkbox } from "../../../components/ui/checkbox"
import { Slider } from "../../../components/ui/slider"

import { useCausewayMyContext } from '../../../context/CausewayMyContextProvider'
import { CiCalendar } from 'react-icons/ci'
import { FaCalendarCheck, FaCarAlt, FaEye, FaLinux } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { LucideDoorOpen } from 'lucide-react'
import { MdOutlineColorLens, MdOutlineRadio } from 'react-icons/md'
import { IoIosSearch } from 'react-icons/io'
import { RxCross1 } from 'react-icons/rx'
import { Oval } from 'react-loader-spinner'
import { useNavigate, useSearchParams } from 'react-router-dom'
import empty from '../../../../src/assets/svgs/empty.svg'

function VehicleFleet() {
   const [newVehicales , setAllNewVehicales] = useState([]) 
   const [perPageCount , setPageCount] = useState(5) 
   const [perPageCountList ,  setPerPageCountList] = useState([5 , 10 , 15 ,20])
   const [paginationNumberList , setPaginationNumberList] = useState([])
   const [currentPaage , setCurrentPage] = useState(0)
   const [newVehicalesFillterd , setNewVehicalesFillterd] = useState([])
   const {allVehicales , allVehcialeTypes , additionalFeaturesList , allVehcialeClasses , referenceVehicles , filterCartype , setFilterCarType} = useCausewayHqContext()
   const [openItem, setOpenItem] = useState(1);
   const {setOpenSerachLoader , vehicaleFillterStatus, setVehicaleFillterStatus , setOpenBg , openSerachLoader } = useCausewayMyContext()
 
   const [filterpriceRage , setFilterPriceRage] = useState([150 , 700])
   const [filterFeature , setFilterFeature] = useState([])

   const [searchParams] = useSearchParams();
   const navigate = useNavigate();

   useEffect(() => { 
        if(allVehcialeTypes?.length > 0 ){
            if (searchParams.toString()) {
                if (searchParams.has("carType")) {
                    const carType = searchParams.get("carType");
                    const carTypeNum = Number(carType)
                    const carTypeAvailbel = allVehcialeTypes?.filter((ct) => ct?.id === carTypeNum)

                    if(carTypeAvailbel?.length > 0){
                        setFilterCarType(carType ? [carTypeNum] : []);
                    }else{
                        navigate("/not-found");
                    }           
                }
            } 
        }
    }, [searchParams , allVehcialeTypes]);

   useEffect(() =>{
        if(newVehicalesFillterd?.length === 0){
            if (allVehicales?.length > 0) {
                const filteredVehicles = allVehicales
                .slice()
                .filter(vehicle => {
                        return (vehicle.status === "available" || vehicle.status === "rental") && vehicle?.vehicle_class?.images.length > 0;
                }).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))   
        
                filteringVehicle(filteredVehicles)
            }
        }

        if(filterCartype.length > 0){
            if(newVehicalesFillterd?.length === 0){
                hanldeFilter()
            }
        }
    },[allVehicales , filterCartype])

    const emptyFilter = () => {
        setOpenSerachLoader(true)
        setTimeout(() => {
           
            const filteredVehicles = allVehicales
            .slice()
            .filter(vehicle => {
                return (vehicle.status === "available" || vehicle.status === "rental") && vehicle?.vehicle_class?.images.length > 0;
            }).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))   

            filteringVehicle(filteredVehicles)
            setOpenSerachLoader(false)
            setFilterCarType([])
            setFilterFeature([])
        },1000)
    }

    const filteringVehicle = (vehicles) => {
        const shuffledFillterdVehicales = shuffleVehicleClasses(vehicles)
        const paginationList = generatePaginationList(shuffledFillterdVehicales.length, perPageCount);


        setPaginationNumberList(paginationList);
        setCurrentPage(paginationList[0])
        setAllNewVehicales(shuffledFillterdVehicales);
        setNewVehicalesFillterd(shuffledFillterdVehicales.slice(0, (paginationList[0]  * perPageCount) ) )
    }

    const handleSelectPerPage = (value) =>{
        setOpenSerachLoader(true)
        setTimeout(() => {
            setPageCount(value)
            const paginationList = generatePaginationList(newVehicales.length, value);
            setPaginationNumberList(paginationList);
            setCurrentPage(paginationList[0])
            setNewVehicalesFillterd(newVehicales.slice(0, (paginationList[0]  * value) ))
            setOpenSerachLoader(false)
        },1000) 
    }
   
    function generatePaginationList(arrayLength, perPage) {
        const totalPages = Math.ceil(arrayLength / perPage); // Calculate total pages
        return Array.from({ length: totalPages }, (_, index) => index + 1);
    }
   
    function shuffleVehicleClasses(vehicles) {
           const result = [];
           const vehicleGroups = {};
         
           vehicles.forEach(vehicle => {
             const classId = vehicle?.vehicle_class_id;
             if (!vehicleGroups[classId]) vehicleGroups[classId] = [];
             vehicleGroups[classId].push(vehicle);
           });
         
           const groupKeys = Object.keys(vehicleGroups);
           
           while (result.length < vehicles.length) {
             for (let i = 0; i < groupKeys.length; i++) {
               const key = groupKeys[i];
               if (vehicleGroups[key].length > 0) {
                 result.push(vehicleGroups[key].shift());
               }
             }
             groupKeys.sort(() => Math.random() - 0.5);
           }
         
           return result;
    }

    const handlePagination = (num) => {
        setOpenSerachLoader(true)
        setTimeout(() => {
            setCurrentPage(num)
            const indexOfPagination = paginationNumberList.findIndex((pl) => pl === num)
            setNewVehicalesFillterd(newVehicales.slice((paginationNumberList[indexOfPagination - 1] * perPageCount) , (num * perPageCount)))
            setOpenSerachLoader(false)
        }, 1000)
    }

    const handlePaginationPrev = () => {
        setOpenSerachLoader(true)
        setTimeout(() => {
            if(currentPaage !== 1){
                const indexOfPagination = paginationNumberList.findIndex((pl) => pl === currentPaage)
                const prevPage = paginationNumberList[indexOfPagination - 1]
                setCurrentPage(prevPage)
        
                setNewVehicalesFillterd(newVehicales.slice((paginationNumberList[indexOfPagination - 2] * perPageCount), (prevPage * perPageCount)))
            }
            setOpenSerachLoader(false)
        },1000)
      
    }

    const handlePaginatioNext = () => {
        setOpenSerachLoader(true)
        setTimeout(() => {
            if(currentPaage !== paginationNumberList.length - 1){
                const indexOfPagination = paginationNumberList.findIndex((pl) => pl === currentPaage)
                const nexPage = paginationNumberList[indexOfPagination + 1]
                setCurrentPage(nexPage)
        
                setNewVehicalesFillterd(newVehicales.slice((nexPage  * perPageCount), (paginationNumberList[indexOfPagination + 2] * perPageCount)))
            }
            setOpenSerachLoader(false)
        }, 1000)
    }

    const handleSliderChange = (value) => {
        setFilterPriceRage(value)
    };

    const handleCarTypeCheckboxChange = (id) => {
        setFilterCarType((prevSelected) =>
          prevSelected.includes(id)
            ? prevSelected.filter((type) => type !== id) // Remove if already selected
            : [...prevSelected, id] // Add if not selected
        );
    };

    const handleFeatureCheckboxChange = (id) => {
        setFilterFeature((prevSelected) =>
          prevSelected.includes(id)
            ? prevSelected.filter((type) => type !== id) // Remove if already selected
            : [...prevSelected, id] // Add if not selected
        );
    };

    const hanldeFilter = () => {
        setOpenSerachLoader(true)
        setTimeout(() => {
            if(filterCartype.length > 0  && filterFeature.length > 0 ){
                const filteredVehicles = allVehicales
                .slice()
                .filter(vehicle => { 
                    const vehicaleClass = allVehcialeClasses?.filter((vc) => vc?.id === vehicle?.vehicle_class_id)[0] 
                    const vehicPriceVehic = referenceVehicles?.filter((vc) => vc?.vehicle_class_id === vehicle?.vehicle_class_id)[0] 
    
                    const priceLessPrio = vehicPriceVehic?.valueWithoutTax?.amount;
                    const pricePrio = vehicaleClass?.active_rates[0]?.price_intervals[0]?.price;
                    const price = pricePrio === "" ? priceLessPrio : pricePrio;
                        
                        const vehicaleFeatures = vehicaleClass?.features?.map((f) => f.id) || [];

                            // Check if all required features are present
                        const hasRequiredFeatures = filterFeature.every((featureId) =>
                            vehicaleFeatures.includes(featureId)
                        );
                        
                        return (
                            (vehicle.status === "available" || vehicle.status === "rental") &&
                            vehicle?.vehicle_class?.images.length > 0 &&
                            filterCartype.includes(vehicle?.vehicle_type_id) &&
                            isPriceInRange(price) &&
                            hasRequiredFeatures // Ensure the vehicle meets feature requirements
                        );
                }).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))   
            
                filteringVehicle(filteredVehicles)
                setOpenSerachLoader(false)
                setVehicaleFillterStatus(false)
                setOpenBg(false)
            }else if(filterFeature.length > 0){
                const filteredVehicles = allVehicales
                .slice()
                .filter(vehicle => { 
                    const vehicaleClass = allVehcialeClasses?.filter((vc) => vc?.id === vehicle?.vehicle_class_id)[0] 
                    const vehicPriceVehic = referenceVehicles?.filter((vc) => vc?.vehicle_class_id === vehicle?.vehicle_class_id)[0] 
    
                    const priceLessPrio = vehicPriceVehic?.valueWithoutTax?.amount;
                    const pricePrio = vehicaleClass?.active_rates[0]?.price_intervals[0]?.price;
                    const price = pricePrio === "" ? priceLessPrio : pricePrio;
                            
                    const vehicaleFeatures = vehicaleClass?.features?.map((f) => f.id) || [];

                    const hasRequiredFeatures = filterFeature.every((featureId) =>
                        vehicaleFeatures.includes(featureId)
                    );

                    return (
                        (vehicle.status === "available" || vehicle.status === "rental") &&
                        vehicle?.vehicle_class?.images.length > 0 &&
                        isPriceInRange(price) &&
                        hasRequiredFeatures 
                    );
                }).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))   
            
                filteringVehicle(filteredVehicles)
                setOpenSerachLoader(false)
                setVehicaleFillterStatus(false)
                setOpenBg(false)
            }else if(filterCartype.length > 0){
                const filteredVehicles = allVehicales
                .slice()
                .filter(vehicle => { 
                    const vehicaleClass = allVehcialeClasses?.filter((vc) => vc?.id === vehicle?.vehicle_class_id)[0] 
                    const vehicPriceVehic = referenceVehicles?.filter((vc) => vc?.vehicle_class_id === vehicle?.vehicle_class_id)[0] 
    
                    const priceLessPrio = vehicPriceVehic?.valueWithoutTax?.amount;
                    const pricePrio = vehicaleClass?.active_rates[0]?.price_intervals[0]?.price;
                    const price = pricePrio === "" ? priceLessPrio : pricePrio;
                                
                    return( 
                        (vehicle.status === "available" || vehicle.status === "rental")  && vehicle?.vehicle_class?.images.length > 0 && ( filterCartype.includes(vehicle?.vehicle_type_id) && isPriceInRange(price) )
                    );
                }).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))   
            
                filteringVehicle(filteredVehicles)
                setOpenSerachLoader(false)
                setVehicaleFillterStatus(false)
                setOpenBg(false)
            }
            else{
                const filteredVehicles = allVehicales
                .slice()
                .filter(vehicle => { 
                    const vehicaleClass = allVehcialeClasses?.filter((vc) => vc?.id === vehicle?.vehicle_class_id)[0] 
                    const vehicPriceVehic = referenceVehicles?.filter((vc) => vc?.vehicle_class_id === vehicle?.vehicle_class_id)[0] 
    
                    const priceLessPrio = vehicPriceVehic?.valueWithoutTax?.amount;
                    const pricePrio = vehicaleClass?.active_rates[0]?.price_intervals[0]?.price;
                    const price = pricePrio === "" ? priceLessPrio : pricePrio;
                    
                            
                    return( 
                        (vehicle.status === "available" || vehicle.status === "rental") && vehicle?.vehicle_class?.images.length > 0 &&  isPriceInRange(price) 

                    );
                }).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))   
            
                filteringVehicle(filteredVehicles)
                setOpenSerachLoader(false)
                setVehicaleFillterStatus(false)
                setOpenBg(false)
            }
        }, 1000)
    }

    const isPriceInRange = (price) => {
        const [min, max] = filterpriceRage;
        return price >= min && price <= max;
    };
    

    const handleOpenFilter = () => {
        setOpenBg(true)
        setVehicaleFillterStatus(true)
    }

    const handleCloseFilter = () => {
        setOpenBg(false)
        setVehicaleFillterStatus(false)
    }

  return (
    <div className='custom-container'>
        <div className='flex justify-start gap-1 items-start flex-col mt-[70px]'>
            <h1 className='text-[27px] md:text-[30px]  xl:text-[35px] [40px] font-bold'>Causeway Vehicle Fleets</h1>
            <p className='text-ptextCM text-[15px] font-medium max-w-[750px] w-full mr-auto'>
                Do ipsum esse commodo et commodo nisi aute qui qui do non occaecat. Nulla voluptate Lorem eiusmod cillum irure ea excepteur.
            </p>
        </div>
        <div className='flex justify-between items-start gap-4 ' >
            <div className={`basis-0  fixed custom-trans top-0 bottom-0 max-w-[500px] w-[80%] bg-white z-[9999] xl:z-[500] xl:bg-transparent xl:sticky xl:basis-[20%] xl:w-full shadow-lg xl:shadow-none p-[20px] xl:p-0 mt-[0px] xl:mt-[80px]  xl:top-[130px] ${vehicaleFillterStatus ? 'left-[0]' : 'left-[-100%]'}`} >
                <div className='my-[20px]  xl:hidden flex justify-between items-center custom-border-bottom pb-[15px]' >
                    <h1 className='text-primary font-semibold text-[18px] sm:text-[22px] ' >Causeway Fillter</h1>
                    <div onClick={handleCloseFilter} className='text-primary w-[40px] h-[40px] cursor-pointer shadow-md rounded-full flex justify-center items-center bg-slate-200' >
                         <RxCross1 size={20} />
                    </div>
                </div>

                <div className='overflow-y-scroll h-[75%] xl:overflow-y-auto xl:h-fit pb-[30px] xl:pb-0' >
                    <Accordion value={openItem} onValueChange={setOpenItem} type="single" collapsible className="w-full">
                            <AccordionItem value={1} >
                                <AccordionTrigger>Car Type</AccordionTrigger>
                                <AccordionContent>
                                    {
                                        allVehcialeTypes?.map((vt  , index) => (
                                            <div key={index} className='mt-[22px]' >
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox checked={filterCartype.includes(vt.id)} onCheckedChange={() => handleCarTypeCheckboxChange(vt.id)} id={vt?.id} />
                                                    <Label htmlFor={vt?.id}>{vt?.label}</Label>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value={2} >
                                <AccordionTrigger>Additional Features</AccordionTrigger>
                                <AccordionContent>
                                    {
                                        additionalFeaturesList?.map((vt , index) => (
                                            <div key={index} className='mt-[22px]' >
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox checked={filterFeature.includes(vt.id)} onCheckedChange={() => handleFeatureCheckboxChange(vt.id)} id={vt?.id}  />
                                                    <Label htmlFor={vt?.id}>{vt?.label}</Label>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value={3} >
                                <AccordionTrigger>Price</AccordionTrigger>
                                <AccordionContent>
                                    <div className='py-[20px]' > 
                                        <Slider onValueChange={handleSliderChange} defaultValue={filterpriceRage} min={150}  max={700} step={10} />
                                        <div className='flex justify-between items-center' >
                                            <p className='text-[13px] text-ptextCM font-medium' >{filterpriceRage[0]},00 RM</p>
                                            <p className='text-[13px] text-ptextCM font-medium' >{filterpriceRage[1]},00 RM</p>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                    </Accordion>
                </div>
                <div className='w-full absolute xl:relative z-[10]  bottom-0 left-0 p-[20px] xl:p-[0px]' >
                    <button onClick={hanldeFilter} className='flex w-full relative  justify-center gap-2 items-center bg-primary  py-[15px] rounded-lg !text-[15px] text-white  font-bold' >
                         {
                            !openSerachLoader ?
                            (
                                <div className='flex justify-center items-center gap-2' >
                                    <IoIosSearch size={24} />
                                    <span>Search</span>
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
                    </button>
                </div>
            </div>
            <div className='basis-[100%] w-full xl:basis-[80%]' >
                 <div className='mt-[20px]  flex-col sm:flex-row flex justify-between items-start sm:items-center gap-4 sm:gap-2' >
                       <div className='flex justify-between items-center gap-2' > 
                            <div onClick={handleOpenFilter} className='p-[8px] border cursor-pointer block xl:hidden border-[#0E1629] rounded-md' >
                                <img src={filterIcon} alt='filterIcon' className='w-[20px] h-[20px] object-contain'  />
                            </div>
                            {
                                newVehicalesFillterd.length > 0 &&
                                (
                                    <p>
                                        Showing <span>{(paginationNumberList.findIndex((pl) => pl === currentPaage) * perPageCount) + 1}</span> to 
                                        {
                                            currentPaage !== paginationNumberList.length
                                            ? <span> {(paginationNumberList.findIndex((pl) => pl === currentPaage) + 1) * perPageCount} </span>
                                            : <span> {(paginationNumberList.findIndex((pl) => pl === currentPaage)  * perPageCount) + (newVehicales.length - (paginationNumberList.findIndex((pl) => pl === currentPaage)  * perPageCount))} </span> // Show total vehicles for the last page
                                        } 
                                        of <span> {newVehicales.length}</span> vehicles
                                    </p>
                                )
                                
                            }
                       </div>
                       <div className='flex justify-end gap-2 items-center flex-row-reverse sm:flex-row' >
                            <div className='flex justify-end gap-1 items-center' >
                                {
                                    (filterCartype.length > 0 || filterFeature.length > 0) && (
                                        <p  className='border-2 border-primary flex justify-center items-center gap-2 cursor-pointer rounded-2xl text-[15px] font-semibold px-[15px] py-[8px] text-primary' >
                                            <RxCross1 onClick={emptyFilter} color='#0F172A' />
                                            <span>Clear</span>
                                        </p>
                                    )
                                }
                            </div>
                            <div className='flex justify-end gap-2 items-center' >
                                        <Select onValueChange={(value) => handleSelectPerPage(value)} >
                                            <SelectTrigger className="w-[80px]">
                                                <SelectValue placeholder="Show" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                {
                                                    perPageCountList?.map((count , index) => (
                                                        <SelectItem key={index} value={count}>{count}</SelectItem>
                                                    ))
                                                }
                                        
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                            </div> 
                       </div>
                 </div>
                 <div className='mt-[20px] ' >
                    {
                        newVehicalesFillterd?.length == 0 ?
                        (
                            <div className='w-full flex justify-center items-center mt-9' >
                                <div>
                                    <img className='w-[250px] object-contain'  src={empty} />
                                    <h3 className='text-center mt-3 w-full text-primaryCM font-semibold' >NO VEHICLE FOUND</h3>
                                </div>
                            </div>
                        )
                        :
                        (
                            <div className='flteer-vehi-container' >
                                {
                                    newVehicalesFillterd?.map((data , index) => {
                                        return(
                                            <EachPopularVehi key={index} data={data} index={index}  />
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                    
                </div>
                {
                    newVehicalesFillterd.length > 0 && (
                    <div className='mt-[15px]' >
                        <Pagination>
                            <PaginationContent>
                                {
                                    currentPaage !== 1 && (
                                        <PaginationItem>
                                            <PaginationPrevious  onClick={handlePaginationPrev}  />
                                        </PaginationItem>
                                    )
                                }
                                
                                {
                                     paginationNumberList?.slice(currentPaage - 1, currentPaage + 2).map((num , index) => (
                                        <PaginationItem key={index} >
                                            <PaginationLink onClick={() => handlePagination(num)} isActive={currentPaage === num}>{num}</PaginationLink>
                                        </PaginationItem>
                                    ))
                                    
                                }
                                
                                {
                                    paginationNumberList?.length - 2 > currentPaage && (
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                    )
                                }
                                
                                {
                                    currentPaage < paginationNumberList?.length - 1  && (
                                        <PaginationItem>
                                            <PaginationNext  onClick={handlePaginatioNext}  />
                                        </PaginationItem>
                                    )
                                }
                              
                            </PaginationContent>
                        </Pagination>
                    </div>
                    )
                }


            </div>
        </div>
    </div>
  )
}

const EachPopularVehi = ({data , index}) => {
    const [vehiPrice , setVehiPrice] = useState("")
    const [vehicaleClassData , setVehicaleClassData] = useState({})
    const { allVehcialeClasses , referenceVehicles} = useCausewayHqContext() 
    const {setSliderImageList , setImageSliderStatus } = useCausewayMyContext()
    const [selectedImage , setSelectedImage] = useState()
        

    useEffect(() => {
        const images = data?.vehicle_class?.images || [];
        const selectedImage = images.length > 0 ? images[index % images.length] : null;
    
        setSelectedImage(selectedImage)

        const vehicaleClass = allVehcialeClasses?.filter((vc) => vc?.id === data?.vehicle_class_id)[0] 
        const vehicPriceVehic = referenceVehicles?.filter((vc) => vc?.vehicle_class_id === data?.vehicle_class_id)[0] 
        setVehicaleClassData(vehicaleClass)

        if (vehicaleClass) {
            // const priceLessPrio = vehicPriceVehic?.valueWithoutTax?.amount;
            // const pricePrio = vehicaleClass?.active_rates[0]?.price_intervals[0]?.price;
            // const price = pricePrio === "" ? priceLessPrio : pricePrio;
            const price = vehicPriceVehic?.valueWithoutTax?.amount;
    
            const numericPrice = typeof price === 'number' ? price : parseFloat(price);
        
            const formattedPrice =
                !isNaN(numericPrice) ? `${numericPrice.toFixed(2).replace('.', ',')}` : 'N/A';
        
            setVehiPrice(formattedPrice);
        }
    },[data])
    
    const openImageSlider = () => {
        setImageSliderStatus(true) 
        setSliderImageList(data?.vehicle_class?.images)
    }

    return(
        <div className='w-full rounded-2xl custom-border overflow-hidden bg-white' >
            <div className='flex relative justify-between flex-col sm:flex-row' >
                <div className='basis-[100%]  xsm:basis-[40%] relative' >
                    <div className='absolute top-3 p-[7px] cursor-pointer rounded-full glass-bg glass-bg-active left-3 flex justify-center items-center z-40' >            
                        <FaEye onClick={openImageSlider} size={16} color='#fff' />
                    </div>
                    {/* <div className={`absolute top-3 px-[16px] right-9 py-[8px] rounded-full`} style={{backgroundColor:`${data?.status_color}`}} >
                        <p className='font-semibold text-white text-[13px]' >{data?.status_label}</p>
                    </div> */}
                    <div className={`absolute top-3 right-9`}>
                        <img className='w-[100px] object-contain' src={logo} alt='logo' />
                    </div>
                    <img src={selectedImage?.public_link} className=' w-[100%] h-full object-cover' />
                </div>
                <div className='px-[15px] xsm:pl-[15px] xl:pl-[30px] py-[30px] custom-max-w  basis-[100%]  xsm:basis-[60%] bg-white rounded-tl-2xl rounded-bl-2xl rounded-tr-2xl xsm:rounded-tr-none translate-x-0 translate-y-[-20px] xsm:translate-y-0 xsm:translate-x-[-20px]' >
                    <div className='custom-border-bottom pb-[30px]' >
                        <div>
                            <h3 className='font-semibold text-[20px] sm:text-[24px]' >{data?.label?.split('-')[0]}</h3>
                            <p className='text-[13px] sm:text-[14px]  text-grayDarkCM font-normal' >{vehicaleClassData?.name} - {data?.vehicle_type?.label}</p>
                        </div>
                        <div className='mt-[20px]  custom-flex gap-7 justify-start flex-wrap' >
                            {
                                data?.fuel_level_for_display && (
                                    <div className='custom-flex justify-center items-center gap-2 text-grayDarkCM flex-col' >
                                        <BsFuelPump />
                                        <p className='text-[14px]' >{data?.fuel_level_for_display}</p>
                                    </div>
                                )
                            }
                            
                            {
                                data?.odometer ? (
                                    <div className='custom-flex justify-center items-center gap-2 text-grayDarkCM flex-col' >
                                        <BsSpeedometer2 size={21} />
                                        <p className='text-[14px]' >{data?.odometer} miles</p>
                                    </div>
                                )
                                :
                                (
<></>
                                )
    
                            }
                           {
                            data?.year && (
                                <div className='custom-flex justify-center items-center gap-2 text-grayDarkCM flex-col' >
                                    <CiCalendar size={21} />
                                    <p className='text-[14px]' >{data?.year}</p>
                                </div>
                            )
                           }
                           {
                            data?.color && (
                                <div className='custom-flex justify-center items-center gap-2 text-grayDarkCM flex-col' >
                                    <MdOutlineColorLens size={21} />
                                    <p className='text-[14px]' >{data?.color}</p>
                                </div>
                            )
                           }
                           {
                            vehicaleClassData?.features?.map((data , index) => {
                               if(data?.label === 'Automatic Transmission' || data?.label === 'Manual Transmission'){
                                    return(
                                        <div key={index} className='custom-flex justify-center items-center gap-2 text-grayDarkCM flex-col' >
                                            <FaCarAlt size={21} />
                                            <p className='text-[14px]' >{data?.label}</p>
                                        </div>
                                    )
                               }
                               if(data?.label === 'Airconditioning'){
                                    return(
                                        <div key={index} className='custom-flex justify-center items-center gap-2 text-grayDarkCM flex-col' >
                                            <FaLinux size={21} />
                                            <p className='text-[14px]' >{data?.label}</p>
                                        </div>
                                    )
                               }
                               if(data?.label === '4-doors' || data?.label === '5-doors'){
                                    return(
                                        <div key={index} className='custom-flex justify-center items-center gap-2 text-grayDarkCM flex-col' >
                                            <LucideDoorOpen size={21} />
                                            <p className='text-[14px]' >{data?.label}</p>
                                        </div>
                                    )
                               }
                               if(data?.label === 'Power Steering'){
                                    return(
                                        <div key={index} className='custom-flex justify-center items-center gap-2 text-grayDarkCM flex-col' >
                                            <PiSteeringWheel size={21} />
                                            <p className='text-[14px]' >{data?.label}</p>
                                        </div>
                                    )
                               }
                               if(data?.label === 'Radio/CD Player'){
                                    return(
                                        <div key={index} className='custom-flex justify-center items-center gap-2 text-grayDarkCM flex-col' >
                                            <MdOutlineRadio size={21}/>
                                            <p className='text-[14px]' >{data?.label}</p>
                                        </div>
                                    )
                               }
                               if(data?.label === '3 Luggage'){
                                    return(
                                        <div key={index} className='custom-flex justify-center items-center gap-2 text-grayDarkCM flex-col' >
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
                                        <p className='font-semibold text-[25px] flex justify-start gap-2 items-baseline'>
                                            <span>RM {vehiPrice}</span>
                                            <span className='text-ptextCM text-[12px]' >/ day</span>
                                        </p>

                                    )
                                }
                            </div>
                        </div>
                        <button className='primaryBtn flex justify-center gap-2 items-center bg-primaryCM px-4 py-[10px] rounded-lg !text-[13px] text-white hover:text-black before:bg-secondaryCM font-bold' >
                            <FaCalendarCheck />
                            <span>Book Now</span>
                        </button>
                        {/* {
                            data?.status_label === 'Available' ?
                            (
                                <button className='primaryBtn flex justify-center gap-2 items-center bg-primaryCM px-4 py-[10px] rounded-lg !text-[13px] text-white hover:text-black before:bg-secondaryCM font-bold' >
                                    <FaCalendarCheck />
                                    <span>Book Now</span>
                                </button>
                            ) 
                            : 
                            (
                                <button className='primaryBtn flex justify-center gap-2 items-center bg-primaryCM px-4 py-[10px] rounded-lg !text-[13px] text-white hover:text-black before:bg-secondaryCM font-bold' >
                                    <FiPhoneCall />
                                    <span>Contact Us</span>
                                </button>
                                
                            )
                        }   */}
                    </div>
                </div>
            </div>
        </div>
        
    )
}


export default VehicleFleet