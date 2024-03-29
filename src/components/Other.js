import React from 'react'
// import { Link as ScrollLink } from 'react-scroll'
// import content from './content'

export default function Other ({
  other,
  snacks,
  sandwiches,
  temp
}) {
  return (
    <div
      className=' min-h-screen font-dosis sm:border-0 sm:border-none  bg-gray-100'
      id='other'
    >
      <div className=' max-w-7xl h-full mx-auto py-6 sm:px-1 lg:px-8 '>
        {/* OTHER */}
        <div className='text-primary py-3 text-center'>
          {Object.keys(other).map(head => (
            <div key={head} className='relative'>
              <div className='z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-100 text-sm font-medium lg:mx-48 lg:px-4 '>
                <div className='flex justify-center mt-6'>
                  <h1 className='pt-8 text-2xl uppercase font-face-ko tracking-widest'>
                    Other Cold Drinks
                  </h1>
                  <h1 className='ml-3 pt-8 text-sm font-face-ko'>
                    $
                    <span className='pt-8 text-2xl font-semibold tracking-widest'>
                      5
                    </span>
                  </h1>
                </div>
                <div className='w-full border-t border-gray-300' />
              </div>
              <ul className='relative z-0 pt-6'>
                {other[head].map(item => (
                  <li key={item.id}>
                    <div className='relative px-6 py-1 flex items-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500'>
                      <div className='flex-shrink-0'></div>
                      <div className='flex-1 min-w-0'>
                        <span className='absolute inset-0' aria-hidden='true' />
                        <h1 className='text-md uppercase font-semibold font-face-px tracking-widest'>
                          {item.name}
                        </h1>
                        <h3 className='text-md font-face-ga tracking-wide'>
                          {item.desc}
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
{/* TEMP MENU */}
          {/* <div className=' max-w-7xl h-full mx-auto py-6 sm:px-1 lg:px-8 '>
          <div className='text-primary '>
          {Object.keys(temp).map(head => (
            <div key={head} className='relative'>
              <div className='z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-100 text-sm font-medium lg:mx-48 lg:px-4 '>
                <div className='flex justify-center mt-6'>
                  <h1 className='pt-8 text-2xl uppercase font-face-ko tracking-widest'>
                    Seb's Secret Menu
                  </h1>
                </div>
                <div className='w-full border-t border-gray-300' />
              </div>
              <ul className='relative z-0 pt-6'>
                {temp[head].map(item => (
                  <li key={item.id}>
                    <div className='relative px-6 lg:px-48 py-1 flex pb-3'>
                      <div className='flex-shrink-0'></div>
                      <div className='flex-1 min-w-0 '>
                        <span className='absolute inset-0' aria-hidden='true' />
                        <h3 className='text-sm font-extrabold font-face-ga tracking-wide'>
                          {item.sub}
                        </h3>
                        <h1 className='text-md flex justify-between uppercase font-semibold font-face-px tracking-wide '>
                          {item.name} <span className='lg:ml-64 md:ml-64'>{item.price}</span>
                        </h1>
                      

                        <h3 className='text-md font-face-ga tracking-wide'>
                          {item.ingredients}
                        </h3>
                        <h3 className='text-sm font-extrabold font-face-ga tracking-wide'>
                          {item.desc}
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
            </div> */}
        {/* SNACKS */}
        <div className='text-primary '>
          {Object.keys(snacks).map(head => (
            <div key={head} className='relative'>
              <div className='z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-100 text-sm font-medium lg:mx-48 lg:px-4 '>
                <div className='flex justify-center mt-6'>
                  <h1 className='pt-8 text-2xl uppercase font-face-ko tracking-widest'>
                    {head}
                  </h1>
                </div>
                <div className='w-full border-t border-gray-300' />
              </div>
              <ul className='relative z-0 pt-6'>
                {snacks[head].map(item => (
                  <li key={item.id}>
                    <div className='relative px-6 lg:px-48 py-1 flex pb-3'>
                      <div className='flex-shrink-0'></div>
                      <div className='flex-1 min-w-0 '>
                        <span className='absolute inset-0' aria-hidden='true' />
                        <h3 className='text-sm font-extrabold font-face-ga tracking-wide'>
                          {item.sub}
                        </h3>
                        <h1 className='text-md flex justify-between uppercase font-semibold font-face-px tracking-wide '>
                          {item.name} <span className='lg:ml-64 md:ml-64'>{item.price}</span>
                        </h1>
                      

                        <h3 className='text-md font-face-ga tracking-wide'>
                          {item.ingredients}
                        </h3>
                        <h3 className='text-sm font-extrabold font-face-ga tracking-wide'>
                          {item.desc}
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SANDWICHES */}
        <div className='text-primary '>
          {Object.keys(sandwiches).map(head => (
            <div key={head} className='relative'>
              <div className='z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-100 text-sm font-medium lg:mx-48 lg:px-4 '>
                <div className='flex justify-center mt-6'>
                  <h1 className='pt-8 text-2xl uppercase font-face-ko tracking-widest'>
                    {head}
                  </h1>
                </div>
                <div className='w-full border-t border-gray-300' />
              </div>
              <ul className='relative z-0 pt-6'>
                {sandwiches[head].map(item => (
                  <li key={item.id}>
                    <div className='relative px-6 lg:px-48 py-1 flex pb-3'>
                      <div className='flex-shrink-0'></div>
                      <div className='flex-1 min-w-0 '>
                        <span className='absolute inset-0' aria-hidden='true' />
                        <h3 className='text-sm font-extrabold font-face-ga tracking-wide'>
                          {item.sub}
                        </h3>
                        <h1 className='text-md flex justify-between uppercase font-semibold font-face-px tracking-wide '>
                          {item.name} <span className='lg:ml-64 md:ml-64'>{item.price}</span>
                        </h1>
                      

                        <h3 className='text-md font-face-ga tracking-wide'>
                          {item.ingredients}
                        </h3>
                        <h3 className='text-sm font-extrabold font-face-ga tracking-wide'>
                          {item.desc}
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
