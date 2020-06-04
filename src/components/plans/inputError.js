import React from 'react'

import '../../styles/plans/inputError.scss'

const InputError = (props) => {
  const {objName, valueName, formik} = props

  let error = null
  if (objName) {
    if (formik.errors[objName] &&
    formik.errors[objName][valueName]
    && formik.touched[objName] &&
    formik.touched[objName][valueName]) {
      error = formik.errors[objName][valueName]
    }
  } else {
    if (formik.error[valueName] && formik.touched[valueName]) {
      error = formik.error[valueName]
    }
  }


  return (
    <div className='inputError__err-ctr'>
      <p>{error}</p>
    </div>
  )
}

export default InputError
