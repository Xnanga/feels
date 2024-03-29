import styled from '@emotion/styled';

import GreetingBlock from '../greeting-block';
import EmotionSelector from '../emotion-selector';
import TextEditor from '../text-editor';
import DrawingBoard from '../drawing-board';

const ContentBox = styled.main`
  grid-column: 2 / 6;

  display: flex;
  flex-direction: column;

  padding: var(--default-container-padding);
  padding-top: 2.5rem;
  border-right: 4px solid var(--background-color-grey);
`;

const Content = ({ firstName = 'Jamie' }) => {
  return (
    <ContentBox>
      <GreetingBlock username={firstName} />
      <EmotionSelector />
      <TextEditor />
      <DrawingBoard />
    </ContentBox>
  );
};

export default Content;
