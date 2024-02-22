import './News.scss'
import { Inews } from './newsModel'


const NewsModule = (props:Inews) => {
  return (
    <>
        <div className='news_containner_module'>
        <div className="top">
            <h5>{props.titlt}</h5>
            <span>{props.date}</span>
        </div>
        <div className="body_data">
            <pre>
                {props.body}
            </pre>
        </div>    
        </div>
    </>
  )
}

export default NewsModule
