import React from 'react'
import content from './content'
import { Link as ScrollLink } from 'react-scroll'

export default function Navigation () {
  return (
    <>
      <div className='top-0 z-40 px-6 bg-primary h-8 flex justify-between w-full fixed text-center text-white font-dosis sm:border-0 sm:border-none focus:outline-none items-center'>
        
          <ScrollLink to='specialty' smooth={true}>
            <button
              type='button'
              className=' transform transition duration-500 ease-in-out  text-tertiary text-xl hover:-translate-x-1 focus:outline-none hover:text-lime-300'
              alt='mywork'
            >
              {content.nav.workLink[0]}
            </button>
            {/* <span className='mr-4 text-gray-500'>|</span> */}
          </ScrollLink>
          <ScrollLink to='page2' smooth={true}>
            <button
              type='button'
              className=' transform transition duration-500 ease-in-out  text-tertiary text-xl hover:-translate-x-1 focus:outline-none hover:text-lime-300'
              alt='mywork'
            >
              {content.nav.workLink[1]}
            </button>
          </ScrollLink>
          <ScrollLink to='page3' smooth={true}>
            <button
              type='button'
              className='transform transition duration-500 ease-in-out  text-tertiary text-xl hover:-translate-x-1 focus:outline-none hover:text-lime-300'
              alt='mywork'
            >
              {content.nav.workLink[2]}
            </button>
          </ScrollLink>
          <ScrollLink to='zeroProof' smooth={true}>
            <button
              type='button'
              className='transform transition duration-500 ease-in-out  text-tertiary text-xl hover:-translate-x-1 focus:outline-none hover:text-lime-300'
              alt='mywork'
            >
              {content.nav.workLink[3]}
            </button>
          </ScrollLink>
        </div>
      
    </>
  )
}
