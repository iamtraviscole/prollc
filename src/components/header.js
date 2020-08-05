import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

import Logo from '../images/svgs/prollc-logo.svg'
import Nav from './nav'
import MobileNav from './mobileNav'

import '../styles/header.scss'

const Header = (props) => {
  const [windowWidth, setWindowWidth] = useState(null)

  const resizeListener = () => setWindowWidth(window.innerWidth)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', resizeListener)
    return () => window.removeEventListener('resize', resizeListener)
  }, [])

  let displayNav = <Nav />
  if (windowWidth < 705) displayNav = <MobileNav />

  return (
    <header className='header'>
      <div className='header__logo-nav-ctr'>
        <div className='header__logo-ctr'>
          <Link to='/'><Logo /></Link>
        </div>
        <div className='header__nav-ctr'>
          {displayNav}
        </div>
      </div>
    </header>
  )
}

export default Header
