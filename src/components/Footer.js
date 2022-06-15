import React from 'react'
import content from './content'


function Footer () {
  return (
    <div className='min-h-full bg-primary p-4 lg:px-64 flex flex-row justify-between items-center text-gray-300 font-medium text-sm text-center font-face-ko'>
      <div >
        
        <a href='http://blindbarber.com' target='_blank' rel="noreferrer" className='uppercase font-face-ko tracking-widest'>blindbarber.com</a>
      </div>
      <div className=' w-8 '>
        <img
          src={content.nav.faviconWhite}
          placeholder={content.header.imgPlaceholder}
          alt='Blind Barber Logo'
        />
      </div>
      
      <div>
        <h1 className='uppercase mx-auto tracking-widest'>Stay Handsome</h1>
      </div>
    </div>
  )
}

export default Footer
