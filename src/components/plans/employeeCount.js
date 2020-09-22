import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/employeeCount.scss'

const EmployeeCount = (props) => {
  const { employeeCount } = props.formik.values
  const { handleChange } = props.formik

  return (
    <div className='employeeCount'>
      <StepHeader
        title='Empleados'
        details='Número máximo de empleados que espera tener en los próximos 12 meses (indique -0- si no espera tenerlos)'
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
