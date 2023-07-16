import { render, screen, fireEvent } from '@testing-library/react';
import EmotionSelector from '../../components/emotion-selector';

describe('Emotion Selector', () => {
  describe('renders', () => {
    test('7 emotion buttons by default', () => {
      render(<EmotionSelector />);

      expect(screen.getAllByRole('button')).toHaveLength(7);
      expect(screen.getByRole('button', { name: 'happy' })).toBeVisible();
    });
  });

  describe('when clicked', () => {
    test('if closed, expands accordion to reveal 9 additional emotion buttons', () => {
      render(<EmotionSelector />);

      expect(screen.getAllByRole('button')).toHaveLength(7);

      fireEvent.click(screen.getByRole('button', { name: 'happy' }));

      expect(screen.getAllByRole('button')).toHaveLength(16);
    });

    test('if open, retracts accordion to hide 9 additional emotion buttons', () => {
      render(<EmotionSelector />);

      expect(screen.getAllByRole('button')).toHaveLength(7);

      fireEvent.click(screen.getByRole('button', { name: 'happy' }));

      expect(screen.getAllByRole('button')).toHaveLength(16);

      fireEvent.click(screen.getByRole('button', { name: 'happy' }));

      expect(screen.getAllByRole('button')).toHaveLength(7);
    });

    test('if additional emotion, expands accordion to reveal 2 further emotion buttons', () => {
      render(<EmotionSelector />);

      expect(screen.getAllByRole('button')).toHaveLength(7);

      fireEvent.click(screen.getByRole('button', { name: 'happy' }));

      expect(screen.getAllByRole('button')).toHaveLength(16);

      fireEvent.click(screen.getByRole('button', { name: 'playful' }));

      expect(screen.getAllByRole('button')).toHaveLength(18);
    });
  });
});
