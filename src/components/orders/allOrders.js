import React, { useState } from 'react'
import { Link } from 'gatsby'
import Loading from '../../components/ui/loading'

import formatDate from '../../helpers/formatDate'

import '../../styles/orders/allOrders.scss'

const AllOrders = (props) => {
  const [loading, setLoading] = useState(false)
  const [searchFilter, setSearchFilter] = useState('Order ID')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searched, setSearched] = useState(false)

  const { firebase } = props
  const db = firebase.firestore()

  const handleSearchFilterChange = e => setSearchFilter(e.target.value)
  const handleSearchTermChange = e => setSearchQuery(e.target.value)

  const handleSearchSubmit = async (e) => {
    e.preventDefault()

    setSearched(true)

    const ordersRef = db.collection('orders')

    const searchHelper = async (filterField) => {
      setLoading(true)
      const res = await ordersRef.where(filterField, '==', searchQuery).get()
      setSearchResults(res.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
      }))
      setLoading(false)
    }

    if (searchFilter === 'Order ID') {
      setLoading(true)
      const doc = searchQuery && await ordersRef.doc(searchQuery).get()
      if (doc.exists) setSearchResults([{id: doc.id, ...doc.data()}])
      setLoading(false)
    }

    if (searchFilter === 'Payment ID') {
      searchHelper('paymentId')
    }

    if (searchFilter === 'Contact Email') {
      searchHelper('contactDetails.email')
    }

  }

  const displayResults = !searchResults.length && searched
    ? <div className='allOrders__results-not-found-ctr'>No orders found</div>
    : !searched
      ? ''
      : searchResults.map((order, i) => {
        return (
          <Link key={order.id} to={`/orders/${order.id}`}>
            <div className='allOrders__order-ctr' >
              <h3>Order ID: <span>{order.id}</span></h3>
              {/* <p>{order.id}</p> */}
              <p className='order-date'>
                {
                  order.paymentTime
                  ? formatDate(new Date(order.paymentTime * 1000))
                  : ''
                }
              </p>
            </div>
          </Link>
        )})

  return (
    <div className='allOrders'>
      <h1>Search Orders</h1>
      <div className='allOrders__search-ctr'>
        <form onSubmit={handleSearchSubmit}>
          <div className='allOrders__search-filter-ctr'>
            <label htmlFor='filter-select'>Search by: </label>
            <select id='filter-select'
              onChange={handleSearchFilterChange}
              onBlur={handleSearchFilterChange}
            >
              <option value='Order ID'>Order ID</option>
              <option value='Payment ID'>Payment ID</option>
              <option value='Contact Email'>Contact Email</option>
            </select>
          </div>
          <div className='allOrders__search-input-ctr'>
            <input type='text' placeholder={searchFilter} onChange={handleSearchTermChange}></input>
            <br />
            <button type='submit'>Search</button>
          </div>
        </form>
      </div>
      <div className='allOrders__results-ctr'>
        {loading
          ? <div className='allOrders__loading-ctr'><Loading /></div>
          : displayResults}
      </div>
    </div>
  )
}

export default AllOrders
