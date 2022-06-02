import React from 'react'
// import { Link as ScrollLink } from 'react-scroll'
// import content from './content'

export default function Beer ({ draft, canned }) {
  return (
    <div
      className=' min-h-screen font-dosis sm:border-0 sm:border-none  bg-gray-100'
      id='beer'
    >
      <div className=' max-w-7xl h-full mx-auto py-6 sm:px-1 lg:px-8 '>
      {/* DRAFT */}
      <div className='flex justify-around mt-6'>
          <h1 className='pt-8 text-2xl uppercase font-face-ko tracking-widest'>
            Beers And More
          </h1>
        </div>
        <div className='text-primary py-3'>
          {Object.keys(draft).map(head => (
            <div key={head} className='relative'>
              <div className='z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-100 text-sm font-medium lg:mx-48 lg:px-4 '>
                <div className='flex justify-center mt-6'>
                  <h1 className='pt-8 text-2xl uppercase font-face-ko tracking-widest'>
                    {head}
                  </h1>
                </div>
                <div className='w-full border-t border-gray-300' />
              </div>
              <ul className='relative z-0 divide-y divide-gray-200 pt-6'>
                {draft[head].map(item => (
                  <li key={item.id}>
                    <div className='relative px-6 lg:px-48 py-1 flex  hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500'>
                      <div className='flex-shrink-0'></div>
                      <div className='flex-1 min-w-0'>
                        <span className='absolute inset-0' aria-hidden='true' />
                        <h1 className='text-md flex justify-between uppercase font-semibold font-face-px tracking-widest'>
                          {item.name} <span>{item.price}</span>
                        </h1>

                        <h3 className='text-md font-face-ga tracking-wide'>
                          {item.vol} - {item.desc}
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CANNED */}

        <div className='text-primary py-3'>
          {Object.keys(canned).map(head => (
            <div key={head} className='relative'>
              <div className='z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-100 text-sm font-medium lg:mx-48 lg:px-4 '>
                <div className='flex justify-center mt-6'>
                  <h1 className='pt-8 text-2xl uppercase font-face-ko tracking-widest'>
                    {head}
                  </h1>
                </div>
                <div className='w-full border-t border-gray-300' />
              </div>
              <ul className='relative z-0 divide-y divide-gray-200 pt-6'>
                {canned[head].map(item => (
                  <li key={item.id}>
                    <div className='relative px-6 lg:px-48 py-1 flex hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500'>
                      <div className='flex-shrink-0'></div>
                      <div className='flex-1 min-w-0'>
                        <span className='absolute inset-0' aria-hidden='true' />
                        <h1 className='text-md flex justify-between uppercase font-semibold font-face-px tracking-widest'>
                          {item.name} <span>{item.price}</span>
                        </h1>

                        <h3 className='text-md font-face-ga tracking-wide'>
                          {item.vol} - {item.desc}
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
