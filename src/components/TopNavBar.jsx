import React from 'react';
import { Link } from 'react-router-dom';
import Button from './common/Button';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function TopNavBar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Container>
      <StLink to="/">
        <Button text={'홈으로'} />
      </StLink>
      <Wrapper>
        <StLink to="/profile">
          <Profile>내 프로필</Profile>
        </StLink>
        <StLink to="/login">
          <Login>로그아웃</Login>
        </StLink>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  background-color: #e9e7e7;
  align-items: center;
  justify-content: space-between;
  display: flex;
  width: 100%;
  height: 50px;
  top: 0px;
  padding: 0 20px;
`;

const StLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Profile = styled.h3`
  color: #111;
  right: 90px;
  padding-right: 15px;
  margin-right: 15px;
  border-right: 1px solid #898888;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const Login = styled.h3`
  color: #111;
  right: 20px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
