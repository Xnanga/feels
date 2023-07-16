import { render, screen, fireEvent } from '@testing-library/react';
import NavButton from '../../../components/buttons/nav-button';

const mockOnClickFunction = jest.fn();

const defaultProps = {
  label: 'test label',
  icon: './some-icon-src',
  onClick: mockOnClickFunction,
}

describe('Nav Button', () => {
  beforeEach(() => {
    render(<NavButton {...defaultProps} />)
  });

  describe('renders', () => {
    test('a label', () => {
      expect(screen.getByRole('button', { name: 'test label' }))
      .toHaveTextContent('test label');
    });
  });

  describe('when clicked', () => {
    test('it calls its onClick function', () => {
      fireEvent.click(screen.getByRole('button', { name: 'test label' }));
      expect(mockOnClickFunction).toBeCalledTimes(1);
    });
  });
});