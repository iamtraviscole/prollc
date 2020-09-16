import React from 'react'
import { Link } from 'gatsby'

import '../styles/nav.scss'

const Nav = (props) => {

  return (
    <nav className='nav'>
      <ul>
        <li><Link to='/plans'>Planes</Link></li>
        <li><Link to='/services'>Servicios</Link></li>
        <li><Link to='/about'>Quiénes Somos</Link></li>
        <li><Link to='/faq'>Preguntas Frecuentes</Link></li>
        <li><Link to='/resources'>Recursos</Link></li>
        <li><Link to='/contact'>Contacto</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
