import { createContext, useState } from "react"
// Types
import { FormContextProps, FormContextType, ValueType } from "../../types"



export const formContext = createContext( {} as FormContextType )

function FormContextProvider({children}: FormContextProps) {
    const [value,setValue] = useState<ValueType>({
        username:'',
        password:'',
        isLoggedIn:false,
    })
  return (
    <formContext.Provider value={{value,setValue}}>{children}</formContext.Provider>
  )
}

export default FormContextProvider