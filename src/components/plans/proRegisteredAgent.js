import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/proRegisteredAgent.scss'

const ProRegisteredAgent = (props) => {
  const { proRegisteredAgent, registeredAgentDetails } = props.values

  let personOrCompanyName = !registeredAgentDetails.corporateRegisteredAgent
    ? (
        <>
          <div className='proRegisteredAgent__details-input-ctr  name'>
            <label htmlFor='proRegisteredAgent__details-input-first'>First Name *</label>
            <input
              type='text'
              id='proRegisteredAgent__details-input-first'
              name='registeredAgentDetails.firstName'
              onChange={props.handleChange}
              value={registeredAgentDetails.firstName}
            />
          </div>
          <div className='proRegisteredAgent__details-input-ctr name'>
            <label htmlFor='proRegisteredAgent__details-input-middle'>Second Name</label>
            <input
              type='text'
              id='proRegisteredAgent__details-input-middle'
              name='registeredAgentDetails.middleName'
              onChange={props.handleChange}
              value={registeredAgentDetails.middleName}
            />
          </div>
          <div className='proRegisteredAgent__details-input-ctr name'>
            <label htmlFor='proRegisteredAgent__details-input-last'>Last Name *</label>
            <input
              type='text'
              id='proRegisteredAgent__details-input-last'
              name='registeredAgentDetails.lastName'
              onChange={props.handleChange}
              value={registeredAgentDetails.lastName}
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
              name='registeredAgentDetails.companyName'
              onChange={props.handleChange}
              value={registeredAgentDetails.companyName}
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
            name='proRegisteredAgent'
            id='proRegisteredAgent__input-no'
            value='No'
            checked={proRegisteredAgent === 'No'}
            onChange={props.handleChange}
          />
          <label htmlFor='proRegisteredAgent__input-no'>
            I have a Registered Agent already
          </label>
        </div>
        <div className='proRegisteredAgent__input-ctr'>
          <input
            type='radio'
            name='proRegisteredAgent'
            id='proRegisteredAgent__input-yes'
            value='Yes'
            checked={proRegisteredAgent === 'Yes'}
            onChange={props.handleChange}
           />
          <label htmlFor='proRegisteredAgent__input-yes'>
            I want ProLLC to be my Registered Agent ( FREE for 1 year )
          </label>
        </div>
      </fieldset>
      {proRegisteredAgent === 'No' &&
        <div className='proRegisteredAgent__details-ctr'>
          <h3>Your Registered Agent details</h3>
          <div className='proRegisteredAgent__details-corporate-ctr'>
            <input
              type='checkbox'
              id='proRegisteredAgent__details-input-corporate'
              name='registeredAgentDetails.corporateRegisteredAgent'
              onChange={props.handleChange}
              checked={registeredAgentDetails.corporateRegisteredAgent}
              value={registeredAgentDetails.corporateRegisteredAgent}
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
                name='registeredAgentDetails.street'
                onChange={props.handleChange}
                value={registeredAgentDetails.street}
              />
            </div>
            <div className='proRegisteredAgent__details-input-ctr suite'>
              <label htmlFor='proRegisteredAgent__details-input-suite'>Suite / Office / Apt</label>
              <input
                type='text'
                id='proRegisteredAgent__details-input-suite'
                name='registeredAgentDetails.suite'
                onChange={props.handleChange}
                value={registeredAgentDetails.suite}
              />
            </div>
          </div>
          <div className='proRegisteredAgent__details-input-outer-ctr'>
            <div className='proRegisteredAgent__details-input-ctr'>
              <label htmlFor='proRegisteredAgent__details-input-city'>City *</label>
              <input
                type='text'
                id='proRegisteredAgent__details-input-city'
                name='registeredAgentDetails.city'
                onChange={props.handleChange}
                value={registeredAgentDetails.city}
              />
            </div>
            <div className='proRegisteredAgent__details-input-ctr'>
              <label htmlFor='proRegisteredAgent__details-input-state'>State *</label>
              <input
                type='text'
                id='proRegisteredAgent__details-input-state'
                name='registeredAgentDetails.state'
                onChange={props.handleChange}
                value={registeredAgentDetails.state}
              />
            </div>
          </div>
          <div className='proRegisteredAgent__details-input-outer-ctr'>
            <div className='proRegisteredAgent__details-input-ctr zipcode'>
              <label htmlFor='proRegisteredAgent__details-input-zipcode'>Zipcode *</label>
              <input
                type='text'
                id='proRegisteredAgent__details-input-zipcode'
                name='registeredAgentDetails.zipcode'
                onChange={props.handleChange}
                value={registeredAgentDetails.zipcode}
              />
            </div>
            <div className='proRegisteredAgent__details-input-ctr country'>
              <label htmlFor='proRegisteredAgent__details-input-country'>Country *</label>
              <input
                type='text'
                id='proRegisteredAgent__details-input-country'
                name='registeredAgentDetails.country'
                onChange={props.handleChange}
                value={registeredAgentDetails.country}
              />
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default ProRegisteredAgent
