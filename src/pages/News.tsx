import React from 'react'
import NewsModule from '../components/NewsBuner/NewsModule'

import './NewsP.scss'

export const newsData = [
  {
      _id: 34567298,
      date: '01.01.2024',
      titlt: '1',
      body: 'work',
      tags: '',
  },
  {
      _id: 34647298,
      date: '01.01.2024',
      titlt: '2',
      body: 'work',
      tags: '',
  },
  {
      _id: 3457898498,
      date: '01.01.2024',
      titlt: '3',
      body: 'work',
      tags: '',
  }    
]

const News = () => {
  return (
    <>
    <div className="containner_54798">
    {newsData.map((item) => (<NewsModule titlt={item.titlt} date={item.date} body={item.body} />))}
    </div>
    </>
  )
}

export default News
