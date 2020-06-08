import React, { useState } from 'react'
import { useFormik } from 'formik'

import * as validation from '../../helpers/validation.js'

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
  const [validationErrors, setValidationErrors] = useState([])
  const [progress, setProgress] = useState(0)
  const [addonPrices, setAddonPrices] = useState({
    fileState: 0,
    proAddress: 0,
    expedited: 0
  })

  const handleNextClick = async (e) => {
    const setPrevious = () => {
      setPreviousSteps([...previousSteps, currentStep.component])
    }

    const incProgress = () => {
      setProgress(progress + 1)
    }

    switch (currentStep.component) {
      case FileState: {
        setPrevious()
        setCurrentStep({component: ContactDetails})
        incProgress()

        break
      }
      case ContactDetails: {
        validation.contactDetails
        .validate(formik.values.contactDetails, {abortEarly: false})
        .then(valid => {
          setPrevious()
          setValidationErrors([])
          setCurrentStep({component: CompanyNames})
          incProgress()
        })
        .catch(err => {
          setValidationErrors(err.errors)
        })

        break
      }
      case CompanyNames: {
        validation.companyNames
        .validate(formik.values.companyNames, {abortEarly: false})
        .then(valid => {
          setPrevious()
          setValidationErrors([])
          setCurrentStep({component: Denomination})
          incProgress()
        })
        .catch(err => {
          setValidationErrors(err.errors)
        })

        break
      }
      case Denomination: {
        setPrevious()
        setCurrentStep({component: Industry})
        incProgress()

        break
      }
      case Industry: {
        validation.industry
        .validate(formik.values.industry, {abortEarly: false})
        .then(valid => {
          setPrevious()
          setValidationErrors([])
          setCurrentStep({component: EmployeeCount})
          incProgress()
        })
        .catch(err => {
          setValidationErrors(err.errors)
        })

        break
      }
      case EmployeeCount: {
        validation.employeeCount
        .validate(formik.values.employeeCount, {abortEarly: false})
        .then(valid => {
          setPrevious()
          setValidationErrors([])
          setCurrentStep({component: ProAddress})
          incProgress()
        })
        .catch(err => {
          setValidationErrors(err.errors)
        })

        break
      }
      case ProAddress: {
        if (formik.values.companyAddress.proAddress === 'No') {
          validation.companyAddress
          .validate(formik.values.companyAddress, {abortEarly: false})
          .then(valid => {
            setPrevious()
            setValidationErrors([])
            setCurrentStep({component: Members})
            incProgress()
          })
          .catch(err => {
            setValidationErrors(err.errors)
          })
        } else {
          setPrevious()
          setValidationErrors([])
          setCurrentStep({component: Members})
          incProgress()
        }

        break
      }
      case Members: {
        const memberCount = +formik.values.members.memberCount
        let memberErrors = []

        if (Number.isInteger(memberCount)) {
          for (let i = 0; i < memberCount; i++) {
            await validation.memberDetails(i)
            .validate(formik.values.members.memberDetails[i], {abortEarly: false})
            .catch(err => {
                memberErrors.push(...err.errors)
            })
          }
        }

        if (memberErrors.length) {
          setValidationErrors(memberErrors)
        } else {
          setPrevious()
          setValidationErrors([])
          setCurrentStep({component: Managers})
          incProgress()
        }

        break
      }
      case Managers: {
        const managerCount = +formik.values.managers.managerCount
        let managerErrors = []

        if (Number.isInteger(managerCount)) {
          for (let i = 0; i < managerCount; i++) {
            await validation.managerDetails(i)
            .validate(formik.values.managers.managerDetails[i], {abortEarly: false})
            .catch(err => {
              managerErrors.push(...err.errors)
            })
          }
        }

        if (managerErrors.length) {
          setValidationErrors(managerErrors)
        } else {
          setPrevious()
          setValidationErrors([])
          setCurrentStep({component: ProRegisteredAgent})
          incProgress()
        }

        break
      }
      case ProRegisteredAgent: {
        if (formik.values.registeredAgent.proRegisteredAgent === 'No') {
          validation.proRegisteredAgent
          .validate(formik.values.registeredAgent, {abortEarly: false})
          .then(valid => {
            setPrevious()
            setValidationErrors([])
            setCurrentStep({component: EIN})
            incProgress()
          })
          .catch(err => {
            setValidationErrors(err.errors)
          })
        } else {
          setPrevious()
          setValidationErrors([])
          setCurrentStep({component: EIN})
          incProgress()
        }

        break
      }
      case EIN: {
        validation.ein
        .validate(formik.values.ein, {abortEarly: false})
        .then(valid => {
          setPrevious()
          setValidationErrors([])
          setCurrentStep({component: SElection})
          incProgress()
        })
        .catch(err => {
          setValidationErrors(err.errors)
        })

        break
      }
      case SElection: {
        setPrevious()
        setCurrentStep({component: Expedited})

        break
      }
      case Expedited: {
        setPrevious()
        setCurrentStep({component: Payment})

        break
      }
      default:
        setPreviousSteps([])
        setCurrentStep({component: FileState})
        setValidationErrors([])
        setProgress(0)
    }
  }

  const handlePreviousClick = () => {
    setValidationErrors([])
    setCurrentStep({component: previousSteps.pop()})
    setProgress(progress - 1)
  }

  let initialMemberDetails = []
  for (let i = 0; i < 4; i++) {
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
  for (let i = 0; i < 4; i++) {
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
      companyAddress: {
        proAddress: 'No',
        street: '',
        suite: '',
        city: '',
        state: '',
        zipcode: '',
        country: ''
      },
      members: {
        memberCount: '1',
        memberDetails: initialMemberDetails
      },
      managers: {
        managerCount: '0',
        managerDetails: initialManagerDetails
      },
      registeredAgent: {
        proRegisteredAgent: 'No',
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
      ein: {
        firstName: '',
        secondName: '',
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
    validateOnMount: false,
    validateOnChange: false,
    validateOnBlur: false
  })

  const CurrentStepComponent = currentStep.component

  const previousButton = previousSteps.length > 0
    ? <button type='button' onClick={handlePreviousClick}>Previous</button>
    : null

  const displayValidationErrors = validationErrors.map((error, i) => (
    <p key={i} className='complete__error'>{error}</p>
  ))

  console.log(formik.values)

  return (
    <Layout pageTitle='Complete Plan'>
      <SEO title='Complete Plan' />
      <div className='complete'>
        <div className='complete__top-ctr'>
          <div className='complete__progress-ctr'>
            <p><span>Progress:</span>{Math.round((progress / 11) * 100)} %</p>
          </div>
          <div className='complete__price-ctr'>
            <p>
              <span>Price:</span>
              ${74 + addonPrices.fileState + addonPrices.proAddress +
                addonPrices.expedited}
            </p>
          </div>
        </div>
        <form className='complete__form' onSubmit={formik.handleSubmit}>
          <CurrentStepComponent
            formik={formik}
            addonPrices={{
              prices: addonPrices,
              setPrices: setAddonPrices
            }}
          />
          <div className='complete__btn-ctr'>
            {validationErrors.length > 0 &&
              <div className='complete__errors-ctr'>{displayValidationErrors}</div>}
            {previousButton}
            <button
              type='button'
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
          <div className='complete__error-ctr'>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default CompletePlan
