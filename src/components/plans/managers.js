import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/managers.scss'

const Managers = (props) => {
  const { managers, members } = props.formik.values
  const { handleChange, handleBlur } = props.formik

  const handleCountChange = (e) => {
    const count = +e.target.value

    if (Number.isInteger(count)) {
      // removes extra manager details if user lowers the manager count after filling out form for higher manager count
      // ex: user selects and fills out details for 3 managers, then changes manager count to 2
      for (let i = 3; i > +count - 1; i--) {
        managers.managerDetails[i] = {
          firstName: '',
          secondName: '',
          lastName: '',
          street: '',
          suite: '',
          city: '',
          state: '',
          zipcode: '',
          country: ''
        }
      }
    } else {
      // removes all manager details if '5+' manager count selected
      for (let i = 0; i < 4; i++) {
        managers.managerDetails[i] = {
          firstName: '',
          secondName: '',
          lastName: '',
          street: '',
          suite: '',
          city: '',
          state: '',
          zipcode: '',
          country: ''
        }
      }
    }

    handleChange(e)
  }

  const managerDetailsBlocks = []
  for (let i = 0; i < managers.managerCount && i < 4; i++ ) {
    managerDetailsBlocks.push(
      <div key={i} className='managers__details-block'>
        <h3>Información del gerente {i+1}</h3>
        <div className='managers__details-input-outer-ctr'>
          <div className='managers__details-input-ctr  name'>
            <label htmlFor='managers__details-input-first'>Primer Nombre *</label>
            <input
              type='text'
              id='managers__details-input-first'
              name={`managers.managerDetails[${i}].firstName`}
              onChange={handleChange}
              value={managers.managerDetails[i].firstName}
            />
          </div>
          <div className='managers__details-input-ctr name'>
            <label htmlFor='managers__details-input-middle'>Segundo Nombre</label>
            <input
              type='text'
              id='managers__details-input-middle'
              name={`managers.managerDetails[${i}].secondName`}
              onChange={handleChange}
              value={managers.managerDetails[i].secondName}
            />
          </div>
          <div className='managers__details-input-ctr name'>
            <label htmlFor='managers__details-input-last'>Apellidos *</label>
            <input
              type='text'
              id='managers__details-input-last'
              name={`managers.managerDetails[${i}].lastName`}
              onChange={handleChange}
              value={managers.managerDetails[i].lastName}
            />
          </div>
        </div>
        <div className='managers__details-input-outer-ctr'>
          <div className='managers__details-input-ctr street'>
            <label htmlFor='managers__details-input-street'>Dirección *</label>
            <input
              type='text'
              id='managers__details-input-street'
              name={`managers.managerDetails[${i}].street`}
              onChange={handleChange}
              value={managers.managerDetails[i].street}
            />
          </div>
          <div className='managers__details-input-ctr suite'>
            <label htmlFor='managers__details-input-suite'>DPTO / Oficina / Suite</label>
            <input
              type='text'
              id='managers__details-input-suite'
              name={`managers.managerDetails[${i}].suite`}
              onChange={handleChange}
              value={managers.managerDetails[i].suite}
            />
          </div>
        </div>
        <div className='managers__details-input-outer-ctr'>
          <div className='managers__details-input-ctr'>
            <label htmlFor='managers__details-input-city'>Ciudad *</label>
            <input
              type='text'
              id='managers__details-input-city'
              name={`managers.managerDetails[${i}].city`}
              onChange={handleChange}
              value={managers.managerDetails[i].city}
            />
          </div>
          <div className='managers__details-input-ctr'>
            <label htmlFor='managers__details-input-state'>Estado *</label>
            <input
              type='text'
              id='managers__details-input-state'
              name={`managers.managerDetails[${i}].state`}
              onChange={handleChange}
              value={managers.managerDetails[i].state}
            />
          </div>
        </div>
        <div className='managers__details-input-outer-ctr'>
          <div className='managers__details-input-ctr zipcode'>
            <label htmlFor='managers__details-input-zipcode'>Código Postal *</label>
            <input
              type='text'
              id='managers__details-input-zipcode'
              name={`managers.managerDetails[${i}].zipcode`}
              onChange={handleChange}
              value={managers.managerDetails[i].zipcode}
            />
          </div>
          <div className='managers__details-input-ctr country'>
            <label htmlFor='managers__details-input-country'>País *</label>
            <input
              type='text'
              id='managers__details-input-country'
              name={`managers.managerDetails[${i}].country`}
              onChange={handleChange}
              value={managers.managerDetails[i].country}
            />
          </div>
        </div>
      </div>
    )
  }

  const displayMembers = members.memberDetails.map((member, i) => {
    if (member.companyName || member.firstName) {
      return (
        <div key={i} className='managers__member-inner-ctr'>
          <input
            type='checkbox'
            id={`managers__member[${i}]`}
            name={`members.memberDetails[${i}].manager`}
            onChange={handleChange}
            checked={members.memberDetails[i].manager}
            value={members.memberDetails[i].manager}
          />
          <label htmlFor={`managers__member[${i}]`}>
            {`${member.companyName || member.firstName} ${member.lastName}`}
          </label>
        </div>
      )
    } else {
      return null
    }
  })

  return (
    <div className='managers'>
      <StepHeader
        title='Gerentes'
        details='Los gerentes son los que administran la compañía'
      />
      <div className='managers__member-ctr'>
        <h3>¿Algunos de estos miembros son gerentes?</h3>
        {displayMembers}

      </div>
      <div className='managers__count-ctr'>
        <div className='managers__count-header-ctr'>
          <h3>Si tienes gerentes adicionales, favor de escribir su información a continuación</h3>
          <h4>Número de gerentes adicionales</h4>
        </div>
        <select
          name='managers.managerCount'
          id='managers__count'
          onChange={handleCountChange}
          onBlur={handleBlur}
          value={managers.managerCount}
        >
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5+</option>
        </select>
      </div>
      <div className='managers__details-ctr'>
        {managerDetailsBlocks}
      </div>
    </div>
  )
}

export default Managers
