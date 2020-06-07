import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/denomination.scss'

const Denomination = (props) => {
  const { denomination, companyNames } = props.formik.values
  const { handleChange } = props.formik

  return (
    <div className='denomination'>
      <StepHeader
        title='Denomination'
        details='How you identify the company as an LLC'
      />
      <div className='denomination__name-example'>
        {`${companyNames.name1} ${denomination}`}
      </div>
      <fieldset>
        <div className='denomination__input-ctr'>
          <input
            type='radio'
            name='denomination'
            id='denomination__input-variant-1'
            value='LLC'
            checked={denomination === 'LLC'}
            onChange={handleChange}
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
            checked={denomination === 'L.L.C.'}
            onChange={handleChange}
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
            checked={denomination === 'Limited Liability Company'}
            onChange={handleChange}
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
