import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import content from './content'
import Divider from './Divider'
export default function Specialty ({
  shaken,
  stirred,
  spritz,
  houseSpecials,
  highball
}) {
  return (
    <>
      <div
        className=' min-h-screen font-dosis sm:border-0 sm:border-none  bg-tertiary'
        id='specialty'
      >
        <div className=' max-w-7xl h-full mx-auto py-6 sm:px-5 lg:px-8 '>
          <div className=' w-32 mx-auto pt-12'>
            <img
              src={content.nav.logo}
              placeholder={content.header.imgPlaceholder}
              alt='Blind Barber Logo'
            />
          </div>
          <div className='pt-4'>
            <p className='italic text-center font-sm'>
              Thank you for being safe and supporting the Blind Barber team. We
              reserve the right to deny service to anyone that chooses not to
              abide by our posted safety precautions.
            </p>
          </div>
          <div className='flex justify-between'>
            <h1 className='pt-8 text-2xl uppercase'>Specialty Cocktails</h1>
            <h1 className='pt-8 text-sm'>
              $<span className='pt-8 text-2xl'>15</span>
            </h1>
          </div>
          <div className='relative'>
            <div className='  flex items-center' aria-hidden='true'>
              <div className='w-full border-t border-gray-300' />
            </div>
          </div>
          <div>
            <h1 className='pt-3 text-xl font-semibold uppercase'>Shaken</h1>
          </div>
          <div className='text-primary py-3 '>
            {shaken.map(i => (
              <div key={i.id}>
                <h1 className='text-md uppercase font-semibold'>{i.name}</h1>
                <p className='italic'>{i.desc}</p>
                <h3 className='text-xl italic pb-4'>{i.ingredients}</h3>
              </div>
            ))}
          </div>
          <div>
            <h1 className='text-xl font-semibold uppercase'>Stirred</h1>
          </div>
         
          <div className='text-primary py-3'>
            {stirred.map(i => (
              <div key={i.id}>
                <h1 className='text-md uppercase font-semibold'>{i.name}</h1>
                <p className='italic'>{i.desc}</p>
                <h3 className='text-xl italic pb-4'>{i.ingredients}</h3>
              </div>
            ))}
          </div>

          <div>
            <h1 className='text-xl font-semibold uppercase'>Spritz</h1>
          </div>
          <div className='text-primary py-3 '>
            {spritz.map(i => (
              <div key={i.id}>
                <h1 className='text-md uppercase font-semibold'>{i.name}</h1>
                <p className='italic'>{i.desc}</p>
                <h3 className='text-xl italic pb-4'>{i.ingredients}</h3>
              </div>
            ))}
          </div>
          <Divider/>
          <div className='border-b-2 border-l-2 border-r-2 p-4 border-gray-400'>
            
            <div className='text-primary py-3 '>
              {houseSpecials.map(i => (
                <div key={i.id}>
                  <h1 className='text-md uppercase font-semibold flex justify-between' >{i.name}<span>{i.price}</span></h1>
                  <p className='italic'>{i.desc}</p>
                  <h3 className='text-xl italic pb-4'>{i.ingredients}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className='flex justify-between'>
            <h1 className='pt-8 text-xl font-semibold uppercase'>HighBalls<span className='ml-2'> ハイボール </span></h1>
            <h1 className='pt-8 text-sm font-semibold'>
              $<span className='pt-8 text-xl font-semibold'>13</span>
            </h1>
          </div>
          <div className='relative'>
            <div className='  flex items-center' aria-hidden='true'>
              <div className='w-full border-t border-gray-300' />
            </div>
          </div>
          <div className='text-primary py-3 '>
            {highball.map(i => (
              <div key={i.id}>
                <h1 className='text-md uppercase font-semibold flex justify-between'>{i.name}<span>{i.price}</span></h1>
                <p className='italic'>{i.desc}</p>
                <h3 className='text-xl italic pb-4'>{i.ingredients}</h3>
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
