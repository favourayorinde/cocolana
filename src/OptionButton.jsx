import React, { Children } from 'react'

const OptionButton = ({children, className}) => {
  return (
    <div className='choices'>
        <img src="./Star 1.svg" alt="" />
        <div className='kulim-park'>{children}</div>
    </div>
  )
}

export default OptionButton