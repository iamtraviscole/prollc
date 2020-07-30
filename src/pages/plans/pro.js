import React, { useState } from 'react'
import { useFormik } from 'formik'

import * as validation from '../../helpers/validation.js'
import calcPrice from '../../helpers/calcPrice.js'
import initialPlanValues from '../../helpers/initialPlanValues.js'

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
import Banking from '../../components/plans/banking'
import SpeakToAttorney from '../../components/plans/speakToAttorney'
import Expedited from '../../components/plans/expedited'
import Payment from '../../components/plans/payment'

import '../../styles/plans/pro.scss'

const ProPlan = (props) => {
  const [currentStep, setCurrentStep] = useState({component: FileState})
  const [previousSteps, setPreviousSteps] = useState([])
  const [validationErrors, setValidationErrors] = useState([])
  const [progress, setProgress] = useState(0)

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
        setCurrentStep({component: Banking})
        incProgress()

        break
      }
      case Banking: {
        validation.banking
        .validate(formik.values.banking, {abortEarly: false})
        .then(valid => {
          setPrevious()
          setValidationErrors([])
          setCurrentStep({component: SpeakToAttorney})
          incProgress()
        })
        .catch(err => {
          setValidationErrors(err.errors)
        })


        break
      }
      case SpeakToAttorney: {
        setPrevious()
        setCurrentStep({component: Expedited})
        incProgress()

        break
      }
      case Expedited: {
        setPrevious()
        setCurrentStep({component: Payment})
        incProgress()

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

  const formik = useFormik({
    initialValues: initialPlanValues('Pro'),
    onSubmit: async values => {
      console.log('submit clicked')
    },
    validationSchema: null,
    validateOnMount: false,
    validateOnChange: false,
    validateOnBlur: false
  })

  const CurrentStepComponent = currentStep.component

  const displayValidationErrors = validationErrors.map((error, i) => (
    <p key={i} className='pro__error'>{error}</p>
  ))

  const displayButtons = currentStep.component === Payment
    ? <>
      <button type='button' onClick={handlePreviousClick}>Previous</button>
      </>
    : previousSteps.length > 0
      ? <>
        <button type='button' onClick={handlePreviousClick}>Previous</button>
        <button type='button' onClick={handleNextClick}>Next</button>
        </>
      : <button type='button' onClick={handleNextClick}>Next</button>

  console.log(formik.values)

  return (
    <Layout pageTitle='Pro Plan'>
      <SEO title='Complete Plan' />
      <div className='pro'>
        <div className='pro__top-ctr'>
          <div className='pro__progress-ctr'>
            <p><span>Progress:</span>{Math.round((progress / 15) * 100)} %</p>
          </div>
          <div className='pro__price-ctr'>
            <p>
              <span>Price:</span>
              ${calcPrice(formik.values)}
            </p>
          </div>
        </div>
        <form className='pro__form' onSubmit={formik.handleSubmit}>
          <CurrentStepComponent formik={formik} />
          <div className='pro__btn-ctr'>
            {validationErrors.length > 0 &&
            <div className='pro__errors-ctr'>{displayValidationErrors}</div>}
            {displayButtons}
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default ProPlan
