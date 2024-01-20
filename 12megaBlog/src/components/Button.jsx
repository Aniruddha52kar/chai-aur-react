import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
    // className aur ...props aise kyu likhe kyu ki button me dekho
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
    </button> //  kyu ki class ko distrucher kar ke backticks me likha jata hai  ${} => is ke under un ko add kar na padh ta hai jese type, ClassName like that 
  )
}

export default Button
