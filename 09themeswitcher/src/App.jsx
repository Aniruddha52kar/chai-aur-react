import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  //1. file improt kar di git hub se hitesh ke taraf se
  //2. pahile context bana te hai  aur thoda diffrent banaye ge
// 3. create folder contexts/theme

const [themeMode, setThemeMode] = useState("light")

const lightTheme = () => {
  setThemeMode("light")
}

const darkTheme = ()=> {
  setThemeMode("dark")
}

// actual change in theme

//useEffect lele te hai jese run ho to aajaye sab


useEffect(() => {
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
}, [themeMode])


  return (
    //10. direct sab ko warp kar dete hai
    //11. sirf themeprovider laga ne se nahi hota un kiaap ko  value deni padh ti hai 
    //12 value dedi in ko values me themes ki
    //13. dubble braket me defind me kar na ye 
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card />
          </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
