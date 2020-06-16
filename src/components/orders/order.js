import React, { useState, useEffect } from 'react'
import Loading from '../../components/ui/loading'

const Order = (props) => {
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)

  const { firebase, id } = props

  useEffect(() => {
    firebase.firestore().collection('orders').doc(id).get()
      .then(res => {
        const data = res.data()
        if (data) setOrder(data)
        else setOrder(null)
        setLoading(false)
      })
      .catch(err => console.error(err))
  }, [firebase, id])

  console.log(order)

  return (
    loading
    ? <Loading />
    : order
      ? <div>
          <div>{order.id}</div>
          <div>{order.contactDetails.firstName}</div>
          <div>{order.contactDetails.secondName}</div>
          <div>{order.contactDetails.lastName}</div>
          <div>{order.contactDetails.email}</div>
        </div>
      : <div>Not Found</div>

  )
}

export default Order
