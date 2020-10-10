import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/fileState.scss'

const FileState = (props) => {
  const { fileState } = props.formik.values

  const handleChange = (e) => {
    props.formik.setFieldValue('registeredAgent.state', e.target.value)

    props.formik.handleChange(e)
  }

  return (
    <div className='fileState'>
      <StepHeader title='Elegir Estado' />
      <fieldset>
        <div className='fileState__input-ctr'>
          <input
            type='radio'
            name='fileState'
            id='fileState__input-florida'
            value='Florida'
            checked={fileState === 'Florida'}
            onChange={handleChange}
           />
          <label htmlFor='fileState__input-florida'>
            Florida
          </label>
        </div>
        <div className='fileState__input-ctr'>
          <input
            type='radio'
            name='fileState'
            id='fileState__input-wyoming'
            value='Wyoming'
            checked={fileState === 'Wyoming'}
            onChange={handleChange}
          />
          <label htmlFor='fileState__input-wyoming'>
            Wyoming
          </label>
        </div>
        <div className='fileState__input-ctr'>
          <input
            type='radio'
            name='fileState'
            id='fileState__input-delaware'
            value='Delaware'
            checked={fileState === 'Delaware'}
            onChange={handleChange}
          />
          <label htmlFor='fileState__input-delaware'>
            Delaware <span>(+ $15)</span>
          </label>
        </div>
      </fieldset>
    </div>
  )
}

export default FileState
