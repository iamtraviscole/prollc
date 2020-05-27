import React from 'react'

import '../../styles/plans/stepHeader.scss'

const StepHeader = (props) => {
  return (
    <div className='stepHeader'>
      <h2>{props.title}</h2>
      {props.details && <p>{props.details}</p>}
    </div>
  )
}

export default StepHeader
