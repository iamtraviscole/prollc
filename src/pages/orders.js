import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import useFirebase from '../hooks/useFirebase'
import { Router } from '@reach/router'

import OrdersLogin from '../components/orders/ordersLogin'
import AllOrders from '../components/orders/allOrders'
import Order from '../components/orders/order'
import Logo from '../images/svgs/prollc-logo.svg'
import Loading from '../components/ui/loading'

import '../styles/orders.scss'

const Orders = (props) => {
  const [user, setUser] = useState(null)
  const [login, setLogin] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(true)

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

  const handleChangePW = e => {
    firebase.auth().sendPasswordResetEmail(user)
    .then(() => console.log('sent pw change email'))
    .catch(err => console.error(err))
  }

  return (
    <div className='orders'>
      <div className='orders__nav-ctr'>
        <nav className='orders__nav'>
          <div className='orders__logo'>
            <Link to='/'><Logo /></Link>
          </div>
          {user &&
          <div className='orders__user-ctr'>
            <div className='orders__user'>{user}</div>
            <div className='orders__user-btns-ctr'>
              <button
                className='orders__change-pw-btn'
                onClick={handleChangePW}
              > Change Password
              </button>
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
        ? <Loading />
        : user
          ? <Router>
            <AllOrders path='/orders' firebase={firebase} />
            <Order path='/orders/:id' firebase={firebase} />
          </Router>
          : <OrdersLogin firebase={firebase} login={login} setLogin={setLogin} />
        }
      </div>
    </div>
  )
}

export default Orders
