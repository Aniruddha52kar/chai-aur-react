import { useState } from "react"
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

// 1. ye sab import kar diye aapn ne 

function App() {

    const [amount, setAmount] = useState(0) // amount set hongi ek 
    const [from, setFrom] = useState("usd")// from ko dikhane 
    const [to, setTo] = useState("inr")// to ko dikha ne ke liye 
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(from) // ab ye crash nahi honga 

   const options =  Object.key(currencyInfo) // ye currencyInfo se data pass honga 

   // how to swap variables are as follows

   const swap = ()=> {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
   } // ye method hai swap kar ne ka 

   //user ne bola hai to multiplication kar te hai 
 
   const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
   }
   // ek variable mai diclear kar diye us se apn ne 

    

  return (


      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                         
                      }} // from jabhi submit hoto jaye  hum nahi chate to method laga liye method ka nam hai "convert"
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount = {amount} //ek amount chaiye wo state mai se dediye
                              currencyOptions={options} // jo aap ne options likh the yad hoto wo aaye ga idhar 
                              onCurrencyChange={(currency)=>
                            setAmount(amount)} // jo bhi new amt aaya ho change ho aagar waha change ho gya to yaha ho
                             selectCurrency={from} 
                             onAmountChange={(amount)=> setAmount(amount)}// debaging value dal do amount ki 
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick = {swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                                label="To"
                                amount={convertedAmount} // yahi final hai
                                currencyOptions={options} // same hai
                                onCurrencyChange={(currency)=> setTo(currency)}
                                selectCurrency={from}
                                amountDisable
                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to
                           {to.toUpperCase()}// kis me kis se covert kar na hai
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App