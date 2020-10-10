import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/banking.scss'

const Managers = (props) => {
  const { banking } = props.formik.values
  const { handleChange } = props.formik

  const handlePresentChange = (e) => {
    if ( e.target.value === 'Yes') {
      props.formik.setFieldValue('banking.otherOptions', '')
    } else {
      props.formik.setFieldValue('banking.otherOptions', 'Virtual Bank')
      props.formik.setFieldValue('banking.bank', '')
      props.formik.setFieldValue('banking.bankOther', '')
    }

    handleChange(e)
  }

  const handleOtherChange = (e) => {
    if (e.target.value !== 'Otro') {
      props.formik.setFieldValue('banking.bankOther', '')
    }

    handleChange(e)
  }

  const displayOther = banking.bank === 'Otro' ? (
      <div className='banking__bank-other-ctr'>
        <input
          type='text'
          name='banking.bankOther'
          id='banking__bank-other'
          placeholder='Especificar'
          onChange={handleChange}
          value={banking.bankOther}
        />
      </div>
    ): null

  return (
    <div className='banking'>
      <StepHeader title='Banco' />
        <h3>¿Estás usted físicamente en los EE.UU?</h3>
        <div className='banking__present-ctr'>
          <fieldset>
            <div className='banking__present-input-ctr'>
              <input
                type='radio'
                name='banking.presentInUS'
                id='banking__present-input-yes'
                value='Yes'
                checked={banking.presentInUS === 'Yes'}
                onChange={handlePresentChange}
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
                onChange={handlePresentChange}
              />
              <label htmlFor='banking__present-input-no'>No</label>
            </div>
          </fieldset>
        </div>
        {banking.presentInUS === 'Yes' &&
          <>
          <h3>Escoger el banco de tu preferencia</h3>
          <div className='banking__bank-ctr'>
            <select
              name='banking.bank'
              onChange={handleOtherChange}
              onBlur={props.handleBlur}
              value={banking.bank}
            >
              <option value=''>Escoger Banco</option>
              <option>Bank of America</option>
              <option>Wells Fargo</option>
              <option>First Bank</option>
              <option>Chase</option>
              <option>Otro</option>
            </select>
            {displayOther}
          </div>
          </>
        }
        {banking.presentInUS === 'No' &&
          <>
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
                  Apertura en Banco Online (no aplica a venezolanos)
                </label>
              </div>
              <div className='banking__other-options-input-ctr'>
                <input
                  type='radio'
                  name='banking.otherOptions'
                  id='banking__other-options-input-bank-service'
                  value='Physical Bank'
                  checked={banking.otherOptions === 'Physical Bank'}
                  onChange={handleChange}
                 />
                <label htmlFor='banking__other-options-input-bank-service'>
                  Apertura en Banco Físico (+ $1,100.00)
                </label>
              </div>
            </fieldset>
          </div>
          </>
        }
    </div>
  )
}

export default Managers
