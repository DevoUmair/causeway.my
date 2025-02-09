"use client"

import * as React from "react"
import { format, getMonth, getYear, setMonth, setYear, startOfDay } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "../../lib/utils"
import { Button } from "./button"
import { Calendar } from "./calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"
import { CiCalendar } from "react-icons/ci"
import { useCausewayHqContext } from "../../context/CausewayHqContextProvider"

interface DatePickerProps {
  startYear?: number;
  endYear?: number;
  setDateOfExpiry: React.Dispatch<React.SetStateAction<Date | null>>;
}
export function DatePickerDob({
  startYear = getYear(new Date()) - 50,
  endYear = getYear(new Date()) - 20,
}: DatePickerProps) {

  const [date, setDate] = React.useState<Date>(null);
  const [dateTenBefor, setDateTenBefor] = React.useState<Date>(null);
  const [open , setOpen] = React.useState<boolean>(false)
  const {setCustomerData , customerData} = useCausewayHqContext()

  React.useEffect(() => {
    if(customerData[15]){
      const formattedDate = new Date(customerData[15])
      setDateTenBefor(formattedDate)
      setDate(formattedDate)
    }else{
      const currentDate = new Date(); // Current date
      const tenYearsBefore = new Date(
      currentDate.getFullYear() - 20, // Subtract 10 years from the current year
      currentDate.getMonth(),        // Keep the same month
      currentDate.getDate()          // Keep the same date
      );
      setDateTenBefor(tenYearsBefore)
      setDate(tenYearsBefore)
    }
  },[customerData[15]])


  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => startYear + i
  );

  const handleMonthChange = (month: string) => {
    let newDate : Date;
    const currentDate = new Date(); // Current date
    const tenYearsBefore = new Date(
    currentDate.getFullYear() - 20, // Subtract 10 years from the current year
    currentDate.getMonth(),        // Keep the same month
    currentDate.getDate()          // Keep the same date
    );
    if(date == null){
      newDate = setMonth(tenYearsBefore, months.indexOf(month));
    }else{
      newDate = setMonth(date, months.indexOf(month));
    }
    setDate(newDate);
  }

  const handleYearChange = (year: string) => {
    let newDate : Date;
    const currentDate = new Date(); // Current date
    const tenYearsBefore = new Date(
    currentDate.getFullYear() - 20, // Subtract 10 years from the current year
    currentDate.getMonth(),        // Keep the same month
    currentDate.getDate()          // Keep the same date
    );
    if(date == null){
      newDate = setYear(tenYearsBefore, parseInt(year));
    }else{
      newDate = setYear(date, parseInt(year));
    }
    setDate(newDate);
  }

  const handleSelect = (selectedData: Date | undefined) => {
    if (selectedData) {
      setDate(selectedData)
      setOpen(false)
      setCustomerData((prevData) => ({
        ...prevData,
        [15]: convertDate(selectedData)
      }));
    }
  }

  
  const handleOpen= (isBtn : boolean) => {
    if(isBtn){
        setOpen(false)
    }else{
        if(open){
          setOpen(false)
        }else{
          setOpen(true)
        }
    }
}


const convertDate = (date : Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate
}

  return (
    <Popover open={open} onOpenChange={() => handleOpen(false)} >
      <label className='!font-[500] text-[#000]' >Date of Birth</label>
      <PopoverTrigger asChild>
        <div className='w-full mt-[5px]' >
              <div className='bg-[#fcfcfc] rounded-lg flex justify-start items-center gap-1 py-[15px] px-[10px]  cursor-pointer border-[1px] border-[#dee2e6]' >
                  <CiCalendar color='#a2a2a2' size={20} />
                  <p className='font-medium  text-[14px]' >
                    {
                        !customerData[15] ?
                        (
          
                            <span className='text-[#a2a2a2]' >Pick a date</span>
                        )
                        :
                        (
                            <span className='text-black' >   {customerData[15]}</span>
                        )
                    }
                  </p>                    
              </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div className="flex justify-between p-2">
          <Select
            onValueChange={handleMonthChange}
            value={months[getMonth(date || dateTenBefor)]}
          >
            <SelectTrigger className="w-[110px]">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              {months.map(month => (
                <SelectItem key={month} value={month}>{month}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            onValueChange={handleYearChange}
            value={getYear(date || dateTenBefor).toString()}
          >
            <SelectTrigger className="w-[110px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map(year => (
                <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          initialFocus
          month={date === null ? new Date() : date}
          onMonthChange={setDate}
        />
      </PopoverContent>
    </Popover>
  )
}