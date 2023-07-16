import styled from '@emotion/styled';

import MainNav from './main-nav';
import Content from './content';
import Profile from './profile';

const ThreeColumnGrid = styled.nav`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  min-height: 100vh;
`;

const DefaultLayout = () => {
  return (
    <ThreeColumnGrid>
      <MainNav />
      <Content />
      <Profile />
    </ThreeColumnGrid>
  );
};

export default DefaultLayout;
