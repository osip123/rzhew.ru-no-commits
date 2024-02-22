import React from 'react'
import Dost from '../components/dost/Dost'
// import dataDost from '../../api/dataDost'

export const dataDost = [
  {
      _id: 34567298,
      titlt: 'Ржевский мемориал',
      body: 'Ржевский мемориал Советскому Солдату — мемориальный комплекс, посвящённый памяти советских солдат, павших в боях подо Ржевом в 1942—1943 годах в ходе Великой Отечественной войны',
  },
  {
      _id: 34647298,
      titlt: 'Дом Сталина',
      body: 'Музей «Ставка Сталина» по адресу Тверская область, Ржевский район, деревня Хорошево,',
  },
  {
      _id: 3457898498,
      titlt: '',
      body: '',
  }    
]

const Cultyre = () => {
  return (
    <>
      {dataDost.map((item) => (<Dost title={item.titlt} body={item.body} imgPath='1' />))}
    </>
  )
}

export default Cultyre
