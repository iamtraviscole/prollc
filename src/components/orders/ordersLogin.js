import React from 'react'

import '../../styles/orders/ordersLogin.scss'

const OrdersLogin = (props) => {
  const { firebase, login, setLogin } = props

  const handleLoginSubmit = e => {
    e.preventDefault()

    firebase.auth().signInWithEmailAndPassword(login.email, login.password)
    .catch(err => console.error(err))
  }

  const handleLoginChange = e => {
    setLogin({...login, [e.target.name]: e.target.value})
  }

  return (
    <form className='ordersLogin' onSubmit={handleLoginSubmit}>
      <h2>Login</h2>
        <input
          type='text'
          id='ordersLogin__email'
          name='email'
          placeholder='email'
          value={login.email}
          onChange={handleLoginChange}
        />
        <input
          type='password'
          id='ordersLogin__pw'
          name='password'
          placeholder='password'
          value={login.password}
          onChange={handleLoginChange}
        />
      <input className='ordersLogin__submit' type='submit' value='Log In'/>
    </form>
  )
}

export default OrdersLogin
