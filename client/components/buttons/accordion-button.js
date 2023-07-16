import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useState } from 'react';
import AddPlusCircle from '../svg-components/add-plus-circle';

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
  text-align: center;
  text-transform: capitalize;
  background-color: ${({ colorHex }) => colorHex || '#ffffff'};
  border: ${({ selected }) =>
    selected ? '4px solid purple' : '4px solid transparent'};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;

  &:hover {
    filter: brightness(95%);
  }

  & > span {
    margin: 0 auto;
    color: #000000;
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: 0.06rem;
  }
`;

const BarButtonIconContainer = styled.div`
  position: absolute;
  top: 13%;
  right: 1rem;
  pointer-events: none;
`;

const HiddenContentContainer = styled.div`
  background-color: lightgray;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const AccordionButton = ({
  label,
  iconSrc,
  iconColorHex,
  onClick,
  bgColorHex,
  hiddenJSXContent,
  selected,
}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleClick = (e) => {
    setAccordionOpen((prevState) => !prevState);
    onClick(e.target.textContent);
  };

  return (
    <BarButtonContainer>
      <BarButton
        selected={selected}
        colorHex={bgColorHex}
        onClick={(e) => handleClick(e)}
      >
        <span>{label}</span>
        {iconSrc && (
          <BarButtonIconContainer>
            <AddPlusCircle colorHex={iconColorHex} />
          </BarButtonIconContainer>
        )}
      </BarButton>
      {accordionOpen && hiddenJSXContent && (
        <HiddenContentContainer colorHex={bgColorHex}>
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
  selected: PropTypes.bool,
};
