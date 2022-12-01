import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getUserInfor } from '../../api/loginApi';

export default function MyInfor() {
  const [myInfor, setMyInfor] = useState();

  const getData = async () => {
    const data = await getUserInfor();
    setMyInfor(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PageContent>
      <Each>닉네임: {myInfor?.username}</Each>
      <Each>이메일: {myInfor?.email}</Each>
      <Each>성별: {myInfor?.gender === 'M' ? '남성' : '여성'}</Each>
      <Each>전화번호: {myInfor?.phone}</Each>
      <Each>생일: {myInfor?.birthday}</Each>
      <Each>가입날짜: {myInfor?.joinedAt}</Each>
    </PageContent>
  );
}

const PageContent = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Each = styled.div`
  font-size: 15px;
`;
