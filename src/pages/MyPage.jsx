import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Buttons from '../components/myPage/Buttons';
import MyInfor from '../components/myPage/MyInfor';

export default function MyPage() {
  const isLogin = useSelector((state) => state.isLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
  }, []);

  return (
    <PageWrapper>
      <Title>My Page</Title>
      <MyInfor />
      <Buttons />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 700px;
  border: 1px solid black;
  margin: 20px auto;
`;

const Title = styled.h1`
  margin-bottom: 50px;
`;
