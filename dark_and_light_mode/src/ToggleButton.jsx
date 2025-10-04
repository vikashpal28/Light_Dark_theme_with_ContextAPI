import { use } from "react"
import { ThemeContext } from "./ContextAPI"

export const ToggleButton = () =>{
    const {theme , handletheme} = use(ThemeContext);
    return(
        <>
        <div className={`min-h-screen min-w-screen  flex flex-col justify-center items-center gap-8 ${theme === "dark"? "bg-gray-900 text-white" : "bg-white text-black"}`}>
           <h1 className="text-4xl">Dark Light Mode Website</h1>
           <h2 className="text-3xl">Hello!! My React v19 Fans</h2>
           <button className="bg-blue-500 p-4 rounded-md text-2xl text-white" onClick={handletheme}>{theme === "dark" ? "Switch to Light mode" : "Switch to Dark mode"}</button>
        </div>
        </>
    )
}