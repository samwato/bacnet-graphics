import React, { useState } from 'react'
import Draggable from 'react-draggable'

export default (props) => {
  let { ip, deviceId, pointInstance, objectType, name, value, error, errorMessage } = props.point
  const [x_axis, setXAxis] = useState(props.point.x_axis)
  const [y_axis, setYAxis] = useState(props.point.y_axis)

  const handleDrag = (e) => {
    console.log(e)
    //
    // setXAxis(e.pageX - (e.target.offsetWidth / 2))
    // setYAxis(e.pageY - 80 - (e.target.offsetHeight / 2))
    // window.addEventListener('mousemove', (e) => {
    //   setXAxis(e.pageX - (e.target.offsetWidth / 2))
    //   setYAxis(e.pageY - 80 - (e.target.offsetHeight / 2))
    // })
  }

  const handleStart = (e) => {}
  const handleStop = (e) => {}

  return (
    <Draggable
      defaultPosition={{ x: x_axis, y: y_axis }}
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}
      >

      <div className="container">

        <div className="name_container">
          <span>{name}</span>
        </div>

        <div className="value_container">
          <span>{value}</span>
        </div>

        {error ? <div className="error_icon">
          <span>Err</span>
        </div> : null }

        <div className="error_message">
          <span>{errorMessage}</span>
        </div>

        <style jsx>{`
          .name_container {
            padding: 5px;
            background-color: #eee;
          }
          .value_container {
            padding: 5px 10px;
          }
          .container {
            position: absolute;
            font-size: 0.75em;
            background-color: #fff;
            display: flex;
            box-shadow: 3px 3px 7px 0px rgba(0,0,0,0.15);
          }
        `}</style>

      </div>

    </Draggable>

  )
}
