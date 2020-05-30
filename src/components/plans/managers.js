import React from 'react'

import StepHeader from './stepHeader'

import '../../styles/plans/managers.scss'

const Managers = (props) => {

  const managerDetailsBlocks = []
  for (let i = 0; i < props.values.managerCount && i < 5; i++ ) {
    managerDetailsBlocks.push(
      <div key={i} className='managers__details-block'>
        <h3>Additional manager {i+1} details</h3>
        <div className='managers__details-input-outer-ctr'>
          <div className='managers__details-input-ctr  name'>
            <label htmlFor='managers__details-input-first'>First Name *</label>
            <input
              type='text'
              id='managers__details-input-first'
              name={`managerDetails[${i}].firstName`}
              onChange={props.handleChange}
              value={props.values.managerDetails[i].firstName}
            />
          </div>
          <div className='managers__details-input-ctr name'>
            <label htmlFor='managers__details-input-middle'>Second Name</label>
            <input
              type='text'
              id='managers__details-input-middle'
              name={`managerDetails[${i}].middleName`}
              onChange={props.handleChange}
              value={props.values.managerDetails[i].middleName}
            />
          </div>
          <div className='managers__details-input-ctr name'>
            <label htmlFor='managers__details-input-last'>Last Name *</label>
            <input
              type='text'
              id='managers__details-input-last'
              name={`managerDetails[${i}].lastName`}
              onChange={props.handleChange}
              value={props.values.managerDetails[i].lastName}
            />
          </div>
        </div>
        <div className='managers__details-input-outer-ctr'>
          <div className='managers__details-input-ctr street'>
            <label htmlFor='managers__details-input-street'>Street *</label>
            <input
              type='text'
              id='managers__details-input-street'
              name={`managerDetails[${i}].street`}
              onChange={props.handleChange}
              value={props.values.managerDetails[i].street}
            />
          </div>
          <div className='managers__details-input-ctr suite'>
            <label htmlFor='managers__details-input-suite'>Suite / Office / Apt</label>
            <input
              type='text'
              id='managers__details-input-suite'
              name={`managerDetails[${i}].suite`}
              onChange={props.handleChange}
              value={props.values.managerDetails[i].suite}
            />
          </div>
        </div>
        <div className='managers__details-input-outer-ctr'>
          <div className='managers__details-input-ctr'>
            <label htmlFor='managers__details-input-city'>City *</label>
            <input
              type='text'
              id='managers__details-input-city'
              name={`managerDetails[${i}].city`}
              onChange={props.handleChange}
              value={props.values.managerDetails[i].city}
            />
          </div>
          <div className='managers__details-input-ctr'>
            <label htmlFor='managers__details-input-state'>State *</label>
            <input
              type='text'
              id='managers__details-input-state'
              name={`managerDetails[${i}].state`}
              onChange={props.handleChange}
              value={props.values.managerDetails[i].state}
            />
          </div>
        </div>
        <div className='managers__details-input-outer-ctr'>
          <div className='managers__details-input-ctr zipcode'>
            <label htmlFor='managers__details-input-zipcode'>Zipcode *</label>
            <input
              type='text'
              id='managers__details-input-zipcode'
              name={`managerDetails[${i}].zipcode`}
              onChange={props.handleChange}
              value={props.values.managerDetails[i].zipcode}
            />
          </div>
          <div className='managers__details-input-ctr country'>
            <label htmlFor='managers__details-input-country'>Country *</label>
            <input
              type='text'
              id='managers__details-input-country'
              name={`managerDetails[${i}].country`}
              onChange={props.handleChange}
              value={props.values.managerDetails[i].country}
            />
          </div>
        </div>
      </div>
    )
  }

  const displayMembers = props.values.memberDetails.map((member, i) => {
    if (member.companyName || member.firstName) {
      return (
        <div key={i} className='managers__member-inner-ctr'>
          <input
            type='checkbox'
            id={`managers__member[${i}]`}
            name={`memberDetails[${i}].manager`}
            onChange={props.handleChange}
            checked={props.values.memberDetails[i].manager}
            value={props.values.memberDetails[i].manager}
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
        title='Managers'
        details='Those in control of the company'
      />
      <div className='managers__member-ctr'>
        <h3>Are any of these members also managers?</h3>
        {displayMembers}

      </div>
      <div className='managers__count-ctr'>
        <div className='managers__count-header-ctr'>
          <h3>If you have additional managers, please fill out their details below</h3>
          <h4>Number of additional managers</h4>
        </div>
        <select
          name='managerCount'
          id='managers__count'
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.managerCount}
        >
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
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
