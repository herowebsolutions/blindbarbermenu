import React from 'react'
import content from './content'
import { Link as ScrollLink } from 'react-scroll'

export default function Navigation () {
  return (
    <>
      <div className='top-0 z-40 px-6 bg-primary h-10 flex justify-between w-full fixed text-center text-white font-dosis sm:border-0 sm:border-none focus:outline-none items-center'>
        <ScrollLink to='specialty' smooth={true}>
          <button
            type='button'
            className=' transform transition duration-700 ease-in-out hover:scale-125 text-gray-200 text-md focus:outline-none hover:text-tertiary  uppercase tracking-wider font-face-ko'
            alt='mywork'
          >
            {content.nav.workLink[0]}
          </button>
          {/* <span className='mr-4 text-gray-500'>|</span> */}
        </ScrollLink>
        <ScrollLink to='page2' smooth={true}>
          <button
            type='button'
            className=' transform transition duration-700 ease-in-out hover:scale-125  text-gray-200 text-md focus:outline-none hover:text-tertiary uppercase tracking-wider font-face-ko'
            alt='mywork'
          >
            {content.nav.workLink[1]}
          </button>
        </ScrollLink>
        <ScrollLink to='page3' smooth={true}>
          <button
            type='button'
            className='transform transition duration-700 ease-in-out hover:scale-125 text-gray-200 text-md focus:outline-none hover:text-tertiary  uppercase tracking-wider font-face-ko'
            alt='mywork'
          >
            {content.nav.workLink[2]}
          </button>
        </ScrollLink>
        <ScrollLink to='zeroProof' smooth={true}>
          <button
            type='button'
            className='transform transition duration-700 ease-in-out hover:scale-125 text-gray-200 text-md focus:outline-none hover:text-tertiary  uppercase tracking-wider font-face-ko'
            alt='mywork'
          >
            {content.nav.workLink[3]}
          </button>
        </ScrollLink>
      </div>
    </>
  )
}
