import styled from '@emotion/styled';

import MainNav from './MainNav';
import Content from './Content';
import Profile from './Profile';

const ThreeColumnGrid = styled.nav`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
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
}
 
export default DefaultLayout;