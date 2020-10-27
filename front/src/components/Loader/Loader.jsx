import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '120px',
        height: '120px',
        margin: 'auto',
        display: 'block',
      }}
    >
      <span className='sr-only'>Wczytuję</span>
    </Spinner>
  )
}

export default Loader
