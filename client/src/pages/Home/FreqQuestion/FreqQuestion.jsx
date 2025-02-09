import HeaderText from '../../../components/HeaderText'
import React, { useEffect, useRef, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion"
import frq01 from '../../../assets/freq/frew-01.jpg'
import frq02 from '../../../assets/freq/frew-02.jpg'
import vehi from '../../../assets/freq/faq-vehi.png'
import './FreqQuestion.css'
import Plx from "react-plx";


function FreqQuestion() {
  const [openItem, setOpenItem] = useState(1);
  const [height , setHeight] = useState(0)
  const myRef = useRef()

    useEffect(() => {
        if(myRef){
            setHeight(myRef.current.offsetTop)
        }
    },[])

    const parallaxData = [
        {
            start: height  - 800,
            end:height - 100,
            easing : "linear",
            duration:5,
            properties: [
              {
                startValue : 1500,
                endValue: 0,
                property: "translateX",
              },
              {
                startValue : 0.2,
                endValue: 1,
                property: "scale",
              },
              {
                startValue : 0,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
    ];

  return (
    <div ref={myRef} className='bg-lightBgCm mt-[80px] rounded-2xl px-[20px] xlg:px-[40px] py-[100px] custom-container custom-flex  flex-col xlg:flex-row justify-between gap-4' >
        <div className='basis-[48%] w-full  mx-auto relative' >
            <Plx parallaxData={parallaxData} className='absolute z-20 top-[30%] translate-y-[-50%]' >
                <img src={vehi} alt='vehi' className='w-[600px] object-contain' />
            </Plx>
            <div className='w-[110%] lg:w-[90%] xl:w-[80%] mx-auto  flex justify-center items-center' >
              <img src= {frq01} alt='freq-01' className='freq-image translate-y-[25px] '/>
              <img src= {frq02} alt='freq-01' className='freq-image translate-x-[-40px] translate-y-[-25px]'/>
            </div>
        </div>
        <div className='basis-[52%] mt-[40px] xlg:mt-0' >
            <HeaderText text={'Everything you need to know about our services'} smallText={'Frequently Asked Question'} isCenter={false} />
            <div className='mt-[30px]' >
                  <Accordion value={openItem} onValueChange={setOpenItem} type="single" collapsible className="w-full">
                      <CustomAccordian index={1} text={'What do I need to rent a car?'} subText={'Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs.'} />
                      <CustomAccordian index={2} text={'How old do I need to be to rent a car?'} subText={'Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs.'} />
                      <CustomAccordian index={3} text={'Can I rent a car with a debit card?'} subText={'Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs.'} />
                  </Accordion>
                  

            </div>
        </div>
    </div>
  )
}

const CustomAccordian = ({text , subText , index}) => {
  return(
    <AccordionItem value={index}>
        <AccordionTrigger>{text}</AccordionTrigger>
        <AccordionContent>{subText}</AccordionContent>
    </AccordionItem>
  )
}

export default FreqQuestion