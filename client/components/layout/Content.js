import styled from '@emotion/styled';

import EmotionSelector from '../EmotionSelector';

const ContentBox = styled.main`
  grid-column: 2 / 6;

  padding: var(--default-container-padding);
  border-right: 4px solid var(--background-color-grey);
`;

const Content = ({ firstName = 'Jamie' }) => {
  return (
    <ContentBox>
      <h1>{`Hello ${firstName}, how are you feeling today?`}</h1>
      <EmotionSelector />
    </ContentBox>
  );
};

export default Content;
