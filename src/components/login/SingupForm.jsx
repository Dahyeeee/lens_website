import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Popup from './Popup';

const pwReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export default function SingupForm() {
  //const Idref = useRef()
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwValidty, setPwValidty] = useState(false);
  const [isSecondPwFocused, setisSecondPwFocused] = useState(false);
  const [pwMatch, setPwMatch] = useState(false);
  const [email, setEmail] = useState('');
  const [emailValidty, setEmailValidty] = useState(false);
  // const [gender, setGender] = useState('')
  const [isPwFocused, setIsPwFocused] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const checkRepetition = async (e) => {
    e.preventDefault();
    const target = e.target.id;
    if (target === 'email') {
      if (emailValidty) {
        console.log('유효함!');
      } else {
        setPopupMessage('유효하지 않는 형식의 이메일입니다.');
        setOpenPopup(true);
      }
    }

    if (target === 'id') {
      setPopupMessage('사용할 수 있는 ID입니다.');
      setOpenPopup(true);
    }
  };

  const checkPwMatch = (e) => {
    const value = e.target.value.trim();
    if (value === pw) {
      setPwMatch(true);
    } else {
      setPwMatch(false);
    }
  };

  const handleComplete = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const validty = pwReg.test(pw);
    if (validty) {
      setPwValidty(true);
    } else {
      setPwValidty(false);
    }
  }, [pw]);

  useEffect(() => {
    const validty = emailReg.test(email);
    if (validty) {
      setEmailValidty(true);
    } else {
      setEmailValidty(false);
    }
  }, [email]);

  return (
    <SingupBox>
      <Title>
        <span style={{ fontWeight: 'bold' }}>계정 정보</span>를 입력해주세요
      </Title>
      <InforBox noValidate>
        <InforEach>
          <Label>아이디</Label>
          <InputField
            short={true}
            type="text"
            maxLength="20"
            onChange={(e) => {
              setId(e.target.value.trim().replace(/[^a-zA-Z0-9]/g, ''));
            }}
            value={id}
          />
          <RepetitionCheckBtn id="id" onClick={checkRepetition}>
            중복 확인
          </RepetitionCheckBtn>
        </InforEach>
        <InforEach>
          <Label>비밀번호</Label>
          <InputField
            type="password"
            maxLength="25"
            onFocus={() => {
              setIsPwFocused(true);
            }}
            onBlur={() => setIsPwFocused(false)}
            onChange={(e) => setPw(e.target.value.trim())}
            value={pw}
          />
          {isPwFocused &&
            (pwValidty ? (
              <PwPassMessage>사용 가능한 비밀번호입니다.</PwPassMessage>
            ) : (
              <PwErrorMessage>
                영문과 숫자, 특수기호(@$!%*#?&)를 포함한 8자리 이상의 비밀번호를
                입력하세요.
              </PwErrorMessage>
            ))}
        </InforEach>
        <InforEach>
          <Label>비밀번호 확인</Label>
          <InputField
            type="password"
            maxLength="25"
            onChange={checkPwMatch}
            onFocus={() => {
              setisSecondPwFocused(true);
            }}
            onBlur={() => {
              setisSecondPwFocused(false);
            }}
          />
          {isSecondPwFocused &&
            (pwMatch ? (
              <PwPassMessage>비밀번호가 일치합니다.</PwPassMessage>
            ) : (
              <PwErrorMessage>비밀번호가 일치하지 않습니다.</PwErrorMessage>
            ))}
        </InforEach>
        <InforEach>
          <Label>이메일</Label>
          <InputField
            short={true}
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <RepetitionCheckBtn id="email" onClick={checkRepetition}>
            중복 확인
          </RepetitionCheckBtn>
        </InforEach>
        <InforEach>
          <Label>성별 ( 선택 )</Label>
          <RadioEach>
            <span>여성</span>
            <input type="radio" name="gender" value="female" />
          </RadioEach>
          <RadioEach>
            <span>남성</span>
            <input type="radio" name="gender" value="male" />
          </RadioEach>
        </InforEach>
        <ButtonBox>
          <Link to="/login">
            <Button btnType="backward">뒤로</Button>
          </Link>
          <Button btnType="submit" type="submit" onClick={handleComplete}>
            완료
          </Button>
        </ButtonBox>
      </InforBox>
      {openPopup && <Popup message={popupMessage} open={setOpenPopup} />}
    </SingupBox>
  );
}

const SingupBox = styled.div`
  width: 534px;
  height: 708px;
  border: solid gray 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Noto Sans KR';
`;

const Title = styled.p`
  font-size: 18px;
  margin-bottom: 44px;
`;

const InforBox = styled.form`
  display: flex;
  flex-direction: column;
`;

const InforEach = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const Label = styled.label`
  font-size: 14px;
  color: #606060;
  padding-bottom: 15px;
`;

const InputField = styled.input.attrs({ requried: true })`
  border: none;
  border-bottom: 2px solid #f0f0f0;
  width: ${(props) => (props.short ? '238px' : '322px')};
  height: 16px;
  padding-bottom: 8px;

  &:focus {
    outline: none;
  }

  &::-ms-reveal,
  ::-ms-clear {
    display: none;
  }
`;

const RepetitionCheckBtn = styled.button`
  position: absolute;
  transform: translate(260px, 10px);
  width: 72px;
  height: 48px;
  background-color: white;
  border: 1px solid #dedede;
  cursor: pointer;
`;

const PwErrorMessage = styled.div`
  width: 322px;
  font-size: 13px;
  color: red;
`;

const PwPassMessage = styled.div`
  width: 322px;
  font-size: 13px;
  color: blue;
`;

const RadioEach = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  width: 60px;
  padding-bottom: 5px;
  justify-content: space-between;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  width: 156px;
  height: 48px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  margin: 0 8px;
  background: ${(props) =>
    props.btnType === 'backward' ? 'white' : '#00B992'};
  border: ${(props) =>
    props.btnType === 'backward' ? '1px solid #dedede' : 'none'};
  color: ${(props) => (props.btnType === 'backward' ? 'black' : 'white')};
  cursor: pointer;
`;
