import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/industry.scss'

const Industry = (props) => {
  const values = props.values
  const displayOther = values.industry === 'Other' ? (
      <div className='industry__other-ctr'>
        <input
          type='text'
          name='industryOther'
          id='industry__other'
          placeholder='Specify other'
          onChange={props.handleChange}
          value={values.industryOther}
        />
      </div>
    ): null

  return (
    <div className='industry'>
      <StepHeader title='Industry' />
      <select
        name='industry'
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={values.industry}
      >
        <option value=''>Choose Industry</option>
        <option>Retail Sales</option>
        <option>Real Estate</option>
        <option>Manufacturing</option>
        <option>Other</option>
      </select>
      {displayOther}
    </div>
  )
}

export default Industry
