import styled from '@emotion/styled';
import { useRef } from 'react';

import { emotionWheelData } from '../data/emotion-wheel';
import AccordionButton from './buttons/AccordionButton';

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;
  margin-bottom: 2rem;
`;

const EmotionSelector = () => {
  const selectedEmotion = useRef(null);

  const onSelectEmotion = (emotionName) => {
    selectedEmotion.current = emotionName;
  };

  return (
    <>
      <h2>How are you feeling?</h2>
      <SelectorContainer>
        {emotionWheelData.map((emotion) => {
          return (
            <AccordionButton
              key={Math.random()}
              label={emotion.name}
              colorHex={emotion.colorHex}
              onSelectEmotion={onSelectEmotion}
              level={emotion.level}
              hiddenContent={emotion?.children}
              currentlySelected={selectedEmotion.current}
            />
          );
        })}
      </SelectorContainer>
    </>
  );
};

export default EmotionSelector;
