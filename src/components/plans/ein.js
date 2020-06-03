import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/ein.scss'

const CompanyNames = (props) => {
  const values = props.values.ein

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
            onChange={props.handleChange}
            value={values.firstName}
          />
        </div>
        <div className='ein__details-input-ctr name'>
          <label htmlFor='ein__details-input-middle'>Second Name</label>
          <input
            type='text'
            id='ein__details-input-middle'
            name='ein.secondName'
            onChange={props.handleChange}
            value={values.secondName}
          />
        </div>
        <div className='ein__details-input-ctr name'>
          <label htmlFor='ein__details-input-last'>Last Name *</label>
          <input
            type='text'
            id='ein__details-input-last'
            name='ein.lastName'
            onChange={props.handleChange}
            value={values.lastName}
          />
        </div>
      </div>
      <div className='ein__details-input-outer-ctr'>
        <p className='ein__id-number'>If available, please enter one of the following identification numbers for the responsible party. You may leave all three blank.</p>
        <div className='ein__details-input-ctr id-num'>
          <label htmlFor='ein__details-input-ssn'>SSN</label>
          <input
            type='text'
            id='ein__details-input-ssn'
            name='ein.ssn'
            onChange={props.handleChange}
            value={values.ssn}
            disabled={values.itin || values.ein}
          />
        </div>
        <div className='ein__details-input-ctr id-num'>
          <label htmlFor='ein__details-input-itin'>ITIN</label>
          <input
            type='text'
            id='ein__details-input-itin'
            name='ein.itin'
            onChange={props.handleChange}
            value={values.itin}
            disabled={values.ssn || values.ein}
          />
        </div>
        <div className='ein__details-input-ctr id-num'>
          <label htmlFor='ein__details-input-ein'>EIN</label>
          <input
            type='text'
            id='ein__details-input-ein'
            name='ein.ein'
            onChange={props.handleChange}
            value={values.ein}
            disabled={values.ssn || values.itin}
          />
        </div>
      </div>
    </div>
  )
}

export default CompanyNames
