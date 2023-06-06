import { createContext, useContext, useState } from "react"

const ThemeContext = createContext()

//create a custom hook
export const useTheme = () => useContext(ThemeContext);


const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false)

    return (
        <ThemeContext.Provider value={{ dark, setDark }}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider 