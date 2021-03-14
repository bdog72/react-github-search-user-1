//
//

import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useAuth0 } from '@auth0/auth0-react';

import styled from 'styled-components';
import loginImg from '../images/login-img.svg';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <LoginWrapper>
      <div className='container'>
        <h1>*** Test User ***</h1>
        <h2>username: test@test.com</h2>
        <h2>password: test1234_</h2>
        <img src={loginImg} alt='github-user' />
        <h1>github user</h1>
        <button className='btn' onClick={loginWithRedirect}>
          login / sign up
        </button>
      </div>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;

  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }

  h2 {
    text-transform: lowercase;
    font-size: 1.5rem;
  }

  img {
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 1.5rem;
    font-size: 3rem;
  }
`;
export default Login;
