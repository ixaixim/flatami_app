import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock(
  'react-router-dom',
  () => ({
    BrowserRouter: ({ children }) => <div>{children}</div>,
    Link: ({ children, to }) => <a href={to}>{children}</a>,
    Routes: ({ children }) => <div>{children}</div>,
    Route: ({ element }) => element,
  }),
  { virtual: true },
);

test('renders main screen header', () => {
  render(<App />);
  const header = screen.getByText(/main screen/i);
  expect(header).toBeInTheDocument();
});
