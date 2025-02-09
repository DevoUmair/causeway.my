import React from 'react'
import { allPages } from '../../../causewayDb'
import { Link, useNavigate } from 'react-router-dom'
import { useCausewayMyContext } from '../../context/CausewayMyContextProvider'

function BottomBar({page}) {

  return (
    <div className={`glass-bg   flex sm:hidden glass-bg-active custom-flex justify-between rounded-md items-center gap-2 fixed z-[200] custom-container bottom-[0.75rem] left-0 right-0 py-[15px] px-4 w-ful`} >
        
        {/* <div className={`custom-flex justify-center items-center  flex-col text-secondaryCM text-[14px] font-bold`} >
            <img src={HomeActive} alt={Home} className='w-[25px] h-[25px]' />
            <p>Home</p>
        </div>
        <div className={`custom-flex justify-center items-center  flex-col text-white  text-[14px] font-bold`} >
            <img src={About} alt={About} className='w-[25px] h-[25px]' />
            <p>About</p>
        </div>
        <div className={`custom-flex justify-center items-center  flex-col text-white  text-[14px] font-bold`} >
            <img src={Contact} alt={Contact} className='w-[25px] h-[25px]' />
            <p>Contact</p>
        </div>
        <div className={`custom-flex justify-center items-center  flex-col text-white  text-[14px] font-bold`} >
            <img src={Service} alt={Service} className='w-[25px] h-[25px]' />
            <p>Service</p>
        </div> */}
        {
            allPages?.slice(0, -1).map((pageC, index) => (
                <BottomBarIcon key={index} item={pageC} page={page} to={pageC.name} />
            ))
        }
    </div>
  )
}

const BottomBarIcon = ({item , page , to}) => {
  const navigate = useNavigate()
  const {setPageTrans , setMovePage} = useCausewayMyContext()


  const handleNavigation = () => {
    const path = page !== 'home'
    ? to === 'home' 
      ? '../' 
      : `../${to}`
    : `./${to === 'home' ? './' : to}`

    setPageTrans(true)
    setMovePage(to)
    setTimeout(() => {
      navigate(path)
    }, 1000)
  }

  return(
      <div 
      onClick={() => handleNavigation()}
      // to={`${page !== 'home' ?  `${to === 'home' ? `../` : `../${to}`}` : `./${to === 'home' ? `./` : to }`}`}
      className={`custom-flex cursor-pointer justify-center items-center  flex-col ${item.name === page ? 'text-secondaryCM' : 'text-white'} text-[14px] font-bold`} >
          {
            item.name === page ? 
              <img src={item?.bottomBarIconActive} alt={item?.page} className='w-[25px] h-[25px]' />
            :
              <img src={item?.bottomBarIcon} alt={item?.page} className='w-[25px] h-[25px]' />
          }
          
          <p>{item?.page}</p>
      </div>
  )
}

export default BottomBar