import Image from 'next/image';
import styled from '@emotion/styled';

import NavButton from '../buttons/NavButton';

const NavBox = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  grid-column: 1 / 2;

  padding: var(--default-container-padding);
  background-color: var(--background-color-grey);

  & > ul {
    height: 5rem;
    list-style-type: none;
    margin-top: 6rem;

    & > li:not(:last-child) {
      margin-bottom: 3rem;
    }
  }

  & > span {
    margin-top: auto;
  }
`;

const MainNav = () => {
  return (
    <NavBox>
      <Image
        src="/placeholder.jpg"
        alt="Example Logo"
        width={150}
        height={150}
      />
      <ul>
        <li>
          <NavButton label={'Journal'} />
        </li>
        <li>
          <NavButton label={'Emotion Tracker'} />
        </li>
        <li>
          <NavButton label={'Blog'} />
        </li>
        <li>
          <NavButton label={'About'} />
        </li>
      </ul>
      <span>Created by ya boi</span>
    </NavBox>
  );
};

export default MainNav;
