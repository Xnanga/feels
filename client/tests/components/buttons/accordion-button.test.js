import { render, screen, fireEvent } from '@testing-library/react';
import AccordionButton from '../../../components/buttons/accordion-button';

const mockOnClickFunction = jest.fn();

const defaultProps = {
  label: 'test label',
  iconSrc: './some-icon-src',
  iconColorHex: '#000000',
  onClick: mockOnClickFunction,
  bgColorHex: '#ff0000',
  hiddenJSXContent: <p>test hidden content</p>,
  selected: false,
}

describe('Accordion Button', () => {
  beforeEach(() => {
    render(<AccordionButton {...defaultProps} />)
  });

  describe('renders', () => {
    test('a label', () => {
      expect(screen.getByRole('button', { name: 'test label' }))
      .toHaveTextContent('test label');
    });

    test('an optional icon', () => {
      expect(screen.getByTestId('bar-button-icon')).toBeVisible();
    });
  });

  describe('when clicked', () => {
    test('it calls its onClick function', () => {
      fireEvent.click(screen.getByRole('button', { name: 'test label' }));
      expect(mockOnClickFunction).toBeCalledTimes(1);
    });

    test('and closed, it expands to display its hidden content', () => {
      fireEvent.click(screen.getByRole('button', { name: 'test label' }));
      expect(screen.getByText('test hidden content')).toBeVisible();
    });

    test('and open, it closes to hide its hidden content', () => {
      fireEvent.click(screen.getByRole('button', { name: 'test label' }));
      expect(screen.getByText('test hidden content')).toBeVisible();

      fireEvent.click(screen.getByRole('button', { name: 'test label' }));
      expect(screen.queryByText('test hidden content')).toBeNull();
    });
  });
});