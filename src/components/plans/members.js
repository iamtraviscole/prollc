import React, { useState } from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/members.scss'

const Members = (props) => {
  const { members, companyAddress } = props.formik.values
  const { handleChange, handleBlur } = props.formik

  const [useCompanyAddress, setUseCompanyAddress] = useState({
    0: false,
    1: false,
    2: false,
    3: false
  })

  const handleCountChange = (e) => {
    const count = +e.target.value

    if (Number.isInteger(count)) {
      // removes extra member details if user lowers the member count after filling out form for higher member count
      // ex: user selects and fills out details for 3 members, then changes member count to 2
      for (let i = 3; i > +count - 1; i--) {
        members.memberDetails[i] = {
          corporateMember: false,
          companyName: '',
          firstName: '',
          secondName: '',
          lastName: '',
          proAddress: false,
          street: '',
          suite: '',
          city: '',
          state: '',
          zipcode: '',
          country: '',
          manager: false
        }
      }
    } else {
      // removes all member details if '5+' member count selected
      for (let i = 0; i < 4; i++) {
        members.memberDetails[i] = {
          corporateMember: false,
          companyName: '',
          firstName: '',
          secondName: '',
          lastName: '',
          proAddress: false,
          street: '',
          suite: '',
          city: '',
          state: '',
          zipcode: '',
          country: '',
          manager: false
        }
      }
    }

    handleChange(e)
  }

  const handleCorporateMemberChange = (e) => {
    const member = members.memberDetails[e.target.dataset.memberIndex]

    if (e.target.checked) {
      member.firstName = ''
      member.secondName = ''
      member.lastName = ''
    } else {
      member.companyName = ''
    }

    handleChange(e)
  }

  const handleMemberCompanyAddress = (e) => {
    const memberIndex = e.target.dataset.memberIndex
    const member = members.memberDetails[memberIndex]

    if (!useCompanyAddress[memberIndex]) {
      member.street = companyAddress.street
      member.suite = companyAddress.suite
      member.city = companyAddress.city
      member.state = companyAddress.state
      member.zipcode = companyAddress.zipcode
      member.country = companyAddress.country

      setUseCompanyAddress({...useCompanyAddress, [memberIndex]: true})
    }
  }

  const handleAddressChange = (e) => {
    const memberIndex = e.target.dataset.memberIndex

    setUseCompanyAddress({...useCompanyAddress, [memberIndex]: false})

    handleChange(e)
  }

  const handleProAddressChange = (e) => {
    const member = members.memberDetails[e.target.dataset.memberIndex]

    if (e.target.checked) {
      member.street = ''
      member.suite = ''
      member.city = ''
      member.state = ''
      member.zipcode = ''
      member.country = ''
    }

    handleChange(e)
  }

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
            id={`members__details-${i}-input-corporate`}
            name={`members.memberDetails[${i}].corporateMember`}
            onChange={handleCorporateMemberChange}
            checked={members.memberDetails[i].corporateMember}
            value={members.memberDetails[i].corporateMember}
            data-member-index={i}
          />
          <label htmlFor={`members__details-${i}-input-corporate`}>
            Este miembro es una persona jurídica
          </label>
        </div>
        <div className='members__details-input-outer-ctr'>
          {members.memberDetails[i].corporateMember
            ? companyName
            : personName}
        </div>
        {companyAddress.proAddress === 'No'
          ? <div className='members__use-company-address-btn-ctr'>
              <button
                type='button'
                onClick={handleMemberCompanyAddress}
                data-member-index={i}
              >
                Usar la dirección de tu compañía
              </button>
            </div>
          : <div className='members__use-pro-address-ctr'>
              <input
                type='checkbox'
                id={`members__details-${i}-input-proAddress`}
                name={`members.memberDetails[${i}].proAddress`}
                onChange={handleProAddressChange}
                checked={members.memberDetails[i].proAddress}
                value={members.memberDetails[i].proAddress}
                data-member-index={i}
              />
              <label htmlFor={`members__details-${i}-input-proAddress`}>
                Usar la dirección brindada por ProLLC
              </label>
            </div>
        }
        {!members.memberDetails[i].proAddress &&
          <>
          <div className='members__details-input-outer-ctr'>
            <div className='members__details-input-ctr street'>
              <label htmlFor='members__details-input-street'>Dirección *</label>
              <input
                type='text'
                id='members__details-input-street'
                name={`members.memberDetails[${i}].street`}
                onChange={handleAddressChange}
                value={members.memberDetails[i].street}
                data-member-index={i}
              />
            </div>
            <div className='members__details-input-ctr suite'>
              <label htmlFor='members__details-input-suite'>DPTO / Oficina / Suite</label>
              <input
                type='text'
                id='members__details-input-suite'
                name={`members.memberDetails[${i}].suite`}
                onChange={handleAddressChange}
                value={members.memberDetails[i].suite}
                data-member-index={i}
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
                onChange={handleAddressChange}
                value={members.memberDetails[i].city}
                data-member-index={i}
              />
            </div>
            <div className='members__details-input-ctr'>
              <label htmlFor='members__details-input-state'>Estado *</label>
              <input
                type='text'
                id='members__details-input-state'
                name={`members.memberDetails[${i}].state`}
                onChange={handleAddressChange}
                value={members.memberDetails[i].state}
                data-member-index={i}
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
                onChange={handleAddressChange}
                value={members.memberDetails[i].zipcode}
                data-member-index={i}
              />
            </div>
            <div className='members__details-input-ctr country'>
              <label htmlFor='members__details-input-country'>País *</label>
              <input
                type='text'
                id='members__details-input-country'
                name={`members.memberDetails[${i}].country`}
                onChange={handleAddressChange}
                value={members.memberDetails[i].country}
                data-member-index={i}
              />
            </div>
          </div>
          </>
        }
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
          onChange={handleCountChange}
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
