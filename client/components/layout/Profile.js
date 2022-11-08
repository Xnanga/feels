import styled from '@emotion/styled';

import CalendarSlider from '../CalendarSlider';
import MiniProfile from '../MiniProfile';
import HighlightsBlock from '../HighlightsBlocks';

const ProfileBox = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  grid-column: 6 / 8;

  padding: var(--default-container-padding);
`;

const Profile = () => {
  return (
    <ProfileBox>
      <MiniProfile name="Jamie Peutherer" />
      <HighlightsBlock />
      <CalendarSlider />
    </ProfileBox>
  );
};

export default Profile;
