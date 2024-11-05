import React from 'react'

export const TitleComponents = (props) => {
  const {nameData} = props
  return (
    <div>
      <h2 className='title'>{nameData}</h2>
    </div>
  )
}
