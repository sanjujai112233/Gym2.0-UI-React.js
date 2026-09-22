import { useState } from "react";
import Button from "../components/button";
import Input from "../components/Input";
import "../styles/auth.css";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "./Login.module.css"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();



        setEmailError("");
        setPasswordError("");

        let isValid = true;

        if (!email) {
            setEmailError("Email is Required");
            isValid = false;
        }

        if (!password) {
            setPasswordError("Password is Required");
            isValid = false;
        }

        if (!isValid) {
            return;
        }


        localStorage.setItem("isLoggedIn", "true");
        navigate("/dashboard");


        console.log(email);
        console.log(password);
    }

    return (
        <div className="authpage">
            <div className="authcard">

                <h2 className={styles.title}>Gym Management Login</h2>

                <form onSubmit={handleSubmit}>

                    {/* Email */}
                    <div className="form-group">
                        <label>Email</label>

                        <Input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailError("");
                            }}
                        />

                        {emailError && (
                            <p className="error">{emailError}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="form-group">
                        <label>Password</label>

                        <Input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setPasswordError("");
                            }}
                        />

                        {passwordError && (
                            <p className="error">{passwordError}</p>
                        )}
                    </div>

                    <Button
                        text="Login"
                        type="submit"
                        className="authbutton"
                    />

                </form>

            </div>
        </div>
    );
}

export default Login;




