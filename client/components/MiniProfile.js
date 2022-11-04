import Image from 'next/image';
import styled from '@emotion/styled';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > span {
    font-size: 2rem;
    font-weight: 700;
    margin-top: 1.5rem;
  }
`;

const ProfileImgContainer = styled.div`
  height: 15rem;
  width: 15rem;

  border-radius: 50%;
  overflow: hidden;
`;

const MiniProfile = ({name = "Unknown", imgUrl = "/placeholder.jpg"}) => {
  return ( 
    <ProfileContainer>
      <ProfileImgContainer>
        <Image
          src="/placeholder.jpg"
          alt={`${name} profile photo`}
          width={150}
          height={150}
        />
      </ProfileImgContainer>
      <span>{name}</span>
    </ProfileContainer>
   );
}
 
export default MiniProfile;