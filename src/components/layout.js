import React from 'react'
import { Helmet } from "react-helmet"

import Header from './header'
import favicon16 from "../images/favicon-16.png";
import favicon32 from "../images/favicon-32.png";

import '../styles/layout.scss'

const Layout = (props) => {
  const subheader = props.pageTitle && (
    <div className='layout__subheader'>
      <h1>{props.pageTitle}</h1>
    </div>
  )

  const faviconLinks = [
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: favicon16 },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: favicon32 },
  ];

  return (
    <div className='layout'>
      <Helmet link={faviconLinks} />
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
