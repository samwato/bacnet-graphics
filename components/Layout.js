import React, { useState } from 'react'
import Header from './Header'
import { ModeContext } from './mode-context'

export default (props) => {

  // Edit mode configuration
  const [ editMode, setMode ] = useState(false)
  const toggleMode = () => {
    setMode(!editMode)
  }
  const mode = {
    editMode: editMode,
    toggleMode: toggleMode
  }

  return (
    <ModeContext.Provider value={mode}>
      <div className="container">
        <Header />
        {props.children}
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            font-size: 18px;
            font-weight: 400;
            color: #333;
            font-family: sans-serif;
          }
          h1 {
            font-weight: 700;
          }
          p {
            margin-bottom: 10px;
          }
        `}</style>
      </div>
    </ModeContext.Provider>
  )
}
