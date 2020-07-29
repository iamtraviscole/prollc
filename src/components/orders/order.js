import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

import Loading from '../../components/ui/loading'
import formatDate from '../../helpers/formatDate'

import '../../styles/orders/order.scss'

const Order = (props) => {
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)

  const { firebase, id } = props

  useEffect(() => {
    firebase.firestore().collection('orders').doc(id).get()
      .then(res => {
        const data = res.data()
        if (data) setOrder({id: res.id, ...data})
        else setOrder(null)
        setLoading(false)
      })
      .catch(err => console.error(err))
  }, [firebase, id])

  if (loading) {
    return (
      <div className='order'>
        <Loading />
      </div>
    )
  }

  if (!order) {
    return (
      <div className='order'>
        Order Not Found
      </div>
    )
  }

  const memberDetails = () => {
    if (order.members.memberCount === '5+') return ''

    const { memberDetails } = order.members

    const members = []
    for (let i = 0; i < +order.members.memberCount; i++) {

      const memberName = memberDetails.corporateMember
        ? <p>{memberDetails.companyName}</p>
        : <>
            <p>{memberDetails[i].firstName}</p>
            <p>{memberDetails[i].secondName}</p>
            <p>{memberDetails[i].lastName}</p>
          </>

      members.push(
        <div key={i} className='order__details-inner-group'>
          <p>{memberDetails[i].corporateMember}</p>
          {memberName}
          <p>{memberDetails[i].street}</p>
          <p>{memberDetails[i].suite}</p>
          <p>{memberDetails[i].city}</p>
          <p>{memberDetails[i].state}</p>
          <p>{memberDetails[i].zipcode}</p>
          <p>{memberDetails[i].country}</p>
        </div>
      )
    }

    return members
  }

  const managerDetails = () => {
    const memberManagers = order.members.memberDetails.map((member, i) => {
      if (member.manager) {
        return (
          <div key={i} className='order__details-inner-group'>
            <p>{member.firstName}</p>
            <p>{member.secondName}</p>
            <p>{member.lastName}</p>
            <p>{member.street}</p>
            <p>{member.suite}</p>
            <p>{member.city}</p>
            <p>{member.state}</p>
            <p>{member.zipcode}</p>
            <p>{member.country}</p>
          </div>
        )
      } else {
        return 'wtf'
      }
    })

    const { managerDetails } = order.managers

    const managers = []
    for (let i = 0; i < +order.managers.managerCount; i++) {
      managers.push(
        <div key={i} className='order__details-inner-group'>
          <p>{managerDetails[i].firstName}</p>
          <p>{managerDetails[i].secondName}</p>
          <p>{managerDetails[i].lastName}</p>
          <p>{managerDetails[i].street}</p>
          <p>{managerDetails[i].suite}</p>
          <p>{managerDetails[i].city}</p>
          <p>{managerDetails[i].state}</p>
          <p>{managerDetails[i].zipcode}</p>
          <p>{managerDetails[i].country}</p>
        </div>
      )
    }

    return (
      <div>
        {memberManagers}
        {order.managers.managerCount === '0' || order.managers.managerCount === '5+'
          ? ''
          : managers}
      </div>
    )
  }

  return (
   <div className='order'>
     <div className='order__link-ctr'>
       <Link to='/orders' className='all-orders-link'>Search Orders</Link>
     </div>
     <div className='order__order-ctr'>
       <div className='order__details-group order-id'>
         <h1>ORDER ID: <span>{order.id}</span></h1>
         <p>
           {
             order.paymentTime
             ? formatDate(new Date(order.paymentTime * 1000))
             : ''
           }
         </p>
       </div>

       <div className='order__details-group'>
         <h3>Plan</h3>
         <p>{order.plan}</p>
       </div>

       <div className='order__details-group'>
         <h3>File State</h3>
         <p>{order.fileState}</p>
       </div>

       <div className='order__details-group'>
         <h3>Contact Details</h3>
         <p>First Name: {order.contactDetails.firstName}</p>
         <p>Second Name: {order.contactDetails.secondName}</p>
         <p>{order.contactDetails.lastName}</p>
         <p>{order.contactDetails.email}</p>
         <p>{order.contactDetails.phone}</p>
       </div>

       <div className='order__details-group'>
         <h3>Company Names</h3>
         <p>{order.companyNames.name1}</p>
         <p>{order.companyNames.name2}</p>
         <p>{order.companyNames.name3}</p>
       </div>

       <div className='order__details-group'>
         <h3>Denomination</h3>
         <p>{order.denomination}</p>
       </div>

       <div className='order__details-group'>
         <h3>Industry</h3>
         {order.industry.industry === 'Other'
           ? <p>{order.industry.other}</p>
           : <p>{order.industry.industry}</p>
         }
       </div>

       <div className='order__details-group'>
         <h3>Employee Count</h3>
         <p>{order.employeeCount}</p>
       </div>

       <div className='order__details-group'>
         <h3>Address</h3>
         <p>{order.companyAddress.proAddress}</p>
         <br />
         {order.companyAddress.proAddress === 'No' &&
           <>
             <p>{order.companyAddress.street}</p>
             <p>{order.companyAddress.suite}</p>
             <p>{order.companyAddress.city}</p>
             <p>{order.companyAddress.state}</p>
             <p>{order.companyAddress.zipcode}</p>
             <p>{order.companyAddress.country}</p>
           </>
         }
       </div>

       <div className='order__details-group'>
         <h3>Members</h3>
         <p>{order.members.memberCount}</p>
         <br />
         <div>{memberDetails()}</div>
       </div>

       <div className='order__details-group'>
         <h3>Managers</h3>
         <p>{order.managers.managerCount}</p>
         <br />
         <div>{managerDetails()}</div>
       </div>

       <div className='order__details-group'>
         <h3>Registered Agent</h3>
         <p>{order.registeredAgent.proRegisteredAgent}</p>
         <br />
         {order.registeredAgent.proRegisteredAgent === 'No' &&
           <div className='order__details-inner-group'>
             {order.registeredAgent.corporateRegisteredAgent
               ? <p>{order.registeredAgent.companyName}</p>
               : <>
                   <p>{order.registeredAgent.firstName}</p>
                   <p>{order.registeredAgent.secondName}</p>
                   <p>{order.registeredAgent.lastName}</p>
                 </>}
             <p>{order.registeredAgent.street}</p>
             <p>{order.registeredAgent.suite}</p>
             <p>{order.registeredAgent.city}</p>
             <p>{order.registeredAgent.state}</p>
             <p>{order.registeredAgent.zipcode}</p>
             <p>{order.registeredAgent.country}</p>
           </div>
         }
       </div>

       {(order.plan === 'Complete' || order.plan === 'Pro') &&
         <>
           <div className='order__details-group'>
             <h3>EIN</h3>
             <p>{order.ein.firstName}</p>
             <p>{order.ein.secondName}</p>
             <p>{order.ein.lastName}</p>
             <p>{order.ein.ssn}</p>
             <p>{order.ein.itin}</p>
           </div>

           <div className='order__details-group'>
             <h3>S-Election</h3>
             <p>{order.sElection}</p>
           </div>
         </>
       }

       {order.plan === 'Pro' &&
         <>
           <div className='order__details-group'>
             <h3>Banking</h3>
             <p>{order.banking.presentInUS}</p>
             <p>{order.banking.bank}</p>
             <p>{order.banking.bankOther}</p>
             <p>{order.banking.otherOptions}</p>
           </div>

           <div className='order__details-group'>
             <h3>Speak To Attorney</h3>
             <p>{order.speakToAttorney}</p>
           </div>
         </>
       }

       <div className='order__details-group'>
         <h3>Expedited</h3>
         <p>{order.expedited}</p>
       </div>

       <div className='order__details-group'>
         <h3>Payment Details</h3>
         <p>{order.paymentId}</p>
         <p>${order.price}</p>
       </div>
     </div>
   </div>
  )
}

export default Order
