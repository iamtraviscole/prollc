import React from 'react'

import NavIcon from '../images/svgs/nav-icon.svg'

import '../styles/mobileNav.scss'

const MobileNav = (props) => {
  return (
    <div className='mobileNav'>
      <button>
        <NavIcon />
      </button>
    </div>

  )
}

export default MobileNav
