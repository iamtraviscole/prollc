import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/companyAddress.scss'

const CompanyAddress = (props) => {
  const values = props.values.companyAddress

  return (
    <div className='companyAddress'>
      <StepHeader title='Company Address' />
      <div className='companyAddress__input-outer-ctr'>
        <div className='companyAddress__input-ctr street'>
          <label htmlFor='companyAddress__input-street'>Street *</label>
          <input
            type='text'
            id='companyAddress__input-street'
            name='companyAddress.street'
            onChange={props.handleChange}
            value={values.street}
          />
        </div>
        <div className='companyAddress__input-ctr suite'>
          <label htmlFor='companyAddress__input-suite'>Suite / Office / Apt</label>
          <input
            type='text'
            id='companyAddress__input-suite'
            name='companyAddress.suite'
            onChange={props.handleChange}
            value={values.suite}
          />
        </div>
      </div>
      <div className='companyAddress__input-outer-ctr'>
        <div className='companyAddress__input-ctr'>
          <label htmlFor='companyAddress__input-city'>City *</label>
          <input
            type='text'
            id='companyAddress__input-city'
            name='companyAddress.city'
            onChange={props.handleChange}
            value={values.city}
          />
        </div>
        <div className='companyAddress__input-ctr'>
          <label htmlFor='companyAddress__input-state'>State *</label>
          <input
            type='text'
            id='companyAddress__input-state'
            name='companyAddress.state'
            onChange={props.handleChange}
            value={values.state}
          />
        </div>
      </div>
      <div className='companyAddress__input-outer-ctr'>
        <div className='companyAddress__input-ctr zipcode'>
          <label htmlFor='companyAddress__input-zipcode'>Zipcode *</label>
          <input
            type='text'
            id='companyAddress__input-zipcode'
            name='companyAddress.zipcode'
            onChange={props.handleChange}
            value={values.zipcode}
          />
        </div>
        <div className='companyAddress__input-ctr country'>
          <label htmlFor='companyAddress__input-country'>Country *</label>
          <input
            type='text'
            id='companyAddress__input-country'
            name='companyAddress.country'
            onChange={props.handleChange}
            value={values.country}
          />
        </div>
      </div>
    </div>
  )
}

export default CompanyAddress
