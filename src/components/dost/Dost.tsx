import React from 'react'
import { Idost } from './Idost'
import './Dost.scss'

const Dost = (props: Idost) => {
  return (
    <div className='dost__containner'>
      <h5 className="title">
        {props.title}
      </h5>
      <span className="body">
        {props.body}
      </span>
      <img src={props.imgPath} />
    </div>
  )
}

export default Dost
