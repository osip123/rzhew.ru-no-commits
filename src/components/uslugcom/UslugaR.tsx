import React from 'react';
import { Uslugas } from './model';

import './usluga.scss'

const UslugaR = (props:Uslugas) => {
  return (
    <>
    <div className="item">
        <a href="">{props.title}</a>
    </div>
    </>
  )
}

export default UslugaR 