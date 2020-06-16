import React from 'react'

import '../../styles/ui/loading.scss'

const Loading = (props) => {
  return (
    <div className='loading'>
      <div className='loading__bounce1'></div>
      <div className='loading__bounce2'></div>
      <div className='loading__bounce3'></div>
    </div>
  )
}

export default Loading
