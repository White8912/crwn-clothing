import { useState } from 'react';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sigin.styles.scss';

const SignIn = () => {
    const [inputVal, setInputVal] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = event => {
        event.preventDefault();

        setInputVal({ email: "", password: "" })
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setInputVal({ ...inputVal, [name]: value })
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="email" type="email" value={inputVal.email} handleChange={handleChange} label="email" required />
                <FormInput name="password" type="password" value={inputVal.password} handleChange={handleChange} label="password" required />
                <div className='buttons'>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >{' '}Sign In with Google{' '}</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;