import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import cart from '../../static/img/Icon_Cart.png';
import Logo from '../../static/img/Lensis_Logo.png';
import mypage from '../../static/img/Icon_MyPage.png';
import Search from '../../static/img/Icon_Search.png';
import banner from '../../static/img/Banner_Header.jpeg';

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <>
      <StyledmarketingBanner src={banner} alt="마케팅 배너" />
      <StyledNavItem id="Lens" className="nav-items">
        <Styledlogo>
          <StyledLogoImg
            src={Logo}
            alt="렌시스 로고"
            onClick={() => {
              navigate(`/`);
            }}
          />
        </Styledlogo>
        <StyledInputDiv>
          <StyledInputImg src={Search} alt="검색" />
          <StyledInput type="text" />
        </StyledInputDiv>
        <StyledIconsDiv>
          <div class="nav-item">
            <StyledMyPageImg
              src={mypage}
              alt="마이페이지"
              onClick={() => {
                navigate(`/login`);
              }}
            />
          </div>
          <div className="nav-item">
            <StyledCartImg
              src={cart}
              alt="장바구니"
              onClick={() => {
                navigate(`/cart`);
              }}
            />
          </div>
        </StyledIconsDiv>
      </StyledNavItem>
      <StyledMenuContainerUl>
        <li>
          <FirstBtn>カラコン</FirstBtn>
        </li>
        <li>
          <StyledMenuBtn>新着順</StyledMenuBtn>
        </li>
        <li>
          <StyledMenuBtn>パーソナル診断</StyledMenuBtn>
        </li>
        <li>
          <StyledMenuBtn>人生カラコン探し</StyledMenuBtn>
        </li>
        <li>
          <StyledMenuBtn>私にぴったりのレンズを探す</StyledMenuBtn>
        </li>
        <li>
          <StyledBarDiv></StyledBarDiv>
        </li>
        <li>
          <StyledMenuBtn>イベント</StyledMenuBtn>
        </li>
        <li>
          <StyledMenuBtn>ブランド</StyledMenuBtn>
        </li>
        <li>
          <StyledMenuBtn>ブログ</StyledMenuBtn>
        </li>
        <li>
          <StyledMenuBtn>お問い合わせ</StyledMenuBtn>
        </li>
      </StyledMenuContainerUl>
      <NavBarEndDiv></NavBarEndDiv>
    </>
  );
}

const StyledmarketingBanner = styled.img`
  width: 100vw;
  height: 56px;
  left: 0px;
  top: 0px;
  background: #f5f5f5;
  text-align: center;
`;

const StyledNavItem = styled.div`
  width: 100vw;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0px;
  margin: auto;
`;

const Styledlogo = styled.div`
  margin-left: 8.5vw;
  width: 92.18px;
  height: 20px;
  left: 360px;
  top: 22px;
`;

const StyledLogoImg = styled.img`
  width: 92.18px;
  height: 20px;
  cursor: pointer;
`;
const StyledIconsDiv = styled.div`
  margin-right: 8vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StyledInputDiv = styled.div`
  position: relative;
  border: 1.5px solid #23314a;
  height: 36px;
  width: 280px;
  left: 370px;
`;
const StyledInputImg = styled.img`
  position: absolute;
  left: 5.21%;
  right: 17.71%;
  top: 9px;
  left: 10px;
  width: 20px;
  height: 20px;
`;
const StyledInput = styled.input`
  padding-left: 40px;
  width: 239px;
  height: 36px;
  left: 1129px;
  top: 14px;
  border: 0px;
  background-color: transparent;
`;

const StyledMyPageImg = styled.img`
  margin: 0px 15px;
  width: 33px;
  height: 34.83px;
  cursor: pointer;
`;

const StyledCartImg = styled.img`
  margin: 0px 15px;
  width: 36.67px;
  height: 35.74px;
  cursor: pointer;
`;

const StyledMenuContainerUl = styled.ul`
  margin: 0 8vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const StyledMenuBtn = styled.button`
  left: 360px;
  top: 16px;
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.016em;
  color: #23314a;
  background-color: #ffff;
  border: 0;
  padding: 8px 16px;
  margin: 0 9px;
  cursor: pointer;
`;

const FirstBtn = styled.button`
  top: 16px;
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.016em;
  color: #23314a;
  background-color: #ffff;
  border: 0;
  padding: 8px 16px 8px 0px;
  margin-left: 9px;
  cursor: pointer;
`;
const StyledBarDiv = styled.div`
  width: 2px;
  height: 15px;
  margin-top: 12px;
  background: #656f80;
`;

const NavBarEndDiv = styled.div`
  position: absolute;
  width: 100vw;
  height: 1px;
  background-color: #d3d6db;
`;
