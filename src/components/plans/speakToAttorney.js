import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/speakToAttorney.scss'

const SpeakToAttorney = (props) => {
  const { speakToAttorney } = props.formik.values
  const { handleChange } = props.formik

  return (
    <div className='speakToAttorney'>
      <StepHeader title='¿Deseas consultar con un abogado?' />
      <fieldset>
        <div className='speakToAttorney__input-ctr'>
          <input
            type='radio'
            name='speakToAttorney'
            id='speakToAttorney__input-yes'
            value='Yes'
            checked={speakToAttorney === 'Yes'}
            onChange={handleChange}
           />
          <label htmlFor='speakToAttorney__input-yes'>
            Sí (incluido)
          </label>
        </div>
        <div className='speakToAttorney__input-ctr'>
          <input
            type='radio'
            name='speakToAttorney'
            id='speakToAttorney__input-no'
            value='No'
            checked={speakToAttorney === 'No'}
            onChange={handleChange}
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
