import React from 'react'
import { Helmet } from 'react-helmet'

import Header from './header'
import favicon16 from '../images/favicon-16.png'
import favicon32 from '../images/favicon-32.png'
import fbIcon from '../images/fb-icon.png'
import igIcon from '../images/ig-icon.png'
import whatsAppIcon from '../images/whatsapp-icon.png'

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
  ]

  return (
    <div className='layout'>
      <Helmet link={faviconLinks} />
      <Header />
      {subheader}
      <main className='layout__main'>{props.children}</main>
      <footer className='layout__footer'>
        <div className='layout__social'>
          <a href='http://www.facebook.com/ProLLC' target='_blank' rel='noreferrer noopener'>
            <img src={fbIcon} width='30' alt='Facebook Icon' />
          </a>
          <a href='http://www.instagram.com/pro.llc' target='_blank' rel='noreferrer noopener'>
            <img src={igIcon} width='30' alt='Instagram Icon' />
          </a>
        </div>
        <div className='layout__whatsApp-outer-ctr'>
          <div className='layout__whatsApp-inner-ctr'>
            <img src={whatsAppIcon} height='25' alt='WhatsApp Icon'></img>
            <br />
            <a href='https://wa.me/13059060973' target='_blank' rel='noreferrer noopener'>
              1.305.906.0973
            </a>
          </div>
        </div>
        <div className='layout__copyright'>
          ProLLC © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}

export default Layout
