import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Cutom App !</h1>
    </div>
  )
}

// const ReactElement = {
//   type:'a',
//   props:{
//       href: 'https://google.com',
//       target:'_blank'
//   },
//   children:'Click me to visit google'
// }

const anotherElement = (
  <a href="http://google.com" target='_blank'>
    Visit Google
  </a>
) 

const anotherUser = "chai aur react"


const reactElement = React.createElement(

    'a',
    {
      href:'https://google.com', target:'_blank' },
      'click me to visit google',
      anotherUser

)


ReactDOM.createRoot(document.getElementById('root')).
render(
  
   reactElement 
  // <App/>
  
)
