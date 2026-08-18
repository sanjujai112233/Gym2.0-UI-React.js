import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/button";
import "../styles/auth.css"
function Register() {
    const [gymName, setGymName] = useState("");
    const [ownerName, setOwnerNAme] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPasswrod] = useState("");


    const [gymNameError, setGymNameError] = useState("");
    const [ownerNameError, setOwnerNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        setGymNameError("");
        setOwnerNameError("");
        setPhoneError("");
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");

        let isValid = true;
        const phonePattern = /^[0-9]{10}$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!gymName) {
            setGymNameError("Gym name is required");
            isValid = false;
        }
        if (!ownerName) {
            setOwnerNameError("Owner name is required");
            isValid = false;
        }
        if (!phone) {
            setPhoneError("Phone number is required");
            isValid = false;
        } else if (!phonePattern.test(phone)) {
            setPhoneError(
                "Phone number must contain 10 digits"
            );
            isValid = false;
        }

        if (!email) {
            setEmailError("Email is required");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            setEmailError("Please enter a valid email");
            isValid = false;
        }

        if (!password) {
            setPasswordError("Password is required");
            isValid = false;
        } else if (password.length < 6) {
            setPasswordError(
                "Password must be at least 6 characters"
            );
            isValid = false;
        }

        if (!confirmPassword) {
            setConfirmPasswordError(
                "Please confirm your password"
            );
            isValid = false;
        } else if (password !== confirmPassword) {
            setConfirmPasswordError(
                "Passwords do not match"
            );
            isValid = false;
        }

        if (!isValid) {
            return;
        }


        console.log({
            gymName,
            ownerName,
            phone,
            email,
            password,
            confirmPassword
        })
    }



    return (
        <>
            <div className="auth-page">
                <div className="auth-card">


                    <h1>Register Page</h1>

                    <form onSubmit={handleSubmit} >
                        <div className="form-group">


                            <label>Gym Name</label>
                            <Input type="text"
                                placeholder="Enter Gym Name"
                                value={gymName}
                                onChange={(e) => setGymName(e.target.value)}
                            />
                            {
                                gymNameError && (
                                    <p className="error"> {gymNameError}</p>
                                )
                            }</div>
                        <div className="form-group">
                            <label>Owner Name</label>
                            <Input type="text"
                                placeholder="Enter Owner Name"
                                value={ownerName}
                                onChange={(e) => setOwnerNAme(e.target.value)}
                            />
                            {ownerNameError && (
                                <p className="error">
                                    {ownerNameError}
                                </p>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <Input type="tel"
                                placeholder="Enter Phone No."
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            {phoneError && (
                                <p className="error">
                                    {phoneError}
                                </p>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <Input type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {emailError && (
                                <p className="error">
                                    {emailError}
                                </p>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <Input type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {passwordError && (
                                <p className="error">
                                    {passwordError}
                                </p>
                            )}
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <Input type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPasswrod(e.target.value);
                                    setConfirmPasswordError("")

                                }}
                            />
                            {confirmPasswordError && (
                                <p className="error">
                                    {confirmPasswordError}
                                </p>
                            )}
                        </div>
                        <Button
                            text="Register"
                            type="submit"
                            className="auth-button"
                        />
                    </form>
                </div>
            </div>
        </>


    );
}

export default Register;