import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from 'redux/modules/auth';
import { loggedInUser } from 'redux/modules/user';
import styled from 'styled-components';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
  const signUpBtnHandler = async (e) => {
    e.preventDefault();
    try {
      if (!signUpUsername || !signUpPassword || !signUpNickname) return;
      const confirm = window.confirm('가입하시겠어요?');
      if (!confirm) {
        return;
      } else {
        const response = await axios.post('https://moneyfulpublicpolicy.co.kr/register', {
          id: signUpUsername,
          password: signUpPassword,
          nickname: signUpNickname
        });
        //회원가입 성공 메세지
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_CENTER
        });
        setTimeout(() => {
          setIsSignUpMode(false);
          setSignUpUsername('');
          setSignUpPassword('');
          setSignUpNickname('');
        }, 1500);
      }
    } catch (error) {
      //회원가입 실패시 에러 메세지
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_CENTER
      });
      console.log('회원가입 실패', error);
    }
  };

  // 로그인 버튼 클릭 핸들러
  const loginBtnHandler = async (e) => {
    e.preventDefault();
    const data = { id: username, password: password };
    try {
      if (!username || !password) return;
      const response = await axios.post('https://moneyfulpublicpolicy.co.kr/login?expiresIn=2m', data);
      toast.success(`${response.data.nickname}님 반가워요!`, {
        position: toast.POSITION.TOP_CENTER
      });
      //로그인 상태 변경
      dispatch(login());

      setTimeout(() => {
        navigate('/home');
        setUserName('');
        setPassword('');
      }, 1500);
      const accessToken = response.data.accessToken;
      const loggedInUserData = {
        accessToken: response.data.accessToken,
        userId: response.data.userId,
        avatar: response.data.avatar,
        nickname: response.data.nickname
      };
      localStorage.setItem('accessToken', accessToken);
      dispatch(loggedInUser(loggedInUserData));

      // 셋타임아웃 끝나기 전에 인풋값이 초기화되지 않게 하려면..?
      // => 셋타임아웃안에 navigate만 넣지않고 setUserName(''); setPassword('');도 다 이동

    } catch (error) {
      console.log('로그인 실패', error);
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };
  // console.log('login', login());

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
    <>
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
      <ToastContainer autoClose={1000} />
    </>
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
  width: 400px;
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
  width: 400px;
  height: 45px;
  padding: 0 10px;
  background-color: transparent;
  border: 1px solid grey;
  font-size: 11px;
`;

const SignUpButton = styled.button`
  height: 50px;
  color: #fff;
  font-weight: 500;
  /* background-color: ${($disabled) => ($disabled ? '#b3b4b5' : '#5a57a1')}; */
  background-color: #5a57a1;
  border: none;
  /* cursor: pointer; */
`;

const LoginButton = styled.button`
  height: 50px;
  color: #fff;
  font-weight: 500;
  // 이건 왜 안될까?
  /* background-color: ${(props) => (props.$disabled ? '#b3b4b5' : '##5a57a1')}; */
  background-color: #5a57a1;
  border: none;
  /* cursor: pointer; */
`;

const Prompt = styled.div`
  display: flex;
  width: 390px;
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
