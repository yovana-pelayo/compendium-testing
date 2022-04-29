import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import './App.css';
describe('App', () => {
  it('should display a list of quotes adn filter by character', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});
