import React from 'react'
import BannerLogin from '../Components/Login/BannerLogin';
import { BottomLogin } from '../Components/Login/BottomLogin';
import { MidsectionLogin } from '../Components/Login/MidsectionLogin';
import Footer from '../Components/Organisms/Footer';

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