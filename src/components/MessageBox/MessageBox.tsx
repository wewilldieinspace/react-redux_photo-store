import React from 'react'

export const MessageBox: React.FC = ({ children }): JSX.Element => {
  return (
    <p 
      className="message_bar"
    >
      <span>¯\_(ツ)_/¯</span><br />
      { children }
    </p>
  )
}