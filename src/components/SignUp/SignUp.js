import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'


function SignUp() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("")



    const handleSubmit = async (event) => {

        event.preventDefault();

        await register()

    }

    const register = async () => {
        /*step: 1 -> register, url: https://motion.propulsion-home.ch/backend/api%20/auth/registration/
        Payload:*/

        const url = 'https://motion.propulsion-home.ch/backend/api%20/auth/registration/'
        const jsObject = {
            email: email,
        }

        const config = {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(jsObject)
        }

        fetch(url, config).then(response => {
            return response.json()
        }).then(data => {
            navigate('/validation')
        })
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
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
                        <label htmlFor='email'>
                            Email
                            <input id='email' className='email' type='text' placeholder='email...' onChange={handleEmailChange} />
                        </label>
                        {/* <div className='buttons'> */}
                        <button type='submit'>Sign Up!</button>
                        {/* <button type='submit'>Sign up</button> */}
                        {/* </div> */}
                    </form>
                </div>
                <Footer />
            </Fragment>
        </div>
    );
}

export default SignUp;
