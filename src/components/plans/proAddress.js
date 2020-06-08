import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/proAddress.scss'

const ProAddress = (props) => {
  const { companyAddress } = props.formik.values
  const { handleChange } = props.formik
  const { setPrices, prices } = props.addonPrices

  const handleChangePrice = (e) => {
    if (e.target.value === 'Yes') {
      setPrices({
        ...prices, proAddress: 59
      })
    } else {
      setPrices({
        ...prices, proAddress: 0
      })
    }
    handleChange(e)
  }

  return (
    <div className='proAddress'>
      <StepHeader title='Principal Place of Business' />
      <fieldset>
        <div className='proAddress__input-ctr'>
          <input
            type='radio'
            name='companyAddress.proAddress'
            id='proAddress__no'
            value='No'
            checked={companyAddress.proAddress === 'No'}
            onChange={e => handleChangePrice(e)}
           />
          <label htmlFor='proAddress__no'>
            I already have an address for my company
          </label>
        </div>
        <div className='proAddress__input-ctr'>
          <input
            type='radio'
            name='companyAddress.proAddress'
            id='proAddress__yes'
            value='Yes'
            checked={companyAddress.proAddress === 'Yes'}
            onChange={e => handleChangePrice(e)}
          />
          <label htmlFor='proAddress__yes'>
            I want ProLLC to provide me with an address <span>( + $59 )</span>
          </label>
        </div>
      </fieldset>
      {companyAddress.proAddress === 'No' &&
        <div className='proAddress__address-ctr'>
          <h3>Your Company Address</h3>
          <div className='proAddress__address-input-outer-ctr'>
            <div className='proAddress__address-input-ctr street'>
              <label htmlFor='proAddress__address-input-street'>Street *</label>
              <input
                type='text'
                id='proAddress__address-input-street'
                name='companyAddress.street'
                onChange={handleChange}
                value={companyAddress.street}
              />
              <div className='proAddress__address-error-ctr'>
              </div>
            </div>
            <div className='proAddress__address-input-ctr suite'>
              <label htmlFor='proAddress__address-input-suite'>Suite / Office / Apt</label>
              <input
                type='text'
                id='proAddress__address-input-suite'
                name='companyAddress.suite'
                onChange={handleChange}
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
                onChange={handleChange}
                value={companyAddress.city}
              />
            </div>
            <div className='proAddress__address-input-ctr'>
              <label htmlFor='proAddress__address-input-state'>State *</label>
              <input
                type='text'
                id='proAddress__address-input-state'
                name='companyAddress.state'
                onChange={handleChange}
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
                onChange={handleChange}
                value={companyAddress.zipcode}
              />
            </div>
            <div className='proAddress__address-input-ctr country'>
              <label htmlFor='proAddress__address-input-country'>Country *</label>
              <input
                type='text'
                id='proAddress__address-input-country'
                name='companyAddress.country'
                onChange={handleChange}
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
