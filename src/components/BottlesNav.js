import React, { useEffect, useState } from 'react'
import content from './content'
import { Link as ScrollLink } from 'react-scroll'

export default function BottlesNav () {
  const [animated, setAnimated] = useState(false)
  useEffect(() => {
    setAnimated(true)
  }, [])
  return (
    <>
      <div
        className={`${
          animated ? '' : '-translate-y-20 opacity-1'
        } transform transition duration-1000 ease-in-out top-0 z-40 px-2 bg-primary h-12 flex justify-around w-full fixed text-center text-white font-dosis sm:border-0 sm:border-none focus:outline-none items-center`}
      >
        <ScrollLink to='bottles' smooth={true}>
          <button
            type='button'
            className='transform transition duration-700 ease-in-out hover:scale-110 text-gray-200 text-md focus:outline-none hover:text-tertiary  uppercase tracking-wider font-face-ko'
            alt='bottles'
          >
            {content.nav.bottlesLink[0]}
          </button>
          {/* <span className='mr-4 text-gray-500'>|</span> */}
        </ScrollLink>
        <div>
          <img
            className='w-2 h-2'
            src={content.nav.faviconWhite}
            placeholder={content.header.imgPlaceholder}
            alt='Blind Barber Logo'
          />
        </div>
        <ScrollLink to='champagne' smooth={true}>
          <button
            type='button'
            className=' transform transition duration-700 ease-in-out hover:scale-110  text-gray-200 text-md focus:outline-none hover:text-tertiary uppercase tracking-wider font-face-ko'
            alt='champagne'
          >
            {content.nav.bottlesLink[1]}
          </button>
        </ScrollLink>
        <div>
          <img
            className='w-2 h-2'
            src={content.nav.faviconWhite}
            placeholder={content.header.imgPlaceholder}
            alt='Blind Barber Logo'
          />
        </div>
        <ScrollLink to='extras' smooth={true}>
          <button
            type='button'
            className=' transform transition duration-700 ease-in-out hover:scale-110  text-gray-200 text-md focus:outline-none hover:text-tertiary uppercase tracking-wider font-face-ko'
            alt='extras'
          >
            {content.nav.bottlesLink[2]}
          </button>
        </ScrollLink>
        
        
      </div>
    </>
  )
}
