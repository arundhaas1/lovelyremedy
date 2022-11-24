import React from 'react'
import "./Box.css"

function Box({state}) {
  return (
    <button className="box">{state}</button>
  )
}

export default Box;