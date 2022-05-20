import React, { useEffect, useState } from 'react'
import content from './content'
import { Link as ScrollLink } from 'react-scroll'

export default function Navigation () {
  const [animated, setAnimated] = useState(false)
  useEffect(() => {
    setAnimated(true)
  }, [])
  return (
    <>
      <div
        className={`${
          animated ? '' : '-translate-y-20 opacity-1'
        } transform transition duration-1000 ease-in-out top-0 z-40 px-4 bg-primary h-12 flex justify-around w-full fixed text-center text-white font-dosis sm:border-0 sm:border-none focus:outline-none items-center`}
      >
        <ScrollLink to='cocktails' smooth={true}>
          <button
            type='button'
            className='mx-2 transform transition duration-700 ease-in-out hover:scale-125 text-gray-200 text-md focus:outline-none hover:text-tertiary  uppercase tracking-wider font-face-ko'
            alt='cocktails'
          >
            {content.nav.workLink[0]}
          </button>
          {/* <span className='mr-4 text-gray-500'>|</span> */}
        </ScrollLink>
        <div>
          <img
            className='w-4 h-4 '
            src={content.nav.faviconWhite}
            placeholder={content.header.imgPlaceholder}
            alt='Blind Barber Logo'
          />
        </div>
        <ScrollLink to='other' smooth={true}>
          <button
            type='button'
            className='mx-2 transform transition duration-700 ease-in-out hover:scale-125  text-gray-200 text-md focus:outline-none hover:text-tertiary uppercase tracking-wider font-face-ko'
            alt='other'
          >
            {content.nav.workLink[1]}
          </button>
        </ScrollLink>
        
       
       
        
      </div>
    </>
  )
}
