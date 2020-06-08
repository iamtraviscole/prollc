import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/fileState.scss'

const FileState = (props) => {
  const { fileState } = props.formik.values
  const { setPrices, prices } = props.addonPrices

  const handleChange = (e) => {
    if (e.target.value === 'Delaware') {
      setPrices({
        ...prices, fileState: 50
      })
    } else {
      setPrices({
        ...prices, fileState: 0
      })
    }
    props.formik.handleChange(e)
  }

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
            onChange={e => handleChange(e)}
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
            onChange={e => handleChange(e)}
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
