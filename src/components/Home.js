import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import content from './content'
// import Bg from '../../public/assets/BBChicago.jpeg'
export default function Specialty () {
  const [animated, setAnimated] = useState(false)
  useEffect(() => {
    setAnimated(true)
  }, [])
  return (
    <>
      <div
        className=' min-h-screen sm:border-0 sm:border-none  bg-gray-900'
        
      >
        <div className='max-w-7xl mx-auto '>

        <img src={content.nav.homeBg} alt='blind barber background' className='absolute h-full w-full object-cover'/>
        </div>
          <div className='w-64 mx-auto pt-32'>
            <img
              src={content.nav.logoWhite}
              placeholder={content.header.imgPlaceholder}
              alt='Blind Barber Logo'
              className={`${
                animated ? '' : 'translate-y-5 opacity-0'
              } transform transition duration-1000 ease-in-out`}
            />
          </div>
                <div className='grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 lg:justify-center lg:gap-2 gap-8 pt-20 items-center max-w-7xl h-full lg:px-64 border-2 border-tertiary bg-tertiary '>

          <div
            className={`${
              animated ? '' : 'translate-y-5 opacity-0'
            }  transform transition duration-1000 ease-in-out text-center font-face-ko tracking-widest`}
          >
            <Link
              className='bg-secondary px-5 py-3 border border-gray-600  shadow-sm text-base font-face-ko tracking-widest text-tertiary  focus:outline-none uppercase'
              to='/full-menu'
            >
              Full Menu
            </Link>
          </div>

          <div
            className={`${
              animated ? '' : 'translate-y-5 opacity-0'
            } transform transition duration-1000 ease-in-out text-center`}
          >
            <Link
              className='bg-secondary px-5 py-3 border border-gray-600 shadow-sm font-face-ko tracking-widest text-tertiary  focus:outline-none uppercase'
              to='/bottles'
            >
              Bottles
            </Link>
          </div>
          <div
            className={`${
              animated ? '' : 'translate-y-5 opacity-0'
            } transform transition duration-1000 ease-in-out text-center`}
          >
            <Link
              className='  bg-secondary px-5 py-3 border border-gray-600 shadow-sm   font-face-ko tracking-widest text-tertiary  transform transition duration-500 ease-in-out  focus:outline-none uppercase'
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
