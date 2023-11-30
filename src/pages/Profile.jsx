import React from 'react';
import styled from 'styled-components';
import DefaultUser from '../assets/default.jpg';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button';

export default function Mypage() {
  return (
    <Container>
      <Link to="/">
        <HomeBtn>
          <Button text="Home" />
        </HomeBtn>
      </Link>
      <ProfileWrapper>
        <ProfileBox>
          <Title>프로필 관리</Title>
          <UserImage src={DefaultUser} alt="user img" />
          <UserName>아무개</UserName>
          <Intro>안녕 나는 아무개야!</Intro>
        </ProfileBox>
        <EditButton>수정하기</EditButton>
      </ProfileWrapper>
    </Container>
  );
}
// top menu로 변경하기
const HomeBtn = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Container = styled.div`
  background-color: ivory;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ProfileWrapper = styled.div`
  position: relative;
  background-color: #11111112;
  border-radius: 10px;
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; // 부모태그가  align-items: center면 자식태그 버튼이 가로로 꽉차지 않음.
  gap: 25px;
`;

const ProfileBox = styled.div`
  position: absolute;
  margin-bottom: 50px;
  /* background-color: aqua; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 600;
`;

const UserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
const UserName = styled.h2`
  font-size: 20px;
`;
const Intro = styled.p`
  font-size: 14px;
`;

const EditButton = styled.button`
  position: absolute;
  margin-top: 240px;
  width: 250px;
  padding: 10px 50px;
  color: #111;
  font-weight: 500;
  background-color: transparent;
  border: 1px solid #595858;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    background-color: #353535;
    color: #fff;
    border: none;
  }
`;
