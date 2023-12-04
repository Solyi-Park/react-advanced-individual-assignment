import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Avatar from 'components/common/Avatar';
import Layout from 'components/Layout';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Mypage() {
  const userInfo = useSelector((state) => state.user);
  const [isEditMode, setIsEditMode] = useState(false);
  const [newNickname, setNewNickname] = useState('');
  const [selectedFile, setSelectedFile] = useState('');

  const EditBtnClick = async () => {
    setIsEditMode(!isEditMode);
    try {
      const patchData = {
        avatar: '',
        nickname: newNickname
      };
      const response = await axios.patch('https://moneyfulpublicpolicy.co.kr', patchData);


      toast.success(response.message, {
        position: toast.POSITION.TOP_CENTER
      });
    } catch (error) {
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_CENTER
      });
      console.log('파일업로드 실패', error);
    }
  };

  const fileInputRef = useRef();
  console.log(fileInputRef.current);

  const avatarClickHandler = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      //이미지 프리뷰
      const reader = new FileReader();
      reader.onload = (event) => {
        const previewUrl = event.target.result;
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <Layout>
      <Container>
        {/* <Outlet /> */}
        <ProfileWrapper>
          <ProfileBox>
            <Title>프로필 관리</Title>
            <AvatarContainer>
              <Avatar src={userInfo.avatar} />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                onClick={avatarClickHandler}
                style={{ display: 'none' }}
              />
            </AvatarContainer>
            <UserName>{userInfo.nickname}</UserName>
            <UserId>{userInfo.userId}</UserId>
            {/* 얘도 따로 관리..? */}
          </ProfileBox>
          <EditButton onClick={EditBtnClick} $isEditMode={isEditMode}>
            {isEditMode ? '수정완료' : '수정하기'}
          </EditButton>
        </ProfileWrapper>
      </Container>
      <ToastContainer autoClose={1000} />
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

const AvatarContainer = styled.label`
  cursor: pointer;
`;

const UserId = styled.p`
  color: #999898;
  font-size: 13px;
`;

const UserName = styled.h2`
  font-size: 20px;
`;

const EditButton = styled.button`
  position: absolute;
  margin-top: 240px;
  width: ${(props) => (props.$isEditMode ? '180px' : '250px')};
  padding: 10px 50px;
  color: #111;
  font-weight: 500;
  background-color: #fff;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
