import { FaFacebookF, FaInstagram} from 'react-icons/fa'
import { useCausewayMyContext } from '../../../context/CausewayMyContextProvider'
import React  from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import './BlogDetail.css'
import BlogSlider from '../../../components/BlogSlider/BlogSlider'

function BlogDetail() {
  const { blog } = useCausewayMyContext()  
  

  return (
    <div className='custom-container mt-[60px]' >
      <div className='max-w-[1200px] mx-auto w-[95%] ' >
          {
            blog?.paragraph?.map((para, index) => (
              <div 
                  key={index}
                  dangerouslySetInnerHTML={{ __html: para }}
              />
            ))
          }
          {
            blog?.subContent?.map((item , index) => (
                <div 
                key={index}
                dangerouslySetInnerHTML={{ __html: item?.content }}
              />
            ))
          }
          <div className='mt-[30px] flex justify-between items-start md:items-center w-full flex-col md:flex-row gap-7 md:gap-0' >
                <div className='flex justify-start gap-2 items-center basis-[75%] flex-wrap' >
                    <p className='text-[18px] font-bold' >Tags : </p>
                    {
                        blog?.tags?.map(( item , index) => (
                            <p key={index} className='px-[18px] py-[10px] rounded-full bg-primaryCM text-white font-semibold text-[17px]' >{item}</p>
                        ))
                    }
                </div>
                
                <div className='flex justify-start md:justify-end gap-3 text-black items-center w-full basis-[25%]' >
                    <p className='text-black text-[16px] font-bold' >Follow Us</p>
                    <div className='flex justify-start gap-2 text-primaryCM text-[22px] items-center' >
                        <FaFacebookF size={20} />
                        <FaInstagram size={23} />
                        <FaXTwitter size={23} />
                    </div>
                </div>
          </div>
      </div>

      <BlogSlider />
    </div>
  )
}



export default BlogDetail
