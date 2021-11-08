import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.component.scss";

const SignIn = () => {
    const [info, setInfo] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        // query document
        try {
            await auth.signInWithEmailAndPassword(info.email, info.password);
            setInfo({ email: "", password: "" });
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setInfo({ ...info, [name]: value });
    };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={info.email}
                    handleChange={handleChange}
                    label="Email"
                    required
                />

                <FormInput
                    name="password"
                    type="password"
                    value={info.password}
                    handleChange={handleChange}
                    label="Password"
                    required
                />

                <div className="buttons">
                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        {" "}
                        Sign in with Google{" "}
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
