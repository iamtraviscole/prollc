import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/industry.scss'

const Industry = (props) => {
  const { industry } = props.formik.values

  const displayOther = industry.industry === 'Other' ? (
      <div className='industry__other-ctr'>
        <input
          type='text'
          name='industry.other'
          id='industry__other'
          placeholder='Specify other'
          onChange={props.handleChange}
          value={industry.other}
        />
      </div>
    ): null

  return (
    <div className='industry'>
      <StepHeader title='Industry' />
      <select
        name='industry.industry'
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={industry.industry}
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
