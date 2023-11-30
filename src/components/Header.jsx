import { useNavigate } from 'react-router-dom';
import Tabs from './Tabs';
import styled from 'styled-components';

export default function Header() {
  const navigate = useNavigate();
  return (
    <Container>
      <Login onClick={() => {navigate('/login')}}>로그인</Login>
      <Title>에스파 팬레터함</Title>
      <Tabs />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: 300px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const Login = styled.h3`
  display: flex;
  margin-left: auto;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: yellow;
  flex: 1;
  display: flex;
  align-items: center;
`;
