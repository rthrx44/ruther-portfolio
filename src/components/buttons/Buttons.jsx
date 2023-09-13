import React from 'react'
import './Buttons.css';

//* Round Button
export const RButton = ({buttonClick, displayText = 'Submit'}) => {
  return (
    <button 
      className='rbtn'
      onClick={buttonClick}>
        {displayText}
    </button>
  )
}

//* hero Button
export const HButton = ({buttonClick, displayText = 'Reach Out'}) => {
  return (
    <button 
      className='hbtn'
      onClick={buttonClick}>
        {displayText}
    </button>
  )
}