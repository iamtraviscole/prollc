import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/employeeCount.scss'

const EmployeeCount = (props) => {
  return (
    <div className='employeeCount'>
      <StepHeader
        title='Employees'
        details='Maximum number of employees expected in the next 12 months (enter 0 if none)'
      />
      <input type='number'
        name='employeeCount'
        min='0'
        value={props.values.employeeCount}
        onChange={props.handleChange}
      />
    </div>
  )
}

export default EmployeeCount
