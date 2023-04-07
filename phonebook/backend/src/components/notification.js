import React from 'react'

const successStyle = {
  color: 'green',
  fontSize: 16,
  background: 'lightgrey',
  borderStyle: 'solid',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10
}

const errorStyle = {
  color: 'red',
  fontSize: 16,
  background: 'lightgrey',
  borderStyle: 'solid',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10
}

const Notification = ({message}) => {
  if (message === null) return null
  const style = message[1] ? errorStyle : successStyle

  return <div style={style}>{message}</div>
}

export default Notification