import React, { createContext, useState } from 'react'

export const ToggleDataContext = createContext();
export const valContext = createContext();

const ToggleContext = ({children}) => {
    const [theme, setTheme] = useState("dark");
  return (
    <div>
        <ToggleDataContext.Provider value={{theme, setTheme}}>
            <valContext.Provider value="context">
                {children}
            </valContext.Provider>
        </ToggleDataContext.Provider>
    </div>
  )
}

export default ToggleContext;