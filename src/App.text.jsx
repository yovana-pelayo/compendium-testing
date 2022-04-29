import { render, screen } from '@testing-library/react';
import App from './App';
import './App.css';
describe('App', () => {
  it('should display a list of quotes', async () => {
    render(<App />);
  });
});
