import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/registeredAgentDetails.scss'

const RegisteredAgentDetails = (props) => {

  let personOrCompanyName = !props.values.registeredAgentDetails.corporateRegisteredAgent
    ? (
        <>
          <div className='registeredAgentDetails__details-input-ctr  name'>
            <label htmlFor='registeredAgentDetails__details-input-first'>First Name *</label>
            <input
              type='text'
              id='registeredAgentDetails__details-input-first'
              name='registeredAgentDetails.firstName'
              onChange={props.handleChange}
              value={props.values.registeredAgentDetails.firstName}
            />
          </div>
          <div className='registeredAgentDetails__details-input-ctr name'>
            <label htmlFor='registeredAgentDetails__details-input-middle'>Second Name</label>
            <input
              type='text'
              id='registeredAgentDetails__details-input-middle'
              name='registeredAgentDetails.middleName'
              onChange={props.handleChange}
              value={props.values.registeredAgentDetails.middleName}
            />
          </div>
          <div className='registeredAgentDetails__details-input-ctr name'>
            <label htmlFor='registeredAgentDetails__details-input-last'>Last Name *</label>
            <input
              type='text'
              id='registeredAgentDetails__details-input-last'
              name='registeredAgentDetails.lastName'
              onChange={props.handleChange}
              value={props.values.registeredAgentDetails.lastName}
            />
          </div>
        </>
      )
    : (
        <div className='registeredAgentDetails__details-input-outer-ctr'>
          <div className='registeredAgentDetails__details-input-ctr  company'>
            <label htmlFor='registeredAgentDetails__details-input-company-name'>Company Name *</label>
            <input
              type='text'
              id='registeredAgentDetails__details-input-company-name'
              name='registeredAgentDetails.companyName'
              onChange={props.handleChange}
              value={props.values.registeredAgentDetails.companyName}
            />
          </div>
        </div>
      )

  return (
    <div className='registeredAgentDetails'>
      <StepHeader title='Registered Agent Details' />
      <div className='registeredAgentDetails__details-ctr'>
        <div className='registeredAgentDetails__details-corporate-ctr'>
          <input
            type='checkbox'
            id='registeredAgentDetails__details-input-corporate'
            name='registeredAgentDetails.corporateRegisteredAgent'
            onChange={props.handleChange}
            checked={props.values.registeredAgentDetails.corporateRegisteredAgent}
            value={props.values.registeredAgentDetails.corporateRegisteredAgent}
          />
          <label htmlFor='registeredAgentDetails__details-input-corporate'>My Registered Agent is a company</label>
        </div>
        <div className='registeredAgentDetails__details-input-outer-ctr'>
          {personOrCompanyName}
        </div>
        <div className='registeredAgentDetails__details-input-outer-ctr'>
          <div className='registeredAgentDetails__details-input-ctr street'>
            <label htmlFor='registeredAgentDetails__details-input-street'>Street *</label>
            <input
              type='text'
              id='registeredAgentDetails__details-input-street'
              name='registeredAgentDetails.street'
              onChange={props.handleChange}
              value={props.values.registeredAgentDetails.street}
            />
          </div>
          <div className='registeredAgentDetails__details-input-ctr suite'>
            <label htmlFor='registeredAgentDetails__details-input-suite'>Suite / Office / Apt</label>
            <input
              type='text'
              id='registeredAgentDetails__details-input-suite'
              name='registeredAgentDetails.suite'
              onChange={props.handleChange}
              value={props.values.registeredAgentDetails.suite}
            />
          </div>
        </div>
        <div className='registeredAgentDetails__details-input-outer-ctr'>
          <div className='registeredAgentDetails__details-input-ctr'>
            <label htmlFor='registeredAgentDetails__details-input-city'>City *</label>
            <input
              type='text'
              id='registeredAgentDetails__details-input-city'
              name='registeredAgentDetails.city'
              onChange={props.handleChange}
              value={props.values.registeredAgentDetails.city}
            />
          </div>
          <div className='registeredAgentDetails__details-input-ctr'>
            <label htmlFor='registeredAgentDetails__details-input-state'>State *</label>
            <input
              type='text'
              id='registeredAgentDetails__details-input-state'
              name='registeredAgentDetails.state'
              onChange={props.handleChange}
              value={props.values.registeredAgentDetails.state}
            />
          </div>
        </div>
        <div className='registeredAgentDetails__details-input-outer-ctr'>
          <div className='registeredAgentDetails__details-input-ctr zipcode'>
            <label htmlFor='registeredAgentDetails__details-input-zipcode'>Zipcode *</label>
            <input
              type='text'
              id='registeredAgentDetails__details-input-zipcode'
              name='registeredAgentDetails.zipcode'
              onChange={props.handleChange}
              value={props.values.registeredAgentDetails.zipcode}
            />
          </div>
          <div className='registeredAgentDetails__details-input-ctr country'>
            <label htmlFor='registeredAgentDetails__details-input-country'>Country *</label>
            <input
              type='text'
              id='registeredAgentDetails__details-input-country'
              name='registeredAgentDetails.country'
              onChange={props.handleChange}
              value={props.values.registeredAgentDetails.country}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisteredAgentDetails
