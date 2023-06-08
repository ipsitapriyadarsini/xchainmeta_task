import { createContext, useContext, useEffect, useState } from "react"
import { getData } from "./services/getUserData";

const ThemeContext = createContext()

//create a custom hook
export const useTheme = () => useContext(ThemeContext);


const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false)

    return (
        <ThemeContext.Provider value={{ dark, setDark }}>
            <UserDataProvider>
                {children}
            </UserDataProvider>
        </ThemeContext.Provider>
    )
}
export default ThemeProvider

//without custom hook
// export const userContext = createContext()

const UserContext = createContext()
export const useGetData = () => useContext(UserContext)

export const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState("")

    useEffect(() => { 
        getData().then(res => {
            setUserData(res.results)
        })
    }, [])

    return (
        <UserContext.Provider value={{ userData }}>
            {children}
        </UserContext.Provider>
    )
}
