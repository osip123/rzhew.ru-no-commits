import React from 'react';
import './header.scss';
import Logo from '../ui/logo/Logo';
import Profile from '../ui/profile/Profile';
import Nav from '../ui/nav/Nav';

const Header = () => {
  return (
    <>
    <header>
        <div className="top__line">
            <Logo />
            <Profile />
        </div>
        <div className="foot__line">
            <Nav />
        </div>
    </header>
    </>
  )
}

export default Header
