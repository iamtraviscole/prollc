import React from 'react'

import StepHeader from './stepHeader'
import InputError from './inputError'

import '../../styles/plans/companyNames.scss'

const CompanyNames = (props) => {
  const values = props.values.companyNames

  return (
    <div className='companyNames'>
      <StepHeader
        title='Company Names'
        details='Subject to availability, order by preference'
      />
      <div className='companyNames__input-ctr'>
        <label htmlFor='companyNames__input-name1'>Company Name 1 *</label>
        <input
          type='text'
          id='companyNames__input-name1'
          name='companyNames.name1'
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={values.name1}
        />
        <InputError objName='companyNames' valueName='name1' formik={props.formik}/>
      </div>
      <div className='companyNames__input-ctr'>
        <label htmlFor='companyNames__input-name2'>Company Name 2 *</label>
        <input
          type='text'
          id='companyNames__input-name2'
          name='companyNames.name2'
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={values.name2}
        />
        <InputError objName='companyNames' valueName='name2' formik={props.formik}/>
      </div>
      <div className='companyNames__input-ctr'>
        <label htmlFor='companyNames__input-name3'>Company Name 3 *</label>
        <input
          type='text'
          id='companyNames__input-name3'
          name='companyNames.name3'
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={values.name3}
        />
        <InputError objName='companyNames' valueName='name3' formik={props.formik}/>
      </div>
    </div>
  )
}

export default CompanyNames
