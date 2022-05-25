import React from 'react'
import content from './content'
function Footer() {
  return (
    <div className='min-h-full bg-primary p-8 text-tertiary font-medium text-sm text-center'>

<div
            className=' w-8 mx-auto'
            
            
          >
            <img
              src={content.nav.faviconWhite}
              placeholder={content.header.imgPlaceholder}
              alt='Blind Barber Logo'
            />
          </div>
    </div>
  )
}

export default Footer