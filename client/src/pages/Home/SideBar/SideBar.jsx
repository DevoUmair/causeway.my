import React from 'react'
import logo from '../../../assets/logo/logo-black.png'
import './SideBar.css'
import { RxCross2 } from 'react-icons/rx'
import { MdAccessTime, MdMail} from 'react-icons/md'
import { GoArrowRight} from 'react-icons/go'
import { IoLocationSharp } from 'react-icons/io5'
import { PiPhoneCallLight } from 'react-icons/pi'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { useCausewayMyContext } from '../../../context/CausewayMyContextProvider'
import { allPages } from '../../../../causewayDb'
import { Link, useNavigate } from 'react-router-dom'

function SideBar({page}) {
  const {sideBarActive , setSideBarActive , setOpenBg} = useCausewayMyContext()

  const handleSideBar = () =>{
    setOpenBg(false)
    setSideBarActive(false)
  }
    
  return (
    <div className={`sidebar shadow-xl px-[20px] py-[25px] block xxl:hidden custom-trans ${sideBarActive && 'sidebar-active'}`} >
        <div className='flex justify-between items-center' >
            <img src={logo} className='w-[170px] object-contain' />
            <RxCross2 onClick={handleSideBar} size={35} color='#811311' className='cursor-pointer' />
        </div>

        <div className='mt-[80px] flex justify-between items-start gap-[20px] flex-col' >
            {
                allPages?.map((pageC , index) => (
                    <SideBarMainLinks key={index} name={pageC.page} to={pageC.name} page={page}  />
                ))
            }
        </div>

        <div className='mt-[60px] w-full' >
                <div> 
                    <p className='flex justify-start gap-1 text-ptextCM text-[15px] font-semibold leading-[20px]' >
                        <IoLocationSharp size={28} />
                        <span>2356 Oakwood Drive, Suite 18, San Francisco, California 94111, US</span>
                    </p>
                    <p className='flex justify-start gap-2 text-ptextCM text-[15px] font-semibold mt-[10px]' >
                        <MdAccessTime size={18} />
                        <span>Hours: 8:00 - 17:00, Mon - Sat</span>
                    </p>
                    <p className='flex justify-start gap-2 text-ptextCM text-[15px] font-semibold mt-[10px]' >
                        <MdMail  size={18} />
                        <span>hello@causeway.my</span>
                    </p>
                </div>

                <div className='mt-[30px]' >
                    <div>
                        <p className='text-ptextCM flex justify-start items-center gap-2' >
                            <PiPhoneCallLight size={25} />
                            <span className='text-black font-semibold' >Need Help? Call Us</span>
                        </p>
                        <p className='text-[25px] font-bold text-primaryCM mt-2' >+1 222-555-33-99</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-start gap-3 text-black items-center absolute bottom-0 left-0 px-[20px] py-[25px] w-full' >
                <p className='text-black text-[16px] font-bold' >Follow Us</p>
                <div className='flex justify-start gap-2 text-primaryCM text-[22px] items-center' >
                    <FaFacebookF size={20} />
                    <FaInstagram size={23} />
                    <FaXTwitter size={23} />
                </div>
            </div>
    </div>
  )
}

const SideBarMainLinks = ({ name , to , page}) => {
    const {setSideBarActive ,  setOpenBg} = useCausewayMyContext()
    const navigate = useNavigate()
    const {setPageTrans , setMovePage} = useCausewayMyContext()

    const handleNavigation = () => {
        setSideBarActive(false) 
        setOpenBg(false)
        const path = page !== 'home' 
            ? (to === 'home' ? '../' : `../${to}`)
            : (to === 'home' ? './' : `./${to}`)
  
            setTimeout(() => {
                navigate(path)
            }, 300)
        // setPageTrans(true)
        // setMovePage(to)
    }

    return(
        <Link
            onClick={handleNavigation}
            // to={`${page !== 'home' ?  `${to === 'home' ? `../` : `../${to}`}` : `./${to === 'home' ? `./` : to }`}`} 
            className= {`${page === to ? 'text-primaryCM' : 'text-[#000]'}  hover:text-primaryCM font-semibold cursor-pointer custom-trans text-[16px] flex justify-between w-full gap-1 items-center`}
        >
            <span>{name}</span>
            <GoArrowRight />
        </Link>
    )
}

export default SideBar