import React from 'react'
import { banner } from './model'

import './banner.scss'
const Banner = (props:banner) => {
  return (
    <div className='banner__cintainner'>
        <div className="top__banner">
          <main>
              <h3>{props.title}</h3>
              <span>{props.date}</span>
          </main>
            <span>{props.content}</span>
        </div>
    </div>
  )
}

export default Banner