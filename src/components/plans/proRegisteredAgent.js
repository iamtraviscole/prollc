import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/proRegisteredAgent.scss'

const ProRegisteredAgent = (props) => {
  const { registeredAgent } = props.formik.values

  const handleChange = (e) => {
    if (e.target.name === 'registeredAgent.proRegisteredAgent' &&
    e.target.value === 'Yes') {
      props.formik.setFieldValue('registeredAgent.corporateRegisteredAgent', false)
      props.formik.setFieldValue('registeredAgent.companyName', '')
      props.formik.setFieldValue('registeredAgent.firstName', '')
      props.formik.setFieldValue('registeredAgent.secondName', '')
      props.formik.setFieldValue('registeredAgent.lastName', '')
      props.formik.setFieldValue('registeredAgent.street', '')
      props.formik.setFieldValue('registeredAgent.suite', '')
      props.formik.setFieldValue('registeredAgent.city', '')
      props.formik.setFieldValue('registeredAgent.state', '')
      props.formik.setFieldValue('registeredAgent.zipcode', '')
      props.formik.setFieldValue('registeredAgent.country', '')
    }

    if (e.target.name === 'registeredAgent.corporateRegisteredAgent' &&
    e.target.checked) {
      props.formik.setFieldValue('registeredAgent.firstName', '')
      props.formik.setFieldValue('registeredAgent.secondName', '')
      props.formik.setFieldValue('registeredAgent.lastName', '')
    }

    props.formik.handleChange(e)
  }

  let personOrCompanyName = !registeredAgent.corporateRegisteredAgent
    ? (
        <>
          <div className='proRegisteredAgent__details-input-ctr  name'>
            <label htmlFor='proRegisteredAgent__details-input-first'>Primer Nombre *</label>
            <input
              type='text'
              id='proRegisteredAgent__details-input-first'
              name='registeredAgent.firstName'
              onChange={handleChange}
              value={registeredAgent.firstName}
            />
          </div>
          <div className='proRegisteredAgent__details-input-ctr name'>
            <label htmlFor='proRegisteredAgent__details-input-middle'>Segundo Nombre</label>
            <input
              type='text'
              id='proRegisteredAgent__details-input-middle'
              name='registeredAgent.secondName'
              onChange={handleChange}
              value={registeredAgent.secondName}
            />
          </div>
          <div className='proRegisteredAgent__details-input-ctr name'>
            <label htmlFor='proRegisteredAgent__details-input-last'>Apellidos *</label>
            <input
              type='text'
              id='proRegisteredAgent__details-input-last'
              name='registeredAgent.lastName'
              onChange={handleChange}
              value={registeredAgent.lastName}
            />
          </div>
        </>
      )
    : (
        <div className='proRegisteredAgent__details-input-outer-ctr'>
          <div className='proRegisteredAgent__details-input-ctr  company'>
            <label htmlFor='proRegisteredAgent__details-input-company-name'>
              Nombre de la compañía *
            </label>
            <input
              type='text'
              id='proRegisteredAgent__details-input-company-name'
              name='registeredAgent.companyName'
              onChange={handleChange}
              value={registeredAgent.companyName}
            />
          </div>
        </div>
      )

  return (
    <div className='proRegisteredAgent'>
      <StepHeader
        title='Agente Registrado'
        details='El agente registrado es la persona encargada de recibir la correspondencia oficial del estado y judicial de los tribunales – nombramiento obligatorio.'
      />
      <fieldset>
        <div className='proRegisteredAgent__input-ctr'>
          <input
            type='radio'
            name='registeredAgent.proRegisteredAgent'
            id='proRegisteredAgent__input-no'
            value='No'
            checked={registeredAgent.proRegisteredAgent === 'No'}
            onChange={handleChange}
          />
          <label htmlFor='proRegisteredAgent__input-no'>
            Ya tengo un Agente Registrado
          </label>
        </div>
        <div className='proRegisteredAgent__input-ctr'>
          <input
            type='radio'
            name='registeredAgent.proRegisteredAgent'
            id='proRegisteredAgent__input-yes'
            value='Yes'
            checked={registeredAgent.proRegisteredAgent === 'Yes'}
            onChange={handleChange}
           />
          <label htmlFor='proRegisteredAgent__input-yes'>
            Quiero que ProLLC sea mi agente registrado (Gratis por un año)
          </label>
        </div>
      </fieldset>
      {registeredAgent.proRegisteredAgent === 'No' &&
        <div className='proRegisteredAgent__details-ctr'>
          <h3>Información del Agente Registrado</h3>
          <div className='proRegisteredAgent__details-corporate-ctr'>
            <input
              type='checkbox'
              id='proRegisteredAgent__details-input-corporate'
              name='registeredAgent.corporateRegisteredAgent'
              onChange={handleChange}
              checked={registeredAgent.corporateRegisteredAgent}
              value={registeredAgent.corporateRegisteredAgent}
            />
            <label htmlFor='proRegisteredAgent__details-input-corporate'>
              Mi Agente Registrado es una compañía
            </label>
          </div>
          <div className='proRegisteredAgent__details-input-outer-ctr'>
            {personOrCompanyName}
          </div>
          <div className='proRegisteredAgent__details-input-outer-ctr'>
            <div className='proRegisteredAgent__details-input-ctr street'>
              <label htmlFor='proRegisteredAgent__details-input-street'>Dirección *</label>
              <input
                type='text'
                id='proRegisteredAgent__details-input-street'
                name='registeredAgent.street'
                onChange={handleChange}
                value={registeredAgent.street}
              />
            </div>
            <div className='proRegisteredAgent__details-input-ctr suite'>
              <label htmlFor='proRegisteredAgent__details-input-suite'>DPTO / Oficina / Suite</label>
              <input
                type='text'
                id='proRegisteredAgent__details-input-suite'
                name='registeredAgent.suite'
                onChange={handleChange}
                value={registeredAgent.suite}
              />
            </div>
          </div>
          <div className='proRegisteredAgent__details-input-outer-ctr'>
            <div className='proRegisteredAgent__details-input-ctr'>
              <label htmlFor='proRegisteredAgent__details-input-city'>Ciudad *</label>
              <input
                type='text'
                id='proRegisteredAgent__details-input-city'
                name='registeredAgent.city'
                onChange={handleChange}
                value={registeredAgent.city}
              />
            </div>
            <div className='proRegisteredAgent__details-input-ctr'>
              <label htmlFor='proRegisteredAgent__details-input-state'>Estado *</label>
              <input
                type='text'
                id='proRegisteredAgent__details-input-state'
                name='registeredAgent.state'
                onChange={handleChange}
                value={registeredAgent.state}
              />
            </div>
          </div>
          <div className='proRegisteredAgent__details-input-outer-ctr'>
            <div className='proRegisteredAgent__details-input-ctr zipcode'>
              <label htmlFor='proRegisteredAgent__details-input-zipcode'>Código Postal *</label>
              <input
                type='text'
                id='proRegisteredAgent__details-input-zipcode'
                name='registeredAgent.zipcode'
                onChange={handleChange}
                value={registeredAgent.zipcode}
              />
            </div>
            <div className='proRegisteredAgent__details-input-ctr country'>
              <label htmlFor='proRegisteredAgent__details-input-country'>País *</label>
              <input
                type='text'
                id='proRegisteredAgent__details-input-country'
                name='registeredAgent.country'
                onChange={handleChange}
                value={registeredAgent.country}
              />
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default ProRegisteredAgent
