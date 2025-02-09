import React , {createContext , useContext, useState} from 'react'
import { toast } from 'sonner'

const CauseWayMyContext = createContext()

function CausewayMyContextProvider({children}) {
  const [cursorVariant , setCursorVariant] = useState("default")
  const [sideBarActive , setSideBarActive] = useState(false)
  const [openBg , setOpenBg] = useState(false)
  const [bookingSummaryOpen , setBookingSummaryOpen] = useState(false)
  const [openSerachLoader , setOpenSerachLoader] = useState(false)
  const [textCursor  , setTextCursor] = useState("")
  const [loaderActive  , setLoaderActive] = useState(true)
  const [activePageTrans , setPageTrans] = useState(false)
  const [movePage , setMovePage] = useState("")
  const [blog , setBlog] = useState({})
  const [imageSliderStatus , setImageSliderStatus ] = useState(false)
  const [sliderImageList  , setSliderImageList] = useState([])
  const [vehicaleFillterStatus , setVehicaleFillterStatus ] = useState(false)
  
  const notificationAvtive = (title , description , isError , notiIcon) => {
    if(isError){
      toast(title, {
        description: description,
        position: "top-right",
        type: "error",
        icon: (
         notiIcon
        ),
        style: {
            backgroundColor: "#811311", // Custom background color
            color: "#ffffff",           // Custom text color
            border: "1px solid #811311", // Border to match branding
            padding: "12px 13px",            // Center text and icon
            display: "flex",
            alignItems: "center",
            gap: "8px",  
        },
      });
    }else{
      toast(title, {
        description: description,
        position: "top-right",
        type: "success",
        icon: (
          notiIcon
        ),
        style: {
            backgroundColor: "#00693E", // Custom background color
            color: "#ffffff",           // Custom text color
            border: "1px solid #00693E", // Border to match branding
            padding: "12px 13px",            // Center text and icon
            display: "flex",
            alignItems: "center",
            gap: "3px",  
        },
      });
    }
  }

  const values = {
    cursorVariant,
    setCursorVariant,
    textCursor, 
    setTextCursor,
    sideBarActive,
    setSideBarActive,
    openBg,
    setOpenBg,
    loaderActive, 
    setLoaderActive, 
    setPageTrans,
    activePageTrans,
    movePage, 
    setMovePage,
    blog, 
    setBlog,
    notificationAvtive,
    imageSliderStatus , 
    setImageSliderStatus, 
    setSliderImageList,
    sliderImageList,
    openSerachLoader , 
    setOpenSerachLoader,
    vehicaleFillterStatus, 
    setVehicaleFillterStatus,
    bookingSummaryOpen,
    setBookingSummaryOpen 
  }

  return (
    <CauseWayMyContext.Provider value={values}>
      {children} 
    </CauseWayMyContext.Provider>
  )
}

export const useCausewayMyContext = () => (
    useContext(CauseWayMyContext)
)


export default CausewayMyContextProvider