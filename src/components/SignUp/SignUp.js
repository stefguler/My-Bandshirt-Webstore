import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import './style.css';


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

        if (email === '') {
            alert('please enter an email adress to continue!')
            return
        }

        const url = 'https://motion.propulsion-home.ch/backend/api/auth/registration/'
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
            console.log(data)
            navigate('/validation')
        })
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }


    return (
            <Fragment>
                <Header />
                <div className='register-container'>
                    <h1>Welcome to the Store</h1>
                    <h3>Please register with a valid E-mail!</h3>
                    <form onSubmit={(event) => { handleSubmit(event) }}>
                        <label htmlFor='email'>
                            Email
                            <input id='email' className='email' type='email' placeholder='email...' onChange={handleEmailChange} />
                        </label>
                        {/* <div className='buttons'> */}
                        <button type='submit'>Sign up!</button>
                        {/* <button type='submit'>Sign up</button> */}
                        {/* </div> */}
                    </form>
                </div>
                <Footer />
            </Fragment>
    );
}

export default SignUp;
