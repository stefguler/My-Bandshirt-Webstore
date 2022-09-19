import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { setToken } from '../../redux/slices/Auth'
import './style.css'


function SignUp() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const authState = useSelector(state => state.token.token)

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")
    const [validationCode, setValidationcode] = useState('')



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
        
        const url = 'https://motion.propulsion-home.ch/backend/api/auth/registration/validation/'
        const jsObject = {
            email: email,
            username: username,
            code: validationCode,
            password: password,
            password_repeat: passwordRepeat,
            first_name: firstname,
            last_name: lastname
        }

        console.log(jsObject)

        const config = {
            method: "PATCH",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(jsObject)
        }

        await fetch(url, config).then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
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

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
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

    return (
            <Fragment>
                <Header />
                <div className='validation-container'>
                    <h1>Last step:</h1>
                    <h1>Validate your email!</h1>
                    <p>An Email with a validation code was sent to  your E-mail, if it was valid.
                        <br></br>
                        Use it along the other information below to validate to our store!
                    </p>
                    <form onSubmit={(event) => { handleSubmit(event) }}>
                        <label htmlFor='firstname'>
                            Firstname
                            <input id='firstname' className='firstname' type='text' placeholder='firstname...' onChange={handleFirstnameChange} />
                        </label>
                        <label htmlFor='lastname'>
                            Lastname
                            <input id='lastname' className='lastname' type='text' placeholder='lastname...' onChange={handleLastnameChange} />
                        </label>
                        <label htmlFor='username'>
                            Username
                            <input id='username' className='username' type='text' placeholder='usernam...' onChange={handleUsernameChange} />
                        </label>

                        <label htmlFor='email'>
                            Email
                            <input id='email' className='email' type='email' placeholder='email...' onChange={handleEmailChange} />
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
                        <button type='submit'>Validate!</button>
                        {/* <button type='submit'>Sign up</button> */}
                        {/* </div> */}
                    </form>
                </div>
                <Footer />
            </Fragment>
    );
}

export default SignUp;
