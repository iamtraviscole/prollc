import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/proAddress.scss'

const ProAddress = (props) => {
  const proAddress = props.values.proAddress
  const companyAddress = props.values.companyAddress

  return (
    <div className='proAddress'>
      <StepHeader title='Principal Place of Business' />
      <fieldset>
        <div className='proAddress__input-ctr'>
          <input
            type='radio'
            name='proAddress'
            id='proAddress__no'
            value='No'
            checked={proAddress === 'No'}
            onChange={props.handleChange}
           />
          <label htmlFor='proAddress__no'>
            I already have an address for my company
          </label>
        </div>
        <div className='proAddress__input-ctr'>
          <input
            type='radio'
            name='proAddress'
            id='proAddress__yes'
            value='Yes'
            checked={proAddress === 'Yes'}
            onChange={props.handleChange}
          />
          <label htmlFor='proAddress__yes'>
            I want ProLLC to provide me with an address <span>( + $59 )</span>
          </label>
        </div>
      </fieldset>
      {proAddress === 'No' &&
        <div className='proAddress__address-ctr'>
          <h3>Your Company Address</h3>
          <div className='proAddress__address-input-outer-ctr'>
            <div className='proAddress__address-input-ctr street'>
              <label htmlFor='proAddress__address-input-street'>Street *</label>
              <input
                type='text'
                id='proAddress__address-input-street'
                name='companyAddress.street'
                onChange={props.handleChange}
                value={companyAddress.street}
              />
            </div>
            <div className='proAddress__address-input-ctr suite'>
              <label htmlFor='proAddress__address-input-suite'>Suite / Office / Apt</label>
              <input
                type='text'
                id='proAddress__address-input-suite'
                name='companyAddress.suite'
                onChange={props.handleChange}
                value={companyAddress.suite}
              />
            </div>
          </div>
          <div className='proAddress__address-input-outer-ctr'>
            <div className='proAddress__address-input-ctr'>
              <label htmlFor='proAddress__address-input-city'>City *</label>
              <input
                type='text'
                id='proAddress__address-input-city'
                name='companyAddress.city'
                onChange={props.handleChange}
                value={companyAddress.city}
              />
            </div>
            <div className='proAddress__address-input-ctr'>
              <label htmlFor='proAddress__address-input-state'>State *</label>
              <input
                type='text'
                id='proAddress__address-input-state'
                name='companyAddress.state'
                onChange={props.handleChange}
                value={companyAddress.state}
              />
            </div>
          </div>
          <div className='proAddress__address-input-outer-ctr'>
            <div className='proAddress__address-input-ctr zipcode'>
              <label htmlFor='proAddress__address-input-zipcode'>Zipcode *</label>
              <input
                type='text'
                id='proAddress__address-input-zipcode'
                name='companyAddress.zipcode'
                onChange={props.handleChange}
                value={companyAddress.zipcode}
              />
            </div>
            <div className='proAddress__address-input-ctr country'>
              <label htmlFor='proAddress__address-input-country'>Country *</label>
              <input
                type='text'
                id='proAddress__address-input-country'
                name='companyAddress.country'
                onChange={props.handleChange}
                value={companyAddress.country}
              />
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default ProAddress
