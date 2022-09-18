import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import { setToken } from './redux/slices/Auth'


function App() {

  const dispatch = useDispatch
  const navigate = useNavigate();

  const authState = useSelector(state => state.auth)
  console.log("-> authState", authState);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    
    event.preventDefault();

    console.log('trying to log in...')

    const url = 'https://motion.propulsion-home.ch/backend/api/auth/token/'
    const jsObject = {
      email: email,
      password: password
    }
    console.log(jsObject.email)
    console.log(jsObject.password)
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
      // setToken(data.access)
      const tokenFromServer = data.access

      // Set token in redux
      dispatch(setToken(tokenFromServer))
    }
    )

    console.log(authState.token)

    // if (authState.token === undefined) {
    //     alert("Login first")
    //   return
    // }

    // navigate('/Shop')

  }





  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log('email: ', email)
  }

  const handlePWChange = (event) => {
    setPassword(event.target.value);
    console.log('pw: ', password)
  }

  const handleSignUp = () => {
    console.log('trying to sign up')
  }


  return (
    <div className="home-container">
      <Fragment>
        <Header />
        <div className='log-in-container'>
          <h1>Log In!</h1>
          <form onSubmit={(event) => { handleSubmit(event) }}>
            <label htmlFor='email'></label>
            E-mail
            <input id='email' className='email' type='text' placeholder='email...' onChange={handleEmailChange} />
            <label htmlFor='pw'> </label>
            Password
            <input id='email' className='email' type='password' placeholder='password...' onChange={handlePWChange} />
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

export default App;
