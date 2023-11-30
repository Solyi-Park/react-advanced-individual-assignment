import Button from 'components/common/Button';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Login() {
  const navigate = useNavigate();
  return (
    <Container>
      <Link to="/">
        <HomeBtn> 
          <Button text="Home" />
        </HomeBtn>
      </Link>

      <Title>로그인</Title>
      <InputField>
        <Input placeholder="아이디를 입력하세요." />
        <Input placeholder="비밀번호를 입력하세요." />
        <LoginBtn>로그인하기</LoginBtn>
      </InputField>
      <SignupContainer>
        <p>아직 아이디가 없으신가요?</p>
        <SignUpLink
          onClick={() => {
            navigate('/SignUp');
          }}
        >
          회원가입
        </SignUpLink>
      </SignupContainer>
    </Container>
  );
}
const HomeBtn = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;


const Container = styled.div`
  background-color: ivory;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 30px;
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 600;
`;

const InputField = styled.form`
  display: flex;
  flex-direction: column;
  /* background-color: aqua; */
  gap: 10px;
`;

const Input = styled.input`
  width: 300px;
  height: 35px;
  padding: 0 10px;
  background-color: transparent;
  border: 1px solid grey;
  font-size: 11px;
`;

const LoginBtn = styled.button`
  padding: 13px 0;
  color: #fff;
  font-weight: 500;
  background-color: #111;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const SignupContainer = styled.div`
  display: flex;
  width: 280px;
  justify-content: space-between; // justify-content는 width 없이 적용안됨.
  font-size: 13px;
`;

const SignUpLink = styled.p`
  font-size: 12px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
