import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { setToken } from './redux/slices/Auth'


function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const authState = useSelector(state => state.token.token)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (event) => {

    event.preventDefault();

    const url = 'https://motion.propulsion-home.ch/backend/api/auth/token/'
    const jsObject = {
      email: email,
      password: password
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
      console.log(data.access)
      dispatch(setToken(data.access))
    }).then(data => {
      navigate('/shop')
    })

    // .then(data => {
    // handleNavigate()})
  }

  //navigation doesn't work yet, didn't figure out how to make that it can navigate after getting the token.
  //have to doubleclick the login button to make it work.
  //temporary login credentials:
  //email : xevibaj171@dnitem.com, pw: abcdefg

  // const handleNavigate = () => {
  //     // if (authState === undefined) {
  //     //   alert("Failed to log in, please try")
  //     //   return
  //     // }
  //     navigate('/shop')
  //   }


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePWChange = (event) => {
    setPassword(event.target.value);
  }

  //to be implemented with users
  const handleSignUp = () => {
    navigate('signup')

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
            <input id='email' className='email' type='email' placeholder='email...' onChange={handleEmailChange} />
            <label htmlFor='pw'> </label>
            Password
            <input id='password' className='password' type='password' placeholder='password...' onChange={handlePWChange} />
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
