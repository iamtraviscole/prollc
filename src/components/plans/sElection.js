import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/sElection.scss'

const SElection = (props) => {
  const value = props.values.sElection

  return (
    <div className='sElection'>
      <StepHeader
        title='Would you like to make an S-Election?'
        // TODO: add modal for details
        details='Click here for more details about S-Elections'
      />
      <fieldset>
        <div className='sElection__input-ctr'>
          <input
            type='radio'
            name='sElection'
            id='sElection__input-no'
            value='No'
            checked={value === 'No'}
            onChange={props.handleChange}
          />
          <label htmlFor='sElection__input-no'>
            No
          </label>
        </div>
        <div className='sElection__input-ctr'>
          <input
            type='radio'
            name='sElection'
            id='sElection__input-yes'
            value='Yes'
            checked={value === 'Yes'}
            onChange={props.handleChange}
           />
          <label htmlFor='sElection__input-yes'>
            Yes
          </label>
        </div>
      </fieldset>
    </div>
  )
}

export default SElection
