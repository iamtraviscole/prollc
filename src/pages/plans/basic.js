import React, { useState } from 'react'
import { useFormik } from 'formik'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import FileState from '../../components/plans/fileState'

import '../../styles/plans/basic.scss'

const BasicPlan = (props) => {
  const [currentStep, setCurrentStep] = useState({component: FileState})

  const handleNextClick = (e) => {
    console.log('next clicked')
  }

  const formik = useFormik({
    initialValues: {
      fileState: '',
      contactDetails: {
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phone: ''
      },
      companyNames: {
        name1: '',
        name2: '',
        name3: ''
      },
      denomination: '',
      industry: '',
      employeeCount: 0,
      proAddress: false,
      companyAddress: {
        street: '',
        suite: '',
        city: '',
        state: '',
        zipcode: '',
        country: ''
      },
      memberCount: 0,
      memberDetails: [],
      managerCount: 0,
      managerDetails: [],
      proRegisteredAgent: false,
      expedited: false
    },
    onSubmit: async values => {
      console.log('submit clicked')
    },
    validationSchema: null,
    validateOnMount: true
  })

  const CurrentStepComponent = currentStep.component

  return (
    <Layout pageTitle='Basic Plan'>
      <SEO title='Basic Plan' />
      <div className='basic'>
        <form className='basic__form' onSubmit={formik.handleSubmit}>
          <CurrentStepComponent handleChange={formik.handleChange} />
        </form>
        <div className='basic__button-ctr'>
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div>
      <div style={{width: '200px', position: 'absolute', top: '200px', left: '0'}}>{JSON.stringify(formik.values, null, '\t')}</div>
    </Layout>
  )
}

export default BasicPlan
