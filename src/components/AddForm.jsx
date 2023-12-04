import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import Button from './common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addLetter, setLetter } from 'redux/modules/letters';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setMember } from 'redux/modules/member';

export default function AddForm() {
  // const { setLetters } = useContext(LetterContext);
  const dispatch = useDispatch();
  //사용자 정보를 이렇게 가져올게 아니라 회원정보확인 API를 이용해야하나?
  const userInfo = useSelector((state) => state.user);
  const member = useSelector((state) => state.member);
  const [content, setContent] = useState('');

  // 데이터 조회
  const fetchLetters = async () => {
    const { data } = await axios.get('http://localhost:4000/letters');
    console.log('data', data);
    dispatch(setLetter(data));
  };
  useEffect(() => {
    fetchLetters();
  }, []);

  // 데이터 추가
  const onAddLetter = async (event) => {
    event.preventDefault();
    // const accessToken = localStorage.getItem('accessToken');
    if (!content) {
      return toast.error('내용을 입력해주세요.');
    } else {
      const newLetter = {
        nickname: userInfo.nickname,
        content: content,
        avatar: userInfo.avatar,
        writedTo: member,
        createdAt: new Date().toString(),
        userId: userInfo.userId
      };
      await axios.post('http://localhost:4000/letters', newLetter);
      // console.log('Server Response:', response.data);
      
      dispatch(addLetter(newLetter));
      fetchLetters(); //업뎃 된 내용 바로 볼 수 있게.
      setContent('');
    }
  };

  return (
    <Form onSubmit={onAddLetter}>
      <InputWrapper>
        <label>닉네임:</label>
        <UserNickname>{userInfo.nickname}</UserNickname>
      </InputWrapper>
      <InputWrapper>
        <label>내용:</label>
        <textarea
          placeholder="최대 100글자까지 작성할 수 있습니다."
          maxLength={100}
          onChange={(event) => setContent(event.target.value)}
          value={content}
        />
      </InputWrapper>
      <SelectWrapper>
        <label>누구에게 보내실 건가요?</label>
        <select onChange={(event) => setMember(event.target.value)}>
          <option>카리나</option>
          <option>윈터</option>
          <option>닝닝</option>
          <option>지젤</option>
        </select>
      </SelectWrapper>

      {/* 이거 지금 Button이라는 컴포넌트로 두가지 속성을 내려주는 것임. */}
      <Button text="팬레터 등록" onClick={onAddLetter} />
      <ToastContainer autoClose={1000} position={toast.POSITION.TOP_CENTER} />
    </Form>
  );
}

const Form = styled.form`
  background-color: #8080807c;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 500px;
  border-radius: 12px;
  margin: 20px 0;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & label {
    width: 80px;
  }
  & input,
  textarea {
    width: 100%;
    padding: 12px;
  }
  & textarea {
    resize: none;
    height: 80px;
  }
`;

const UserNickname = styled.p`
  color: #fff;
`;
const SelectWrapper = styled(InputWrapper)`
  justify-content: flex-start;
  & label {
    width: 170px;
  }
`;
