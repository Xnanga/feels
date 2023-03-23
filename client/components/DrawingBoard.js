import styled from '@emotion/styled';

const BoardContainer = styled.div`
  justify-self: center;
  min-height: 50rem;
  background-image: url('placeholder.jpg');
`;

const DrawingBoard = () => {
  return (
    <>
      <h2>Care to draw what you're feeling?</h2>
      <BoardContainer />
    </>
  );
};

export default DrawingBoard;
