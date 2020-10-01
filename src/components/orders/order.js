import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

import Loading from '../../components/ui/loading'
import formatDate from '../../helpers/formatDate'

import '../../styles/orders/order.scss'

const Order = (props) => {
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)

  const { firebase, id, setShowLogo } = props

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

  useEffect(() => {
    setShowLogo(false)
    return () => setShowLogo(true)
  }, [setShowLogo])

  if (loading) {
    return (
      <div className='order__loading-ctr'>
        <Loading />
      </div>
    )
  }

  if (!order) {
    return (
      <div className='order__not-found-ctr'>
        <h1>Order Not Found</h1>
        <div className='order__not-found-link-ctr'>
          <Link to='/orders' className='all-orders-link'>Search Orders</Link>
        </div>
      </div>
    )
  }

  const memberDetails = () => {
    if (order.members.memberCount === '5+') return ''

    const { memberDetails } = order.members

    const members = []
    for (let i = 0; i < +order.members.memberCount; i++) {

      const memberName = memberDetails.corporateMember
        ? <>
            <div className='order__inner-header'>company name</div>
            <p>{memberDetails.companyName}</p>
          </>
        : <>
            <div className='order__inline-group'>
              <div className='order__inner-header'>first name</div>
              <p>{memberDetails[i].firstName}</p>
            </div>
            <div className='order__inline-group'>
              <div className='order__inner-header'>second name</div>
              <p>{memberDetails[i].secondName || '-'}</p>
            </div>
            <div className='order__inline-group'>
              <div className='order__inner-header'>last name</div>
              <p>{memberDetails[i].lastName}</p>
            </div>
            <br />
          </>

      members.push(
        <div key={i} className='order__details-group'>
          <h3>Member {i + 1}</h3>
          <div className='order__inner-header'>corporate member</div>
          <p>{memberDetails[i].corporateMember ? 'Yes' : 'No'}</p>
          {memberName}
          <div className='order__inline-group'>
            <div className='order__inner-header'>street</div>
            <p>{memberDetails[i].street}</p>
          </div>
          <div className='order__inline-group'>
            <div className='order__inner-header'>suite</div>
            <p>{memberDetails[i].suite || '-'}</p>
          </div>
          <br />
          <div className='order__inline-group'>
            <div className='order__inner-header'>city</div>
            <p>{memberDetails[i].city}</p>
          </div>
          <div className='order__inline-group'>
            <div className='order__inner-header'>state</div>
            <p>{memberDetails[i].state}</p>
          </div>
          <div className='order__inline-group'>
            <div className='order__inner-header'>country</div>
            <p>{memberDetails[i].country}</p>
          </div>
          <br />
          <div className='order__inner-header'>zipcode</div>
          <p>{memberDetails[i].zipcode}</p>
          <div className='order__inner-header'>manager</div>
          <p>{memberDetails[i].manager ? 'Yes' : 'No'}</p>
        </div>
      )
    }

    return members
  }

  const managerDetails = () => {

    const { managerDetails } = order.managers

    const managers = []
    for (let i = 0; i < +order.managers.managerCount; i++) {
      managers.push(
        <div key={i} className='order__details-group'>
          <h3>Additional Manager {i + 1}</h3>
          <div className='order__inline-group'>
            <div className='order__inner-header'>first name</div>
            <p>{managerDetails[i].firstName}</p>
          </div>
          <div className='order__inline-group'>
            <div className='order__inner-header'>second name</div>
            <p>{managerDetails[i].secondName || '-'}</p>
          </div>
          <div className='order__inline-group'>
            <div className='order__inner-header'>last name</div>
            <p>{managerDetails[i].lastName}</p>
          </div>
          <br />
          <div className='order__inline-group'>
            <div className='order__inner-header'>street</div>
            <p>{managerDetails[i].street}</p>
          </div>
          <div className='order__inline-group'>
            <div className='order__inner-header'>suite</div>
            <p>{managerDetails[i].suite || '-'}</p>
          </div>
          <br />
          <div className='order__inline-group'>
            <div className='order__inner-header'>city</div>
            <p>{managerDetails[i].city}</p>
          </div>
          <div className='order__inline-group'>
            <div className='order__inner-header'>state</div>
            <p>{managerDetails[i].state}</p>
          </div>
          <div className='order__inline-group'>
            <div className='order__inner-header'>country</div>
            <p>{managerDetails[i].country}</p>
          </div>
          <br />
          <div className='order__inner-header'>zipcode</div>
          <p>{managerDetails[i].zipcode}</p>
        </div>
      )
    }

    return (
      <div>
        {order.managers.managerCount === '0' || order.managers.managerCount === '5+'
          ? ''
          : managers}
      </div>
    )
  }

  return (
    <div className='order'>
    <div className='order__order-ctr'>
      <div className='order__date'>
        {order.paymentTime
          ? formatDate(new Date(order.paymentTime * 1000))
          : ''
        }
      </div>

      <div className='order__top-ctr'>
        <div className='order__top-inline-group'>
          <h1>ORDER ID</h1>
          <p>{order.id}</p>
        </div>
        <div className='order__top-inline-group'>
          <h1>PAYMENT ID</h1>
          <p>{order.paymentId}</p>
        </div>
      </div>

      <div className='order__details-group'>
        <h3>Plan</h3>
        <p>{order.plan}</p>
      </div>

      <div className='order__details-group'>
        <h3>Price</h3>
        <p>${order.price}</p>
      </div>

      <div className='order__details-group'>
        <h3>File State</h3>
        <p>{order.fileState}</p>
      </div>

      <div className='order__details-group'>
        <h3>Contact Details</h3>
        <div className='order__inline-group'>
          <div className='order__inner-header'>first name</div>
          <p>{order.contactDetails.firstName}</p>
        </div>
        <div className='order__inline-group'>
          <div className='order__inner-header'>second name</div>
          <p>{order.contactDetails.secondName || '-'}</p>
        </div>
        <div className='order__inline-group'>
          <div className='order__inner-header'>last name</div>
          <p>{order.contactDetails.lastName}</p>
        </div>
        <div className='order__inner-header'>email</div>
        <p>{order.contactDetails.email}</p>
        <div className='order__inner-header'>phone</div>
        <p>{order.contactDetails.phone}</p>
      </div>

      <div className='order__details-group'>
        <h3>Company Names</h3>
        <div className='order__inner-header'>first choice</div>
        <p>{order.companyNames.name1}</p>
        <div className='order__inner-header'>second choice</div>
        <p>{order.companyNames.name2}</p>
        <div className='order__inner-header'>third choice</div>
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
        <h3>Pro Address</h3>
        <p>{order.companyAddress.proAddress}</p>
      </div>

      {order.companyAddress.proAddress === 'No' &&
        <div className='order__details-group'>
          <h3>Address</h3>
          <div className='order__inline-group'>
            <div className='order__inner-header'>street</div>
            <p>{order.companyAddress.street}</p>
          </div>
          <div className='order__inline-group'>
            <div className='order__inner-header'>suite</div>
            <p>{order.companyAddress.suite}</p>
          </div>
          <br />
          <div className='order__inline-group'>
            <div className='order__inner-header'>city</div>
            <p>{order.companyAddress.city}</p>
          </div>
          <div className='order__inline-group'>
            <div className='order__inner-header'>state</div>
            <p>{order.companyAddress.state}</p>
          </div>
          <div className='order__inline-group'>
            <div className='order__inner-header'>country</div>
            <p>{order.companyAddress.country}</p>
          </div>
          <br />
          <div className='order__inner-header'>zipcode</div>
          <p>{order.companyAddress.zipcode}</p>
        </div>
      }

      <div className='order__details-group'>
        <h3>Members</h3>
        <p>{order.members.memberCount}</p>
      </div>

      {memberDetails()}

      <div className='order__details-group'>
        <h3>Additional Managers</h3>
        <p>{order.managers.managerCount}</p>
      </div>

      {managerDetails()}

      <div className='order__details-group'>
        <h3>Pro Registered Agent</h3>
        <p>{order.registeredAgent.proRegisteredAgent}</p>
      </div>

      {order.registeredAgent.proRegisteredAgent === 'No' &&
        <div className='order__details-group'>
          <h3>Registered Agent Details</h3>
          {order.registeredAgent.corporateRegisteredAgent
            ? <>
                <div className='order__inner-header'>company name</div>
                <p>{order.registeredAgent.companyName}</p>
              </>
            : <>
                <div className='order__inline-group'>
                  <div className='order__inner-header'>first name</div>
                  <p>{order.registeredAgent.firstName}</p>
                </div>
                <div className='order__inline-group'>
                  <div className='order__inner-header'>second name</div>
                  <p>{order.registeredAgent.secondName || '-'}</p>
                </div>
                <div className='order__inline-group'>
                  <div className='order__inner-header'>last name</div>
                  <p>{order.registeredAgent.lastName}</p>
                </div>
                <br />
              </>
          }
          <div className='order__inline-group'>
            <div className='order__inner-header'>street</div>
            <p>{order.registeredAgent.street}</p>
          </div>
          <div className='order__inline-group'>
            <div className='order__inner-header'>suite</div>
            <p>{order.registeredAgent.suite || '-'}</p>
          </div>
          <br />
          <div className='order__inline-group'>
            <div className='order__inner-header'>city</div>
            <p>{order.registeredAgent.city}</p>
          </div>
          <div className='order__inline-group'>
            <div className='order__inner-header'>state</div>
            <p>{order.registeredAgent.state}</p>
          </div>
          <div className='order__inline-group'>
            <div className='order__inner-header'>country</div>
            <p>{order.registeredAgent.country}</p>
          </div>
          <br />
          <div className='order__inner-header'>zipcode</div>
          <p>{order.registeredAgent.zipcode}</p>
        </div>
      }

      {(order.plan === 'Complete' || order.plan === 'Pro') &&
        <>
          <div className='order__details-group'>
            <h3>EIN</h3>
            <div className='order__inline-group'>
              <div className='order__inner-header'>first name</div>
              <p>{order.ein.firstName}</p>
            </div>
            <div className='order__inline-group'>
              <div className='order__inner-header'>second name</div>
              <p>{order.ein.secondName || '-'}</p>
            </div>
            <div className='order__inline-group'>
              <div className='order__inner-header'>last name</div>
              <p>{order.ein.lastName}</p>
            </div>
            <br />
            <div className='order__inner-header'>ssn</div>
            <p>{order.ein.ssn}</p>
            <div className='order__inner-header'>itin</div>
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
            <div className='order__inner-header'>present in US</div>
            <p>{order.banking.presentInUS}</p>
            <div className='order__inner-header'>bank</div>
            <p>{order.banking.bank}</p>
            {order.banking.bankOther &&
              <>
              <div className='order__inner-header'>bank other</div>
              <p>{order.banking.bankOther}</p>
              </>
            }
            {order.banking.presentInUs === 'No' &&
              <p>{order.banking.otherOptions}</p>
            }
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

     </div>
   </div>
  )
}

export default Order
