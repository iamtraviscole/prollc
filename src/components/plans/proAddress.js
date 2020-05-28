import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/proAddress.scss'

const ProAddress = (props) => {
  const value = props.values.proAddress

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
            checked={value === 'No'}
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
            checked={value === 'Yes'}
            onChange={props.handleChange}
          />
          <label htmlFor='proAddress__yes'>
            I want ProLLC to provide me with an address <span>( + $59 )</span>
          </label>
        </div>
      </fieldset>
    </div>
  )
}

export default ProAddress
