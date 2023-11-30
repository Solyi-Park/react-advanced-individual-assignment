import React, { useState } from 'react';
import styled from 'styled-components';

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <Container>

      <Wrapper $isSignUp={isSignUp}>
        <Title>{isSignUp ? '회원가입' : '로그인'}</Title>
        {isSignUp ? (
          <InputField>
            <Input placeholder="아이디(4~10글자)" minLength="4" maxLength="10" type="text" />
            <Input placeholder="비밀번호(4~15글자)" minLength="4" maxLength="15" type="password" />
            <Input placeholder="닉네임(1~10글자)" minLength="1" maxLength="10" type="text" />
            <Button name="SignUp">가입하기</Button>
          </InputField>
        ) : (
          <InputField>
            <Input placeholder="아이디를 입력하세요." minLength="4" maxLength="10" type="text" />
            <Input placeholder="비밀번호를 입력하세요." minLength="4" maxLength="15" type="password" />
            <Button name="Login">로그인하기</Button>
          </InputField>
        )}

        <Prompt>
          {isSignUp ? <p>아직 아이디가 없으신가요?</p> : <p>이미 아이디가 있으신가요?</p>}
          <SwitchBtn
            onClick={() => {
              setIsSignUp(!isSignUp);
            }}
          >
            {isSignUp ? '회원가입' : '로그인'}
          </SwitchBtn>
        </Prompt>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: ivory;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  /* background-color: red; */
  position: relative;
  width: 300px;
  height: ${($isSignUp) => ($isSignUp ? '280px' : '240px')};
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

const Button = styled.button`
  padding: 13px 0;
  color: #fff;
  font-weight: 500;
  background-color: #111;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const Prompt = styled.div`
  display: flex;
  width: 280px;
  justify-content: space-between; // justify-content는 width 없이 적용안됨.
  & p {
    font-size: 14px;
  }
`;

const SwitchBtn = styled.p`
  font-size: 12px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
