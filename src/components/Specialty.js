import React, { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import content from './content'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Specialty ({
  shaken,
  stirred,
  spritz,
  houseSpecials,
  highball
}) {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <div
        className=' min-h-screen font-dosis sm:border-0 sm:border-none  bg-gray-100'
        id='specialty'
      >
        <div className=' max-w-7xl h-full mx-auto py-6 sm:px-5 lg:px-8 '>
          <div
            className=' w-32 mx-auto pt-12'
            data-aos='fade-zoom-in'
            data-aos-easing='ease-in-back'
            data-aos-offset='0'
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
            data-aos-easing='ease-in-back'
            data-aos-offset='0'
          >
            <p className='italic text-center text-xs font-face-ga'>
              Thank you for being safe and supporting the Blind Barber team. We
              reserve the right to deny service to anyone that chooses not to
              abide by our posted safety precautions.
            </p>
          </div>

          <div
            className='flex justify-between'
            data-aos='fade-zoom-in'
            data-aos-easing='ease-in-back'
            data-aos-delay='100'
            data-aos-offset='0'
          >
            <h1 className='pt-8 text-2xl uppercase font-face-ko tracking-widest'>
              Specialty Cocktails
            </h1>
            <h1 className='pt-8 text-sm font-face-ko tracking-wide'>
              $<span className='pt-8 text-2xl'>15</span>
            </h1>
          </div>
          <div className='relative'>
            <div className='  flex items-center' aria-hidden='true'>
              <div className='w-full border-t border-gray-300' />
            </div>
          </div>
          <div>
            <h1
              className='pt-3 text-xl text-center font-semibold uppercase font-face-ko tracking-widest'
              data-aos='fade-zoom-in'
              data-aos-easing='ease-in-back'
              data-aos-delay='200'
              data-aos-offset='0'
            >
              Shaken
            </h1>
          </div>
          <div
            className='text-primary py-3 '
            data-aos='fade-zoom-in'
            data-aos-easing='ease-in-back'
            data-aos-delay='300'
            data-aos-offset='0'
          >
            {shaken.map(i => (
              <div key={i.id}>
                <h1 className='text-md uppercase font-face-px tracking-widest'>
                  {i.name}
                </h1>
                <p className='font-face-ga text-xs'>{i.desc}</p>
                <h3 className='text-md font-face-ga pb-4 tracking-wide'>
                  {i.ingredients}
                </h3>
              </div>
            ))}
          </div>
          <div>
            <h1 className='text-xl text-center font-semibold uppercase font-face-ko tracking-widest' data-aos='fade-zoom-in'
            data-aos-easing='ease-in-back'
            data-aos-delay='500'
            data-aos-offset='0'>
              Stirred
            </h1>
          </div>

          <div className='text-primary py-3' data-aos='fade-zoom-in'
            data-aos-easing='ease-in-back'
            data-aos-delay='500'
            data-aos-offset='0'>
            {stirred.map(i => (
              <div key={i.id}>
                <h1 className='text-md uppercase font-semibold font-face-px tracking-widest'>
                  {i.name}
                </h1>
                <p className='font-face-ga text-xs'>{i.desc}</p>
                <h3 className='text-md font-face-ga pb-4 tracking-wide'>
                  {i.ingredients}
                </h3>
              </div>
            ))}
          </div>

          <div>
            <h1 className='text-xl text-center font-semibold uppercase font-face-ko tracking-widest'>
              Spritz
            </h1>
          </div>
          <div className='text-primary py-3 '>
            {spritz.map(i => (
              <div key={i.id}>
                <h1 className='text-md uppercase font-semibold font-face-px tracking-widest'>
                  {i.name}
                </h1>
                <p className='font-face-ga text-xs'>{i.desc}</p>
                <h3 className='text-md font-face-ga pb-4 tracking-wide'>
                  {i.ingredients}
                </h3>
              </div>
            ))}
          </div>
          {/* <Divider/> */}
          <div className='flex justify-between'>
            <h1 className='pt-8 text-2xl uppercase font-face-ko tracking-widest'>
              House Specials
            </h1>
            <h1 className='pt-8 text-sm font-face-ko tracking-widest'>
              $<span className='pt-8 text-2xl'>15</span>
            </h1>
          </div>
          <div className='relative'>
            <div className='  flex items-center' aria-hidden='true'>
              <div className='w-full border-t border-gray-300' />
            </div>
          </div>
          <div className='text-primary py-3 pt-5 '>
            {houseSpecials.map(i => (
              <div key={i.id}>
                <h1 className='text-md uppercase font-semibold flex justify-between font-face-px tracking-widest'>
                  {i.name}
                </h1>
                <p className='font-face-ga text-xs'>{i.desc}</p>
                <h3 className='text-md font-face-ga pb-4 tracking-wide'>
                  {i.ingredients}
                </h3>
              </div>
            ))}
          </div>
          <div className='flex justify-between'>
            <h1 className='pt-8 text-2xl uppercase font-face-ko tracking-widest'>
              HighBall<span className='ml-2 '> ハイボール </span>
            </h1>
            <h1 className='pt-8 text-sm font-face-ko'>
              $
              <span className='pt-8 text-2xl font-semibold tracking-widest'>
                13
              </span>
            </h1>
          </div>
          <div className='relative'>
            <div className='  flex items-center' aria-hidden='true'>
              <div className='w-full border-t border-gray-300' />
            </div>
          </div>
          <div className='text-primary py-3 pt-5'>
            {highball.map(i => (
              <div key={i.id}>
                <h1 className='text-md uppercase font-semibold flex justify-between font-face-px tracking-widest'>
                  {i.name}
                </h1>
                <p className='font-face-ga text-xs'>{i.desc}</p>
                <h3 className='text-md font-face-ga pb-4 tracking-wide'>
                  {i.ingredients}
                </h3>
              </div>
            ))}
          </div>

          <div className='text-center mt-10'>
            <ScrollLink to='page2' smooth={true}>
              <button className=' animate-bounce py-2 focus:outline-none '>
                {content.header.btnText}
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </>
  )
}
