import React, { useEffect, useState } from 'react';
import Home from '../components/home/Home';

// http 요청 (fetch, axios, jquery사용x)

const HomePage = () => {
  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    let data = [
      { id: 1, title: '제목 1', content: '내용 1' },
      { id: 2, title: '제목 2', content: '내용 2' },
      { id: 3, title: '제목 3', content: '내용 3' },
    ];

    setBoards([...data]);
    setUser({ id: 1, username: 'ssar' });
  }, []);

  return <Home boards={boards} setBoards={setBoards} user={user} />;
};

export default HomePage;
