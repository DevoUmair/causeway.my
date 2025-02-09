import React from 'react'

function DarkButton({children}) {
  return (
    <button className='primaryBtn mt-6 flex justify-center gap-2 items-center bg-primaryCM px-5 py-[16px] rounded-lg text-white hover:text-black before:bg-secondaryCM font-bold' >
        {children}
    </button>
  )
}

export {
    DarkButton
}