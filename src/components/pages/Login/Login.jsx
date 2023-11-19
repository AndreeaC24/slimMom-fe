import React from 'react';
import {Background} from '../../Background/Background';
import {LoginForm} from './LoginForm';

const Login = () => {
  return (  
    <div className="flex-xl-row flex-sm-column d-flex flex-wrap justify-content-center align-items-center home-container overflow-hidden"> 
     <div className="col-xl-6 col-lg-12 col-sm-12"> <LoginForm/> </div>
      <div className="col-xl-6 col-lg-12"><Background/></div>
  </div> 
  );
};

export default Login;
