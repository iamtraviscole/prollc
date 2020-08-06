import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import useFirebase from '../hooks/useFirebase'
import { Router } from '@reach/router'
import { Helmet } from "react-helmet"

import OrdersLogin from '../components/orders/ordersLogin'
import AllOrders from '../components/orders/allOrders'
import Order from '../components/orders/order'
import Logo from '../images/svgs/prollc-logo.svg'
import Loading from '../components/ui/loading'
import favicon16 from "../images/favicon-16.png";
import favicon32 from "../images/favicon-32.png";

import '../styles/orders.scss'

const Orders = (props) => {
  const [user, setUser] = useState(null)
  const [login, setLogin] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(true)
  const [resetPW, setResetPW] = useState(false)
  const [showLogo, setShowLogo] = useState(true)

  const firebase = useFirebase()

  useEffect(() => {
     if (!firebase) return
     firebase.auth().onAuthStateChanged(user => {
       user ? setUser(user.email) : setUser(null)
       setLoading(false)
     })
  }, [firebase])

  const handleLogout = e => {
    firebase.auth().signOut().catch(err => console.error(err))
  }

  const handleResetPW = e => {
    if (!resetPW) {
      firebase.auth().sendPasswordResetEmail(user).then(() =>
        setResetPW(true)
      )
    }
  }

  const faviconLinks = [
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: favicon16 },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: favicon32 },
  ]

  return (
    <div className='orders'>
      <Helmet link={faviconLinks}>
        <meta name='robots' content='noindex' />
      </Helmet>
      <div className='orders__nav-ctr'>
        <nav className='orders__nav'>
          <div className='orders__left-nav-ctr'>
            {showLogo
              ? <Link to='/' className='logo-link'><Logo /></Link>
              : <Link to='/orders' className='search-orders-link'>
                  Search Orders
                </Link>
            }
          </div>
          {user &&
          <div className='orders__user-ctr'>
            <div className='orders__user'>{user}</div>
            <div className='orders__user-btns-ctr'>
              {!resetPW
                ? <button
                  className='orders__change-pw-btn'
                  onClick={handleResetPW}
                  >
                    Reset Password
                  </button>
                : <div className='orders__reset-sent'>reset email sent</div>
              }
              <button
                className='orders__logout-btn'
                onClick={handleLogout}
              > Log Out
              </button>
            </div>
          </div>
          }
        </nav>
      </div>
      <div className='orders__main'>
        {loading
        ? <div className='orders__loading-ctr'><Loading /></div>
        : user
          ? <Router>
              <AllOrders path='/orders' firebase={firebase} />
              <Order
                path='/orders/:id'
                firebase={firebase}
                setShowLogo={setShowLogo}
              />
            </Router>
          : <OrdersLogin firebase={firebase} login={login} setLogin={setLogin} />
        }
      </div>
    </div>
  )
}

export default Orders
