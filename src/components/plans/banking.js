import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/banking.scss'

const Managers = (props) => {
  const { banking } = props.formik.values

  const handleChange = (e) => {
    if (e.target.name === 'banking.presentInUS' && e.target.value === 'Yes') {
      props.formik.setFieldValue('banking.otherOptions', 'None')
    }

    props.formik.handleChange(e)
  }

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
      <StepHeader title='Banco' />
        <h3>¿Esta usted físicamente en los EE.UU?</h3>
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
              <label htmlFor='banking__present-input-yes'>Sí</label>
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
              <option>Chase</option>
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
                  id='banking__other-options-input-none'
                  value='None'
                  checked={banking.otherOptions === 'None'}
                  onChange={handleChange}
                 />
                <label htmlFor='banking__other-options-input-none'>
                  None
                </label>
              </div>
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
                  Apertura en Banco Online (no aplica a venezolanos)
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
                  Apertura en Banco Físico (+ $1,100.00)
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
