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
import Expedited from '../../components/plans/expedited'
import Payment from '../../components/plans/payment'

import '../../styles/plans/basic.scss'

const BasicPlan = (props) => {
  const [currentStep, setCurrentStep] = useState({component: FileState})
  const [previousSteps, setPreviousSteps] = useState([])
  const [validationErrors, setValidationErrors] = useState([])
  const [addonPrices, setAddonPrices] = useState({
    fileState: 0,
    proAddress: 0,
    expedited: 0
  })

  const handleNextClick = async (e) => {
    const setPrevious = () => {
      setPreviousSteps([...previousSteps, currentStep.component])
    }

    switch (currentStep.component) {
      case FileState: {
        setPrevious()
        setCurrentStep({component: ContactDetails})

        break
      }
      case ContactDetails: {
        validation.contactDetails
        .validate(formik.values.contactDetails, {abortEarly: false})
        .then(valid => {
          setPrevious()
          setValidationErrors([])
          setCurrentStep({component: CompanyNames})
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
        })
        .catch(err => {
          setValidationErrors(err.errors)
        })

        break
      }
      case Denomination: {
        setPrevious()
        setCurrentStep({component: Industry})

        break
      }
      case Industry: {
        validation.industry
        .validate(formik.values.industry, {abortEarly: false})
        .then(valid => {
          setPrevious()
          setValidationErrors([])
          setCurrentStep({component: EmployeeCount})
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
          })
          .catch(err => {
            setValidationErrors(err.errors)
          })
        } else {
          setPrevious()
          setValidationErrors([])
          setCurrentStep({component: Members})
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
              console.log(err)
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
            setCurrentStep({component: Expedited})
          })
          .catch(err => {
            setValidationErrors(err.errors)
          })
        } else {
          setPrevious()
          setValidationErrors([])
          setCurrentStep({component: Expedited})
        }

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
    }
  }

  const handlePreviousClick = () => {
    setValidationErrors([])
    setCurrentStep({component: previousSteps.pop()})
  }

  let initialMemberDetails = []
  for (let i = 0; i < 4; i++) {
    initialMemberDetails.push({
      corporateMember: false,
      companyName: '',
      firstName: 'a',
      secondName: '',
      lastName: 's',
      street: 'd',
      suite: '',
      city: 'f',
      state: 'g',
      zipcode: 'h',
      country: 'i',
      manager: false
    })
  }

  const initialManagerDetails = []
  for (let i = 0; i < 4; i++) {
    initialManagerDetails.push({
      firstName: 'a',
      secondName: '',
      lastName: 's',
      street: 'd',
      suite: 'f',
      city: 'g',
      state: 'h',
      zipcode: 'i',
      country: 'j'
    })
  }

  const formik = useFormik({
    initialValues: {
      fileState: 'Florida',
      contactDetails: {
        firstName: 'a',
        secondName: '',
        lastName: 's',
        email: 'd@d.c',
        phone: 'f'
      },
      companyNames: {
        name1: 'a',
        name2: 'b',
        name3: 'c'
      },
      denomination: 'LLC',
      industry: {
        industry: 'Other',
        other: 'o'
      },
      employeeCount: 0,
      companyAddress: {
        proAddress: 'No',
        street: 'a',
        suite: '',
        city: 's',
        state: 'd',
        zipcode: 'f',
        country: 'g'
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
        companyName: 'a',
        firstName: 's',
        secondName: 'd',
        lastName: 'f',
        street: 'g',
        suite: '',
        city: 'h',
        state: 'i',
        zipcode: 'j',
        country: 'k'
      },
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
    <p key={i} className='basic__error'>{error}</p>
  ))

  console.log(formik)
  console.log(addonPrices)

  return (
    <Layout pageTitle='Basic Plan'>
      <SEO title='Basic Plan' />
      <div className='basic'>
        <div>
          Price: $ {74 + addonPrices.fileState + addonPrices.proAddress + addonPrices.expedited}
        </div>
        <form className='basic__form' onSubmit={formik.handleSubmit}>
          <CurrentStepComponent
            formik={formik}
            addonPrices={{
              prices: addonPrices,
              setPrices: setAddonPrices
            }}
          />
          <div className='basic__btn-ctr'>
            {validationErrors.length > 0 &&
              <div className='basic__errors-ctr'>{displayValidationErrors}</div>}
            {previousButton}
            <button
              type='button'
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
          <div className='basic__error-ctr'>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default BasicPlan
