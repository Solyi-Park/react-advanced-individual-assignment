import axios from 'axios';
import AddForm from 'components/AddForm';
import Header from 'components/Header';
import Layout from 'components/Layout';
import LetterList from 'components/LetterList';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/modules/auth';

export default function Home() {

  //사용자정보 가져오기. loggedInUser 이게 있어서 안해도 되는 듯...?
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const fetchUserData = async () => {
  //   try {
  //     const accessToken = localStorage.getItem('accessToken');
  //     const response = await axios.get('https://moneyfulpublicpolicy.co.kr/user', {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  
  //     const userData = response.data;
  //     console.log('사용자 정보:', userData);
  
  //     //사용자 정보를 Redux에 저장 --> dispatch(saveUserData(userData));
  //   } catch (error) {
  //     console.error('사용자 정보를 가져오는데 실패했습니다.', error);
  //     toast.error(error.response.data.message);
  //   }
  // };
  // fetchUserData();


  return (
    <Layout>
      <Container>
        <Header />
        <AddForm />
        <LetterList />
      </Container>
      <ToastContainer autoClose={1000} position={toast.POSITION.TOP_CENTER}/>
    </Layout>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
