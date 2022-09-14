import './App.css';
import Footer from './ex/components/Footer';
import Header from './ex/components/Header';
import React from 'react';
import HomePage from './ex/pages/HomePage';
import LoginPage from './ex/pages/LoginPage';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// 리액트 콘솔 두번씩 찍히는 이유
// index.js에 컴포넌트가 <StrictMode> 로 감싸져 있음

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/login/:id" exact={true} element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
