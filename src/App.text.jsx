import { render, screen } from '@testing-library/react';
import App from './App';
describe('App', () => {
  it('should display a list of quotes', async () => {
    render(<App />);
  });
});
