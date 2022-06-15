import React, { useEffect } from 'react'
// import { Link as ScrollLink } from 'react-scroll'
import content from './content'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Bottles ({
  champagnes,
  bottles,
  extras,
  accompaniments
  
}) {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <div
        className=' min-h-screen sm:border-0 sm:border-none  bg-gray-100'
        id='bottles'
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
            <p className='italic text-center text-xs font-face-ga sm:px-4 lg:mx-64'>
              Thank you for being safe and supporting the Blind Barber team. We
              reserve the right to deny service to anyone that chooses not to
              abide by our posted safety precautions.
            </p>
          </div>
            
          {/* BOTTLES */}
         
        <div className='text-primary py-3'
        data-aos='fade-zoom-in'
        data-aos-easing='ease-in-sine'
        data-aos-delay='300'
        >
          {Object.keys(bottles).map(head => (
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
                {bottles[head].map(item => (
                  <li key={item.id}>
                    <div className='relative px-6 lg:px-48 py-1 flex hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500'>
                      <div className='flex-shrink-0'></div>
                      <div className='flex-1 min-w-0'>
                        <span className='absolute inset-0' aria-hidden='true' />
                        <h1 className='text-md flex justify-between uppercase font-semibold font-face-px tracking-widest'>
                          {item.name} <span>{item.price}</span>
                        </h1>

                        <h3 className='text-md font-face-ga tracking-wide'>
                          {item.type}
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
{/* CHAMPAGNE */}
<div className='text-primary py-3'
id='champagne'>
          {Object.keys(champagnes).map(head => (
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
                {champagnes[head].map(item => (
                  <li key={item.id}>
                    <div className='relative px-6 lg:px-48 py-1 flex hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500'>
                      <div className='flex-shrink-0'></div>
                      <div className='flex-1 min-w-0'>
                        <span className='absolute inset-0' aria-hidden='true' />
                        <h1 className='text-md flex justify-between uppercase font-semibold font-face-px tracking-widest'>
                          {item.name} <span>{item.price}</span>
                        </h1>

                        <h3 className='text-md font-face-ga tracking-wide'>
                          {item.type} - {item.origin}
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* EXTRAS */}
<div className='text-primary py-3'
id='extras'>
          {Object.keys(extras).map(head => (
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
                {extras[head].map(item => (
                  <li key={item.id}>
                    <div className='relative px-6 lg:px-48 py-1 flex hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500'>
                      <div className='flex-shrink-0'></div>
                      <div className='flex-1 min-w-0'>
                        <span className='absolute inset-0' aria-hidden='true' />
                        <h1 className='text-md flex justify-between uppercase font-semibold font-face-px tracking-widest'>
                          {item.name} <span>{item.price}</span>
                        </h1>

                        <h3 className='text-md font-face-ga tracking-wide'>
                          {item.type}
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* ACCOMPANIMENTS */}
       
        <div className='text-primary py-3 text-center '>
          {Object.keys(accompaniments).map(head => (
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
                {accompaniments[head].map(item => (
                  <li key={item.id}>
                    <div className='relative px-6 py-1 flex items-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500'>
                      <div className='flex-shrink-0'></div>
                      <div className='flex-1 min-w-0'>
                        <span className='absolute inset-0' aria-hidden='true' />
                        <h1 className='text-md uppercase font-semibold font-face-px tracking-widest'>
                          {item.name} {item.upcharge}
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
        <div
            className='py-12'
            
           
          >
            <p className='italic text-center text-xs font-face-ga sm:px-4 lg:mx-64'>
              An automatic service fee of 20% will be added to all tabs
            </p>
          </div>
         </div>
      </div>
    </>
  )
}
