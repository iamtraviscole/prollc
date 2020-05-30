import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/proRegisteredAgent.scss'

const ProRegisteredAgent = (props) => {
  const value = props.values.proRegisteredAgent

  return (
    <div className='proRegisteredAgent'>
      <StepHeader title='Registered Agent' />
      <fieldset>
        <div className='proRegisteredAgent__input-ctr'>
          <input
            type='radio'
            name='proRegisteredAgent'
            id='proRegisteredAgent__input-yes'
            value='Yes'
            checked={value === 'Yes'}
            onChange={props.handleChange}
           />
          <label htmlFor='proRegisteredAgent__input-yes'>
            I want ProLLC to be my Registered Agent ( FREE for 1 year )
          </label>
        </div>
        <div className='proRegisteredAgent__input-ctr'>
          <input
            type='radio'
            name='proRegisteredAgent'
            id='proRegisteredAgent__input-no'
            value='No'
            checked={value === 'No'}
            onChange={props.handleChange}
          />
          <label htmlFor='proRegisteredAgent__input-no'>
            I have a Registered Agent already
          </label>
        </div>
      </fieldset>
    </div>
  )
}

export default ProRegisteredAgent
