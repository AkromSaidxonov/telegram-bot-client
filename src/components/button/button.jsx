import React from 'react'

function button(props) {
  return (
    <button {...props} className={'button'+ props.className}/>
  )
}

export default button