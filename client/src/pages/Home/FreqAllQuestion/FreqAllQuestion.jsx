import HeaderText from '../../../components/HeaderText'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../../../components/ui/accordionModify"

function FreqAllQuestion() {
  return (
    <div className='bg-[#F8F8F8] w-full' >
        <div className='custom-container mt-[80px]' >
            <div>
                <HeaderText text={'Any Question ?'} smallText={'Do You Have'} isCenter={true} />
            </div>
            <div className='flex justify-between flex-col md:flex-row items-baseline gap-0 md:gap-[15px] mt-[40px]' >
                <div className='basis-[100%] w-full md:basis-[50%]' >
                    <Accordion type="single" collapsible className="w-full">
                          <CustomAccordian index={1} text={'What do I need to rent a car?'} subText={'Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs.'} />
                          <CustomAccordian index={2} text={'How old do I need to be to rent a car?'} subText={'Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs.'} />
                          <CustomAccordian index={3} text={'Can I rent a car with a debit card?'} subText={'Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs.'} />
                    </Accordion>
                </div>
                <div className='basis-[100%] w-full md:basis-[50%]' >
                    <Accordion type="single" collapsible className="w-full">
                          <CustomAccordian index={1} text={'What do I need to rent a car?'} subText={'Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs.'} />
                          <CustomAccordian index={2} text={'How old do I need to be to rent a car?'} subText={'Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs.'} />
                          <CustomAccordian index={3} text={'Can I rent a car with a debit card?'} subText={'Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs.'} />
                    </Accordion>
                </div>
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

export default FreqAllQuestion