import React from 'react'
import './MostWanted.css'
import brand01 from '../../../assets/mostWanted/brand-1.png'
import brand02 from '../../../assets/mostWanted/brand-2.png'
import brand03 from '../../../assets/mostWanted/brand-3.png'
import brand04 from '../../../assets/mostWanted/brand-4.png'
import brand05 from '../../../assets/mostWanted/brand-5.png'
import brand06 from '../../../assets/mostWanted/brand-6.png'
import HeaderText from '../../../components/HeaderText'

const allBrands = [
    {
        img : brand01,
        name : "Audi"
    },
    {
        img : brand02,
        name : "BMW"
    },
    {
        img : brand03,
        name : "Ford"
    },
    {
        img : brand04,
        name : "Mercedes Benz"
    },
    {
        img : brand05,
        name : "Peugeot"
    },
    {
        img : brand06,
        name : "Volkswagen"
    },
]

function MostWanted({page}) {
    
  return (
    <div className={`bg-lightBgCm ${page !== 'about' ? 'rounded-tr-[80px] md:rounded-tr-[100px] rounded-tl-[80px]  md:rounded-tl-[100px] translate-y-[-100px] mb-[-100px]' : 'mt-[80px]'} z-30 relative pt-[120px] md:pt-[100px] pb-[150px]`} >
        <div className='custom-container' >
            <HeaderText text={'Most Wanted Car Rental Brands In Malaysia'} smallText={'Explore With Us'} isCenter={false} />
            <div className='mt-[40px] mostwantedGrid-container  w-full' >
                {
                    allBrands?.map((eachBrand , index) => (
                        <Brand key={index} eachBrand={eachBrand} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

const Brand = ({eachBrand}) => (
    <div className='bg-white custom-border cursor-pointer eachBrand custom-flex flex-col items-center justify-center gap-3 basis-[16%] w-full px-5 rounded-lg h-[190px]' >
            <img src={eachBrand.img} className='object-contain aspect-square w-[90px]' />
            <h3 className='text-[18px] text-center custom-trans' >{eachBrand?.name}</h3>
    </div>
)

export default MostWanted