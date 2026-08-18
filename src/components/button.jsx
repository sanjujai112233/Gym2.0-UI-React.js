function Button({text, type = "button", className

      }){
    return (
    <button type={type}
    className={className}
    
    >{text}</button>);
}
export default Button