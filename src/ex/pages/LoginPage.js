import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from '../components/login/Login';

const LoginPage = props => {
  const { id } = useParams();
  console.log("LoginPage's useParams() : ", useParams());

  return <Login />;
};

export default LoginPage;
