import styled from '@emotion/styled';
import { useState } from 'react';

const BarButton = styled.button`
  height: 5rem;
  background-color: ${({ colorHex }) => colorHex || '#ffffff'};
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  & > span {
    background: inherit;
    background-clip: text;
    color: transparent;
    filter: invert(1) grayscale(1) contrast(100);
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: 0.06rem;
  }
`;

const AccordionButton = ({
  label,
  colorHex,
  level,
  onSelectEmotion,
  hiddenContent,
  currentlySelected,
}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleClick = (e) => {
    if (hiddenContent) setAccordionOpen((prevState) => !prevState);
    onSelectEmotion(e.target.textContent);
  };

  return (
    <>
      <BarButton colorHex={colorHex} onClick={handleClick} level={level}>
        <span>{label}</span>
      </BarButton>
      {accordionOpen &&
        hiddenContent &&
        hiddenContent.map((emotion) => {
          return (
            <AccordionButton
              key={Math.random()}
              label={emotion.name}
              colorHex={emotion.colorHex}
              onSelectEmotion={onSelectEmotion}
              level={emotion.level}
              hiddenContent={emotion?.children}
              currentlySelected={currentlySelected}
            />
          );
        })}
    </>
  );
};

export default AccordionButton;
