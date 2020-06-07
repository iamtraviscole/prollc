import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/employeeCount.scss'

const EmployeeCount = (props) => {
  const { employeeCount } = props.formik.values
  const { handleChange } = props.formik

  return (
    <div className='employeeCount'>
      <StepHeader
        title='Employees'
        details='Maximum number of employees expected in the next 12 months (enter 0 if none)'
      />
      <div className='employeeCount__input-ctr'>
        <input type='number'
          name='employeeCount'
          min='0'
          value={employeeCount}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default EmployeeCount
