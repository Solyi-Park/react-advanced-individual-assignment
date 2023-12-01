import AddForm from 'components/AddForm';
import Header from 'components/Header';
import Layout from 'components/Layout';
import LetterList from 'components/LetterList';
import styled from 'styled-components';

export default function Home() {
  return (
    <Layout>
      <Container>
        <Header />
        <AddForm />
        <LetterList />
      </Container>
    </Layout>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
