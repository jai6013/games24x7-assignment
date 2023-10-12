import React from 'react'

const Image = ({imageSrc, imageClassName}) => {
  return (
    <img src={imageSrc} className={imageClassName} alt='error'/>
  )
}

export default Image