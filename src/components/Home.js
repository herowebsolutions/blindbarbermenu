import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import content from './content'

export default function Specialty () {
  const [animated, setAnimated] = useState(false)
  useEffect(() => {
    setAnimated(true)
  }, [])
  return (
    <>
      <div
        className=' min-h-screen font-dosis sm:border-0 sm:border-none  bg-gray-100'
        id='specialty'
      >
        <div className=' max-w-7xl h-full mx-auto py-6 sm:px-5 lg:px-8 '>
          <div className='w-64 mx-auto pt-32'>
            <img
              src={content.nav.logo}
              placeholder={content.header.imgPlaceholder}
              alt='Blind Barber Logo'
              className={`${
                animated ? '' : 'translate-y-5 opacity-0'
              } transform transition duration-1000 ease-in-out`}
            />
          </div>

          <div
            className={`${
              animated ? '' : 'translate-y-5 opacity-0'
            } transform transition duration-1000 ease-in-out text-center pt-16`}
          >
           
              <Link
                className=' inline-flex items-center bg-tertiary px-5 py-3 border border-secondary shadow-sm text-base font-bold font-face-ko tracking-widest rounded-md text-secondary hover:shadow-lg focus:outline-none uppercase'
                
                to='/chicago-menu'
              >Chicago Menu</Link>
           
          </div>

          {/* <div className='text-center mt-10'>
            <ScrollLink to='page2' smooth={true}>
              <button className=' animate-bounce py-2 focus:outline-none '>
                {content.header.btnText}
              </button>
            </ScrollLink>
          </div> */}
        </div>
      </div>
    </>
  )
}
