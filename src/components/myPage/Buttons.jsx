import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { useLogout } from '../../api/loginApi';
import { setLogIn } from '../../store/loginInfor';
import Button from '../login/Button';

export default function Buttons() {
  const { refetch } = useLogout();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <ButtonWrapper>
      <Button
        text="로그아웃"
        onClick={() => {
          refetch();
          dispatch(setLogIn({ login: false }));
          navigate('/');
        }}
      ></Button>
      <Button text="회원 정보 수정"></Button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
