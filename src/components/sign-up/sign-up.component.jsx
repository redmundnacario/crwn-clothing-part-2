import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.component.scss";

const SignUp = () => {
    const [info, setInfo] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const { displayName, email, password, confirmPassword } = info;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            await createUserProfileDocument(user, { displayName });

            setInfo({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        } catch (error) {
            alert(error.message);
            console.error(error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInfo({ ...info, [name]: value });
    };

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    name="displayName"
                    type="text"
                    value={displayName}
                    handleChange={handleChange}
                    label="Name"
                    required
                />

                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    handleChange={handleChange}
                    label="Email"
                    required
                />

                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    handleChange={handleChange}
                    label="Password"
                    required
                />

                <FormInput
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    handleChange={handleChange}
                    label="Confirm Password"
                    required
                />

                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    );
};

export default SignUp;
