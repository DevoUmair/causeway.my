import React, { useRef, useState } from 'react'

import user from '../../../assets/contact/user.png'
import email from '../../../assets/contact/email.png'
import email02 from '../../../assets/contact/email-02.png'
import telephone from '../../../assets/contact/telephone.png'
import telephone02 from '../../../assets/contact/telephone-02.png'
import location from '../../../assets/contact/location.png'
import { IoMdArrowRoundForward } from 'react-icons/io'
import emailjs from '@emailjs/browser';
import { HiOutlineMail } from "react-icons/hi";
import { useCausewayMyContext } from '../../../context/CausewayMyContextProvider'
import { Oval } from 'react-loader-spinner'

function Contact() {
  const [loading , setLoading] = useState(false)  
  const {notificationAvtive} = useCausewayMyContext()  
  const [formData , setFormData] = useState({
    user_firstName : '',
    user_lastName : '',
    user_email : '',
    user_phoneNum : '',
    user_message : ''
  })  

  
  const form = useRef()

  const resetForm = () => {
    setFormData({
      user_firstName: '',
      user_lastName: '',
      user_email: '',
      user_phoneNum: '',
      user_message: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const notTest = () => {
    notificationAvtive(
        "Mail Sent Successfully",
        "One of the Causeway support team members will connect with you soon.",
        true,
        <HiOutlineMail  size={28} weight="fill" color="#ffffff" style={{ marginBottom: '30px' }} />
    )  
  }

  const validateEmail = (email) => {
    const trimmedEmail = email.trim();
    console.log("Email to validate:", trimmedEmail); // Log to check input
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(trimmedEmail);
  };


  const handleFormSubmit = (e) =>{
    setLoading(true)
    e.preventDefault()

    if(formData.user_email && formData.user_firstName && formData.user_lastName && formData.user_message && formData.user_phoneNum){
        if(!validateEmail(formData.user_email)){
            console.log("all are fill");
            notificationAvtive(
                "Invalid Email",
                "Email that your entered is invalid please enter valid email",
                true,
                <HiOutlineMail  size={22} weight="fill" color="#ffffff" style={{ marginBottom: '30px' }} />
            ) 
        }else{
            console.log("all are fill");
            emailjs.sendForm('service_mh0bkyb', 'template_9kiibbk', form.current, 'gjfPAllAjD7Dkc2nk')
            .then((result) => {
                if(result.text === "OK"){  
                    notificationAvtive(
                        "Mail Sent Successfully",
                        "One of the Causeway support team members will connect with you soon.",
                        false,
                        <HiOutlineMail  size={22} weight="fill" color="#ffffff" style={{ marginBottom: '30px' }} />
                    ) 
                    resetForm() 
                    setLoading(false)
                }else{
                    notificationAvtive(
                        "Something Went Wrong",
                        "Some error is going up in our system please try again in a while",
                        true,
                        <HiOutlineMail  size={22} weight="fill" color="#ffffff" style={{ marginBottom: '30px' }} />
                    ) 
                    setLoading(false)
                }
            }, (error) => {
                notificationAvtive(
                    "Something Went Wrong",
                    "Some error is going up in our system please try again in a while",
                    true,
                    <HiOutlineMail  size={28} weight="fill" color="#ffffff" style={{ marginBottom: '30px' }} />
                ) 
                setLoading(false)
            });
        }
    }else{
        notificationAvtive(
            "Please Fill All The Feilds",
            "These are mandotary feild please enter all details and submit the form",
            true,
            <HiOutlineMail  size={22} weight="fill" color="#ffffff" style={{ marginBottom: '30px' }} />
        ) 
        setLoading(false)
    }
    
  }

  return (
    <div className='bg-[#F8F8F8] w-full' >
                
        <div className='max-w-[1200px]  mx-auto w-[95%] mt-[80px] flex justify-between items-start gap-[50px] md:gap-[25px]  lg:gap-[45px] flex-col md:flex-row' >
            <div className='basis-[50%] w-full' >
                    <h1 onClick={notTest} className=' font-bold text-[32px] md:text-[40px] lg:text-[45px]'>Get In Touch</h1>

                    <form ref={form} onSubmit={(e) => handleFormSubmit(e)} className='mt-[20px] md:mt-[40px]' >

                        <div className='flex justify-between items-start flex-col xlg:flex-row gap-[15px]' >

                            <div className='custom-input basis-[50%] w-full' >
                                <label>First Name</label>
                                <div className='gap-[10px]' >
                                    <img src={user} alt={user} />
                                    <input onChange={handleChange} name='user_firstName' value={formData.user_firstName} type='text' placeholder='First Name' />
                                </div>
                            </div>
                            <div className='custom-input basis-[50%] w-full' >
                                <label>Last Name</label>
                                <div className='gap-[10px]' >
                                    <img src={user} alt={user} />
                                    <input onChange={handleChange} name='user_lastName' value={formData.user_lastName} type='text' placeholder='Last Name' />
                                </div>
                            </div>

                        </div>
                        <div className='flex justify-between items-center gap-2 mt-[15px]' >

                            <div className='custom-input basis-[100%]' >
                                <label>Email Address</label>
                                <div className='gap-[16px]' >
                                    <img src={email} alt={email} />
                                    <input onChange={handleChange} name='user_email' value={formData.user_email} type='text' placeholder='Email Address' />
                                </div>
                            </div>

                        </div>
                        <div className='flex justify-between items-center gap-2 mt-[15px]' >

                            <div className='custom-input basis-[100%] ' >
                                <label>Phone Number</label>
                                <div className='gap-[16px]' >
                                    <img src={telephone} alt={telephone} />
                                    <input onChange={handleChange} name='user_phoneNum' value={formData.user_phoneNum} type='text' placeholder='Phone Number' />
                                </div>
                            </div>

                        </div>

                        <div className='flex justify-between items-center gap-2 mt-[15px]' >

                            <div className='custom-input basis-[100%] ' >
                                <label>Your Message</label>
                                <div className='gap-[12px] py-[10px]' >
                                    <textarea
                                        onChange={handleChange} name='user_message' value={formData.user_message}
                                        rows={10}
                                        cols={10}
                                        placeholder='Leave us a message'
                                    >

                                    </textarea>
                                </div>
                            </div>

                        </div>

                        <div className='w-full mt-[15px]' >
                            <button className='primaryBtn mt-6 flex justify-center gap-2 items-center bg-primaryCM px-5 py-[16px] rounded-lg text-white hover:text-black before:bg-secondaryCM font-bold w-full' >
                                {
                                    loading ? 
                                    (      
                                        <Oval
                                            visible={true}
                                            height="30"
                                            width="30"
                                            color="#fff"
                                            ariaLabel="#813111"
                                            secondaryColor="#fff"
                                            strokeWidth={4}
                                            strokeWidthSecondary={3}
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                        />
                                    )
                                    :
                                    (
                                        <>
                                            <span>Get Started Now</span>
                                            <IoMdArrowRoundForward size={25} />
                                        </>
                
                                    )
                                }
                                
                                
                            </button>
                        </div>
                    </form>
            </div> 
            <div className='basis-[50%] w-full' >
                <h1 className='text-[23px] font-bold sm:text-[25px] md:text-[30px] lg:text-[45px]'>Our Location</h1>
                <div className='mt-[30px]' >
                    <p className='text-ptextCM text-[17px] flex justify-start items-center gap-2 mt-1' > 
                        <img src={email02} alt={email02} className='w-[18px] h-[18px] object-contain' />
                        <span>admin@causeway.my</span>
                    </p>
                    <p className='text-ptextCM text-[17px] flex justify-start items-center gap-2 mt-1' > 
                        <img src={location} alt={location} className='w-[20px] h-[20px] object-contain' />
                        <span>1256 Rental Rd, Memphis, TN 38118, United States</span>
                    </p>
                    <p className='text-ptextCM text-[17px] flex justify-start items-center gap-2 mt-1' > 
                        <img src={telephone02} alt={telephone02} className='w-[18px] h-[18px] object-contain' />
                        <span>+87 218 2178</span>
                    </p>
                </div>

                <div className='mt-[30px] w-full h-[400px] md:h-[670px] xlg:h-[560px] overflow-hidden rounded-xl' >
                    <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.070953948065!2d103.7280105!3d1.4629912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc718c0a45d2bebdd!2sCauseway%20Car%20Rental%20Johor%20Bahru!5e0!3m2!1sen!2slk!4v1655384040622!5m2!1sen!2slk" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>        
        </div>
    </div>
  )
}

export default Contact