import React from 'react'
import graphSmall from '../images/graphSmall.PNG'
import Data from '../styles/DataRange.module.css'

const DataRange = () => {
  return (
    <div className={Data.container}>
        <img src={graphSmall} alt="T" />
        <div className={Data.container__text}>
            <h2>Choose a data range</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas</p>
        </div>
    </div>
  )
}

export default DataRange