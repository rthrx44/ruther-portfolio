import React from 'react'

export const Logo = ({logo}) => {
  const {icon, name} = logo
  return (
    <>
      <div className='logo-con'>
        <img src={icon} alt={name} />
      </div>
    </>
  )
}

export const Screenshot = ({images}) => {
  const {id, image} = images
  return (
    <>
      <div className='images-con'>
        <img src={image} alt={id} />
      </div>
    </>
  )
}
