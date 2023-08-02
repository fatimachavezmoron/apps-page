import { UserContext } from "./UserContext"
import { useState } from "react"



export const UserProvider = ({children}) => {

const [usuario, setUsuario] = useState({})

  return (
    <UserContext.Provider value={{usuario, setUsuario}}>
      {children}
    </UserContext.Provider>
  )
}
