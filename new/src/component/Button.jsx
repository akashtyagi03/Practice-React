import React from 'react'

const Button = ({onClick, para}) => {
  return (
    <button onClick={onClick}>{para}</button>
  )
}

export default Button
