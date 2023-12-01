import React from 'react';
import styled from 'styled-components';
import Avatar from 'components/common/Avatar';
import Layout from 'components/Layout';
import { useSelector } from 'react-redux';

export default function Mypage() {
  const userInfo = useSelector(state => state.user)
  console.log(userInfo);
  return (
    <Layout>
      <Container>
        {/* <Outlet /> */}
        <ProfileWrapper>
          <ProfileBox>
            <Title>프로필 관리</Title>
            <Avatar src={userInfo.avatar}/>
            <UserId>{userInfo.userId}</UserId>
            <UserName>{userInfo.nickname}</UserName>
            <Intro>안녕 나는 아무개야!</Intro>
          </ProfileBox>
          <EditButton>수정하기</EditButton>
        </ProfileWrapper>
      </Container>
    </Layout>
  );
}

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

const UserId = styled.p`
  color: #999898;
  font-size: 13px;
`


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
