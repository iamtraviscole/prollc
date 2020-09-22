import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/ein.scss'

const CompanyNames = (props) => {
  const { ein } = props.formik.values
  const { handleChange } = props.formik

  return (
    <div className='ein'>
      <StepHeader
        title='Número de Identificación Tributaria'
        details='EIN, por sus siglas en inglés'
      />
      <div className='ein__details-input-outer-ctr'>
        <h3>Parte Responsable</h3>
        <p>La parte responsable es la persona que en última instancia posee o controla la entidad o que ejerce el control efectivo final sobre la entidad.</p>
        <div className='ein__details-input-ctr name'>
          <label htmlFor='ein__details-input-first'>Primer Nombre *</label>
          <input
            type='text'
            id='ein__details-input-first'
            name='ein.firstName'
            onChange={handleChange}
            value={ein.firstName}
          />
        </div>
        <div className='ein__details-input-ctr name'>
          <label htmlFor='ein__details-input-middle'>Segundo Nombre</label>
          <input
            type='text'
            id='ein__details-input-middle'
            name='ein.secondName'
            onChange={handleChange}
            value={ein.secondName}
          />
        </div>
        <div className='ein__details-input-ctr name'>
          <label htmlFor='ein__details-input-last'>Apellidos *</label>
          <input
            type='text'
            id='ein__details-input-last'
            name='ein.lastName'
            onChange={handleChange}
            value={ein.lastName}
          />
        </div>
      </div>
      <div className='ein__details-input-outer-ctr'>
        <p className='ein__id-number'>Si te aplica, favor de brindar a continuación el número de seguro social o ITIN de la parte responsable.  Si no tienes dichos números, puede dejar ambas casillas en blanco.</p>
        <div className='ein__details-input-ctr id-num'>
          <label htmlFor='ein__details-input-ssn'>Número de Seguro Social</label>
          <input
            type='text'
            id='ein__details-input-ssn'
            name='ein.ssn'
            onChange={handleChange}
            value={ein.ssn}
            disabled={ein.itin}
          />
        </div>
        <div className='ein__details-input-ctr id-num'>
          <label htmlFor='ein__details-input-itin'>Número ITIN</label>
          <input
            type='text'
            id='ein__details-input-itin'
            name='ein.itin'
            onChange={handleChange}
            value={ein.itin}
            disabled={ein.ssn}
          />
        </div>
      </div>
    </div>
  )
}

export default CompanyNames
