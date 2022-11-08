import styled from '@emotion/styled';

import GreetingBlock from '../GreetingBlock';
import EmotionSelector from '../EmotionSelector';
import TextEditor from '../TextEditor';

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
    </ContentBox>
  );
};

export default Content;
