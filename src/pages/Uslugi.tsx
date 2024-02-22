import React from 'react';
import UslugaR from '../components/uslugcom/UslugaR';

import '../scss/Usl.scss';

const UslugList = [
  {title: 'Коммунальные услуги'},
  {title: 'Запись в больницу'},
  {title: 'Образование'},
  {title: 'Военкомат онлайн'},
  {title: 'Прием жалоб'},
  {title: 'МВД'},
  {title: 'ГИБДД'},
]

const Uslugi = () => {
  return (
    <>
    <pre className="margin-top"></pre>
    <div className="items-list">
      {UslugList.map((item) => (<UslugaR title={item.title} />))}
    </div>
    </>
  )
}

export default Uslugi
