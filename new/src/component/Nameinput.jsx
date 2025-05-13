import React from 'react'

const Nameinput = ({onChange, value, type}) => {
  return (
    <div>
      <input className='border-2' type={type} value={value} onChange={onChange} />
    </div>
  )
}

export default Nameinput 