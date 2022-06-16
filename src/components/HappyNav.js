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
        } transform transition duration-1000 ease-in-out top-0 z-40 px-2 bg-primary h-12 flex justify-around w-full fixed text-center text-white font-dosis sm:border-0 sm:border-none focus:outline-none items-center`}
      >
        <ScrollLink to='highballs' smooth={true}>
          <button
            type='button'
            className='transform transition duration-700 ease-in-out hover:scale-110 text-gray-200 text-md focus:outline-none hover:text-tertiary  uppercase tracking-wider font-face-ko'
            alt='highballs'
          >
            {content.nav.happyLink[0]}
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
        <ScrollLink to='martinis' smooth={true}>
          <button
            type='button'
            className=' transform transition duration-700 ease-in-out hover:scale-110  text-gray-200 text-md focus:outline-none hover:text-tertiary uppercase tracking-wider font-face-ko'
            alt='martinis'
          >
            {content.nav.happyLink[1]}
          </button>
        </ScrollLink>
        <div>
          <img
            className='w-2 h-2 ml-1'
            src={content.nav.faviconWhite}
            placeholder={content.header.imgPlaceholder}
            alt='Blind Barber Logo'
          />
        </div>
        <ScrollLink to='more' smooth={true}>
          <button
            type='button'
            className='mr-4 ml-2 transform transition duration-700 ease-in-out hover:scale-110  text-gray-200 text-md focus:outline-none hover:text-tertiary uppercase tracking-wider font-face-ko'
            alt='more'
          >
            {content.nav.happyLink[2]}
          </button>
        </ScrollLink>
        
        
      </div>
    </>
  )
}
