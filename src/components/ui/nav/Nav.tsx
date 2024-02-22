import { Link } from "react-router-dom"

import './nav.scss'

const Nav = () => {
  return (
    <>
        <nav>
            <Link to='/'>Главная</Link>
            <Link to='/us'>Услуги</Link>
            <Link to='/new'>Новости</Link>
            <Link to='/map'>Карта города</Link>
            <Link to='/pop'>Популярные услуги</Link>
            <Link to='/cul'>Культура</Link>
        </nav>
    </>
  )
}

export default Nav
