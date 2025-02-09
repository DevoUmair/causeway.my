import { Oval } from 'react-loader-spinner'
import { useCausewayMyContext } from '../../context/CausewayMyContextProvider'
import React from 'react'

function SearchLoader() {
  const {openSerachLoader} = useCausewayMyContext()


  return (
    <div className={`blackBg custom-trans flex justify-center !z-[9999] items-center ${openSerachLoader && 'blackBg-active'}`} >
        <div className='w-[150px] h-[150px] rounded-lg flex justify-center items-center' >
            <Oval
                    visible={true}
                    height="80"
                    width="80"
                    color="#811311"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    strokeWidth="3"
                    secondaryColor="#cecece"
            />
        </div>
    </div>
  )
}

export default SearchLoader