import React, { useEffect, useState } from 'react'
import './PreLaoder.css'
import logo from '../../assets/logo/logoC.png'
import { delay, motion, useAnimation } from 'framer-motion';
import { useCausewayMyContext } from '../../context/CausewayMyContextProvider';
import { useParams } from 'react-router-dom';
import { Allblogs } from '../../../causewayDb';
import hqApi from '../../axios/Axios';
import { useCausewayHqContext } from '../../context/CausewayHqContextProvider';



function PreLoader() {
  const [loaderText1  , setLoaderText1] = useState("Causeway")  
  const [loaderText2  , setLoaderText2] = useState("Malaysia") 
  
  const {loaderActive  , setLoaderActive , setBlog , blog} = useCausewayMyContext() 
  const {setAllVehicaleTypes , setAllVehicales , setAllVehicaleClasses ,setAllSecuirityDeposit ,  setAdditionalFeatureList , setAllLocation , setReferenceVehiceles } = useCausewayHqContext()  
  const {title} = useParams() 

  const controls = useAnimation();
  const controlsText = useAnimation();
  const controlsText2 = useAnimation();

  useEffect(() => {
    const getBlog = Allblogs?.filter((blog) => blog?.to === title)[0]
    setBlog(getBlog)
  },[title])

    useEffect(() => {
        hqApi.get('/vehicale/getAllVehicaleTypes').then((res) => {
            setAllVehicaleTypes(res?.data?.fleets_vehicle_types);
        }).catch((err) => {

        })

        hqApi.get('/vehicale/getAllVehicales').then((res) => {
            setAllVehicales(res?.data?.data);
        }).catch((err) => {
        })
        
        hqApi.get('/vehicale/getAllVehicalesClasses').then((res) => {
            setAllVehicaleClasses(res?.data?.fleets_vehicle_classes);
        }).catch((err) => {
        })

        hqApi.get('/vehicale/getAllVehicaleFeatures').then((res) => {
            setAdditionalFeatureList(res?.data);
        }).catch((err) => {
        })

        hqApi.get('/vehicale/getAllLocation').then((res) => {
            setAllLocation(res?.data);
        }).catch((err) => {
        })

        hqApi.get('/reservation/getAllSecuirityDeposit').then((res) => {
            setAllSecuirityDeposit(res?.data);
        }).catch((err) => {
        })


        const currentDate = new Date();
        const dropDate = new Date(currentDate);
        dropDate.setDate(currentDate.getDate() + 1);
        const pickUpDateTime = `${convertDate(currentDate)} ${convertTime(currentDate)}`
        const dropDateTime = `${convertDate(dropDate)} ${convertTime(dropDate)}`

        hqApi.get('/reservation/checkAvailabilityVehicles', {
            params: {
                pick_up_date : pickUpDateTime,
                pick_up_location_id : 1,
                return_location_id :1,
                return_date : dropDateTime,
            }
        }).then((res) => {
            setReferenceVehiceles(res?.data);
        }).catch((err) => {
        })
    },[])

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


    // useEffect(() => {
    //     controls.start("fadeAndScale").then(() => {
    //         if(title){
    //             const getBlog = Allblogs?.filter((blog) => blog?.to === title)[0]
    //             setBlog(getBlog);
    //         }
    //         if(window.innerWidth < 1024 ){
    //             controlsText2.start("textReveal").then(() => {
    //                 setTimeout(() => {
    //                     setLoaderActive(false)
    //                 },3000)
    //                 // setTimeout(() => {
    //                 //     controls.start("slideNegative2").then(() => {
    //                 //         setTimeout(() => {
    //                 //             controls.start("fadeAndScaleBig").then(() => {
    //                 //                 setLoaderActive(false)
    //                 //                 console.log("loader inactive");
    //                 //             })
    //                 //         },[])
    //                 //     })
    //                 //     controlsText2.start("textHide")
    //                 // },[1000])
    //             })
    //             controls.start("slideUp").then(() => {
                    
    //             })
    //         }else{
                
    //             controls.start("slide").then(() => {
    //                 controlsText.start("textReveal").then(() => {
    //                     setTimeout(() => {
    //                         setLoaderActive(false)
    //                     },3000)
    //                     // setTimeout(() => {
    //                     //     controls.start("slideNegative").then(() => {
    //                     //         controls.start("fadeAndScaleBig").then(() => {
    //                     //             setLoaderActive(false)
    //                     //             console.log("loader inactive");
    //                     //         })
    //                     //     })
    //                     //     controlsText.start("textHide")
    //                     // },[1000])
    //                 })
    //             })
    //         }
    //     });
    // }, [controls]);

    const textVariants = {
        initial: { opacity: 0},
        textReveal: {
            opacity: [0, 1],  // Fades in
            x: ["100%", "0%"], // Slides in from the right
        },
        textHide: {
            opacity: [1, 0], // Fades out
            x: ["0%", "100%"], // Slides out to the right
        }
    };

    const textVariants2 = {
        initial: { opacity: 0},
        textReveal: {
            opacity: [0, 1],  // Fades in
            y: ["100%", "0%"], // Slides in from the right
        },
        textHide: {
            opacity: [1, 0], // Fades out
            y: ["0%", "100%"], // Slides out to the right
        }
    };

    const logoVariants = {
        initial: { opacity: 0, scale: 0.1 },
        fadeAndScale: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.2,                 // Slightly faster for smoother entry
                ease: [0.42, 0, 0.58, 1],
                delay:1      // Smooth cubic bezier for ease-in-out effect
            },
        },
        fadeAndScaleBig: {
            opacity: 1,
            scale: 45,
            transition: {
                duration: 1.2,                 // Slightly faster for smoother entry
                ease: [0.42, 0, 0.58, 1],
                delay:1      // Smooth cubic bezier for ease-in-out effect
            },
        },
        slide: {
            x: window.innerWidth < 1150 ? "-245px" : "-280px",
            transition: {
                duration: 1.2,                 // Matches duration of fadeAndScale for consistency
                ease: [0.42, 0, 0.58, 1],      // Smooth, natural ease-in-out for preloader
            },
            delay:1
        },
        slideNegative: {
            x: "0px",
            transition: {
                duration: 2,                 // Matches duration of fadeAndScale for consistency
                ease: [0.42, 0, 0.58, 1],      // Smooth, natural ease-in-out for preloader
            },
            delay:1
        },
        slideNegative2: {
            y: "0px",
            transition: {
                duration: (window.innerWidth < 600 ? 3 : 2.5 ),                 // Matches duration of fadeAndScale for consistency
                ease: [0.42, 0, 0.58, 1],      // Smooth, natural ease-in-out for preloader
            },
            delay:1
        },
        slideUp: {
            y: '-140px',
            transition: {
                duration:2,                 // Matches duration of fadeAndScale for consistency
                ease: [0.42, 0, 0.58, 1],      // Smooth, natural ease-in-out for preloader
            },
            delay:1
        },
    };

  return (
    <>
    </>
    // <motion.div 
    //     initial={{  opacity : 1 }} // Starts at 0
    //     animate={{ opacity:0 }} // Moves to -100%
    //     transition={{
    //         duration: 1, // Duration for the slide
    //         delay:  window.innerWidth < 1024 ?  5 : 7,
    //         ease: "easeInOut", // Smooth easing for the transition
    //     }}
    //     className={`fixed top-0 left-0 right-0 bottom-0 w-full h-full preLaoder bg-white ${loaderActive ? 'block' : 'hidden z-[-1000] opacity-0 pointer-events-none'}`} >
    //         <span className='brown-blur' ></span>
    //         <span className='creame-blur' ></span>
    //         <div className='absolute top-[50%] hidden lg:flex  left-[50%] translate-x-[-50%] translate-y-[-50%] custom-container w-[95%]  mx-auto justify-center items-center gap-[35px]' >
    //                     <motion.img
    //                         variants={logoVariants}
    //                         initial="initial"
    //                         animate={controls}
    //                         exit={{ opacity: 0, x: 0 }}
    //                         src={logo}
    //                         alt="Logo"
    //                         className="w-[150px] h-[150px] object-contain absolute flex justify-center items-center"
    //                     />
    //                     <div className=' relative left-[50px] xxl:left-[0px]' >
    //                         <h1 className="h-[100px]  overflow-hidden w-full">
    //                                 {loaderText1?.split('').map((char, index) => (
    //                                     <motion.span
    //                                         className='font-semibold italic !font-cmSecondary text-[75px]'
    //                                         key={`welcome-char-${index}`}
    //                                         initial="initial"
    //                                         animate={controlsText}
    //                                         variants={textVariants}
    //                                         transition={{
    //                                             duration: 0.6,
    //                                             ease: [0.42, 0, 0.58, 1],
    //                                             delay: 0.2 * index,
    //                                         }}
    //                                         style={{
    //                                             display: "inline-block",
    //                                             marginRight: char === ' ' ? '20px' : '0px', // Adds space between words
    //                                         }}
    //                                     >
    //                                         {char}
    //                                     </motion.span>
    //                                 ))}
    //                         </h1>
    //                         <h1 className="h-[100px] overflow-hidden !font-cmSecondary mt-[-30px] text-primaryCM">
    //                                 {loaderText2?.split('').map((char, index) => (
    //                                     <motion.span
    //                                         className='font-semibold italic !font-cmSecondary text-[75px]'
    //                                         key={`welcome-char-${index}`}
    //                                         initial="initial"
    //                                         animate={controlsText}
    //                                         variants={textVariants}
    //                                         transition={{
    //                                             duration: 0.6,
    //                                             ease: [0.42, 0, 0.58, 1],
    //                                             delay: 0.2 * index,
    //                                         }}
    //                                         style={{
    //                                             display: "inline-block",
    //                                             marginRight: char === ' ' ? '20px' : '0px', // Adds space between words
    //                                         }}
    //                                     >
    //                                         {char}
    //                                     </motion.span>
    //                                 ))}
    //                         </h1>
                            
    //                     </div>
    //         </div>

    //         <div className={`absolute top-[50%] flex lg:hidden left-[50%] translate-x-[-50%] translate-y-[-50%] custom-container w-[95%]  mx-auto justify-center items-center gap-[35px]`} >
    //                     <motion.img
    //                         variants={logoVariants}
    //                         initial="initial"
    //                         animate={controls}
    //                         exit={{ opacity: 0, x: 0 }}
    //                         src={logo}
    //                         alt="Logo"
    //                         className="w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px] object-contain absolute flex justify-center items-center"
    //                     />
    //                     <div className=' relative left-[0px]' >
    //                         <h1 className="h-[100px] text-center !font-cmSecondary overflow-hidden w-full">
    //                                 {loaderText1?.split('').map((char, index) => (
    //                                     <motion.span
    //                                         className='font-semibold italic !font-cmSecondary  text-[60px] xxxsm:text-[65px] xxsm:text-[70px] sm:text-[55px] md:text-[65px] xlg:text-[75px]'
    //                                         key={`welcome-char-${index}`}
    //                                         initial="initial"
    //                                         animate={controlsText2}
    //                                         variants={textVariants2}
    //                                         transition={{
    //                                             duration: 0.6,
    //                                             ease: [0.42, 0, 0.58, 1],
    //                                             delay: 0.2 * index,
    //                                         }}
    //                                         style={{
    //                                             display: "inline-block",
    //                                             marginRight: char === ' ' ? '20px' : '0px', // Adds space between words
    //                                         }}
    //                                     >
    //                                         {char}
    //                                     </motion.span>
    //                                 ))}
    //                         </h1>
    //                         <h1 className="h-[100px] text-center overflow-hidden mt-[-20px] text-primaryCM">
    //                                 {loaderText2?.split('').map((char, index) => (
    //                                     <motion.span
    //                                         className='font-semibold italic !font-cmSecondary  text-[55px]  xxsm:text-[60px] xlg:text-[75px]'
    //                                         key={`welcome-char-${index}`}
    //                                         initial="initial"
    //                                         animate={controlsText2}
    //                                         variants={textVariants2}
    //                                         transition={{
    //                                             duration: 0.6,
    //                                             ease: [0.42, 0, 0.58, 1],
    //                                             delay: 0.2 * index,
    //                                         }}
    //                                         style={{
    //                                             display: "inline-block",
    //                                             marginRight: char === ' ' ? '20px' : '0px', // Adds space between words
    //                                         }}
    //                                     >
    //                                         {char}
    //                                     </motion.span>
    //                                 ))}
    //                         </h1>
                            
    //                     </div>
    //         </div>
    // </motion.div>
  )
}

export default PreLoader