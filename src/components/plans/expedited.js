import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/expedited.scss'

const Expedited = (props) => {
  const { expedited } = props.formik.values
  const { handleChange } = props.formik

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
            id='expedited__input-no'
            value='No'
            checked={expedited === 'No'}
            onChange={handleChange}
          />
          <label htmlFor='expedited__input-no'>
            No
          </label>
        </div>
        <div className='expedited__input-ctr'>
          <input
            type='radio'
            name='expedited'
            id='expedited__input-yes'
            value='Yes'
            checked={expedited === 'Yes'}
            onChange={handleChange}
           />
          <label htmlFor='expedited__input-yes'>
            Yes ( + $39.00 )
          </label>
        </div>
      </fieldset>
    </div>
  )
}

export default Expedited
