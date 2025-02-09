import { addDays } from 'date-fns'
import React , {createContext , useContext , useState} from 'react'

const CauseWayHqContext = createContext()

function CausewayHqContextProvider({children}) {
  const [allVehcialeTypes , setAllVehicaleTypes] = useState([])
  const [allVehcialeClasses , setAllVehicaleClasses] = useState([])
  const [allVehicales , setAllVehicales ] = useState([])
  const [additionalFeaturesList , setAdditionalFeatureList] = useState([])
  const [allLocation , setAllLocation] = useState([])
  const [bookingStep , setBookingStep] = useState(0)
  const [selectedDropLoc , setSelectedDropLoc] = useState({
          name : "",
          id: 0,
  }) 
  const [selectedPickLoc , setSelectedPickLoc] = useState({
          name : "",
          id: 0,
  }) 

  const [pickupDate , setPickupDate] = useState(new Date())
  const [pickupTime , setPickupTime] = useState(new Date())
  
  const [dropDate , setDropDate] = useState(addDays(new Date(), 1))
  const [dropTime , setDropTime] = useState(new Date())

  const [availableVehicle , setAvailableVehicle] = useState([])
  const [allSecuirityDeposit , setAllSecuirityDeposit] = useState([])
  const [referenceVehicles , setReferenceVehiceles] = useState([])
  const [selectedVehicleBook , setSelectedVehicleBook] = useState(null)
  const [reservationDetail , setReservationDetails] = useState({})
  const [additionalCharges , setAdditionalCharges] = useState(null)
  const [selectedAdditionalCahrges, setSelectedAdditionalCahrges] = useState([])
  const [selectedLicenseImages , setSelectedLicenseImages] = useState([])
  const [customerData , setCustomerData] = useState(
    {
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
    }
  ) 
  const [dobDateSearch , setDobDateSearch] = useState(null)
  const [selectedCustomer , setSelectedCustomer] = useState({})
  const [conformationChecked , setConformationChecked] = useState(false)
  const [reservedReservationDetail , setReservedReservationDetail] = useState(null)
  const [payNowOpen , setPayNowOpen] = useState(false)

  const values = {
    allVehcialeTypes,
    setAllVehicaleTypes,
    allVehicales, 
    setAllVehicales,
    allVehcialeClasses,
    setAllVehicaleClasses,
    additionalFeaturesList, 
    setAdditionalFeatureList,
    allLocation, 
    setAllLocation,
    bookingStep, 
    setBookingStep,
    selectedDropLoc, 
    setSelectedDropLoc, 
    selectedPickLoc, 
    setSelectedPickLoc, 
    pickupDate, 
    setPickupDate, 
    pickupTime, 
    setPickupTime, 
    dropDate, 
    setDropDate, 
    dropTime, 
    setDropTime,
    availableVehicle, 
    setAvailableVehicle,
    referenceVehicles,
    setReferenceVehiceles,
    selectedVehicleBook , 
    setSelectedVehicleBook,
    reservationDetail,
    setReservationDetails,
    allSecuirityDeposit, 
    setAllSecuirityDeposit,
    additionalCharges , 
    setAdditionalCharges,
    customerData,
    setCustomerData,
    selectedLicenseImages,
    setSelectedLicenseImages,
    dobDateSearch, 
    setDobDateSearch,
    selectedCustomer, 
    setSelectedCustomer,
    conformationChecked,
    setConformationChecked,
    selectedAdditionalCahrges, 
    setSelectedAdditionalCahrges,
    reservedReservationDetail,
    setReservedReservationDetail,
    payNowOpen,
    setPayNowOpen 
  }

  return (
    <CauseWayHqContext.Provider
        value={values}
    >
        {children}
    </CauseWayHqContext.Provider>
  )
}

export const useCausewayHqContext = () => (
    useContext(CauseWayHqContext)
)


export default CausewayHqContextProvider