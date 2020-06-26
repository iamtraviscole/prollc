import React from 'react'
import { Link } from 'gatsby'

import '../styles/nav.scss'

const Nav = (props) => {

  return (
    <nav className='nav'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/plans'>Plans</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/faq'>FAQ</Link></li>
        <li><Link to='/resources'>Resources</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
