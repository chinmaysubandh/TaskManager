import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext();

const AuthProvider = React.memo(({ children }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const hasEmployees = localStorage.getItem('employees');
    const hasAdmin = localStorage.getItem('admin');

    if (!hasEmployees || !hasAdmin) {
      setLocalStorage();
    }

    const { employees } = getLocalStorage();
    setUserData(employees || []);
  }, []);

  useEffect(() => {
    if (userData.length > 0) {
      localStorage.setItem('employees', JSON.stringify(userData));
    }
  }, [userData]);

  return (
    <div>
      <AuthContext.Provider value={{ userData, setUserData }}>
        {children}
      </AuthContext.Provider>
    </div>
  )
})

export default AuthProvider