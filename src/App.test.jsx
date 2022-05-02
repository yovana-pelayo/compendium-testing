import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('should display loading state, a list of quotes, filter by character dropdown and header', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const loading = screen.getByText(/loading.../i);
    expect(loading).toBeInTheDocument();

    const header = screen.getByLabelText('header');
    expect(header).toBeInTheDocument();
  });
});

// testing for loading--- component unit
// behavioral drop down
