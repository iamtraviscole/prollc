import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/fileState.scss'

const FileState = (props) => {
  const { fileState } = props.values

  return (
    <div className='fileState'>
      <StepHeader title='File State' />
      <fieldset>
        <div className='fileState__input-ctr'>
          <input
            type='radio'
            name='fileState'
            id='fileState__input-florida'
            value='Florida'
            checked={fileState === 'Florida'}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
           />
          <label htmlFor='fileState__input-florida'>
            Florida
          </label>
        </div>
        <div className='fileState__input-ctr'>
          <input
            type='radio'
            name='fileState'
            id='fileState__input-delaware'
            value='Delaware'
            checked={fileState === 'Delaware'}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
          />
          <label htmlFor='fileState__input-delaware'>
            Delaware <span>( + $50 )</span>
          </label>
        </div>
      </fieldset>
    </div>
  )
}

export default FileState
