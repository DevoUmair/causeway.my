import { useCausewayMyContext } from '../context/CausewayMyContextProvider'
import React from 'react'

function BlackBg() {
  const {setOpenBg , openBg , setSideBarActive , setVehicaleFillterStatus , setBookingSummaryOpen} = useCausewayMyContext()

  const handleCloseBg = () => {
    setOpenBg(false)
    setSideBarActive(false)
    setVehicaleFillterStatus(false)
    setBookingSummaryOpen(false)
  }

  return (
    <div onClick={handleCloseBg} className={`blackBg custom-trans ${openBg && 'blackBg-active'}`} ></div>
  )
}

export default BlackBg