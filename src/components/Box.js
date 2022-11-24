import React from 'react'
import "./Box.css"

function Box(props) {
  return (
    <button className="box" onClick={props.onClick}>{props.state}</button>
  )
}

export default Box;