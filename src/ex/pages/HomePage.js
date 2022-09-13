import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/home/Home';

// http 요청 (fetch, axios, jquery사용x)

const HomePage = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    let data = [
      { id: 1, title: '제목 1', content: '내용 1' },
      { id: 2, title: '제목 2', content: '내용 2' },
      { id: 3, title: '제목 3', content: '내용 3' },
    ];

    setBoards([...data]);
  }, []);

  return (
    <div>
      <Header />
      <Home boards={boards} setBoards={setBoards} />
      <Footer />
    </div>
  );
};

export default HomePage;
