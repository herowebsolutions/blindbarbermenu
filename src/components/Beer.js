import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import content from './content'

export default function Beer ({ beer }) {
  return (
    <div
      className=' min-h-screen font-dosis sm:border-0 sm:border-none  bg-gray-100'
      id='beer'
    >
      <div className=' max-w-7xl h-full mx-auto py-6 sm:px-5 lg:px-8 '>
      <div className='text-primary py-3'
      data-aos='fade-zoom-in'
      data-aos-easing='ease-in-sine'
      data-aos-delay='100'>
            {Object.keys(beer).map(head => (
              <div key={head} className='relative'>
                <div className='z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-100 text-sm font-medium lg:mx-64 lg:px-4 '>
                <div className='flex justify-center mt-6'>
                    <h1 className='pt-8 text-2xl uppercase font-face-ko tracking-widest'>
                      {head}
                    </h1>
                    
                  </div>
                  <div className='w-full border-t border-gray-300' />
                </div>
                <ul className='relative z-0 divide-y divide-gray-200 pt-6'>
                  {beer[head].map(item => (
                    <li key={item.id}>
                      <div className='relative px-6 py-1 flex  space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500'>
                        <div className='flex-shrink-0'></div>
                        <div className='flex-1 min-w-0'>
                          <span
                            className='absolute inset-0'
                            aria-hidden='true'
                          />
                          <h1 className='text-md flex justify-between uppercase font-semibold font-face-px tracking-widest'>
                            {item.name} <span>{item.price}</span>
                          </h1>
                          
                          <h3 className='text-md font-face-ga tracking-wide'>
                            {item.desc} {item.origin}
                          </h3>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

       
      </div>
    </div>
  )
}
