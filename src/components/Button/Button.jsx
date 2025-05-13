import React from 'react'
import './Button.css'
const Button = ({ children, className = '', ...props }) => {
	return (
		<button {...props} className={`button ${className}`}>
			{children}
		</button>
	)
}
export default Button
