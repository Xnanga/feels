import { render, screen } from '@testing-library/react';
import Content from '../../../components/layout/content';

const defaultProps = {
  firstName: 'Jamie',
};

describe('Content layout component', () => {
  beforeEach(() => {
    render(<Content {...defaultProps} />)
  });

  // Jest and RTL don't like how the TextEditor component is dynamically rendered
  // Need to find a way around this
  describe('renders', () => {
    test('a Greetings block', async () => {
      expect(screen.getByText('Hello Jamie')).toBeVisible();
    });

    // test('an Emotion Selector', () => {
    // });

    // test('a Text Editor', () => {
    // });

    // test('a Drawing Board', () => {
    // });
  });
});
