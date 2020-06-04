import React from 'react'

import StepHeader from './stepHeader'
import InputError from './inputError'

import '../../styles/plans/contactDetails.scss'

const ContactDetails = (props) => {
  const { contactDetails } = props.formik.values

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
          onBlur={props.handleBlur}
          value={contactDetails.firstName}
        />
        <InputError objName='contactDetails' valueName='firstName' formik={props.formik}/>
      </div>
      <div className='contactDetails__input-ctr'>
        <label htmlFor='contactDetails__input-middle'>Second Name</label>
        <input
          type='text'
          id='contactDetails__input-middle'
          name='contactDetails.secondName'
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={contactDetails.secondName}
        />
      </div>
      <div className='contactDetails__input-ctr'>
        <label htmlFor='contactDetails__input-last'>Last Name *</label>
        <input
          type='text'
          id='contactDetails__input-last'
          name='contactDetails.lastName'
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={contactDetails.lastName}
        />
        <InputError objName='contactDetails' valueName='lastName' formik={props.formik}/>
      </div>
      <div className='contactDetails__input-ctr'>
        <label htmlFor='contactDetails__input-email'>Email *</label>
        <input
          type='text'
          id='contactDetails__input-email'
          name='contactDetails.email'
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={contactDetails.email}
        />
        <InputError objName='contactDetails' valueName='email' formik={props.formik}/>
      </div>
      <div className='contactDetails__input-ctr'>
        <label htmlFor='contactDetails__input-phone'>Phone *</label>
        <input
          type='text'
          id='contactDetails__input-phone'
          name='contactDetails.phone'
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={contactDetails.phone}
        />
        <InputError objName='contactDetails' valueName='phone' formik={props.formik}/>
      </div>
    </div>
  )
}

export default ContactDetails
