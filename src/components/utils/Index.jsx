import React from 'react'

export const Logo = ({logo}) => {
  const {icon, name} = logo
  return (
    <>
      <div className='logo-con'>
        <img className='lazy loading' src={icon} data-src={icon} alt={name} title={name}/>
      </div>
    </>
  )
}

export const Screenshot = ({images}) => {
  const {title, id, image} = images
  return (
    <>
      <div className='images-con' title={title}>
        <img className='lazy loading' src={image} data-src={image} alt={id}/>
      </div>
    </>
  )
}
