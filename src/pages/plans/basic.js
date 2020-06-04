import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import FileState from '../../components/plans/fileState'
import ContactDetails from '../../components/plans/contactDetails'
import CompanyNames from '../../components/plans/companyNames'
import Denomination from '../../components/plans/denomination'
import Industry from '../../components/plans/industry'
import EmployeeCount from '../../components/plans/employeeCount'
import ProAddress from '../../components/plans/proAddress'
import Members from '../../components/plans/members'
import Managers from '../../components/plans/managers'
import ProRegisteredAgent from '../../components/plans/proRegisteredAgent'
import Expedited from '../../components/plans/expedited'
import Payment from '../../components/plans/payment'

import '../../styles/plans/basic.scss'

const BasicPlan = (props) => {
  const [currentStep, setCurrentStep] = useState({
    component: FileState,
    validate: 'fileState'
  })
  const [previousSteps, setPreviousSteps] = useState([])

  const basicValidation = yup.object().shape({
    contactDetails: yup.object().shape({
      firstName: yup.string().required('Required'),
      lastName: yup.string().required('Required'),
      email: yup.string().required('Required').email('Invalid email'),
      phone: yup.string().required('Required')
    })
  })

  const handleNextClick = (e) => {
    setPreviousSteps([...previousSteps, currentStep.component])

    // TODO: validation at each step
    switch (currentStep.component) {
      case FileState: {
        setCurrentStep({
          component: ContactDetails,
          validate: 'contactDetails'
        })
        break
      }
      case ContactDetails: {
        setCurrentStep({component: CompanyNames})
        break
      }
      case CompanyNames: {
        setCurrentStep({component: Denomination})
        break
      }
      case Denomination: {
        setCurrentStep({component: Industry})
        break
      }
      case Industry: {
        setCurrentStep({component: EmployeeCount})
        break
      }
      case EmployeeCount: {
        setCurrentStep({component: ProAddress})
        break
      }
      case ProAddress: {
        setCurrentStep({component: Members})
        break
      }
      case Members: {
        setCurrentStep({component: Managers})
        break
      }
      case Managers: {
        setCurrentStep({component: ProRegisteredAgent})
        break
      }
      case ProRegisteredAgent: {
        setCurrentStep({component: Expedited})
        break
      }
      case Expedited: {
        setCurrentStep({component: Payment})
        break
      }
      default:
        setCurrentStep({component: FileState})
        setPreviousSteps([])
    }
  }

  const handlePreviousClick = () => {
    setCurrentStep({component: previousSteps.pop()})
  }

  const initialMemberDetails = []
  for (let i = 0; i < 5; i++) {
    initialMemberDetails.push({
      corporateMember: false,
      companyName: '',
      firstName: '',
      secondName: '',
      lastName: '',
      street: '',
      suite: '',
      city: '',
      state: '',
      zipcode: '',
      country: '',
      manager: false
    })
  }

  const initialManagerDetails = []
  for (let i = 0; i < 5; i++) {
    initialManagerDetails.push({
      firstName: '',
      secondName: '',
      lastName: '',
      street: '',
      suite: '',
      city: '',
      state: '',
      zipcode: '',
      country: ''
    })
  }

  const formik = useFormik({
    initialValues: {
      fileState: 'Florida',
      contactDetails: {
        firstName: '',
        secondName: '',
        lastName: '',
        email: '',
        phone: ''
      },
      companyNames: {
        name1: '',
        name2: '',
        name3: ''
      },
      denomination: 'LLC',
      industry: {
        industry: '',
        other: ''
      },
      employeeCount: 0,
      proAddress: 'No',
      companyAddress: {
        street: '',
        suite: '',
        city: '',
        state: '',
        zipcode: '',
        country: ''
      },
      memberCount: 1,
      memberDetails: initialMemberDetails,
      managerCount: 0,
      managerDetails: initialManagerDetails,
      proRegisteredAgent: 'No',
      registeredAgentDetails: {
        corporateRegisteredAgent: false,
        companyName: '',
        firstName: '',
        secondName: '',
        lastName: '',
        street: '',
        suite: '',
        city: '',
        state: '',
        zipcode: '',
        country: ''
      },
      expedited: 'No'
    },
    onSubmit: async values => {
      console.log('submit clicked')
    },
    validationSchema: basicValidation,
    validateOnMount: true
  })

  const CurrentStepComponent = currentStep.component

  const previousButton = previousSteps.length > 0
    ? <button type='button' onClick={handlePreviousClick}>Previous</button>
    : null

  return (
    <Layout pageTitle='Basic Plan'>
      <SEO title='Basic Plan' />
      <div className='basic'>
        <form className='basic__form' onSubmit={formik.handleSubmit}>
          <CurrentStepComponent
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            values={formik.values}
            formik={formik}
          />
          <div className='basic__btn-ctr'>
            {previousButton}
            <button
              type='button'
              onClick={handleNextClick}
              disabled={formik.errors[currentStep.validate]}>
              Next
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default BasicPlan
