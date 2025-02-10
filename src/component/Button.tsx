import React from 'react'
interface ButtonProps{
    label: string,
    onClick:()=> void,
    disabled?:boolean   
}

const Button:React.FC<ButtonProps> = ({label,onClick,disabled=false}) => {
  return (
    <button 
    onClick={onClick} 
    disabled={disabled} 
    style={{
      padding: "10px 20px",
      fontSize: "16px",
      cursor: disabled ? "not-allowed" : "pointer",
      backgroundColor: disabled ? "#ccc" : "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
    }}
  >
    {label}
  </button>
  )
}

export default Button
