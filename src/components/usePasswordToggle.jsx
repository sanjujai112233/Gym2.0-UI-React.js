import usePasswordToggle from "../Hooks/usePAsswordToggle";
import Input from "./Input";

function PasswordInput(){

    const{showPassword, togglePassword} = usePasswordToggle();

    return (
        <div>
            <input type={showPassword ? "text" : "password"}></input>
            <button onClick={togglePassword}>
                {showPassword ? "Hide" : "Show"}
            </button>
        </div>

    );
}
export default PasswordInput;