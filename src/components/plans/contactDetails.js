import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/contactDetails.scss'

const ContactDetails = (props) => {
  const { contactDetails } = props.formik.values
  const { handleChange } = props.formik

  return (
    <div className='contactDetails'>
      <StepHeader title='Contact Details' />
      <div className='contactDetails__input-ctr'>
        <label htmlFor='contactDetails__input-first'>First Name *</label>
        <input
          type='text'
          id='contactDetails__input-first'
          name='contactDetails.firstName'
          onChange={handleChange}
          value={contactDetails.firstName}
        />
      </div>
      <div className='contactDetails__input-ctr'>
        <label htmlFor='contactDetails__input-middle'>Second Name</label>
        <input
          type='text'
          id='contactDetails__input-middle'
          name='contactDetails.secondName'
          onChange={handleChange}
          value={contactDetails.secondName}
        />
      </div>
      <div className='contactDetails__input-ctr'>
        <label htmlFor='contactDetails__input-last'>Last Name *</label>
        <input
          type='text'
          id='contactDetails__input-last'
          name='contactDetails.lastName'
          onChange={handleChange}
          value={contactDetails.lastName}
        />
      </div>
      <div className='contactDetails__input-ctr'>
        <label htmlFor='contactDetails__input-email'>Email *</label>
        <input
          type='text'
          id='contactDetails__input-email'
          name='contactDetails.email'
          onChange={handleChange}
          value={contactDetails.email}
        />
      </div>
      <div className='contactDetails__input-ctr'>
        <label htmlFor='contactDetails__input-phone'>Phone *</label>
        <input
          type='text'
          id='contactDetails__input-phone'
          name='contactDetails.phone'
          onChange={handleChange}
          value={contactDetails.phone}
        />
      </div>
    </div>
  )
}

export default ContactDetails
