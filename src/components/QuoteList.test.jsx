import { render, screen } from '@testing-library/react';
import QuoteList from './QuoteList';

describe('App', () => {
  it('should display  quote, image', async () => {
    render(<QuoteList />);
    //     const quote = screen.findByLabelText('quote');
    //     expect(quote).toBeInTheDocument();
  });
});
