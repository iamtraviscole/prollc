import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/banking.scss'

const Managers = (props) => {
  const { banking } = props.formik.values
  const { handleChange } = props.formik

  const displayOther = banking.bank === 'Other' ? (
      <div className='banking__bank-other-ctr'>
        <input
          type='text'
          name='banking.bankOther'
          id='banking__bank-other'
          placeholder='Specify other'
          onChange={handleChange}
          value={banking.bankOther}
        />
      </div>
    ): null

  return (
    <div className='banking'>
      <StepHeader title='Banking' />
        <h3>Are you or any of your company members, friends, relatives, or colleagues present in the USA and authorized to open a bank account?</h3>
        <div className='banking__present-ctr'>
          <fieldset>
            <div className='banking__present-input-ctr'>
              <input
                type='radio'
                name='banking.presentInUS'
                id='banking__present-input-yes'
                value='Yes'
                checked={banking.presentInUS === 'Yes'}
                onChange={handleChange}
               />
              <label htmlFor='banking__present-input-yes'>Yes</label>
            </div>
            <div className='banking__present-input-ctr'>
              <input
                type='radio'
                name='banking.presentInUS'
                id='banking__present-input-no'
                value='No'
                checked={banking.presentInUS === 'No'}
                onChange={handleChange}
              />
              <label htmlFor='banking__present-input-no'>No</label>
            </div>
          </fieldset>
        </div>
        {banking.presentInUS === 'Yes' &&
          <>
          <h3>Please enter their name</h3>
          <div className='banking__person-ctr'>
            <div className='banking__person-input-ctr  name'>
              <label htmlFor='banking__person-input-first'>First Name *</label>
              <input
                type='text'
                id='banking__person-input-first'
                name='banking.firstName'
                onChange={handleChange}
                value={banking.firstName}
              />
            </div>
            <div className='banking__person-input-ctr name'>
              <label htmlFor='banking__person-input-middle'>Second Name</label>
              <input
                type='text'
                id='banking__person-input-second'
                name='banking.secondName'
                onChange={handleChange}
                value={banking.secondName}
              />
            </div>
            <div className='banking__person-input-ctr name'>
              <label htmlFor='banking__person-input-last'>Last Name *</label>
              <input
                type='text'
                id='banking__person-input-last'
                name='banking.lastName'
                onChange={handleChange}
                value={banking.lastName}
              />
            </div>
          </div>
          <h3>Choose bank</h3>
          <div className='banking__bank-ctr'>
            <select
              name='banking.bank'
              onChange={handleChange}
              onBlur={props.handleBlur}
              value={banking.bank}
            >
              <option>Bank of America</option>
              <option>Wells Fargo</option>
              <option>First Bank</option>
              <option>Other</option>
            </select>
            {displayOther}
          </div>
          </>
        }
        {banking.presentInUS === 'No' &&
          <>
          <h3>Other options</h3>
          <div className='banking__other-options-ctr'>
            <fieldset>
              <div className='banking__other-options-input-ctr'>
                <input
                  type='radio'
                  name='banking.otherOptions'
                  id='banking__other-options-input-virtual-bank'
                  value='Virtual Bank'
                  checked={banking.otherOptions === 'Virtual Bank'}
                  onChange={handleChange}
                 />
                <label htmlFor='banking__other-options-input-virtual-bank'>
                  Virtual Bank (+ $699 and requires $25,000 minimum deposit)
                </label>
                {/* TODO: details about virtual bank */}
              </div>
              <div className='banking__other-options-input-ctr'>
                <input
                  type='radio'
                  name='banking.otherOptions'
                  id='banking__other-options-input-bank-service'
                  value='Bank Account Service'
                  checked={banking.otherOptions === 'Bank Account Service'}
                  onChange={handleChange}
                 />
                <label htmlFor='banking__other-options-input-bank-service'>
                  Bank Account Service (+ $1,100)
                </label>
                {/* TODO: details about bank service */}
              </div>
            </fieldset>
          </div>
          </>
        }
    </div>
  )
}

export default Managers
