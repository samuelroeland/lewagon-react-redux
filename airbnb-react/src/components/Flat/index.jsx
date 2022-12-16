import React from 'react'
import './Flat.scss'

const Flat = ({ imageUrl, price, name }) => {
  return (
    <div className="flat">
      <img className="flat-picture" alt="The flat" src={imageUrl} />
      <div className="flat-title">
        ${price} - {name}
      </div>
    </div>
  )
}

export default Flat
