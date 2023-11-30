import { Link, useNavigate } from 'react-router-dom';
import Tabs from './Tabs';
import styled from 'styled-components';

export default function Header() {
  return (
    <Container>
      <Link to="/profile">
        <Profile>내 프로필</Profile>
      </Link>
      <Link to="/login">
        <Login>로그아웃</Login>
      </Link>

      <Title>에스파 팬레터함</Title>
      <Tabs />
    </Container>
  );
}
const Profile = styled.h3`
  position: absolute;
  color: #111;
  top: 20px;
  right: 90px;
  padding-right: 15px;
  border-right: 1px solid #898888;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const Login = styled.h3`
  position: absolute;
  color: #111;
  top: 20px;
  right: 20px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Container = styled.section`
  width: 100%;
  height: 300px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: yellow;
  flex: 1;
  display: flex;
  align-items: center;
`;
