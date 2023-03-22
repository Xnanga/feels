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

  const renderChildEmotions = (emotionName, level = 0) => {
    let emotionTree;

    if (level === 0) {
      emotionTree = emotionWheelData.filter(
        (emotion) => emotion.name === emotionName
      );
    }

    if (level === 1) {
      emotionWheelData.forEach((emotion) => {
        const children = emotion.children;
        const correctChild = children.filter(
          (emotion) => emotion.name === emotionName
        );
        if (correctChild.length > 0) emotionTree = correctChild;
      });
    }

    if (level > 1 || !emotionTree?.[0]?.children) return;

    const childEmotions = emotionTree?.[0].children?.map((emotion) => {
      return (
        <AccordionButton
          key={emotion.name}
          label={emotion.name}
          onClick={onSelectEmotion}
          iconSrc={'client/public/svg/add-plus-circle-svgrepo-com.svg'}
          colorHex={emotion.colorHex}
          hiddenJSXContent={renderChildEmotions(emotion.name, level + 1)}
        />
      );
    });
    return <>{childEmotions?.map((emotion) => emotion)}</>;
  };

  return (
    <>
      <h2>How are you feeling?</h2>
      <SelectorContainer>
        {emotionWheelData.map((emotion) => {
          return (
            <AccordionButton
              key={emotion.name}
              label={emotion.name}
              onClick={onSelectEmotion}
              iconSrc={'client/public/svg/add-plus-circle-svgrepo-com.svg'}
              colorHex={emotion.colorHex}
              hiddenJSXContent={renderChildEmotions(emotion.name)}
            />
          );
        })}
      </SelectorContainer>
    </>
  );
};

export default EmotionSelector;
