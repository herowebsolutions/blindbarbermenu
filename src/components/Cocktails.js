import React, { useEffect } from 'react'
// import { Link as ScrollLink } from 'react-scroll'
import content from './content'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Cocktails ({ signature, classic, highball, fancy, nightCaps }) {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <div
        className=' min-h-screen font-dosis sm:border-0 sm:border-none  bg-gray-100'
        id='cocktails'
      >
        <div className=' max-w-7xl h-full mx-auto py-4 sm:px-4 lg:px-8 '>
          <div
            className=' w-32 mx-auto pt-12'
            data-aos='fade-zoom-in'
            data-aos-easing='ease-in-sine'
            
          >
            <img
              src={content.nav.logo}
              placeholder={content.header.imgPlaceholder}
              alt='Blind Barber Logo'
            />
          </div>
          <div
            className='pt-4'
            data-aos='fade-zoom-in'
            data-aos-easing='ease-in-sine'
            
          >
            <p className='italic text-center text-xs font-face-ga lg:mx-64'>
              Thank you for being safe and supporting the Blind Barber team. We
              reserve the right to deny service to anyone that chooses not to
              abide by our posted safety precautions.
            </p>
          </div>

          {/* SIGNATURE */}
          <div className='text-primary py-3 text-center'
          data-aos='fade-zoom-in'
          data-aos-easing='ease-in-sine'
          data-aos-delay='300'>
            {Object.keys(signature).map(head => (
              <div key={head} className='relative'>
                <div className='z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-100 text-sm font-medium lg:mx-64 lg:px-4'
                >
                  <div
                    className='flex justify-around mt-6'
                    
                  >
                    <h1 className='pt-8 text-2xl uppercase font-face-ko tracking-widest'>
                      {head} Cocktails
                    </h1>
                    <h1 className='pt-8 text-sm font-face-ko'>
                      $
                      <span className='pt-8 text-2xl font-semibold tracking-widest'>
                        15
                      </span>
                    </h1>
                  </div>
                  <div className='w-full border-t border-gray-300' />
                </div>

                <ul
                  className='relative z-0 divide-y divide-gray-200 pt-6'
                  
                >
                  {signature[head].map(item => (
                    <li key={item.id}>
                      <div className='relative px-6 py-1 flex items-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500'>
                        <div className='flex-shrink-0'></div>
                        <div className='flex-1 min-w-0'>
                          <span
                            className='absolute inset-0'
                            aria-hidden='true'
                          />
                          <h1 className='text-md uppercase font-semibold font-face-px tracking-widest'>
                            {item.name}
                          </h1>
                          <h3 className='text-md font-face-ga tracking-wide'>
                            {item.ingredients}
                          </h3>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CLASSIC */}

          <div className='text-primary py-3 text-center'>
            {Object.keys(classic).map(head => (
              <div key={head} className='relative'>
                <div className='z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-100 text-sm font-medium lg:mx-64 lg:px-4 '>
                  <div className='flex justify-around mt-6'>
                    <h1 className='pt-8 text-2xl uppercase font-face-ko tracking-widest'>
                      {head} Cocktails
                    </h1>
                    <h1 className='pt-8 text-sm font-face-ko'>
                      $
                      <span className='pt-8 text-2xl font-semibold tracking-widest'>
                        15
                      </span>
                    </h1>
                  </div>
                  <div className='w-full border-t border-gray-300' />
                </div>
                <ul className='relative z-0 divide-y divide-gray-200 pt-6'>
                  {classic[head].map(item => (
                    <li key={item.id}>
                      <div className='relative px-6 py-1 flex items-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500'>
                        <div className='flex-shrink-0'></div>
                        <div className='flex-1 min-w-0'>
                          <span
                            className='absolute inset-0'
                            aria-hidden='true'
                          />
                          <h1 className='text-md uppercase font-semibold font-face-px tracking-widest'>
                            {item.name} {item.price}
                          </h1>
                          <h3 className='text-md font-face-ga tracking-wide'>
                            {item.ingredients}
                          </h3>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* FANCY */}
          <div className='text-primary py-3 text-center'>
            {Object.keys(fancy).map(head => (
              <div key={head} className='relative'>
                <div className='z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-100 text-sm font-medium lg:mx-64 lg:px-4 '>
                  <div className='flex justify-around mt-6'>
                    <h1 className='pt-8 text-2xl uppercase font-face-ko tracking-widest'>
                      {head} Cocktails
                    </h1>
                    <h1 className='pt-8 text-sm font-face-ko'>
                      $
                      <span className='pt-8 text-2xl font-semibold tracking-widest'>
                        19
                      </span>
                    </h1>
                  </div>
                  <div className='w-full border-t border-gray-300' />
                </div>
                <ul className='relative z-0 divide-y divide-gray-200 pt-6'>
                  {fancy[head].map(item => (
                    <li key={item.id}>
                      <div className='relative px-6 py-1 flex items-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500'>
                        <div className='flex-shrink-0'></div>
                        <div className='flex-1 min-w-0'>
                          <span
                            className='absolute inset-0'
                            aria-hidden='true'
                          />
                          <h1 className='text-md uppercase font-semibold font-face-px tracking-widest'>
                            {item.name} {item.price}
                          </h1>
                          <h3 className='text-md font-face-ga tracking-wide'>
                            {item.ingredients}
                          </h3>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

           {/* HIGHBALL */}

           <div className='text-primary py-3 text-center'>
            {Object.keys(highball).map(head => (
              <div key={head} className='relative'>
                <div className='z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-100 text-sm font-medium lg:mx-64 lg:px-4 text-center '>
                  <div className='flex justify-center mt-6'>
                    <h1 className='pt-8 text-2xl uppercase font-face-ko tracking-widest'>
                      {head}
                      <span className='ml-2 '> ハイボール </span>
                    </h1>
                   
                  </div>
                  <div className='w-full border-t border-gray-300' />
                </div>
                <ul className='relative z-0 divide-y divide-gray-200 pt-2 '>
                  {highball[head].map(item => (
                    <li key={item.id}>
                      <div className='relative px-6 py-1 flex items-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500'>
                        <div className='flex-shrink-0'></div>
                        <div className='flex-1 min-w-0'>
                          <span
                            className='absolute inset-0'
                            aria-hidden='true'
                          />
                          <h1 className='text-md uppercase font-semibold font-face-px tracking-widest'>
                            {item.name} {item.price}
                          </h1>
                          <h3 className='text-md font-face-ga pb-4 tracking-wide'>
                            {item.ingredients}
                          </h3>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* NIGHTCAPS */}

          <div className='text-primary py-3'>
            {Object.keys(nightCaps).map(head => (
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
                  {nightCaps[head].map(item => (
                    <li key={item.id}>
                      <div className='relative px-6 py-1 flex  hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500'>
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
                            {item.desc} - {item.origin}
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
    </>
  )
}
