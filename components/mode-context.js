import React from 'react'

export const ModeContext = React.createContext({
  editMode: false,
  toggleMode: () => {}
})
