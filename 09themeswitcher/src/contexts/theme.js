//3. create theme 

import { createContext, useContext } from "react";

// direct exprot kar sakh te hai wo funtion ke under 
export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme: () => {},
    lightTheme:() => {},
})//5. ek defalut variable ho object bana padhe ga 
//4. ye thoda diffrent syntax hai9 
//6. theme create ki hai dark and light 

//2nd method hai ye syntext export ki 
export const ThemeProvider = ThemeContext.Provider 
//7. imp custom hooks banate hai
//9. ye sab ek file me complite kar diya hum ne 

export default function useTheme(){
    return useContext(ThemeContext)
}

//8. coding stru