import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/ein.scss'

const CompanyNames = (props) => {
  const { ein } = props.formik.values
  const { handleChange } = props.formik

  return (
    <div className='ein'>
      <StepHeader title='EIN' />
      <div className='ein__details-input-outer-ctr'>
        <h3>Responsible Party</h3>
        <p>The individual who exercises ultimate effective control over the company</p>
        <div className='ein__details-input-ctr name'>
          <label htmlFor='ein__details-input-first'>First Name *</label>
          <input
            type='text'
            id='ein__details-input-first'
            name='ein.firstName'
            onChange={handleChange}
            value={ein.firstName}
          />
        </div>
        <div className='ein__details-input-ctr name'>
          <label htmlFor='ein__details-input-middle'>Second Name</label>
          <input
            type='text'
            id='ein__details-input-middle'
            name='ein.secondName'
            onChange={handleChange}
            value={ein.secondName}
          />
        </div>
        <div className='ein__details-input-ctr name'>
          <label htmlFor='ein__details-input-last'>Last Name *</label>
          <input
            type='text'
            id='ein__details-input-last'
            name='ein.lastName'
            onChange={handleChange}
            value={ein.lastName}
          />
        </div>
      </div>
      <div className='ein__details-input-outer-ctr'>
        <p className='ein__id-number'>If available, please enter one of the following identification numbers for the responsible party. You may leave both blank.</p>
        <div className='ein__details-input-ctr id-num'>
          <label htmlFor='ein__details-input-ssn'>SSN</label>
          <input
            type='text'
            id='ein__details-input-ssn'
            name='ein.ssn'
            onChange={handleChange}
            value={ein.ssn}
            disabled={ein.itin || ein.ein}
          />
        </div>
        <div className='ein__details-input-ctr id-num'>
          <label htmlFor='ein__details-input-itin'>ITIN</label>
          <input
            type='text'
            id='ein__details-input-itin'
            name='ein.itin'
            onChange={handleChange}
            value={ein.itin}
            disabled={ein.ssn || ein.ein}
          />
        </div>
      </div>
    </div>
  )
}

export default CompanyNames
