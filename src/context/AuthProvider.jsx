import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext();

const AuthProvider = React.memo(({ children }) => {
  const [userData, setUserData] = useState([]);


  useEffect(() => {

    setLocalStorage();
    /* localStorage.clear(); */
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, [])


  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
})

export default AuthProvider