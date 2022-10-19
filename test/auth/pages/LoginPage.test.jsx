import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { authSlice, } from '../../../src/store/auth';
import { LoginPage } from '../../../src/auth/pages/LoginPage';

// import { startGoogleSignIn } from '../../../src/store/auth/thunks';
import { notAuthenticatedState } from '../../fixtures/authFixtures';

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();


jest.mock('../../../src/store/auth/thunks', () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn
}));
// jest.mock('../../../src/store/auth/thunks', () => ({
//   startGoogleSignIn: () => mockStartGoogleSignIn,
//   startLoginWithEmailPassword: ({ email, password }) => {
//       return () => mockStartLoginWithEmailPassword({ email, password });
//   },
// }));

const store = configureStore({
  reducer: {
      auth: authSlice.reducer
  },
  preloadedState: {
      auth: notAuthenticatedState
  }
});

describe('should test <LoginPage />', () => {

  test('should render the component properly', () => {

    render(
      <Provider store={ store } >
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    // screen.debug();
    expect( screen.getAllByText('Login').length ).toBeGreaterThanOrEqual(1);
  });

  test('Google button should call dispatch with startGoogleSignIn', () => {
    
    render(
      <Provider store={ store } >
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const googleBtn = screen.getByLabelText('google-button');
    fireEvent.click( googleBtn );
    
    expect( mockStartGoogleSignIn ).toHaveBeenCalled();
  });
});