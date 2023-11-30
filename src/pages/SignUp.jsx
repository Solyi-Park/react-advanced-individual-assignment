import Button from 'components/common/Button';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <Container>
      {/* <Link to="/">
        <HomeBtn>
          <Button text="Home" />
        </HomeBtn>
      </Link> */}
      <SignUpBox>
        <Title>회원가입</Title>
        <InputField>
          <Input placeholder="아이디(4~10글자)" minlength="4" maxlength="10" type="text"/>
          <Input placeholder="비밀번호(4~15글자)" minlength="4" maxlength="15" type="password" />
          <Input placeholder="닉네임(1~10글자)" minlength="1" maxlength="10" type="text"/>
          <SignUpBtn>가입하기</SignUpBtn>
        </InputField>
        <BackToLogin>
          <p>이미 아이디가 있으신가요?</p>
          <LoginLink
            onClick={() => {
              navigate('/login');
            }}
          >
            로그인
          </LoginLink>
        </BackToLogin>
      </SignUpBox>
    </Container>
  );
}
// const HomeBtn = styled.div`
//   position: absolute;
//   top: 20px;
//   left: 20px;
// `;

const Container = styled.div`
  background-color: ivory;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SignUpBox = styled.div`
  /* background-color: red; */
  position: relative;
  width: 300px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const SignUpBtn = styled.button`
  padding: 13px 0;
  color: #fff;
  font-weight: 500;
  background-color: #111;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const BackToLogin = styled.div`
  display: flex;
  width: 280px;
  justify-content: space-between;
  & p {
    font-size: 13px;
  }
`;

const LoginLink = styled.p`
  font-size: 12px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
