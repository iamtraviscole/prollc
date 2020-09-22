import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/companyNames.scss'

const CompanyNames = (props) => {
  const { companyNames } = props.formik.values
  const { handleChange } = props.formik

  return (
    <div className='companyNames'>
      <StepHeader
        title='Nombre de la Compañía'
        details='Sujeto a disponibilidad, indicar por orden de preferencia'
      />
      <div className='companyNames__input-ctr'>
        <label htmlFor='companyNames__input-name1'>Nombre de la Compañía - Opción 1 *</label>
        <input
          type='text'
          id='companyNames__input-name1'
          name='companyNames.name1'
          onChange={handleChange}
          value={companyNames.name1}
        />
      </div>
      <div className='companyNames__input-ctr'>
        <label htmlFor='companyNames__input-name2'>Nombre de la Compañía - Opción 2 *</label>
        <input
          type='text'
          id='companyNames__input-name2'
          name='companyNames.name2'
          onChange={handleChange}
          value={companyNames.name2}
        />
      </div>
      <div className='companyNames__input-ctr'>
        <label htmlFor='companyNames__input-name3'>Nombre de la Compañía - Opción 3 *</label>
        <input
          type='text'
          id='companyNames__input-name3'
          name='companyNames.name3'
          onChange={handleChange}
          value={companyNames.name3}
        />
      </div>
    </div>
  )
}

export default CompanyNames
