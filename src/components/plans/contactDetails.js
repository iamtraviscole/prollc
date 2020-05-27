import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/contactDetails.scss'

const ContactDetails = (props) => {
  return (
    <div className='contactDetails'>
      <StepHeader title='Contact Details' />
      <div className='contactDetails__input-ctr'>
        <label htmlFor='contactDetails__input-first'>First Name *</label>
        <input
          type='text'
          id='contactDetails__input-first'
          name='contactDetails.firstName'
          onChange={props.handleChange}
        />
      </div>
      <div className='contactDetails__input-ctr'>
        <label htmlFor='contactDetails__input-middle'>Second Name</label>
        <input
          type='text'
          id='contactDetails__input-middle'
          name='contactDetails.middleName'
          onChange={props.handleChange}
        />
      </div>
      <div className='contactDetails__input-ctr'>
        <label htmlFor='contactDetails__input-last'>Last Name *</label>
        <input
          type='text'
          id='contactDetails__input-last'
          name='contactDetails.lastName'
          onChange={props.handleChange}
        />
      </div>
      <div className='contactDetails__input-ctr'>
        <label htmlFor='contactDetails__input-email'>Email *</label>
        <input
          type='text'
          id='contactDetails__input-email'
          name='contactDetails.email'
          onChange={props.handleChange}
        />
      </div>
      <div className='contactDetails__input-ctr'>
        <label htmlFor='contactDetails__input-phone'>Phone *</label>
        <input
          type='text'
          id='contactDetails__input-phone'
          name='contactDetails.phone'
          onChange={props.handleChange}
        />
      </div>
    </div>
  )
}

export default ContactDetails
