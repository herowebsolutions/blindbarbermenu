import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import content from './content'

export default function HappyHour ({ 
  highball, 
  martinis, 
  more 

}) {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <div
        className=' min-h-screen sm:border-0 sm:border-none  bg-gray-100'
        id='highballs'
      >
        <div className=' max-w-7xl h-full mx-auto py-4 sm:px-1 lg:px-8 '>
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
            <p className='py-6 italic text-center font-bold text-sm font-face-ga tracking-wider'>
              Wed-Fri, 5-7pm
            </p>
          </div>
          {/* HIGHBALLS */}
          <div
            className='text-primary py-3 text-center'
            data-aos='fade-zoom-in'
            data-aos-delay='300'
          >
            {Object.keys(highball).map(head => (
              <div key={head} className='relative'>
                <div className='z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-100 text-sm font-medium lg:mx-48 lg:px-4 text-center '>
                  <div className='flex justify-around mt-6'>
                    <h1 className='pt-8 text-2xl uppercase font-face-ko tracking-widest'>
                      {head}
                      <span className=' '> {head.sub} </span>
                    </h1>
                    <h1 className='pt-8 text-sm font-face-ko'>
                      $
                      <span className='pt-8 text-2xl font-semibold tracking-widest'>
                        6
                      </span>
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
                            {item.name}
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
          {/* MARTINIS */}
          <div
            className='text-primary py-3 text-center'
            id='martinis'
            
          >
            {Object.keys(martinis).map(head => (
              <div key={head} className='relative'>
                <div className='z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-100 text-sm font-medium lg:mx-48 lg:px-4 text-center '>
                  <div className='flex justify-around mt-6'>
                    <h1 className='pt-8 text-2xl uppercase font-face-ko tracking-widest'>
                      {head}
                    </h1>
                    <h1 className='pt-8 text-sm font-face-ko'>
                      $
                      <span className='pt-8 text-2xl font-semibold tracking-widest'>
                        8
                      </span>
                    </h1>
                  </div>
                  <div className='w-full border-t border-gray-300' />
                </div>
                <ul className='relative z-0 divide-y divide-gray-200 pt-2 '>
                  {martinis[head].map(item => (
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
          {/* MORE */}
          <div className='text-primary py-3' id='more'>
            {Object.keys(more).map(head => (
              <div key={head} className='relative'>
                <div className='z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-100 text-sm font-medium lg:mx-48 lg:px-4 '>
                  <div className='flex justify-center mt-6'>
                    <h1 className='pt-8 text-2xl uppercase font-face-ko tracking-widest'>
                      <span className='lowercase'>and</span> {head}
                    </h1>
                  </div>
                  <div className='w-full border-t border-gray-300' />
                </div>
                <ul className='relative z-0 divide-y divide-gray-200 pt-6'>
                  {more[head].map(item => (
                    <li key={item.id}>
                      <div className='relative px-6 lg:px-48 py-1 flex  hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500'>
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
                            {item.desc} - {item.type}
                          </h3>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className='py-12'>
            <p className='italic text-center text-xs font-face-ga sm:px-4 lg:mx-64'>
              An automatic service fee of 20% will be added to all tabs
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
