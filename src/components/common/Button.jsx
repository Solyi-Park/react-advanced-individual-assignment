import styled from 'styled-components';

export default function Button({ text, onClick = () => {} }) {
  return (
    <>
      <BackToHome onClick={onClick}>{text}</BackToHome>
    </>
  );
}

// const BtnWrapper = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
// `;

const BackToHome = styled.p`
  color: #111;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
