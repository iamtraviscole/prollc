import React from 'react'

import StepHeader from './stepHeader'
import CheckIcon from '../../images/svgs/check-icon.svg'

import '../../styles/plans/proAddress.scss'

const ProAddress = (props) => {
  const { companyAddress } = props.formik.values

  const handleChange = (e) => {
    if (e.target.name === 'companyAddress.proAddress' &&
    e.target.value === 'Yes') {
      props.formik.setFieldValue('companyAddress.street', '')
      props.formik.setFieldValue('companyAddress.suite', '')
      props.formik.setFieldValue('companyAddress.city', '')
      props.formik.setFieldValue('companyAddress.state', '')
      props.formik.setFieldValue('companyAddress.zipcode', '')
      props.formik.setFieldValue('companyAddress.country', '')
    }

    props.formik.handleChange(e)
  }

  return (
    <div className='proAddress'>
      <StepHeader title='Domicilio de la Compañía' />
      <fieldset>
        <div className='proAddress__input-ctr'>
          <input
            type='radio'
            name='companyAddress.proAddress'
            id='proAddress__no'
            value='No'
            checked={companyAddress.proAddress === 'No'}
            onChange={handleChange}
           />
          <label htmlFor='proAddress__no'>
            Ya tengo un domicilio para la compañía
          </label>
        </div>
        <div className='proAddress__input-ctr'>
          <input
            type='radio'
            name='companyAddress.proAddress'
            id='proAddress__yes'
            value='Yes'
            checked={companyAddress.proAddress === 'Yes'}
            onChange={handleChange}
          />
          <label htmlFor='proAddress__yes'>
            Quiero que ProLLC me brinde una dirección profesional con correo virtual <span>(+ $39/mes)</span>
          </label>
        </div>
        <div className='proAddress__virtual-details'>
          <h4>Dirección Profesional con Correo Virtual</h4>
          <ul>
            <li><CheckIcon />Dirección Física</li>
            <li><CheckIcon />Correo Virtual</li>
            <li><CheckIcon />Imagen Profesional</li>
            <li><CheckIcon />Privado</li>
            <li><CheckIcon />Correo escaneado y enviado a tu correo electrónico</li>
            <li><CheckIcon />Sin contrato</li>
          </ul>
        </div>
      </fieldset>
      {companyAddress.proAddress === 'No' &&
        <div className='proAddress__address-ctr'>
          <h3>Dirección de tu compañía</h3>
          <div className='proAddress__address-input-outer-ctr'>
            <div className='proAddress__address-input-ctr street'>
              <label htmlFor='proAddress__address-input-street'>Dirección *</label>
              <input
                type='text'
                id='proAddress__address-input-street'
                name='companyAddress.street'
                onChange={handleChange}
                value={companyAddress.street}
              />
              <div className='proAddress__address-error-ctr'>
              </div>
            </div>
            <div className='proAddress__address-input-ctr suite'>
              <label htmlFor='proAddress__address-input-suite'>DPTO / Oficina / Suite</label>
              <input
                type='text'
                id='proAddress__address-input-suite'
                name='companyAddress.suite'
                onChange={handleChange}
                value={companyAddress.suite}
              />
            </div>
          </div>
          <div className='proAddress__address-input-outer-ctr'>
            <div className='proAddress__address-input-ctr'>
              <label htmlFor='proAddress__address-input-city'>Ciudad *</label>
              <input
                type='text'
                id='proAddress__address-input-city'
                name='companyAddress.city'
                onChange={handleChange}
                value={companyAddress.city}
              />
            </div>
            <div className='proAddress__address-input-ctr'>
              <label htmlFor='proAddress__address-input-state'>Estado *</label>
              <input
                type='text'
                id='proAddress__address-input-state'
                name='companyAddress.state'
                onChange={handleChange}
                value={companyAddress.state}
              />
            </div>
          </div>
          <div className='proAddress__address-input-outer-ctr'>
            <div className='proAddress__address-input-ctr zipcode'>
              <label htmlFor='proAddress__address-input-zipcode'>Código Postal *</label>
              <input
                type='text'
                id='proAddress__address-input-zipcode'
                name='companyAddress.zipcode'
                onChange={handleChange}
                value={companyAddress.zipcode}
              />
            </div>
            <div className='proAddress__address-input-ctr country'>
              <label htmlFor='proAddress__address-input-country'>País *</label>
              <input
                type='text'
                id='proAddress__address-input-country'
                name='companyAddress.country'
                onChange={handleChange}
                value={companyAddress.country}
              />
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default ProAddress
