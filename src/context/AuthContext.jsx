import React, { createContext, useEffect, useState } from 'react'
import { getLocaleStorage, setLocaleStorage } from '../utils/LocalStorage'

export const AuthData = createContext()

const AuthContext = ({children}) => {
  // localStorage.clear()
    const [UserData, setUserData] = useState(null)
   useEffect(()=>{
   const {employee,admin} = getLocaleStorage()
   setLocaleStorage()
   setUserData({employee,admin})

   }, [])
  return (
  
    <div >
      <AuthData.Provider value={UserData}>
      {children}
      </AuthData.Provider>
    </div>
  )
}

export default AuthContext