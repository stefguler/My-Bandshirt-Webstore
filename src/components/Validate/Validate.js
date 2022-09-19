import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { setToken } from '../../redux/slices/Auth'


function SignUp() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const authState = useSelector(state => state.token.token)

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")
    const [validationCode, setValidationcode] = useState(undefined)



    const handleSubmit = async (event) => {

        event.preventDefault();

        await validate()

    }

    const validate = async () => {
        /*step: 2 -> validate, url: https://motion.propulsion-home.ch/backend/api%20/auth/registration/validation/
        Payload:
        "email": "xevibaj171@dnitem.com",
        "username": "xevi",
        "code": "28962",
        "password": "abcdefg",
        "password_repeat": "abcdefg",
        "first_name": "xevi",
        "last_name": "baj"*/

        if (password !== passwordRepeat) {
            alert('passwords do not match')
            return
        }
        
        const url = 'https://motion.propulsion-home.ch/backend/api%20/auth/registration/validation/'
        const jsObject = {
            email: email,
            username: email,
            code: validationCode,
            password: password,
            password_repeat: passwordRepeat,
            first_name: firstname,
            last_name: lastname
        }

        const config = {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(jsObject)
        }

        await fetch(url, config).then(response => {
            return response.json()
        }).then(data => {
            dispatch(setToken(data.access))
        }).then(data => {
            navigate('/shop')
        })

    }

    const handleFirstnameChange = (event) => {
        setFirstname(event.target.value);
    }

    const handleLastnameChange = (event) => {
        setLastname(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePWChange = (event) => {
        setPassword(event.target.value);
    }

    const handlePWRepeatChange = (event) => {
        setPasswordRepeat(event.target.value);
    }

    const handleValidationcodeChange = (event) => {
        setValidationcode(event.target.value);
    }

    //to be implemented with users
    const handleSignUp = () => {
        console.log('trying to sign up')
    }


    return (
        <div className="sign-up-container">
            <Fragment>
                <Header />
                <div className='log-in-container'>
                    <h1>Welcome to the Store</h1>
                    <h3>Sign Up!</h3>
                    <form onSubmit={(event) => { handleSubmit(event) }}>
                        <label htmlFor='firstname'>
                            Firstname
                            <input id='firstname' className='firstname' type='text' placeholder='firstname...' onChange={handleFirstnameChange} />
                        </label>
                        <label htmlFor='lastname'>
                            Lastname
                            <input id='lastname' className='lastname' type='text' placeholder='lastname...' onChange={handleLastnameChange} />
                        </label>
                        <label htmlFor='email'>
                            Email
                            <input id='email' className='email' type='text' placeholder='email...' onChange={handleEmailChange} />
                        </label>
                        <label htmlFor='validationCode'>
                            Validation Code
                            <input id='validationCode' className='validationCode' type='number' placeholder='validation code...' onChange={handleValidationcodeChange} />
                        </label>

                        <label htmlFor='password'>
                        Password
                        <input id='password' className='password' type='password' placeholder='password...' onChange={handlePWChange} />
                        </label>
                        <label htmlFor='password_repeat'>
                        Repeat Password
                        <input id='password_repeat' className='password_repeat' type='password' placeholder='repeat password...' onChange={handlePWRepeatChange} />
                        </label>
                        {/* <div className='buttons'> */}
                        <button type='submit'>Log in</button>
                        {/* <button type='submit'>Sign up</button> */}
                        {/* </div> */}
                    </form>
                    <div className='sign-up-container'>
                        <p>Not signed up yet?</p>
                        <span className='signup' onClick={handleSignUp}>Sign Up!</span>
                    </div>
                </div>
                <Footer />
            </Fragment>
        </div>
    );
}

export default SignUp;
