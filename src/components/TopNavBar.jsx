import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './common/Button';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/modules/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TopNavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userNickname = useSelector((state) => state.user.nickname);
  const logoutBtnHandler = () => {
    dispatch(logout());
    toast.success('정상적으로 로그아웃 되었습니다.');
    setTimeout(() => {
      navigate('/');
    }, 1500);
    localStorage.clear();
  };
  return (
    <>
      <Container>
        <StLink to="/home">
          <Button text={'홈으로'} />
        </StLink>
        <Wrapper>
          <StLink to="/profile">
            <Profile>{`${userNickname}  님`}</Profile>
          </StLink>
          <Login onClick={logoutBtnHandler}>로그아웃</Login>
        </Wrapper>
      </Container>
      <ToastContainer autoClose={1000} position={toast.POSITION.TOP_CENTER} />
    </>
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
