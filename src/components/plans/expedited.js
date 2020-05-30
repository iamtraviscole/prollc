import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/expedited.scss'

const Expedited = (props) => {
  const value = props.values.expedited

  return (
    <div className='expedited'>
      <StepHeader
        title='I Want Expedited Service'
        details='Processing within 24 hours'
      />
      <fieldset>
        <div className='expedited__input-ctr'>
          <input
            type='radio'
            name='expedited'
            id='expedited__input-yes'
            value='Yes'
            checked={value === 'Yes'}
            onChange={props.handleChange}
           />
          <label htmlFor='expedited__input-yes'>
            Yes ( + $39.00 )
          </label>
        </div>
        <div className='expedited__input-ctr'>
          <input
            type='radio'
            name='expedited'
            id='expedited__input-no'
            value='No'
            checked={value === 'No'}
            onChange={props.handleChange}
          />
          <label htmlFor='expedited__input-no'>
            No
          </label>
        </div>
      </fieldset>
    </div>
  )
}

export default Expedited
