import React, { useState } from 'react'
import { useFormik } from 'formik'

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
import EIN from '../../components/plans/ein'
import SElection from '../../components/plans/sElection'
import Expedited from '../../components/plans/expedited'
import Payment from '../../components/plans/payment'

import '../../styles/plans/complete.scss'

const CompletePlan = (props) => {
  const [currentStep, setCurrentStep] = useState({component: FileState})
  const [previousSteps, setPreviousSteps] = useState([])

  const handleNextClick = (e) => {
    setPreviousSteps([...previousSteps, currentStep.component])

    // TODO: validation at each step
    switch (currentStep.component) {
      case FileState: {
        setCurrentStep({component: ContactDetails})
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
        setCurrentStep({component: EIN})
        break
      }
      case EIN: {
        setCurrentStep({component: SElection})
        break
      }
      case SElection: {
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
      middleName: '',
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
      middleName: '',
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
      denomination: 'LLC',
      industry: '',
      industryOther: '',
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
        middleName: '',
        lastName: '',
        street: '',
        suite: '',
        city: '',
        state: '',
        zipcode: '',
        country: ''
      },
      ein: {
        firstName: '',
        secondNAme: '',
        lastName: '',
        ssn: '',
        itin: '',
        ein: ''

      },
      sElection: 'No',
      expedited: 'No'
    },
    onSubmit: async values => {
      console.log('submit clicked')
    },
    validationSchema: null,
    validateOnMount: true
  })

  const CurrentStepComponent = currentStep.component

  const previousButton = previousSteps.length > 0
    ? <button type='button' onClick={handlePreviousClick}>Previous</button>
    : null

  console.log(formik.values)

  return (
    <Layout pageTitle='Complete Plan'>
      <SEO title='Complete Plan' />
      <div className='complete'>
        <form className='complete__form' onSubmit={formik.handleSubmit}>
          <CurrentStepComponent
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            values={formik.values}
          />
          <div className='complete__btn-ctr'>
            {previousButton}
            <button type='button' onClick={handleNextClick}>
              Next
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default CompletePlan