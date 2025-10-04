import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
    const [theme , setTheme] = useState('dark');
    // toogle function
    const handletheme = () =>{
        setTheme((prevtheme) => prevtheme === "dark" ? "light" : "dark");
    }
   return <ThemeContext.Provider value={{theme , handletheme}}>
    {children}
    </ThemeContext.Provider>
}