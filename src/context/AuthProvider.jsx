import React, { createContext } from 'react'

const AuthProvider = ({ children }) => {
  const AuthContext = createContext();
  return (
      <div>{ children}</div>
  )
}

export default AuthProvider