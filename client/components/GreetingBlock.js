import styled from '@emotion/styled';

const GreetingContainer = styled.div`
  margin-bottom: 3rem;
`;

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const padToTwoDigitsWithZeroes = (num) => num.padStart(2, 0);

const GreetingBlock = ({ username }) => {
  const currentLocalDate = new Date();
  const currentDayOfMonth = padToTwoDigitsWithZeroes(
    currentLocalDate.getDate().toString()
  );
  const currentMonth = monthNames[currentLocalDate.getMonth()];
  const currentYear = currentLocalDate.getFullYear();

  return (
    <GreetingContainer>
      <h1>Hello {username}</h1>
      <span>
        {currentDayOfMonth}, {currentMonth}, {currentYear}
      </span>
    </GreetingContainer>
  );
};

export default GreetingBlock;
