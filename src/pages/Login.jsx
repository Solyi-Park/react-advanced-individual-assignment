import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Login() {
  const navigate = useNavigate();

  // 회원가입 - 로그인
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  //인풋 state 관리
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpNickname, setSignUpNickname] = useState('');
  
  // 인풋 온체인지 핸들러
  const changeLoginUsername = (e) => setUserName(e.target.value);
  const changeLoginPassword = (e) => setPassword(e.target.value);
  const changeSignUsername = (e) => setSignUpUsername(e.target.value);
  const changeSignUpPassword = (e) => setSignUpPassword(e.target.value);
  const changeSignUpNickname = (e) => setSignUpNickname(e.target.value);

  // 로그인, 회원가입 버튼 비활성화 관리
  const [isLoginBtnDisabled, setIsLoginBtnDisabled] = useState(true);
  const [isSignUpBtnDisabled, setIsSignUpBtnDisabled] = useState(true);

  //회원가입 버튼 클릭 핸들러
  const signUpBtnHandler = (e) => {
    e.preventDefault();
    if (!signUpUsername || !signUpPassword || !signUpNickname) {
      return;
    }
    const confirm = window.confirm('가입하시겠습니까?');
    if (!confirm) {
      return;
    } else {
      alert('가입이 완료되었습니다. 로그인해주세요.');
    }
    setSignUpUsername('');
    setSignUpPassword('');
    setSignUpNickname('');
    setIsSignUpMode(false);
  };

  // 로그인 버튼 클릭 핸들러
  const loginBtnHandler = (e) => {
    e.preventDefault();
    if (!username || !password) {
      return;
    }
    alert('아무개님 반갑습니다!');
    setUserName('');
    setPassword('');
    navigate('/');
  };

  // useEffect(() => {
  //   if (username.length >= 4 && password.length >= 4) {
  //     setIsSignUpBtnDisabled(false);
  //   }
  // }, [username, password]);

  // useEffect(() => {
  //   if (signUpUsername.length >= 4 && signUpPassword.length >= 4 && signUpNickname) {
  //     setIsLoginBtnDisabled(false);
  //   }
  // }, [signUpUsername, signUpPassword, signUpNickname]);

  //로그인,회원가입 왔다갔다 할때, 인풋창 초기화
  const toggleBtnHandler = () => {
    setIsSignUpMode(!isSignUpMode);
    if (!isSignUpMode) {
      setUserName('');
      setPassword('');
    } else {
      setSignUpUsername('');
      setSignUpPassword('');
      setSignUpNickname('');
    }
  };

  return (
    <Container>
      <Wrapper $isSignUpMode={isSignUpMode}>
        <Title>{isSignUpMode ? '회원가입' : '로그인'}</Title>
        {isSignUpMode ? (
          <InputField onSubmit={signUpBtnHandler}>
            <Input
              value={signUpUsername}
              onChange={changeSignUsername}
              placeholder="아이디(4~10글자)"
              minLength="4"
              maxLength="10"
              type="text"
            />
            <Input
              value={signUpPassword}
              onChange={changeSignUpPassword}
              placeholder="비밀번호(4~15글자)"
              minLength="4"
              maxLength="15"
              type="password"
            />
            <Input
              value={signUpNickname}
              onChange={changeSignUpNickname}
              placeholder="닉네임(1~10글자)"
              minLength="1"
              maxLength="10"
              type="text"
            />
            <SignUpButton $disabled={isSignUpBtnDisabled} name="SignUp">
              가입하기
            </SignUpButton>
          </InputField>
        ) : (
          <InputField onSubmit={loginBtnHandler}>
            <Input
              value={username}
              onChange={changeLoginUsername}
              placeholder="아이디를 입력하세요."
              minLength="4"
              maxLength="10"
              type="text"
            />
            <Input
              value={password}
              onChange={changeLoginPassword}
              placeholder="비밀번호를 입력하세요."
              minLength="4"
              maxLength="15"
              type="password"
            />
            <LoginButton $disabled={isLoginBtnDisabled} name="Login">
              로그인하기
            </LoginButton>
          </InputField>
        )}

        <Prompt>
          {isSignUpMode ? <p>이미 아이디가 있으신가요?</p> : <p>아직 아이디가 없으신가요?</p>}
          <ToggleModeButton onClick={toggleBtnHandler}>{isSignUpMode ? '로그인' : '회원가입'}</ToggleModeButton>
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
  height: ${($isSignUpMode) => ($isSignUpMode ? '320px' : '200px')};
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
  gap: 20px;
`;

const Input = styled.input`
  width: 300px;
  height: 35px;
  padding: 0 10px;
  background-color: transparent;
  border: 1px solid grey;
  font-size: 11px;
`;

const SignUpButton = styled.button`
  padding: 13px 0;
  color: #fff;
  font-weight: 500;
  background-color: ${($disabled) => ($disabled ? '#b3b4b5' : '#7774b8')};
  border: none;
  cursor: ${($disabled) => ($disabled ? 'default' : 'pointer')};

  &:hover {
    cursor: ${($disabled) => ($disabled ? 'default' : 'pointer')};
    background-color: ${($disabled) => ($disabled ? '#b3b4b5' : '#5a57a1')};
  }
`;

const LoginButton = styled.button`
  padding: 13px 0;
  color: #fff;
  font-weight: 500;
  background-color: ${($disabled) => ($disabled ? '#b3b4b5' : '#7774b8')};
  border: none;
  &:hover {
    cursor: ${($disabled) => ($disabled ? 'default' : 'pointer')};
    background-color: ${($disabled) => ($disabled ? '#b3b4b5' : '#5a57a1')};
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

const ToggleModeButton = styled.p`
  font-size: 12px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
