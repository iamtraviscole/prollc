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
import CompanyAddress from '../../components/plans/companyAddress'
import MemberCount from '../../components/plans/memberCount'
import MemberDetails from '../../components/plans/memberDetails'
import ManagerCount from '../../components/plans/managerCount'
import ManagerDetails from '../../components/plans/managerDetails'
import ProRegisteredAgent from '../../components/plans/proRegisteredAgent'
import RegisteredAgentDetails from '../../components/plans/registeredAgentDetails'
import Expedited from '../../components/plans/expedited'
import Payment from '../../components/plans/payment'

import '../../styles/plans/basic.scss'

const BasicPlan = (props) => {
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
        setCurrentStep({component: CompanyAddress})
        // TODO: if ProAddress = true, skip to MemberCount
        break
      }
      case CompanyAddress: {
        setCurrentStep({component: MemberCount})
        break
      }
      case MemberCount: {
        setCurrentStep({component: MemberDetails})
        break
      }
      case MemberDetails: {
        setCurrentStep({component: ManagerCount})
        break
      }
      case ManagerCount: {
        setCurrentStep({component: ManagerDetails})
        break
      }
      case ManagerDetails: {
        setCurrentStep({component: ProRegisteredAgent})
        break
      }
      case ProRegisteredAgent: {
        setCurrentStep({component: RegisteredAgentDetails})
        // TODO: if ProRegisteredAgent = true, skip to Expedited
        break
      }
      case RegisteredAgentDetails: {
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
      registeredAgentDetails: {
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
          {previousSteps.length > 0 && <button onClick={handlePreviousClick}>Previous</button>}
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div>
      <div style={{width: '200px', position: 'absolute', top: '200px', left: '0'}}>{JSON.stringify(formik.values, null, '\t')}</div>
    </Layout>
  )
}

export default BasicPlan
