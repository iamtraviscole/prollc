import React from 'react'
import { Link } from 'gatsby'

import '../styles/nav.scss'

const Nav = (props) => {

  return (
    <nav className='nav'>
      <ul>
        <li><Link to='/planes'>Planes</Link></li>
        <li><Link to='/servicios'>Servicios</Link></li>
        <li><Link to='/quienes-somos'>Quiénes Somos</Link></li>
        <li><Link to='/preguntas-frecuentes'>Preguntas Frecuentes</Link></li>
        <li><Link to='/recursos'>Recursos</Link></li>
        <li><Link to='/contacto'>Contacto</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
