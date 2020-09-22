import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/contactDetails.scss'

const ContactDetails = (props) => {
  const { contactDetails } = props.formik.values
  const { handleChange } = props.formik

  return (
    <div className='contactDetails'>
      <StepHeader
        title='Representante'
        details='A quién contactar acerca de esta constitución'
      />
      <div className='contactDetails__input-ctr'>
        <label htmlFor='contactDetails__input-first'>Primer Nombre *</label>
        <input
          type='text'
          id='contactDetails__input-first'
          name='contactDetails.firstName'
          onChange={handleChange}
          value={contactDetails.firstName}
        />
      </div>
      <div className='contactDetails__input-ctr'>
        <label htmlFor='contactDetails__input-middle'>Segundo Nombre</label>
        <input
          type='text'
          id='contactDetails__input-middle'
          name='contactDetails.secondName'
          onChange={handleChange}
          value={contactDetails.secondName}
        />
      </div>
      <div className='contactDetails__input-ctr'>
        <label htmlFor='contactDetails__input-last'>Apellidos *</label>
        <input
          type='text'
          id='contactDetails__input-last'
          name='contactDetails.lastName'
          onChange={handleChange}
          value={contactDetails.lastName}
        />
      </div>
      <div className='contactDetails__input-ctr'>
        <label htmlFor='contactDetails__input-email'>Correo electrónico *</label>
        <input
          type='text'
          id='contactDetails__input-email'
          name='contactDetails.email'
          onChange={handleChange}
          value={contactDetails.email}
        />
      </div>
      <div className='contactDetails__input-ctr'>
        <label htmlFor='contactDetails__input-phone'>Teléfono *</label>
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
