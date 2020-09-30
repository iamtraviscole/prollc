import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/industry.scss'

const Industry = (props) => {
  const { industry } = props.formik.values
  const { handleChange, handleBlur } = props.formik

  const handleOtherChange = (e) => {
    if (e.target.value !== 'Otro') {
      props.formik.setFieldValue('industry.other', '')
    }

    handleChange(e)
  }

  const displayOther = industry.industry === 'Otro' ? (
      <div className='industry__other-ctr'>
        <input
          type='text'
          name='industry.other'
          id='industry__other'
          placeholder='Especificar'
          onChange={handleChange}
          value={industry.other}
        />
      </div>
    ): null

  return (
    <div className='industry'>
      <StepHeader title='Objeto' />
      <select
        name='industry.industry'
        onChange={handleOtherChange}
        onBlur={handleBlur}
        value={industry.industry}
      >
        <option value=''>Escoger Objeto</option>
        <option>Cuidado de salud y asistencia social</option>
        <option>Agente/corredor al por mayor</option>
        <option>Construcción</option>
        <option>Alquiler y arrendamiento</option>
        <option>Transporte y almacenamiento</option>
        <option>Alojamiento y servicios de alimentación</option>
        <option>Otro, al por mayor</option>
        <option>Ventas al detalle</option>
        <option>Bienes raíces</option>
        <option>Manufactura</option>
        <option>Finanzas y seguros</option>
        <option>Otro</option>
      </select>
      {displayOther}
    </div>
  )
}

export default Industry
