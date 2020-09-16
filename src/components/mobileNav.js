import React, { useState } from 'react'
import { Link } from 'gatsby'

import NavIcon from '../images/svgs/nav-icon.svg'
import XIcon from '../images/svgs/x-icon.svg'

import '../styles/mobileNav.scss'

const MobileNav = (props) => {
  const [showModal, setShowModal] = useState(false)

  const handleModal = (e) => {
    setShowModal(!showModal)
  }

  // if modal showing stop body from scrolling
  showModal
    ? document.body.style.overflow = 'hidden'
    : document.body.style.overflow = 'visible'

  return (
    <div className='mobileNav'>
      {!showModal &&
        <div className='mobileNav__nav-btn'>
          <button onClick={handleModal}><NavIcon /></button>
        </div>
      }
      {showModal &&
        <button className='mobileNav__modal' onClick={handleModal}>
          <XIcon />
          <div className='mobileNav__modal-content'>
            <ul>
              <li><Link to='/'>Inicio</Link></li>
              <li><Link to='/plans'>Planes</Link></li>
              <li><Link to='/services'>Servicios</Link></li>
              <li><Link to='/about'>Quiénes Somos</Link></li>
              <li><Link to='/faq'>Preguntas Frecuentes</Link></li>
              <li><Link to='/resources'>Recursos</Link></li>
              <li><Link to='/contact'>Contacto</Link></li>
              <li><Link to='/blog'>Blog</Link></li>
            </ul>
          </div>
        </button>
      }
    </div>
  )
}

export default MobileNav
