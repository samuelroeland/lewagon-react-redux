import React from 'react'
import { useState } from 'react'
import './Flat.scss'

const Flat = ({ imageUrl, price, name, onSelect, selected }) => {
  const classes = selected ? 'flat selected' : 'flat'

  return (
    <div className={classes} onClick={onSelect}>
      <img className="flat-picture" alt="The flat" src={imageUrl} />
      <div className="flat-title">
        ${price} - {name}
      </div>
    </div>
  )
}

export default Flat
