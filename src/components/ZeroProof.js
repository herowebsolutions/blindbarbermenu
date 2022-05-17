import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import content from './content'

export default function Beer ({ zeroProof }) {
  return (
    <div
      className=' min-h-screen font-dosis sm:border-0 sm:border-none  bg-gray-100'
      id='zeroProof'
    >
      <div className=' max-w-7xl h-full mx-auto py-6 sm:px-5 lg:px-8 '>
        <div className='flex justify-between'>
          <h1 className='pt-8 text-2xl uppercase font-face-ko tracking-widest'>
            Non Alcoholic
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
          <h1 className='pt-3 text-xl text-center font-semibold uppercase font-face-ko tracking-widest'>
            Shaken
          </h1>
        </div>
        <div className='text-primary py-3 '>
          {zeroProof.map(i => (
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

        <div className='text-center mt-10'>
          <ScrollLink to='page2' smooth={true}>
            <button className=' animate-bounce py-2 focus:outline-none '>
              {content.header.btnText}
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  )
}
