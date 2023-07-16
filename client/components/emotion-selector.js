import styled from '@emotion/styled';
import { useState } from 'react';

import emotionWheelData from '../data/emotion-wheel';
import AccordionButton from './buttons/accordion-button';

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;
  margin-bottom: 2rem;
`;

const defaultAccordionButtonProps = (emotion, selectedEmotion) => {
  return {
    key: emotion.name,
    label: emotion.name,
    iconSrc: 'client/public/svg/add-plus-circle-svgrepo-com.svg',
    iconColorHex: '#000000',
    bgColorHex: emotion.colorHex,
    selected: emotion.name === selectedEmotion,
  };
};

const EmotionSelector = () => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  const onSelectEmotion = (emotionName) => setSelectedEmotion(emotionName);

  const renderChildEmotions = (emotionName, level = 0) => {
    let emotionTree;
    const filterEmotions = (emotionData) =>
      emotionData.filter((emo) => emo.name === emotionName);

    switch (level) {
      case 0:
        emotionTree = filterEmotions(emotionWheelData);
        break;
      case 1:
        emotionWheelData.forEach((emotion) => {
          const correctChild = filterEmotions(emotion.children);
          if (correctChild.length > 0) emotionTree = correctChild;
        });
        break;
      default:
        if (!emotionTree?.[0]?.children) return;
    }

    const childEmotions = emotionTree?.[0].children?.map((emotion) => {
      return (
        <AccordionButton
          {...defaultAccordionButtonProps(emotion, selectedEmotion)}
          onClick={onSelectEmotion}
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
              {...defaultAccordionButtonProps(emotion, selectedEmotion)}
              onClick={(emotion) => onSelectEmotion(emotion)}
              hiddenJSXContent={renderChildEmotions(emotion.name)}
            />
          );
        })}
      </SelectorContainer>
    </>
  );
};

export default EmotionSelector;
