import React from 'react'
// import content from './content'

export default function Spirits ({ spirits, top }) {
  return (
    <div
      className=' min-h-screen font-dosis sm:border-0 sm:border-none  bg-gray-100'
      id='spirits'
    >
      <div className=' max-w-7xl h-full mx-auto sm:px-1 lg:px-8 '>
        {/* SPIRITS */}

        <div className='text-primary py-3'>
          {Object.keys(spirits).map(head => (
            <div key={head} className='relative'>
              <div className='z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-100 text-sm font-medium lg:mx-48 lg:px-4 '>
                <div className='flex justify-center mt-6'>
                  <h1 className='pt-8 text-2xl uppercase font-face-ko tracking-widest'>
                    Spirits
                  </h1>
                </div>
                <div className='w-full border-t border-gray-300' />
              </div>

              <ul className='relative z-0 pt-6'>
                {spirits[head].map(item => (
                  <li key={item.id}>
                    <div className='flex justify-left '>
                      <h1 className='px-6 lg:px-48 text-2xl uppercase font-face-ko tracking-widest underline'>
                        {item.title}
                      </h1>
                    </div>
                    <div className='relative px-6 lg:px-48 py-1 flex '>
                      <div className='flex-shrink-0'></div>
                      <div className='flex-1 min-w-0'>
                        <span className='absolute inset-0' aria-hidden='true' />
                        <h1 className='text-md flex justify-between uppercase font-semibold font-face-px tracking-widest'>
                          {item.name} <span>{item.price}</span>
                        </h1>

                        <h3 className='text-md font-face-ga tracking-wide'>
                          {item.vol} {item.origin}
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* TOP */}
        <div className='text-primary py-3'>
          {Object.keys(top).map(head => (
            <div key={head} className='relative'>
              <div className='z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-100 text-sm font-medium lg:mx-48 lg:px-4 '>
                <div className='flex-col text-center justify-center mt-6'>
                  <h1 className='pt-8 text-2xl uppercase font-face-ko tracking-widest'>
                    Top Shelf
                  </h1>
                  <p className='italic'>*all top shelf pours are 1.5 ounces.</p>
                </div>
                <div className='w-full border-t border-gray-300' />
              </div>

              <ul className='relative z-0 pt-6'>
                {top[head].map(item => (
                  <li key={item.id}>
                    <div className='flex justify-left '>
                      <h1 className='px-6 lg:px-48 text-2xl uppercase font-face-ko tracking-widest'>
                        {item.title}
                      </h1>
                    </div>
                    <div className='relative px-6 lg:px-48 py-1 flex '>
                      <div className='flex-shrink-0'></div>
                      <div className='flex-1 min-w-0'>
                        <span className='absolute inset-0' aria-hidden='true' />
                        <h1 className='text-md flex justify-between uppercase font-semibold font-face-px tracking-widest'>
                          {item.name} <span>{item.price}</span>
                        </h1>

                        <h3 className='text-md font-face-ga tracking-wide'>
                          {item.vol} {item.origin}
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <p className='italic text-xs justify-center text-center items-center p-10'>*All tabs are subject to automatic 20% gratuity</p>
        </div>
      </div>
    </div>
  )
}
