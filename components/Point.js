import React, { useState } from 'react'
import Draggable from 'react-draggable'
import { ModeContext } from './mode-context'

export default (props) => {
  let { ip, deviceId, pointInstance, objectType, name, value, error, errorMessage } = props.point
  const [x_axis, setXAxis] = useState(props.point.x_axis)
  const [y_axis, setYAxis] = useState(props.point.y_axis)

  const handleDrag = (e) => {}
  const handleStart = (e) => {}
  const handleStop = (e) => {}

  return (
    <ModeContext.Consumer>
      {({ editMode }) => {
        console.log(editMode)
        return (
          <Draggable
            defaultPosition={{ x: x_axis, y: y_axis }}
            grid={[10, 10]}
            onStart={handleStart}
            onDrag={handleDrag}
            onStop={handleStop}
            disabled={editMode ? false : true}>

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
                  padding: 5px 10px;
                  border-right: 1px solid rgb(219,219,219);
                }
                .name_container:hover {
                  cursor: move;
                  border-right: 1px solid rgb(219,219,219);
                }
                .value_container {
                  padding: 5px 10px;
                }
                .container {
                  position: absolute;
                  font-size: 0.75em;
                  background-color: #fff;
                  display: flex;
                  border: 1px solid rgb(219,219,219);
                  height: 50px;
                  box-sizing: border-box;
                }
                .container:hover {
                  border: 1px solid rgb(181,181,181);
                }
              `}</style>
            </div>
          </Draggable>
        )}}
      </ModeContext.Consumer>
    )

}
