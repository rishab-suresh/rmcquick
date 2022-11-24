import React from 'react'
import BannerLogin from '../Components/Login/BannerLogin';
import { BottomLogin } from '../Components/Login/BottomLogin';
import { MidsectionLogin } from '../Components/Login/MidsectionLogin';

const Login = () => {
  return (
    <div>
      <BannerLogin/>
      <MidsectionLogin/>
      <BottomLogin/>
    </div>
  )
}
export default Login;