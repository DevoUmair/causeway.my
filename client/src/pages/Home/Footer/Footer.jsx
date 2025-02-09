import React from 'react'
import './Footer.css'
import logo from '../../../assets/logo/logo.png'
import { IoLocationSharp, IoMailOutline } from 'react-icons/io5'
import { MdAccessTime, MdMail, MdPerson } from 'react-icons/md'
import { PiPhoneCallLight } from 'react-icons/pi'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { allPages } from '../../../../causewayDb'
import { Link, useNavigate } from 'react-router-dom'
import { useCausewayMyContext } from '../../../context/CausewayMyContextProvider'

function Footer({page}) {

    const navigate = useNavigate()
    const {setPageTrans , setMovePage} = useCausewayMyContext()
  
    const handleNavigation = (nexPage) => {
        let path;
        if(nexPage === 'Terms And Condtion'){
            path = page === 'terms-and-condition' ? './' : '../terms-and-condition'
        }
        if(nexPage === 'Privacy Policy'){
            path = page === 'privacy-policy' ? './' : '../privacy-policy'
        }
        if(nexPage === 'Causeway vehicales'){
            path = page === 'causeway-vehicles' ? './' : '../causeway-vehicles'
        }
  
        setPageTrans(true)
        setMovePage(nexPage)
        setTimeout(() => {
            navigate(path)
        }, 1000)
    }

  return (
    <div className='mt-[80px] mb-[95px] sm:mb-[40px] custom-container rounded-2xl bg-black  px-[25px] sm:px-[35px] pt-[40px]' >
       
        <div className='py-[40px] border-b border-[#616161b5] w-full flex items-center justify-between gap-[20px] lg:gap-3 flex-col lg:flex-row' >
            <h1 className='text-[24px] sm:text-[27px] md:text-[30px] text-white font-bold basis-[45%] xl:basis-[55%]' >Subscribe to see secret deals prices drop the moment you sign up!</h1>
            <div className='basis-[55%] xl:basis-[45%] w-full flex justify-end items-center gap-2 sm:gap-4 ' >
                <div className='basis-[70%] sm:basis-[75%] w-full bg-transparent newsletter-border rounded-2xl py-[18px] lg:py-[22px] px-[17px] flex justify-start items-center gap-2' >
                    <IoMailOutline className='text-white'  size={22} />
                    <input type='text' className='text-[16px] w-full text-white border-none bg-transparent outline-none placeholder:text-ptextCM'  placeholder='Enter Your Email...' />
                </div>
                <button className='primaryBtn basis-[30%] sm:basis-[25%]  flex justify-center gap-2 items-center text-[15px] sm:text-[17px] bg-secondaryCM px-5 py-[18px] lg:py-[20px] rounded-lg text-black hover:text-white before:bg-primaryCM font-bold' >
                    <span>SUBSCRIBE</span>
                </button>
            </div>
        </div>

        <div className='flex justify-start lg:justify-between gap-[20px] py-[80px] flex-wrap flex-col md:flex-row' >
            <div className='basis-[100%] w-full md:basis-[45%] xlg:basis-[40%] lg:basis-[25%] xl:basis-[20%] mt-[20px] md:mt-0'  >
                <img src={logo} alt={logo} className='w-[200px] object-contain' />
                <p className='mt-[40px] text-ptextCM text-[15px] w-full  max-w-full xl:max-w-[250px] text-balance' >Aliqua dolor voluptate dolor eu incididunt et labore reprehenderit sint. Aliqua dolor voluptate dolor eu incididunt et labore reprehenderit sint. Aliqua dolor voluptate dolor eu incididunt et labore reprehenderi</p>
            </div>
            <div className='basis-[100%] w-full md:basis-[40%] xlg:basis-[25%] lg:basis-[20%] xl:basis-[13%] mt-[20px] md:mt-0' >
                <h1 className='text-white text-[25px] font-semibold' >Company</h1>
                <div className='mt-[40px] flex flex-col gap-3' >                 
                    {
                        allPages?.map((pageC , index) => (
                            <FooterMainLinks key={index} icon={pageC.footerIcon} name={pageC.page} to={pageC.name} page={page}  />
                        ))
                    }
                </div>
            </div>
            <div className='basis-[100%] w-full md:basis-[25%] lg:basis-[20%] xl:basis-[13%] mt-[20px] md:mt-[40px] xlg:mt-0' >
                <h1 className='text-white text-[25px] font-semibold' >Legal Policy</h1>
                <div className='mt-[40px] ' >
                    <p onClick={() => handleNavigation('Terms And Condtion')}  className='text-ptextCM cursor-pointer hover:text-secondaryCM custom-trans text-[16px] flex justify-start gap-1 items-center pb-2' >
                        <span>Terms & Condition</span>
                    </p>
                    <p onClick={() => handleNavigation('Privacy Policy') }  className='text-ptextCM cursor-pointer hover:text-secondaryCM custom-trans text-[16px] flex justify-start gap-1 items-center pb-2' >
                        <span>Privacy Policy</span>
                    </p>
                </div>
            </div>
            <div className='basis-[100%] w-full md:basis-[30%] lg:basis-[20%] xl:basis-[13%] mt-[20px] mdmt-[40px] lg:mt-0' >
                <h1 className='text-white text-[25px] font-semibold' >Quick Links</h1>
                <div className='mt-[40px] flex flex-col gap-3' >
                    <p className='text-ptextCM cursor-pointer hover:text-secondaryCM custom-trans text-[16px] flex justify-start gap-1 items-center' >
                        <span>Who We</span>
                    </p>
                    <p className='text-ptextCM cursor-pointer hover:text-secondaryCM custom-trans text-[16px] flex justify-start gap-1 items-center' >
                        <span>Car Loan Calculator</span>
                    </p>
                    <p onClick={() => handleNavigation('Causeway vehicales') } className='text-ptextCM cursor-pointer hover:text-secondaryCM custom-trans text-[16px] flex justify-start gap-1 items-center' >
                        <span>Causeway Vehicales</span>
                    </p>
                    <p className='text-ptextCM cursor-pointer hover:text-secondaryCM custom-trans text-[16px] flex justify-start gap-1 items-center' >
                        <span>Popular Vehicale</span>
                    </p>
                    
                </div>
            </div>
            <div className='basis-[100%] w-full md:basis-[35%] xl:basis-[30%] mt-[20px] mdmt-[40px] xl:mt-0' >
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

                <div className='mt-[40px]' >
                    <div>
                        <p className='text-ptextCM flex justify-start items-center gap-2' >
                            <PiPhoneCallLight size={25} />
                            <span className='text-white font-semibold' >Need Help? Call Us</span>
                        </p>
                        <p className='text-[32px] font-bold text-secondaryCM mt-2' >+1 222-555-33-99</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='py-[40px] border-t border-[#616161b5] w-full flex items-start sm:items-center justify-between gap-2 sm:gap-0 flex-col sm:flex-row' >
            <p className='text-white text-[16px]' >© Designed And Developed By <span className='text-primaryCM font-semibold underline' >Umair Lafir</span></p>
            <div className='flex justify-start gap-3 text-white items-center' >
                <p className='text-white text-[16px] font-bold' >Follow Us</p>
                <div className='flex justify-start gap-2 text-white text-[22px] items-center' >
                    <FaFacebookF size={20} />
                    <FaInstagram size={23} />
                    <FaXTwitter size={23} />
                </div>
            </div>
        </div>
    </div>
  )
}

const FooterMainLinks = ({icon , name , to , page}) => {
    const navigate = useNavigate()
    const {setPageTrans , setMovePage} = useCausewayMyContext()

    const handleNavigation = () => {
        const path = page !== 'home'
        ? (to === 'home' ? '../' : `../${to}`)
        : (to === 'home' ? './' : to)
  
        setPageTrans(true)
        setMovePage(to)
        setTimeout(() => {
            navigate(path)
        }, 1000)
    }

    return(
        <p
             onClick={handleNavigation}
            // to={`${page !== 'home' ?  `${to === 'home' ? `../` : `../${to}`}` : `./${to === 'home' ? `./` : to }`}`} 
            className='text-ptextCM cursor-pointer hover:text-secondaryCM custom-trans text-[16px] flex justify-start gap-1 items-center' 
        >
            {icon}
            <span>{name}</span>
        </p>
    )
}

export default Footer