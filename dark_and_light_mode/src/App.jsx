import { ThemeProvider } from "./ContextAPI";
import { ToggleButton } from "./ToggleButton";

const App = () =>{
  return(
    <>
    <ThemeProvider>
   <ToggleButton/>
    </ThemeProvider>
    
    </>
    
    
  )
}

export default App;