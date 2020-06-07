import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/proRegisteredAgent.scss'

const ProRegisteredAgent = (props) => {
  const { registeredAgent } = props.formik.values
  const { handleChange } = props.formik

  let personOrCompanyName = !registeredAgent.corporateRegisteredAgent
    ? (
        <>
          <div className='proRegisteredAgent__details-input-ctr  name'>
            <label htmlFor='proRegisteredAgent__details-input-first'>First Name *</label>
            <input
              type='text'
              id='proRegisteredAgent__details-input-first'
              name='registeredAgent.firstName'
              onChange={handleChange}
              value={registeredAgent.firstName}
            />
          </div>
          <div className='proRegisteredAgent__details-input-ctr name'>
            <label htmlFor='proRegisteredAgent__details-input-middle'>Second Name</label>
            <input
              type='text'
              id='proRegisteredAgent__details-input-middle'
              name='registeredAgent.secondName'
              onChange={handleChange}
              value={registeredAgent.secondName}
            />
          </div>
          <div className='proRegisteredAgent__details-input-ctr name'>
            <label htmlFor='proRegisteredAgent__details-input-last'>Last Name *</label>
            <input
              type='text'
              id='proRegisteredAgent__details-input-last'
              name='registeredAgent.lastName'
              onChange={handleChange}
              value={registeredAgent.lastName}
            />
          </div>
        </>
      )
    : (
        <div className='proRegisteredAgent__details-input-outer-ctr'>
          <div className='proRegisteredAgent__details-input-ctr  company'>
            <label htmlFor='proRegisteredAgent__details-input-company-name'>Company Name *</label>
            <input
              type='text'
              id='proRegisteredAgent__details-input-company-name'
              name='registeredAgent.companyName'
              onChange={handleChange}
              value={registeredAgent.companyName}
            />
          </div>
        </div>
      )

  return (
    <div className='proRegisteredAgent'>
      <StepHeader title='Registered Agent' />
      <fieldset>
        <div className='proRegisteredAgent__input-ctr'>
          <input
            type='radio'
            name='registeredAgent.proRegisteredAgent'
            id='proRegisteredAgent__input-no'
            value='No'
            checked={registeredAgent.proRegisteredAgent === 'No'}
            onChange={handleChange}
          />
          <label htmlFor='proRegisteredAgent__input-no'>
            I have a Registered Agent already
          </label>
        </div>
        <div className='proRegisteredAgent__input-ctr'>
          <input
            type='radio'
            name='registeredAgent.proRegisteredAgent'
            id='proRegisteredAgent__input-yes'
            value='Yes'
            checked={registeredAgent.proRegisteredAgent === 'Yes'}
            onChange={handleChange}
           />
          <label htmlFor='proRegisteredAgent__input-yes'>
            I want ProLLC to be my Registered Agent ( FREE for 1 year )
          </label>
        </div>
      </fieldset>
      {registeredAgent.proRegisteredAgent === 'No' &&
        <div className='proRegisteredAgent__details-ctr'>
          <h3>Your Registered Agent details</h3>
          <div className='proRegisteredAgent__details-corporate-ctr'>
            <input
              type='checkbox'
              id='proRegisteredAgent__details-input-corporate'
              name='registeredAgent.corporateRegisteredAgent'
              onChange={handleChange}
              checked={registeredAgent.corporateRegisteredAgent}
              value={registeredAgent.corporateRegisteredAgent}
            />
            <label htmlFor='proRegisteredAgent__details-input-corporate'>My Registered Agent is a company</label>
          </div>
          <div className='proRegisteredAgent__details-input-outer-ctr'>
            {personOrCompanyName}
          </div>
          <div className='proRegisteredAgent__details-input-outer-ctr'>
            <div className='proRegisteredAgent__details-input-ctr street'>
              <label htmlFor='proRegisteredAgent__details-input-street'>Street *</label>
              <input
                type='text'
                id='proRegisteredAgent__details-input-street'
                name='registeredAgent.street'
                onChange={handleChange}
                value={registeredAgent.street}
              />
            </div>
            <div className='proRegisteredAgent__details-input-ctr suite'>
              <label htmlFor='proRegisteredAgent__details-input-suite'>Suite / Office / Apt</label>
              <input
                type='text'
                id='proRegisteredAgent__details-input-suite'
                name='registeredAgent.suite'
                onChange={handleChange}
                value={registeredAgent.suite}
              />
            </div>
          </div>
          <div className='proRegisteredAgent__details-input-outer-ctr'>
            <div className='proRegisteredAgent__details-input-ctr'>
              <label htmlFor='proRegisteredAgent__details-input-city'>City *</label>
              <input
                type='text'
                id='proRegisteredAgent__details-input-city'
                name='registeredAgent.city'
                onChange={handleChange}
                value={registeredAgent.city}
              />
            </div>
            <div className='proRegisteredAgent__details-input-ctr'>
              <label htmlFor='proRegisteredAgent__details-input-state'>State *</label>
              <input
                type='text'
                id='proRegisteredAgent__details-input-state'
                name='registeredAgent.state'
                onChange={handleChange}
                value={registeredAgent.state}
              />
            </div>
          </div>
          <div className='proRegisteredAgent__details-input-outer-ctr'>
            <div className='proRegisteredAgent__details-input-ctr zipcode'>
              <label htmlFor='proRegisteredAgent__details-input-zipcode'>Zipcode *</label>
              <input
                type='text'
                id='proRegisteredAgent__details-input-zipcode'
                name='registeredAgent.zipcode'
                onChange={handleChange}
                value={registeredAgent.zipcode}
              />
            </div>
            <div className='proRegisteredAgent__details-input-ctr country'>
              <label htmlFor='proRegisteredAgent__details-input-country'>Country *</label>
              <input
                type='text'
                id='proRegisteredAgent__details-input-country'
                name='registeredAgent.country'
                onChange={handleChange}
                value={registeredAgent.country}
              />
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default ProRegisteredAgent
