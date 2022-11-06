import { useRef, useState } from 'react';
import styled from '@emotion/styled';

import EmotionSelector from '../EmotionSelector';
import TextEditor from '../TextEditor';

const ContentBox = styled.main`
  grid-column: 2 / 6;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: var(--default-container-padding);
  padding-top: 2.5rem;
  border-right: 4px solid var(--background-color-grey);
`;

const Content = ({ firstName = 'Jamie' }) => {
  return (
    <ContentBox>
      <h1>{`Hello ${firstName}`}</h1>
      <EmotionSelector />
      <TextEditor />
    </ContentBox>
  );
};

export default Content;
