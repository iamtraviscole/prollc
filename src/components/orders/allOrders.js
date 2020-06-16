import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import Loading from '../../components/ui/loading'

import Order from './order'

import '../../styles/orders/allOrders.scss'

const AllOrders = (props) => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  const { firebase } = props

  useEffect(() => {
    firebase.firestore().collection('orders').get()
      .then(res => {
        console.log(res)
        const orders = []
        res.docs.forEach(doc => {
          const data = doc.data()
          orders.push({id: doc.id, ...data})
        })
        setOrders(orders)
      })
      .catch(err => {
        console.error(err)
      })
  }, [firebase])

  console.log(orders)

  const displayOrders = orders.map((order, i) => {
    return (
      <div key={order.id}>
        <div>{order.id}</div>
        <div>{order.contactDetails.firstName}</div>
        <div>{order.contactDetails.secondName}</div>
        <div>{order.contactDetails.lastName}</div>
        <div>{order.contactDetails.email}</div>
      <Link to={`/orders/${order.id}`}>hi</Link>
      </div>
    )
  })

  return (
    <div>
      {displayOrders}
    </div>
  )
}

export default AllOrders
