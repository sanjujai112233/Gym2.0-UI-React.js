import { useState } from "react";
import Button from "../components/button";
import Input from "../components/Input";

function ForgetPassword() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    function handleSubmit() {
        e.preventDefault();

        setEmailError("");

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            setEmailError("Email is required");
            return;
        }

        if (!emailPattern.test(email)) {
            setEmailError("Please enter a valid email");
            return;
        }

        console.log("Reset password for:", email);

    }
    return (
        <div className="auth-page">
            <div className="auth-card">

                <h1>Forgot Password</h1>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label>Email</label>

                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailError("");
                            }}
                        />

                        {emailError && (
                            <p className="error">
                                {emailError}
                            </p>
                        )}

                    </div>

                    <Button
                        text="Reset Password"
                        type="submit"
                        className="auth-button"
                    />

                </form>

            </div>
        </div>

    );
}