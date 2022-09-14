import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const StyledDeleteButton = styled.button`
  color: ${props => (props.username === 'ssar' ? 'blue' : 'red')};
`;

// 위 스타일 상속
const StyledAddButton = styled(StyledDeleteButton)`
  background-color: black;
`;

const Home = props => {
  // 구조분할 할당
  const { boards, setBoards, user } = props;

  console.log('Home props', props);

  return (
    <div>
      <Button variant="primary">Primary</Button>
      <h1>홈페이지입니다.</h1>
      <StyledDeleteButton
        username={user.username}
        onClick={() => setBoards([])}
      >
        전체삭제
      </StyledDeleteButton>
      <StyledAddButton username={user.username}>스타일 상속</StyledAddButton>
      {boards.map((board, index) => (
        <h3 key={index}>
          제목 : {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
