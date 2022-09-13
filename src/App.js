import './App.css';
import AddStyle from './ex/AddStyle';
import Footer from './ex/components/Footer';
import Header from './ex/components/Header';
import Login from './ex/components/login/Login';
import Memo from './ex/Memo';
import HomePage from './ex/pages/HomePage';
import LoginPage from './ex/pages/LoginPage';
import Ref from './ex/Ref';
import StateButton from './ex/StateButton';
import Sub from './ex/Sub';

// 리액트 콘솔 두번씩 찍히는 이유
// index.js에 컴포넌트가 <StrictMode> 로 감싸져 있음

function App() {
  return (
    <div>
      {/* <StateButton /> */}
      {/* <Sub /> */}
      {/* <Memo /> */}
      {/* <Ref /> */}
      {/* <AddStyle /> */}
      {/* <LoginPage /> */}
      <HomePage />
    </div>
  );
}

export default App;
