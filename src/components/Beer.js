import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import content from './content'

export default function Home() {
  return (
    <div className=' min-h-screen pt-8 mb-0 flex items-center sm:border-0 sm:border-none justify-center bg-tertiary' id='page3'>
    <div className=' p-8 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 '>
      <div className='text-primary font-serif text-center md:text-left'>
        <h2 className='transform transition duration-1000 text-center  ease-in-out text-4xl md:text-5xl font-bold'>
          {content.header.text}
          <br></br>
          {content.header.subText[2]}
        </h2>

        <div className='text-center mt-10'>
          <ScrollLink to='zeroProof' smooth={true}>
            <button className=' animate-bounce py-2 focus:outline-none '>{content.header.btnText}</button>
          </ScrollLink>
        </div>
      </div>
    </div>
  </div>
  )
}
