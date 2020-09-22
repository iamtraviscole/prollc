import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/members.scss'

const Members = (props) => {
  const { members } = props.formik.values
  const { handleChange, handleBlur } = props.formik

  const memberDetailsBlocks = []
  for (let i = 0; i < members.memberCount && i < 4; i++ ) {
    const personName = (
      <>
        <div className='members__details-input-ctr  name'>
          <label htmlFor='members__details-input-first'>Primer Nombre *</label>
          <input
            type='text'
            id='members__details-input-first'
            name={`members.memberDetails[${i}].firstName`}
            onChange={handleChange}
            value={members.memberDetails[i].firstName}
          />
        </div>
        <div className='members__details-input-ctr name'>
          <label htmlFor='members__details-input-middle'>Segundo Nombre</label>
          <input
            type='text'
            id='members__details-input-middle'
            name={`members.memberDetails[${i}].secondName`}
            onChange={handleChange}
            value={members.memberDetails[i].secondName}
          />
        </div>
        <div className='members__details-input-ctr name'>
          <label htmlFor='members__details-input-last'>Apellidos *</label>
          <input
            type='text'
            id='members__details-input-last'
            name={`members.memberDetails[${i}].lastName`}
            onChange={handleChange}
            value={members.memberDetails[i].lastName}
          />
        </div>
      </>
    )

    const companyName = (
      <div className='members__details-input-outer-ctr'>
        <div className='members__details-input-ctr  company'>
          <label htmlFor='members__details-input-company-name'>Nombre de la compañía *</label>
          <input
            type='text'
            id='members__details-input-company-name'
            name={`members.memberDetails[${i}].companyName`}
            onChange={handleChange}
            value={members.memberDetails[i].companyName}
          />
        </div>
      </div>
    )

    memberDetailsBlocks.push(
      <div key={i} className='members__details-block'>
        <h3>Datos – Miembro {i+1}</h3>
        <div className='members__details-corporate-ctr'>
          <input
            type='checkbox'
            id='members__details-input-corporate'
            name={`members.memberDetails[${i}].corporateMember`}
            onChange={handleChange}
            checked={members.memberDetails[i].corporateMember}
            value={members.memberDetails[i].corporateMember}
          />
          <label htmlFor='members__details-input-corporate'>Este miembro es una persona jurídica</label>
        </div>
        <div className='members__details-input-outer-ctr'>
          {members.memberDetails[i].corporateMember
            ? companyName
            : personName}
        </div>
        <div className='members__details-input-outer-ctr'>
          <div className='members__details-input-ctr street'>
            <label htmlFor='members__details-input-street'>Dirección *</label>
            <input
              type='text'
              id='members__details-input-street'
              name={`members.memberDetails[${i}].street`}
              onChange={handleChange}
              value={members.memberDetails[i].street}
            />
          </div>
          <div className='members__details-input-ctr suite'>
            <label htmlFor='members__details-input-suite'>DPTO / Oficina / Suite</label>
            <input
              type='text'
              id='members__details-input-suite'
              name={`members.memberDetails[${i}].suite`}
              onChange={handleChange}
              value={members.memberDetails[i].suite}
            />
          </div>
        </div>
        <div className='members__details-input-outer-ctr'>
          <div className='members__details-input-ctr'>
            <label htmlFor='members__details-input-city'>Ciudad *</label>
            <input
              type='text'
              id='members__details-input-city'
              name={`members.memberDetails[${i}].city`}
              onChange={handleChange}
              value={members.memberDetails[i].city}
            />
          </div>
          <div className='members__details-input-ctr'>
            <label htmlFor='members__details-input-state'>Estado *</label>
            <input
              type='text'
              id='members__details-input-state'
              name={`members.memberDetails[${i}].state`}
              onChange={handleChange}
              value={members.memberDetails[i].state}
            />
          </div>
        </div>
        <div className='members__details-input-outer-ctr'>
          <div className='members__details-input-ctr zipcode'>
            <label htmlFor='members__details-input-zipcode'>Código Postal *</label>
            <input
              type='text'
              id='members__details-input-zipcode'
              name={`members.memberDetails[${i}].zipcode`}
              onChange={handleChange}
              value={members.memberDetails[i].zipcode}
            />
          </div>
          <div className='members__details-input-ctr country'>
            <label htmlFor='members__details-input-country'>País *</label>
            <input
              type='text'
              id='members__details-input-country'
              name={`members.memberDetails[${i}].country`}
              onChange={handleChange}
              value={members.memberDetails[i].country}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='members'>
      <StepHeader
        title='Miembros'
        details='Los miembros son los dueños de la compañía'
      />
      <div className='members__count-ctr'>
        <div className='members__count-header-ctr'>
          <h3>¿Cuántos Miembros?</h3>
        </div>
        <select
          name='members.memberCount'
          id='members__count'
          onChange={handleChange}
          onBlur={handleBlur}
          value={members.memberCount}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5+</option>
        </select>
      </div>
      <div className='members__details-ctr'>
        {memberDetailsBlocks}
      </div>
    </div>
  )
}

export default Members
