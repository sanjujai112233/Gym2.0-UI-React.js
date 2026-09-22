import { useState } from "react";

function usePasswordToggle(){
    const[showPassword, setShowPassword] = useState(false);

    const togglePassword = () =>{
        setShowPassword(prev => !prev);
    };

    return (
        showPassword,
        togglePassword
    );

}
export default usePasswordToggle;