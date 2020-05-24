import React from 'react'

import Header from './header'
import '../styles/layout.scss'

const Layout = (props) => {
  const subheader = props.pageTitle && (
    <div className='layout__subheader'>
      <h1>{props.pageTitle}</h1>
    </div>
  )
  return (
    <div className='layout'>
      <Header />
      {subheader}
      <main className='layout__main'>{props.children}</main>
      <footer className='layout__footer'>
        © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout
