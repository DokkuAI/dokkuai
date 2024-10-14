import React from 'react'
import Check from '../ui/Check'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex-grow flex flex-col'>
        <Check />

        {children}
    </div>
  )
}

export default layout