import styled from '@emotion/styled';

const Button = styled.button``;

const NavButton = ({ label, icon, onClick }) => {
  return (
    <Button onClick={onClick}>
      <div>
        <span>{label}</span>
      </div>
    </Button>
  );
};

export default NavButton;
