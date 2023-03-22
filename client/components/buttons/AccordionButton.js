import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useState } from 'react';
import AddPlusCircle from '../svg-components/AddPlusCircle';

const BarButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BarButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 5rem;
  padding: 1rem;
  text-align: center;
  text-transform: capitalize;
  background-color: ${({ colorHex }) => colorHex || '#ffffff'};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;

  &:hover {
    filter: brightness(95%);
  }

  & > span {
    margin: 0 auto;
    background: inherit;
    background-clip: text;
    color: transparent;
    filter: invert(1) grayscale(1) contrast(100);
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: 0.06rem;
  }
`;

const BarButtonIconContainer = styled.div`
  position: absolute;
  top: 21%;
  right: 1rem;
  filter: invert(1) grayscale(1) contrast(100);
  pointer-events: none;
`;

const HiddenContentContainer = styled.div`
  padding: 1.25rem;
  background-color: lightgray;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const AccordionButton = ({
  label,
  iconSrc,
  onClick,
  colorHex,
  hiddenJSXContent,
}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleClick = (e) => {
    setAccordionOpen((prevState) => !prevState);
    onClick(e.target.textContent);
  };

  return (
    <BarButtonContainer>
      <BarButton colorHex={colorHex} onClick={(e) => handleClick(e)}>
        <span>{label}</span>
        {iconSrc && (
          <BarButtonIconContainer>
            <AddPlusCircle colorHex={colorHex} />
          </BarButtonIconContainer>
        )}
      </BarButton>
      {accordionOpen && hiddenJSXContent && (
        <HiddenContentContainer colorHex={colorHex}>
          {hiddenJSXContent}
        </HiddenContentContainer>
      )}
    </BarButtonContainer>
  );
};

export default AccordionButton;

AccordionButton.propTypes = {
  label: PropTypes.string.isRequired,
  iconSrc: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  colorHex: PropTypes.string,
  hiddenJSXContent: PropTypes.element,
};
