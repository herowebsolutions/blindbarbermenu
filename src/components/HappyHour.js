import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import content from './content'
import { Link } from 'react-router-dom'
export default function Specialty () {
  return (
    <>
      <div
        className=' min-h-screen font-dosis sm:border-0 sm:border-none  bg-gray-100'
        id='specialty'
      >
        <div className=' max-w-7xl h-full mx-auto py-6 sm:px-5 lg:px-8 '>
          <div className=' w-32 mx-auto pt-12'>
            <img
              src={content.nav.logo}
              placeholder={content.header.imgPlaceholder}
              alt='Blind Barber Logo'
            />
          </div>
          <div className='pt-4'>
            <p className='italic text-center text-xs font-face-ga'>
              Thank you for being safe and supporting the Blind Barber team. We
              reserve the right to deny service to anyone that chooses not to
              abide by our posted safety precautions.
            </p>
          </div>
         
          <div className='flex justify-between'>
            <h1 className='pt-8 text-2xl uppercase font-face-ko tracking-widest'>Happy Hour Menu</h1>
            
          </div>
          <div className='text-center mt-10'>
            <ScrollLink to='page2' smooth={true}>
              <button className=' animate-bounce py-2 focus:outline-none '>
                {content.header.btnText}
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </>
  )
}
