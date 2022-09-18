import { Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useNavigate } from 'react-router-dom';


function App() {

  const navigate = useNavigate();
  // 
  const handleSubmit = (e) => {
    console.log('trying to log in...')
    navigate('/shop')}

  return (
    <div className="home-container">
      <Fragment>
        <Header />
        <div className='log-in-container'>
          <h1>Log In!</h1>
          <form onSubmit={(e) => {handleSubmit(e) }}>
            <label htmlFor='email'></label>
              E-mail
              <input id='email' className='email' type='text' placeholder='email...'></input>
            <label htmlFor='pw'> </label>
              Password
              <input id='email' className='email' type='password' placeholder='password...'></input>
            <button type='submit'>Log in</button>
          </form>
          <div className='sign-up-container'>
            <span>Not signed up yet?</span>
            <span className='signup'>Sign Up!</span>
          </div>
        </div>

        <Footer />
      </Fragment>
    </div>
  );
}

export default App;
