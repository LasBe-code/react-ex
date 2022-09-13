import React from 'react';
import styled from 'styled-components';

const StyledFooterDiv = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Footer = () => {
  return (
    <StyledFooterDiv>
      <div>
        <ul>
          <li>오시는 길 : 인천시 연수구</li>
          <li>전화번호 : 01037764339</li>
        </ul>
      </div>
    </StyledFooterDiv>
  );
};

export default Footer;
