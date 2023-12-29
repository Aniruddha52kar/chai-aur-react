import { useEffect, useState } from "react"


// UCI - ye hook direct use states se direct call kara dengi
function useCurrencyInfo (currency){
    // ek data banaye ge set data 
    const[data, setData]= useState({})
    //{empty} laga ke loop laga diye to carsh to nahi honga 
    useEffect(() => {
        // fetch ko call kar na syntex
        //API ki key aati hai string me to us se convert kar na padh ta hai 
        
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        // .then laga ke chaning kar sakh te hai 
        // .json se aaram se call ho jaye ga  
        // aur ek .then laga ke ye data ko hold kar na padhe ga aab

        
        .then((res) => res.json())
        // setData laga dena yaha par jo response aaye ga wo dkikhe ga 
        // jaruri nahi hai muje "." dot se hi access kar na padhe ga me [] bracket se bhi le sakh ta hu
      
        .then((res) => setData(res[currency]))
        //confused hore ho to console.log kar lo aur check kar lo data
       
        console.log(data);

    }, [currency]) // empty [] me currency dal do
    
    console.log(data);
    // check kare ge 
    return  data // data ko return kare ge 
}

// is ke liye hi function hai aapn custom hook bol te hai syntex

export default useCurrencyInfo;

// yaha aapn custom hook khatam ho gya 

// ye khatam ho gya part 1