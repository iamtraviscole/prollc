import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/denomination.scss'

const Denomination = (props) => {
  const value = props.values.denomination

  return (
    <div className='denomination'>
      <StepHeader
        title='Denomination'
        details='How you identify the company as an LLC'
      />
      <div className='denomination__name-example'>
        {`${props.values.companyNames.name1} ${value}`}
      </div>
      <fieldset>
        <div className='denomination__input-ctr'>
          <input
            type='radio'
            name='denomination'
            id='denomination__input-variant-1'
            value='LLC'
            checked={value === 'LLC'}
            onChange={props.handleChange}
           />
          <label htmlFor='denomination__input-variant-1'>
            LLC
          </label>
        </div>
        <div className='denomination__input-ctr'>
          <input
            type='radio'
            name='denomination'
            id='denomination__input-variant-2'
            value='L.L.C.'
            checked={value === 'L.L.C.'}
            onChange={props.handleChange}
          />
          <label htmlFor='denomination__input-variant-2'>
            L.L.C.
          </label>
        </div>
        <div className='denomination__input-ctr'>
          <input
            type='radio'
            name='denomination'
            id='denomination__input-variant-3'
            value='Limited Liability Company'
            checked={value === 'Limited Liability Company'}
            onChange={props.handleChange}
          />
          <label htmlFor='denomination__input-variant-3'>
            Limited Liability Company
          </label>
        </div>
      </fieldset>
    </div>
  )
}

export default Denomination
