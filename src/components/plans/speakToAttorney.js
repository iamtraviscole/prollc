import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/speakToAttorney.scss'

const SpeakToAttorney = (props) => {
  const { speakToAttorney } = props.values

  return (
    <div className='speakToAttorney'>
      <StepHeader title='Would you like to speak with an attorney?' />
      <fieldset>
        <div className='speakToAttorney__input-ctr'>
          <input
            type='radio'
            name='speakToAttorney'
            id='speakToAttorney__input-yes'
            value='Yes'
            checked={speakToAttorney === 'Yes'}
            onChange={props.handleChange}
           />
          <label htmlFor='speakToAttorney__input-yes'>
            Yes ( included )
          </label>
        </div>
        <div className='speakToAttorney__input-ctr'>
          <input
            type='radio'
            name='speakToAttorney'
            id='speakToAttorney__input-no'
            value='No'
            checked={speakToAttorney === 'No'}
            onChange={props.handleChange}
          />
          <label htmlFor='speakToAttorney__input-no'>
            No
          </label>
        </div>
      </fieldset>
    </div>
  )
}

export default SpeakToAttorney
