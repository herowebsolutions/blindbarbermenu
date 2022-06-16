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
        className=' min-h-screen sm:border-0 sm:border-none  bg-gray-100'
        
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
            } transform transition duration-1000 ease-in-out text-center pt-16 font-face-ko tracking-widest`}
          >
            <Link
              className=' inline-flex items-center bg-tertiary px-5 py-3 border border-secondary shadow-sm text-base font-bold font-face-ko tracking-widest rounded-md text-secondary hover:shadow-lg focus:outline-none uppercase'
              to='/full-menu'
            >
              Full Menu
            </Link>
          </div>

          <div
            className={`${
              animated ? '' : 'translate-y-5 opacity-0'
            } transform transition duration-1000 ease-in-out text-center pt-4`}
          >
            <Link
              className=' inline-flex items-center bg-tertiary px-5 py-3 border border-secondary shadow-sm text-base font-bold font-face-ko tracking-widest rounded-md text-secondary hover:shadow-lg focus:outline-none uppercase'
              to='/bottles'
            >
              Bottles
            </Link>
          </div>
          <div
            className={`${
              animated ? '' : 'translate-y-5 opacity-0'
            } transform transition duration-1000 ease-in-out text-center pt-4`}
          >
            <Link
              className=' inline-flex items-center bg-tertiary px-5 py-3 border border-secondary shadow-sm text-base font-bold font-face-ko tracking-widest rounded-md text-secondary hover:shadow-lg focus:outline-none uppercase'
              to='/happy-hour'
            >
              Happy Hour
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
