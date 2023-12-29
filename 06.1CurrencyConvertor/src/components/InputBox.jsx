
import React, {useId} from 'react'
//New Hook "useID" - is a react hook for generating unique IDs that can be passed to accessibility attributes
// function laga ke box banaye ge input wala


function InputBox({
    //ye hooks hai pure 

    label,
    amount,// amount change honga to stat bhi change honga 
    onAmountChange,// ye method hai
    onCurrencyChange,// change value 
    currencyOptions = [],// empty me hi pass karu to hum [] bracket leliye user kese use kare ga kar ke 
    selectCurrency = "usd",// list hai pr select kon si kar ni hai 
    amountDisable = false, // use case lena chiye itna jaruri nahi hai pr lelo 
    //2. ye is liye hai kyu ki production grid app me kam padhe te hai
    // aab ye sab use kese kar na 
    className = "",
}) {

    const amountInputId = useId() // ye syntax dal na 
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor='(amountInputId' //label to ho gya amount id leke 
                 className="text-black/40 mb-2 inline-block">
                    {label} 
                </label>
                <input
                    id={amountInputId}// yaha add kar diye 
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"// ye input disabel hai ya enable hai ye chake kare disablecurrency ke through
                    disabled ={amountDisable}
                    value= {amount} // amount user se liya tha 
                    onChange={(e)=>onAmountChange &&
                         onAmountChange(Number(e.target.value))}//event fire kare auar amount call kare onAmountChange se
                    //&& agare availabe hai to  hum onAmountChange kare ge ye ek chaker hai
                    // from ho gya num ho gya update hora hai sab 


                    
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    
                    value={ selectCurrency }// map kar denge value ke sath  options me hai
                    //onAmountchange wagare change me kar na hai tab logic banta hai 
                    onChange={(e) => onCurrencyChange &&
                    onCurrencyChange(e.target.value)} // ye fild disabe hai ya enable hai
                    disabled={currencyDisable}

                >   
            

                        {currencyOptions.map((currency)=>(
                              <option key={currency}
                                      value={currency}>
                          </option> 
                          // display kare ga currency
                           // ye aapna component ban gya // agar loops chaiye ya use kare to "key " ko dhyan rakhe  
                             // map lagado map se value mile gi
                        //currency ka access mil gya 
                        ))} 
                      

                    
                      
                
                </select>
            </div>
        </div>
    );
}

export default InputBox; // apna sara kam ho gya hai bass  chijo ko jamana baki hai go to app.jsx
