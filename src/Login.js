import React from 'react';
import './Login.css';
import rocketImg from './assets/rocket.png';
import {Signup} from './Components/Signup';

function Login() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid" src={rocketImg} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Login;
