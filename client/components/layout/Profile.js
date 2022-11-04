import Image from 'next/image';
import styled from '@emotion/styled';

import MiniProfile from '../MiniProfile';

const ProfileBox = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  grid-column: 6 / 7;

  padding: var(--default-container-padding);
`;

const Profile = () => {
  return (
    <ProfileBox>
      <MiniProfile
        name='Jamie Peutherer'
      />
    </ProfileBox>
  );
}
 
export default Profile;