import React from 'react'

import '../../styles/plans/fileState.scss'

const FileState = (props) => {
  return (
    <div className='fileState'>
      <h2>File State</h2>
      <fieldset>
        <div className='fileState__input-ctr'>
          <input defaultChecked
            type='radio'
            name='fileState'
            id='fileState__input-florida'
            value='Florida'
            onChange={props.handleChange}
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
            onChange={props.handleChange}
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
